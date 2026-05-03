<script setup lang="ts">
interface Example {
  title: string;
  description: string;
}

interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link?: string;
  image?: string;
  examples: Example[];
}

const props = defineProps<{
  solution: Solution;
  reversed?: boolean;
}>();

const { t, locale } = useI18n();
const localePath = useLocalePath();

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    { threshold: 0.15 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <section
    :id="solution.id"
    ref="sectionRef"
    class="py-20 md:py-32 bg-white border-t border-[#E8E8ED]"
  >
    <div class="container-wide">
      <!-- Section Header -->
      <div
        class="mb-12"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] mb-2">
          {{ solution.title }}
        </h2>
        <p class="text-sm text-[#6B7B8A]">
          {{ solution.subtitle }}
        </p>
      </div>

      <!-- Main Content: Image + Description -->
      <div
        class="grid md:grid-cols-2 gap-12 items-center mb-16"
        :class="[
          { 'animate-fade-in-up': isVisible },
          reversed ? 'md:flex-row-reverse' : ''
        ]"
        :style="isVisible ? { animationDelay: '100ms' } : {}"
      >
        <!-- Image -->
        <div :class="reversed ? 'md:order-2' : 'md:order-1'">
          <div class="aspect-[4/3] bg-[#F5F5F7] rounded-2xl flex items-center justify-center border border-[#E8E8ED] overflow-hidden">
            <img
              v-if="solution.image"
              :src="solution.image"
              :alt="solution.title"
              class="w-full h-full object-contain p-4"
            />
            <span v-else class="text-[#86868B]">Image</span>
          </div>
        </div>

        <!-- Description -->
        <div :class="reversed ? 'md:order-1' : 'md:order-2'">
          <p class="text-lg text-[#0D2C54] leading-relaxed mb-8">
            {{ solution.description }}
          </p>

          <!-- Learn More Button -->
          <NuxtLink
            v-if="solution.link"
            :to="localePath(solution.link)"
            class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors"
          >
            {{ t('common.learnMore') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Examples Grid -->
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-6"
        :class="{ 'animate-fade-in-up': isVisible }"
        :style="isVisible ? { animationDelay: '200ms' } : {}"
      >
        <div
          v-for="(example, index) in solution.examples"
          :key="index"
          class="group"
        >
          <h3 class="text-base font-medium text-[#0D2C54] mb-1 group-hover:text-[#41808B] transition-colors">
            {{ example.title }}
          </h3>
          <p class="text-xs text-[#6B7B8A] mb-4">
            {{ example.description }}
          </p>
          <div class="aspect-square bg-[#F5F5F7] rounded-xl flex items-center justify-center border border-[#E8E8ED] group-hover:border-[#41808B]/30 transition-colors">
            <span class="text-sm text-[#6B7B8A]">Image</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
