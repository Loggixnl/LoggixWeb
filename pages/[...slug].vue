<script setup lang="ts">
// Dynamic route for blog posts at root level
// Matches URLs like /filemaker-2025-is-here-36514/

const route = useRoute();
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join('/')
  : route.params.slug;

// Fetch the blog post by slug
const { data: post } = await useAsyncData(`post-${slug}`, () =>
  queryContent('blog').where({ slug }).findOne()
);

// 404 if not found
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  });
}

// SEO
useLoggixSeo({
  title: `${post.value.title} - Loggix`,
  description: post.value.description || '',
  lang: 'en',
  canonicalPath: `/${slug}/`,
});
</script>

<template>
  <article class="blog-post" v-if="post">
    <div class="container">
      <header>
        <h1>{{ post.title }}</h1>
        <time v-if="post.date" :datetime="post.date">
          {{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </time>
      </header>

      <ContentRenderer :value="post" class="content" />
    </div>
  </article>
</template>

<style scoped>
.blog-post {
  padding: 3rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

header {
  margin-bottom: 2rem;
}

header h1 {
  margin-bottom: 0.5rem;
}

header time {
  color: #666;
}

.content {
  line-height: 1.8;
}

.content :deep(h2) {
  margin-top: 2rem;
}

.content :deep(pre) {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}

.content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>
