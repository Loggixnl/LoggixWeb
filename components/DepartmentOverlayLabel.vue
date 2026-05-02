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
  isZoomed: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="department-overlay absolute inset-0 pointer-events-none flex items-end justify-start p-6">
    <!-- Department label -->
    <div
      class="transition-all duration-500"
      :class="isZoomed ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'"
    >
      <!-- Pill badge -->
      <div
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-3"
        :style="{
          backgroundColor: `${department.color}20`,
          color: department.color,
          border: `1px solid ${department.color}40`
        }"
      >
        <span
          class="w-1.5 h-1.5 rounded-full animate-pulse"
          :style="{ backgroundColor: department.color }"
        ></span>
        {{ department.displayName }}
      </div>

      <!-- Tagline -->
      <h3 class="text-white text-xl md:text-2xl font-bold mb-2 max-w-md">
        {{ department.displayTagline }}
      </h3>

      <!-- Solution hint -->
      <p class="text-gray-400 text-sm max-w-sm">
        {{ department.displaySolution }}
      </p>
    </div>

    <!-- Zoomed-in detail view -->
    <div
      class="absolute inset-0 flex items-center justify-center transition-all duration-500"
      :class="isZoomed ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'"
    >
      <div class="text-center max-w-lg px-6">
        <!-- Large department name -->
        <div
          class="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
          :style="{ backgroundColor: `${department.color}30` }"
        >
          <span
            class="text-3xl font-bold"
            :style="{ color: department.color }"
          >
            {{ department.displayName.charAt(0) }}
          </span>
        </div>

        <h2 class="text-white text-3xl md:text-4xl font-bold mb-3">
          {{ department.displayName }}
        </h2>

        <p class="text-gray-300 text-lg mb-4">
          {{ department.displayTagline }}
        </p>

        <!-- Pain point -->
        <div class="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-3 text-left">
          <p class="text-red-400 text-sm">
            <span class="font-semibold">Challenge:</span>
            {{ department.displayPain }}
          </p>
        </div>

        <!-- Solution -->
        <div class="bg-accent-500/10 border border-accent-500/20 rounded-lg p-3 text-left">
          <p class="text-accent-400 text-sm">
            <span class="font-semibold">Solution:</span>
            {{ department.displaySolution }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.department-overlay {
  background: linear-gradient(
    to top,
    rgba(17, 24, 39, 0.9) 0%,
    rgba(17, 24, 39, 0.5) 40%,
    transparent 100%
  );
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse {
    animation: none !important;
  }
}
</style>
