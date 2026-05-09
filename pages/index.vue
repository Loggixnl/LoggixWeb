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
      { title: t('home.solutions.database.examples.crm.title'), description: t('home.solutions.database.examples.crm.description'), icon: 'database' },
      { title: t('home.solutions.database.examples.erp.title'), description: t('home.solutions.database.examples.erp.description'), icon: 'globe' },
      { title: t('home.solutions.database.examples.dataWarehouse.title'), description: t('home.solutions.database.examples.dataWarehouse.description'), icon: 'server' },
      { title: t('home.solutions.database.examples.api.title'), description: t('home.solutions.database.examples.api.description'), icon: 'api' },
    ],
  },
  {
    id: 'ai-solutions',
    title: t('home.solutions.ai.title'),
    subtitle: t('home.solutions.ai.subtitle'),
    description: t('home.solutions.ai.description'),
    link: '/ai',
    image: '/images/ai-solutions.png',
    examples: [
      { title: t('home.solutions.ai.examples.rag.title'), description: t('home.solutions.ai.examples.rag.description'), icon: 'search' },
      { title: t('home.solutions.ai.examples.leadGen.title'), description: t('home.solutions.ai.examples.leadGen.description'), icon: 'target' },
      { title: t('home.solutions.ai.examples.voice.title'), description: t('home.solutions.ai.examples.voice.description'), icon: 'phone' },
      { title: t('home.solutions.ai.examples.chatbots.title'), description: t('home.solutions.ai.examples.chatbots.description'), icon: 'chat' },
    ],
  },
  {
    id: 'products',
    title: t('home.solutions.products.title'),
    subtitle: t('home.solutions.products.subtitle'),
    description: t('home.solutions.products.description'),
    link: '/products',
    image: '/images/web-apps.png',
    examples: [
      { title: t('home.solutions.products.examples.crm.title'), description: t('home.solutions.products.examples.crm.description'), icon: 'users' },
      { title: t('home.solutions.products.examples.project.title'), description: t('home.solutions.products.examples.project.description'), icon: 'clipboard' },
      { title: t('home.solutions.products.examples.invoice.title'), description: t('home.solutions.products.examples.invoice.description'), icon: 'receipt' },
      { title: t('home.solutions.products.examples.stock.title'), description: t('home.solutions.products.examples.stock.description'), icon: 'box' },
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
