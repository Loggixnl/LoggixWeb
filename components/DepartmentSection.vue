<script setup lang="ts">
import type { Department, Product } from '~/composables/useDepartments';

interface LocalizedDepartment extends Department {
  displayName: string;
  displayTagline: string;
  displayPain: string;
  displaySolution: string;
  displayCta: string;
  displayProducts: Array<Product & { displayName: string }>;
}

const props = defineProps<{
  department: LocalizedDepartment;
  index: number;
  isLast?: boolean;
}>();

const { t } = useI18n();

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

// Intersection observer for scroll-triggered animations
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    { threshold: 0.2 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  onUnmounted(() => {
    observer.disconnect();
  });
});

// Alternate layout direction
const isReversed = computed(() => props.index % 2 === 1);
</script>

<template>
  <section
    ref="sectionRef"
    :id="department.id"
    class="section relative overflow-hidden"
    :class="[
      index % 2 === 0 ? 'panel-light' : 'panel-gray'
    ]"
  >

    <div class="container-wide">
      <div
        class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        :class="isReversed ? 'lg:flex-row-reverse' : ''"
      >
        <!-- Content Side -->
        <div
          :class="[
            isReversed ? 'lg:order-2' : 'lg:order-1',
            isVisible ? 'scroll-reveal is-visible' : 'scroll-reveal'
          ]"
        >
          <!-- Department label -->
          <div class="flex items-center gap-3 mb-4">
            <span
              class="inline-block w-2.5 h-2.5 rounded-full"
              :style="{ backgroundColor: `var(${department.colorVar})` }"
            />
            <span class="text-sm font-semibold uppercase tracking-wider" :style="{ color: `var(${department.colorVar})` }">
              {{ department.displayName }}
            </span>
          </div>

          <!-- Tagline (large) -->
          <h2 class="text-h2 mb-6">
            {{ department.displayTagline }}
          </h2>

          <!-- Pain point -->
          <p class="text-foreground-secondary mb-4">
            <span class="font-semibold text-foreground-primary">
              {{ t('common.theProblem') }}
            </span>
            {{ department.displayPain }}
          </p>

          <!-- Solution -->
          <p class="text-foreground-secondary mb-8">
            <span class="font-semibold text-foreground-primary">
              {{ t('common.ourSolution') }}
            </span>
            {{ department.displaySolution }}
          </p>

          <!-- CTA -->
          <NuxtLink
            :to="{ hash: '#contact' }"
            class="btn-primary inline-flex items-center gap-2"
          >
            {{ department.displayCta }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Products Side -->
        <div
          :class="[
            isReversed ? 'lg:order-1' : 'lg:order-2',
            isVisible ? 'scroll-reveal is-visible' : 'scroll-reveal'
          ]"
          :style="{ transitionDelay: '150ms' }"
        >
          <div class="grid gap-4">
            <div
              v-for="(product, pIndex) in department.displayProducts"
              :key="product.name"
              class="card group cursor-pointer"
              :class="isVisible ? 'animate-reveal-card' : 'opacity-0'"
              :style="{ animationDelay: `${200 + pIndex * 100}ms` }"
            >
              <div class="flex items-start gap-4">
                <!-- Product icon/indicator -->
                <div
                  class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  :style="{
                    backgroundColor: `color-mix(in srgb, var(${department.colorVar}) 15%, transparent)`,
                  }"
                >
                  <div
                    class="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-125"
                    :style="{ backgroundColor: `var(${department.colorVar})` }"
                  />
                </div>

                <div class="flex-1">
                  <h3 class="text-lg font-display text-foreground-primary mb-1 group-hover:text-accent transition-colors">
                    {{ product.displayName }}
                  </h3>
                  <p v-if="product.description" class="text-sm text-foreground-muted">
                    {{ locale === 'nl' ? product.descriptionNl : product.description }}
                  </p>
                </div>

                <!-- Arrow indicator -->
                <svg
                  class="w-5 h-5 text-foreground-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
