<script setup lang="ts">
interface Props {
  image?: string;
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  reversed?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  reversed: false,
  ctaText: 'Meer info',
  ctaLink: '#contact',
});
</script>

<template>
  <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
    <!-- Image -->
    <div :class="{ 'md:order-2': reversed }">
      <div class="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
        <img v-if="image" :src="image" :alt="title" class="w-full h-full object-cover" />
        <div v-else class="text-6xl opacity-30">📱</div>
      </div>
    </div>

    <!-- Content -->
    <div :class="{ 'md:order-1': reversed }">
      <p v-if="subtitle" class="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">
        {{ subtitle }}
      </p>
      <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
        {{ title }}
      </h3>
      <p class="text-gray-600 mb-6 leading-relaxed">
        {{ description }}
      </p>

      <!-- Key Features -->
      <ul v-if="features?.length" class="space-y-3 mb-8">
        <li v-for="feature in features" :key="feature" class="flex items-start gap-3">
          <svg class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-gray-700">{{ feature }}</span>
        </li>
      </ul>

      <!-- CTA -->
      <NuxtLink :to="ctaLink" class="btn-primary inline-flex items-center gap-2">
        {{ ctaText }}
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>
