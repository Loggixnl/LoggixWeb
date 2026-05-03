<script setup lang="ts">
const { t, locale } = useI18n();

useHead({
  title: t('home.title'),
  meta: [
    { name: 'description', content: t('home.description') },
  ],
});

useSeoMeta({
  title: () => t('home.title'),
  description: () => t('home.description'),
  ogTitle: () => t('home.title'),
  ogDescription: () => t('home.description'),
});

// Solution sections data using i18n keys
const solutions = computed(() => [
  {
    id: 'database-solutions',
    title: t('home.solutions.database.title'),
    subtitle: t('home.solutions.database.subtitle'),
    description: t('home.solutions.database.description'),
    link: '/filemaker',
    image: '/images/Frame_laptop.png',
    examples: [
      { title: t('home.solutions.database.examples.crm.title'), description: t('home.solutions.database.examples.crm.description'), image: '/images/filemaker-solutions.webp' },
      { title: t('home.solutions.database.examples.erp.title'), description: t('home.solutions.database.examples.erp.description'), image: '/images/web-interfaces.webp' },
      { title: t('home.solutions.database.examples.dataWarehouse.title'), description: t('home.solutions.database.examples.dataWarehouse.description'), image: '/images/hosting.webp' },
      { title: t('home.solutions.database.examples.api.title'), description: t('home.solutions.database.examples.api.description'), image: '/images/exact-online.webp' },
    ],
  },
  {
    id: 'ai-solutions',
    title: t('home.solutions.ai.title'),
    subtitle: t('home.solutions.ai.subtitle'),
    description: t('home.solutions.ai.description'),
    link: '/ai',
    examples: [
      { title: t('home.solutions.ai.examples.rag.title'), description: t('home.solutions.ai.examples.rag.description') },
      { title: t('home.solutions.ai.examples.leadGen.title'), description: t('home.solutions.ai.examples.leadGen.description') },
      { title: t('home.solutions.ai.examples.voice.title'), description: t('home.solutions.ai.examples.voice.description') },
      { title: t('home.solutions.ai.examples.chatbots.title'), description: t('home.solutions.ai.examples.chatbots.description') },
    ],
  },
  {
    id: 'products',
    title: t('home.solutions.products.title'),
    subtitle: t('home.solutions.products.subtitle'),
    description: t('home.solutions.products.description'),
    link: '/products',
    examples: [
      { title: t('home.solutions.products.examples.crm.title'), description: t('home.solutions.products.examples.crm.description') },
      { title: t('home.solutions.products.examples.project.title'), description: t('home.solutions.products.examples.project.description') },
      { title: t('home.solutions.products.examples.invoice.title'), description: t('home.solutions.products.examples.invoice.description') },
      { title: t('home.solutions.products.examples.stock.title'), description: t('home.solutions.products.examples.stock.description') },
    ],
  },
  {
    id: 'blog',
    title: t('home.solutions.blog.title'),
    subtitle: t('home.solutions.blog.subtitle'),
    description: t('home.solutions.blog.description'),
    link: '/blog',
    examples: [
      { title: t('home.solutions.blog.examples.tech.title'), description: t('home.solutions.blog.examples.tech.description') },
      { title: t('home.solutions.blog.examples.cases.title'), description: t('home.solutions.blog.examples.cases.description') },
      { title: t('home.solutions.blog.examples.tutorials.title'), description: t('home.solutions.blog.examples.tutorials.description') },
      { title: t('home.solutions.blog.examples.news.title'), description: t('home.solutions.blog.examples.news.description') },
    ],
  },
  {
    id: 'team',
    title: t('home.solutions.team.title'),
    subtitle: t('home.solutions.team.subtitle'),
    description: t('home.solutions.team.description'),
    link: '/team',
    examples: [
      { title: t('home.solutions.team.examples.developers.title'), description: t('home.solutions.team.examples.developers.description') },
      { title: t('home.solutions.team.examples.consultants.title'), description: t('home.solutions.team.examples.consultants.description') },
      { title: t('home.solutions.team.examples.support.title'), description: t('home.solutions.team.examples.support.description') },
      { title: t('home.solutions.team.examples.management.title'), description: t('home.solutions.team.examples.management.description') },
    ],
  },
]);
</script>

<template>
  <div class="scroll-snap-container">
    <!-- Hero Section (includes Client Logos) -->
    <HeroSection />

    <!-- Solution Sections -->
    <div id="solutions">
      <SolutionSection
        v-for="(solution, index) in solutions"
        :key="solution.id"
        :solution="solution"
        :reversed="index % 2 === 1"
      />
    </div>

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<style scoped>
.scroll-snap-container {
  scroll-snap-type: y proximity;
}
</style>
