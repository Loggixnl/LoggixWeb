<script setup lang="ts">
interface Example {
  title: string;
  description?: string;
  image?: string;
  icon?: string;
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
    class="min-h-[calc(100vh-5rem)] py-12 md:py-16 bg-white border-t border-[#E8E8ED] snap-start flex flex-col justify-center"
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
          <p class="text-lg text-[#0D2C54] leading-relaxed mb-8" v-html="solution.description"></p>

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
          <!-- New structure with icon, description, and bullets -->
          <template v-if="example.icon">
            <!-- Icon -->
            <div class="flex justify-center mb-3">
              <div class="w-12 h-12 rounded-xl bg-[#41808B]/10 flex items-center justify-center">
                <!-- Database icon -->
                <svg v-if="example.icon === 'database'" class="w-6 h-6 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <!-- Globe/Web icon -->
                <svg v-else-if="example.icon === 'globe'" class="w-6 h-6 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <!-- Server/Cloud icon -->
                <svg v-else-if="example.icon === 'server'" class="w-6 h-6 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                <!-- API/Connection icon -->
                <svg v-else-if="example.icon === 'api'" class="w-6 h-6 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <!-- Default icon -->
                <svg v-else class="w-6 h-6 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <!-- Title -->
            <h3 class="text-base font-medium text-[#0D2C54] mb-2 text-center group-hover:text-[#41808B] transition-colors">
              {{ example.title }}
            </h3>
            <!-- Description -->
            <p class="text-xs text-[#6B7B8A]">
              {{ example.description }}
            </p>
          </template>

          <!-- Old structure with image (fallback) -->
          <template v-else>
            <h3 class="text-base font-medium text-[#0D2C54] mb-1 group-hover:text-[#41808B] transition-colors">
              {{ example.title }}
            </h3>
            <p class="text-xs text-[#6B7B8A] mb-4">
              {{ example.description }}
            </p>
            <div class="aspect-square bg-[#F5F5F7] rounded-xl flex items-center justify-center border border-[#E8E8ED] group-hover:border-[#41808B]/30 transition-colors overflow-hidden">
              <img
                v-if="example.image"
                :src="example.image"
                :alt="example.title"
                class="w-full h-full object-cover"
              />
              <span v-else class="text-sm text-[#6B7B8A]">Image</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
