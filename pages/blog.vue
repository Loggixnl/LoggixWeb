<script setup lang="ts">
const { t, locale } = useI18n();

useSeoMeta({
  title: 'Blog - Loggix',
  description: locale.value === 'nl'
    ? 'Nieuws en artikelen over FileMaker development en maatwerk software.'
    : 'News and articles about FileMaker development, web apps, and custom software.',
});

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('blog').sort({ date: -1 }).find()
);
</script>

<template>
  <div>
    <!-- Hero with Purple Gradient -->
    <section class="pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-b from-[#A23B72]/20 via-[#A23B72]/10 to-[#F5F5F7]">
      <div class="container-wide">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0D2C54] mb-6">
            Blog
          </h1>
          <p class="text-lg text-[#41808B] leading-relaxed">
            {{ locale === 'nl'
              ? 'Nieuws, inzichten en artikelen over FileMaker development, web apps en AI.'
              : 'News, insights, and articles about FileMaker development, web apps, and AI integration.'
            }}
          </p>
        </div>
      </div>
    </section>

    <!-- Posts Grid -->
    <section class="py-20 md:py-32 bg-white border-t border-[#E8E8ED]">
      <div class="container-wide">
        <div v-if="posts?.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="post in posts" :key="post._path" class="group">
            <NuxtLink :to="`/${post.slug}/`" class="block">
              <div class="bg-[#F5F5F7] rounded-2xl h-48 mb-4 flex items-center justify-center border border-[#E8E8ED] group-hover:border-[#41808B]/30 transition-colors">
                <span class="text-4xl opacity-30">📰</span>
              </div>
              <h2 class="text-lg font-semibold text-[#0D2C54] group-hover:text-[#41808B] transition-colors mb-2">
                {{ post.title }}
              </h2>
              <p v-if="post.description" class="text-[#6B7B8A] text-sm mb-3 line-clamp-2">
                {{ post.description }}
              </p>
              <time v-if="post.date" class="text-xs text-[#86868B]">
                {{ new Date(post.date).toLocaleDateString(locale === 'nl' ? 'nl-NL' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
              </time>
            </NuxtLink>
          </article>
        </div>

        <div v-else class="text-center py-12">
          <div class="w-20 h-20 rounded-full bg-[#F5F5F7] mx-auto mb-6 flex items-center justify-center">
            <span class="text-4xl opacity-30">📝</span>
          </div>
          <p class="text-[#6B7B8A] mb-4">
            {{ locale === 'nl' ? 'Blog posts worden gemigreerd.' : 'Blog posts are being migrated from WordPress.' }}
          </p>
          <p class="text-sm text-[#86868B]">
            {{ locale === 'nl' ? 'Kom binnenkort terug voor updates.' : 'Check back soon for updates.' }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
