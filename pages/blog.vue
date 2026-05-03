<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: t('pages.blog.title'),
  description: t('pages.blog.description'),
});

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('blog').sort({ date: -1 }).find()
);
</script>

<template>
  <div>
    <!-- Hero with Purple Gradient -->
    <section class="h-[calc(100vh-5rem)] pt-8 flex flex-col bg-gradient-to-b from-[#f0dbe6] via-[#f6ecf1] to-[#F5F5F7] snap-start">
      <div class="flex-1 flex flex-col">
        <div class="container-wide">
          <!-- Badge Pill -->
          <div class="text-center mb-14 md:mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8ED] rounded-full text-sm text-[#6B7B8A]">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A23B72] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#A23B72]"></span>
              </span>
              <span v-html="t('pages.blog.badge')"></span>
            </div>
          </div>

          <!-- Main Headline -->
          <div class="text-center max-w-5xl mx-auto mb-16 md:mb-20">
            <h1 class="font-display text-[#0D2C54]">
              <span class="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight" v-html="t('pages.blog.headline')"></span>
            </h1>
          </div>

          <!-- Image + Description Row -->
          <div class="grid md:grid-cols-[280px_1fr] gap-10 items-start max-w-6xl mx-auto">
            <!-- Circular Image Container -->
            <div class="flex flex-col items-center justify-center">
              <div class="relative w-56 h-56 md:w-64 md:h-64">
                <div class="w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-[#A23B72]/20 bg-gradient-to-br from-[#A23B72]/20 to-[#41808B]/20 flex items-center justify-center">
                  <svg class="w-24 h-24 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div>
              <p class="text-lg md:text-xl text-[#0D2C54] leading-relaxed mb-11 pr-10" v-html="t('pages.blog.intro')"></p>

              <div class="flex flex-wrap gap-4">
                <a href="#posts" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
                  {{ t('common.viewArticles') || 'View Articles' }}
                </a>
                <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 text-[#41808B] font-medium border border-[#41808B] rounded-full hover:bg-[#41808B] hover:text-white transition-colors">
                  {{ t('common.contactUs') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Posts Grid -->
    <section id="posts" class="min-h-[calc(100vh-5rem)] py-12 md:py-16 bg-white border-t border-[#E8E8ED] snap-start flex flex-col justify-center">
      <div class="container-wide">
        <div v-if="posts?.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="post in posts" :key="post._path" class="group">
            <NuxtLink :to="`/${post.slug}/`" class="block">
              <div class="bg-[#F5F5F7] rounded-2xl h-48 mb-4 flex items-center justify-center border border-[#E8E8ED] group-hover:border-[#41808B]/30 transition-colors">
                <span class="text-4xl opacity-30">📰</span>
              </div>
              <h2 class="text-lg font-semibold text-[#0D2C54] group-hover:text-[#41808B] transition-colors mb-2" v-html="post.title"></h2>
              <p v-if="post.description" class="text-[#6B7B8A] text-sm mb-3 line-clamp-2" v-html="post.description"></p>
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
          <p class="text-[#6B7B8A] mb-4" v-html="t('pages.blog.migratingMessage')"></p>
          <p class="text-sm text-[#86868B]" v-html="t('pages.blog.checkBack')"></p>
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
