<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: t('pages.ai.title'),
  description: t('pages.ai.description'),
});

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

const projects = computed(() => [
  {
    subtitle: t('pages.ai.projects.customerBot.subtitle'),
    title: t('pages.ai.projects.customerBot.title'),
    description: t('pages.ai.projects.customerBot.description'),
    features: [
      t('pages.ai.projects.customerBot.features[0]'),
      t('pages.ai.projects.customerBot.features[1]'),
      t('pages.ai.projects.customerBot.features[2]'),
      t('pages.ai.projects.customerBot.features[3]'),
    ],
  },
  {
    subtitle: t('pages.ai.projects.invoiceProcessing.subtitle'),
    title: t('pages.ai.projects.invoiceProcessing.title'),
    description: t('pages.ai.projects.invoiceProcessing.description'),
    features: [
      t('pages.ai.projects.invoiceProcessing.features[0]'),
      t('pages.ai.projects.invoiceProcessing.features[1]'),
      t('pages.ai.projects.invoiceProcessing.features[2]'),
      t('pages.ai.projects.invoiceProcessing.features[3]'),
    ],
  },
  {
    subtitle: t('pages.ai.projects.predictiveAnalysis.subtitle'),
    title: t('pages.ai.projects.predictiveAnalysis.title'),
    description: t('pages.ai.projects.predictiveAnalysis.description'),
    features: [
      t('pages.ai.projects.predictiveAnalysis.features[0]'),
      t('pages.ai.projects.predictiveAnalysis.features[1]'),
      t('pages.ai.projects.predictiveAnalysis.features[2]'),
      t('pages.ai.projects.predictiveAnalysis.features[3]'),
    ],
  },
]);

const aiCapabilities = computed(() => [
  { icon: 'chatbot', label: t('pages.ai.capabilities.chatbots') },
  { icon: 'document', label: t('pages.ai.capabilities.document') },
  { icon: 'chart', label: t('pages.ai.capabilities.predictive') },
  { icon: 'bolt', label: t('pages.ai.capabilities.automation') },
]);
</script>

<template>
  <div>
    <!-- Hero Section with Green Gradient -->
    <section class="min-h-screen pt-20 bg-gradient-to-b from-[#e3ebe7] via-[#eff3f1] to-[#F5F5F7]">
      <div class="container-wide">
        <div class="text-center max-w-4xl mx-auto">
          <!-- AI Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8ED] rounded-full text-sm text-[#6B7B8A] mb-8">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7FB800] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-[#7FB800]"></span>
            </span>
            {{ t('pages.ai.badge') }}
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0D2C54] mb-6">
            {{ t('pages.ai.headline') }}
          </h1>

          <p class="text-lg text-[#41808B] mb-8 max-w-3xl mx-auto leading-relaxed">
            {{ t('pages.ai.intro') }}
          </p>

          <!-- AI capabilities -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            <div v-for="cap in aiCapabilities" :key="cap.icon" class="bg-white rounded-xl p-4 border border-[#E8E8ED]">
              <div class="w-10 h-10 rounded-lg bg-[#F5F5F7] flex items-center justify-center mx-auto mb-2">
                <svg v-if="cap.icon === 'chatbot'" class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <svg v-if="cap.icon === 'document'" class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <svg v-if="cap.icon === 'chart'" class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <svg v-if="cap.icon === 'bolt'" class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div class="text-sm text-[#6B7B8A]">{{ cap.label }}</div>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-4">
            <a href="#examples" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
              {{ t('common.viewPossibilities') }}
            </a>
            <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 text-[#41808B] font-medium hover:underline">
              {{ t('common.contactUs') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Partners/Tech -->
    <section class="py-12 bg-white border-b border-[#E8E8ED]">
      <div class="container-wide">
        <p class="text-center text-sm text-[#6B7B8A] mb-6 uppercase tracking-wider">
          {{ t('pages.ai.techTitle') }}
        </p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <span class="text-2xl font-bold text-[#E8E8ED]">OpenAI</span>
          <span class="text-2xl font-bold text-[#E8E8ED]">Claude</span>
          <span class="text-2xl font-bold text-[#E8E8ED]">Azure AI</span>
          <span class="text-2xl font-bold text-[#E8E8ED]">Google AI</span>
        </div>
      </div>
    </section>

    <!-- Examples -->
    <section id="examples" ref="sectionRef" class="py-20 md:py-32 bg-white">
      <div class="container-wide">
        <div class="text-center mb-16" :class="{ 'animate-fade-in-up': isVisible }">
          <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] mb-2">
            {{ t('pages.ai.applicationsTitle') }}
          </h2>
          <p class="text-sm text-[#6B7B8A]">
            {{ t('pages.ai.applicationsSubtitle') }}
          </p>
        </div>

        <div class="space-y-20">
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="grid md:grid-cols-2 gap-12 items-center"
            :class="{ 'animate-fade-in-up': isVisible }"
            :style="isVisible ? { animationDelay: `${(index + 1) * 100}ms` } : {}"
          >
            <!-- Image Placeholder -->
            <div :class="index % 2 === 1 ? 'md:order-2' : 'md:order-1'">
              <div class="aspect-[4/3] bg-[#F5F5F7] rounded-2xl flex items-center justify-center border border-[#E8E8ED]">
                <span class="text-[#86868B]">Image</span>
              </div>
            </div>

            <!-- Content -->
            <div :class="index % 2 === 1 ? 'md:order-1' : 'md:order-2'">
              <span class="text-sm uppercase tracking-wider text-[#6B7B8A] font-medium mb-2 block">
                {{ project.subtitle }}
              </span>
              <h3 class="text-2xl font-semibold text-[#0D2C54] mb-4">{{ project.title }}</h3>
              <p class="text-[#41808B] mb-6 leading-relaxed">{{ project.description }}</p>

              <ul class="space-y-2 mb-6">
                <li v-for="feature in project.features" :key="feature" class="flex items-start gap-2 text-[#6B7B8A]">
                  <svg class="w-5 h-5 text-[#7FB800] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-sm">{{ feature }}</span>
                </li>
              </ul>

              <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 text-[#41808B] font-medium hover:underline">
                {{ t('common.moreInfo') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32 bg-[#0D2C54]">
      <div class="container-wide text-center">
        <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6">
          {{ t('pages.ai.ctaTitle') }}
        </h2>
        <p class="text-[#41808B] text-lg mb-8 max-w-2xl mx-auto">
          {{ t('pages.ai.ctaDescription') }}
        </p>
        <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
          {{ t('common.contactUs') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
