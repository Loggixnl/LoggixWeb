<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: t('pages.products.title'),
  description: t('pages.products.description'),
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

const products = computed(() => [
  {
    subtitle: t('pages.products.items.workplaceOs.subtitle'),
    title: t('pages.products.items.workplaceOs.title'),
    description: t('pages.products.items.workplaceOs.description'),
    features: [
      t('pages.products.items.workplaceOs.features[0]'),
      t('pages.products.items.workplaceOs.features[1]'),
      t('pages.products.items.workplaceOs.features[2]'),
      t('pages.products.items.workplaceOs.features[3]'),
    ],
  },
  {
    subtitle: t('pages.products.items.apiSuite.subtitle'),
    title: t('pages.products.items.apiSuite.title'),
    description: t('pages.products.items.apiSuite.description'),
    features: [
      t('pages.products.items.apiSuite.features[0]'),
      t('pages.products.items.apiSuite.features[1]'),
      t('pages.products.items.apiSuite.features[2]'),
      t('pages.products.items.apiSuite.features[3]'),
    ],
  },
  {
    subtitle: t('pages.products.items.fmTemplates.subtitle'),
    title: t('pages.products.items.fmTemplates.title'),
    description: t('pages.products.items.fmTemplates.description'),
    features: [
      t('pages.products.items.fmTemplates.features[0]'),
      t('pages.products.items.fmTemplates.features[1]'),
      t('pages.products.items.fmTemplates.features[2]'),
      t('pages.products.items.fmTemplates.features[3]'),
    ],
  },
  {
    subtitle: t('pages.products.items.invoiceSimple.subtitle'),
    title: t('pages.products.items.invoiceSimple.title'),
    description: t('pages.products.items.invoiceSimple.description'),
    features: [
      t('pages.products.items.invoiceSimple.features[0]'),
      t('pages.products.items.invoiceSimple.features[1]'),
      t('pages.products.items.invoiceSimple.features[2]'),
      t('pages.products.items.invoiceSimple.features[3]'),
    ],
  },
]);
</script>

<template>
  <div>
    <!-- Hero Section with Blue Gradient -->
    <section class="min-h-screen pt-20 bg-gradient-to-b from-[#d5e1eb] via-[#e8eff4] to-[#F5F5F7]">
      <div class="container-wide">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Pill Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8ED] rounded-full text-sm text-[#6B7B8A] mb-8">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7FB800] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-[#7FB800]"></span>
            </span>
            {{ t('pages.products.badge') }}
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0D2C54] mb-6">
            {{ t('pages.products.headline') }}
          </h1>

          <p class="text-lg text-[#41808B] mb-8 max-w-3xl mx-auto leading-relaxed">
            {{ t('pages.products.intro') }}
          </p>

          <!-- Quick stats -->
          <div class="grid grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div class="bg-white rounded-xl p-4 border border-[#E8E8ED]">
              <div class="text-3xl font-bold text-[#41808B] mb-1">4+</div>
              <div class="text-sm text-[#6B7B8A]">{{ t('pages.products.stats.products') }}</div>
            </div>
            <div class="bg-white rounded-xl p-4 border border-[#E8E8ED]">
              <div class="text-3xl font-bold text-[#41808B] mb-1">40+</div>
              <div class="text-sm text-[#6B7B8A]">{{ t('pages.products.stats.connectors') }}</div>
            </div>
            <div class="bg-white rounded-xl p-4 border border-[#E8E8ED]">
              <div class="text-3xl font-bold text-[#41808B] mb-1">99.9%</div>
              <div class="text-sm text-[#6B7B8A]">{{ t('pages.products.stats.uptime') }}</div>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-4">
            <a href="#products" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
              {{ t('common.viewProducts') }}
            </a>
            <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 text-[#41808B] font-medium hover:underline">
              {{ t('common.contactUs') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section id="products" ref="sectionRef" class="py-20 md:py-32 bg-white">
      <div class="container-wide">
        <div class="space-y-20">
          <div
            v-for="(product, index) in products"
            :key="product.title"
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
                {{ product.subtitle }}
              </span>
              <h3 class="text-2xl font-semibold text-[#0D2C54] mb-4">{{ product.title }}</h3>
              <p class="text-[#41808B] mb-6 leading-relaxed">{{ product.description }}</p>

              <ul class="space-y-2 mb-6">
                <li v-for="feature in product.features" :key="feature" class="flex items-start gap-2 text-[#6B7B8A]">
                  <svg class="w-5 h-5 text-[#7FB800] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-sm">{{ feature }}</span>
                </li>
              </ul>

              <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 text-[#41808B] font-medium hover:underline">
                {{ t('common.requestDemo') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Teaser -->
    <section class="py-20 md:py-32 bg-[#F5F5F7]">
      <div class="container-wide">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] mb-6">
            {{ t('pages.products.pricingTitle') }}
          </h2>
          <p class="text-[#41808B] mb-8 leading-relaxed">
            {{ t('pages.products.pricingDescription') }}
          </p>
          <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
            {{ t('common.requestPricing') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32 bg-[#0D2C54]">
      <div class="container-wide text-center">
        <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6">
          {{ t('pages.products.ctaTitle') }}
        </h2>
        <p class="text-[#41808B] text-lg mb-8 max-w-2xl mx-auto">
          {{ t('pages.products.ctaDescription') }}
        </p>
        <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
          {{ t('common.contactUs') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
