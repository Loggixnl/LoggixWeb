<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: t('pages.filemaker.title'),
  description: t('pages.filemaker.description'),
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
    subtitle: t('pages.filemaker.projects.workplaceOs.subtitle'),
    title: t('pages.filemaker.projects.workplaceOs.title'),
    description: t('pages.filemaker.projects.workplaceOs.description'),
    features: [
      t('pages.filemaker.projects.workplaceOs.features[0]'),
      t('pages.filemaker.projects.workplaceOs.features[1]'),
      t('pages.filemaker.projects.workplaceOs.features[2]'),
      t('pages.filemaker.projects.workplaceOs.features[3]'),
    ],
  },
  {
    subtitle: t('pages.filemaker.projects.mediaWorkflow.subtitle'),
    title: t('pages.filemaker.projects.mediaWorkflow.title'),
    description: t('pages.filemaker.projects.mediaWorkflow.description'),
    features: [
      t('pages.filemaker.projects.mediaWorkflow.features[0]'),
      t('pages.filemaker.projects.mediaWorkflow.features[1]'),
      t('pages.filemaker.projects.mediaWorkflow.features[2]'),
      t('pages.filemaker.projects.mediaWorkflow.features[3]'),
    ],
  },
  {
    subtitle: t('pages.filemaker.projects.webPortal.subtitle'),
    title: t('pages.filemaker.projects.webPortal.title'),
    description: t('pages.filemaker.projects.webPortal.description'),
    features: [
      t('pages.filemaker.projects.webPortal.features[0]'),
      t('pages.filemaker.projects.webPortal.features[1]'),
      t('pages.filemaker.projects.webPortal.features[2]'),
      t('pages.filemaker.projects.webPortal.features[3]'),
    ],
  },
]);
</script>

<template>
  <div>
    <!-- Hero Section with Teal Gradient -->
    <section class="h-[calc(100vh-5rem)] pt-8 flex flex-col bg-gradient-to-b from-[#d5e1eb] via-[#e8eff4] to-[#F5F5F7] snap-start">
      <div class="flex-1 flex flex-col">
        <div class="container-wide">
          <!-- Badge Pill -->
          <div class="text-center mb-14 md:mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8ED] rounded-full text-sm text-[#6B7B8A]">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F6690] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#2F6690]"></span>
              </span>
              {{ t('pages.filemaker.badge') }}
            </div>
          </div>

          <!-- Main Headline -->
          <div class="text-center max-w-5xl mx-auto mb-16 md:mb-20">
            <h1 class="font-display text-[#0D2C54]">
              <span class="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
                {{ t('pages.filemaker.headline') }}
              </span>
            </h1>
          </div>

          <!-- Image + Description Row -->
          <div class="grid md:grid-cols-[280px_1fr] gap-10 items-start max-w-6xl mx-auto">
            <!-- Circular Image Container -->
            <div class="flex flex-col items-center justify-center">
              <div class="relative w-56 h-56 md:w-64 md:h-64">
                <div class="w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-[#2F6690]/20 bg-white flex items-center justify-center">
                  <img src="/images/claris-partner-badge.svg" alt="Claris FileMaker Partner" class="w-3/4 h-3/4 object-contain opacity-80" />
                </div>
              </div>
            </div>

            <!-- Description -->
            <div>
              <p class="text-lg md:text-xl text-[#0D2C54] leading-relaxed mb-6 pr-10" v-html="t('pages.filemaker.intro')"></p>

              <!-- Key benefits -->
              <div class="flex flex-wrap gap-6 mb-11">
                <div class="flex items-center gap-2 text-[#6B7B8A]">
                  <svg class="w-5 h-5 text-[#7FB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span v-html="t('pages.filemaker.benefits.fast')"></span>
                </div>
                <div class="flex items-center gap-2 text-[#6B7B8A]">
                  <svg class="w-5 h-5 text-[#7FB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span v-html="t('pages.filemaker.benefits.crossPlatform')"></span>
                </div>
                <div class="flex items-center gap-2 text-[#6B7B8A]">
                  <svg class="w-5 h-5 text-[#7FB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span v-html="t('pages.filemaker.benefits.scalable')"></span>
                </div>
              </div>

              <div class="flex flex-wrap gap-4">
                <a href="#projects" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
                  {{ t('common.viewExamples') }}
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

    <!-- Quick Benefits -->
    <section class="py-12 bg-white border-b border-[#E8E8ED] snap-start">
      <div class="container-wide">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold text-[#41808B] mb-1">30+</div>
            <div class="text-[#6B7B8A] text-sm" v-html="t('pages.filemaker.stats.years')"></div>
          </div>
          <div>
            <div class="text-3xl font-bold text-[#41808B] mb-1">100+</div>
            <div class="text-[#6B7B8A] text-sm" v-html="t('pages.filemaker.stats.projects')"></div>
          </div>
          <div>
            <div class="text-3xl font-bold text-[#41808B] mb-1">40+</div>
            <div class="text-[#6B7B8A] text-sm" v-html="t('pages.filemaker.stats.connectors')"></div>
          </div>
          <div>
            <div class="text-3xl font-bold text-[#41808B] mb-1">24/7</div>
            <div class="text-[#6B7B8A] text-sm" v-html="t('pages.filemaker.stats.support')"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects / Examples -->
    <section id="projects" ref="sectionRef" class="min-h-[calc(100vh-5rem)] py-12 md:py-16 bg-white snap-start flex flex-col justify-center">
      <div class="container-wide">
        <div class="text-center mb-12" :class="{ 'animate-fade-in-up': isVisible }">
          <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] mb-2" v-html="t('pages.filemaker.examplesTitle')"></h2>
          <p class="text-sm text-[#6B7B8A]" v-html="t('pages.filemaker.examplesSubtitle')"></p>
        </div>

        <div class="space-y-16">
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
              <span class="text-sm uppercase tracking-wider text-[#6B7B8A] font-medium mb-2 block" v-html="project.subtitle"></span>
              <h3 class="text-2xl font-semibold text-[#0D2C54] mb-4" v-html="project.title"></h3>
              <p class="text-[#41808B] mb-6 leading-relaxed" v-html="project.description"></p>

              <ul class="space-y-2 mb-6">
                <li v-for="feature in project.features" :key="feature" class="flex items-start gap-2 text-[#6B7B8A]">
                  <svg class="w-5 h-5 text-[#7FB800] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-sm" v-html="feature"></span>
                </li>
              </ul>

              <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 text-[#41808B] font-medium hover:underline">
                {{ t('common.similarProject') }}
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
    <section class="min-h-[calc(100vh-5rem)] py-12 md:py-16 bg-[#0D2C54] snap-start flex items-center">
      <div class="container-wide text-center">
        <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6" v-html="t('pages.filemaker.ctaTitle')"></h2>
        <p class="text-[#41808B] text-lg mb-8 max-w-2xl mx-auto" v-html="t('pages.filemaker.ctaDescription')"></p>
        <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
          {{ t('common.contactUs') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
