<script setup lang="ts">
import type { Department } from '~/composables/useDepartments';

interface LocalizedDepartment extends Department {
  displayName: string;
  displayTagline: string;
  displayPain: string;
  displaySolution: string;
  displayCta: string;
  displayProducts: { name: string; nameNl: string; displayName: string }[];
}

interface Props {
  department: LocalizedDepartment;
  show: boolean;
  locale: string;
}

const props = defineProps<Props>();

const localePath = useLocalePath();

// Stagger delay for each product card
const getStaggerDelay = (index: number) => {
  return `${index * 100}ms`;
};
</script>

<template>
  <div
    class="product-reveal mt-8 transition-all duration-500"
    :class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'"
  >
    <!-- Products header -->
    <div class="text-center mb-6">
      <p class="text-gray-400 text-sm uppercase tracking-wider mb-2">
        {{ locale === 'nl' ? 'Oplossingen voor' : 'Solutions for' }} {{ department.displayName }}
      </p>
    </div>

    <!-- Product cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      <div
        v-for="(product, index) in department.displayProducts"
        :key="product.displayName"
        class="product-card bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 transition-all duration-300 hover:border-accent-400/30 hover:bg-gray-800/80"
        :style="{
          transitionDelay: show ? getStaggerDelay(index) : '0ms',
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(20px)'
        }"
      >
        <!-- Product icon -->
        <div
          class="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
          :style="{ backgroundColor: `${department.color}20` }"
        >
          <svg
            class="w-5 h-5"
            :style="{ color: department.color }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>

        <!-- Product name -->
        <h4 class="text-white font-semibold text-lg mb-2">
          {{ product.displayName }}
        </h4>

        <!-- Product mini description (placeholder) -->
        <p class="text-gray-400 text-sm mb-4">
          {{ locale === 'nl'
            ? 'Stroomlijn en automatiseer met intelligente workflows.'
            : 'Streamline and automate with intelligent workflows.'
          }}
        </p>

        <!-- Learn more link -->
        <a
          href="#"
          class="inline-flex items-center gap-1 text-sm font-medium transition-colors"
          :style="{ color: department.color }"
        >
          {{ locale === 'nl' ? 'Meer info' : 'Learn more' }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>

    <!-- CTA Button -->
    <div class="text-center mt-8">
      <NuxtLink
        :to="localePath('/') + '#contact'"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105"
        :style="{
          backgroundColor: department.color,
          boxShadow: `0 10px 40px -10px ${department.color}60`
        }"
      >
        {{ department.displayCta }}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  will-change: transform, opacity;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .product-card {
    transition-delay: 0ms !important;
  }
}
</style>
