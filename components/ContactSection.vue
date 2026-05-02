<script setup lang="ts">
const { t, locale } = useI18n();

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

// Form state
const formData = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
});

const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');

const handleSubmit = async () => {
  isSubmitting.value = true;
  await new Promise(resolve => setTimeout(resolve, 1000));
  submitStatus.value = 'success';
  isSubmitting.value = false;
};

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
</script>

<template>
  <section
    id="contact"
    ref="sectionRef"
    class="py-20 md:py-32 bg-[#F5F5F7]"
  >
    <div class="container-wide">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <!-- Left: Info -->
        <div
          :class="{ 'animate-fade-in-up': isVisible }"
        >
          <span class="text-sm uppercase tracking-wider text-[#6B7B8A] font-medium mb-4 block">
            {{ locale === 'nl' ? 'Contact' : 'Get in touch' }}
          </span>

          <h2 class="text-h2 text-[#0D2C54] mb-6">
            {{ locale === 'nl' ? 'Laten we praten over uw software' : 'Let\'s talk about your software' }}
          </h2>

          <p class="text-[#41808B] mb-8 max-w-md leading-relaxed">
            {{ locale === 'nl'
              ? 'Boek een gratis 15 minuten consultancy gesprek of vraag een demo aan van onze oplossingen.'
              : 'Book a free 15-minute consultancy call or request a demo of our solutions.'
            }}
          </p>

          <!-- Contact info -->
          <div class="space-y-4 mb-8">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-[#E8E8ED]">
                <svg class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-[#6B7B8A]">{{ locale === 'nl' ? 'Telefoon' : 'Phone' }}</p>
                <a href="tel:+31854872106" class="text-[#0D2C54] hover:text-[#41808B] transition-colors">
                  +31 (0)85 487 2106
                </a>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-[#E8E8ED]">
                <svg class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-[#6B7B8A]">Email</p>
                <a href="mailto:info@loggix.com" class="text-[#0D2C54] hover:text-[#41808B] transition-colors">
                  info@loggix.com
                </a>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-[#E8E8ED]">
                <svg class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-[#6B7B8A]">{{ locale === 'nl' ? 'Locatie' : 'Location' }}</p>
                <span class="text-[#0D2C54]">Utrecht, Netherlands</span>
              </div>
            </div>
          </div>

          <!-- Claris Partner badge -->
          <div class="pt-6 border-t border-[#E8E8ED]">
            <img
              src="/images/claris-partner-badge.svg"
              alt="Claris FileMaker Partner"
              class="h-12 opacity-70"
            />
          </div>
        </div>

        <!-- Right: Form -->
        <div
          :class="{ 'animate-fade-in-up': isVisible }"
          :style="isVisible ? { animationDelay: '150ms' } : {}"
        >
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-[#E8E8ED]">
            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-[#0D2C54] mb-2">
                    {{ t('common.name') }} *
                  </label>
                  <input
                    v-model="formData.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#E8E8ED] text-[#0D2C54] placeholder-[#6B7B8A] focus:outline-none focus:border-[#41808B] focus:ring-1 focus:ring-[#41808B] transition-colors"
                    :placeholder="locale === 'nl' ? 'Uw naam' : 'Your name'"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[#0D2C54] mb-2">
                    {{ t('common.email') }} *
                  </label>
                  <input
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#E8E8ED] text-[#0D2C54] placeholder-[#6B7B8A] focus:outline-none focus:border-[#41808B] focus:ring-1 focus:ring-[#41808B] transition-colors"
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-[#0D2C54] mb-2">
                    {{ t('common.company') }}
                  </label>
                  <input
                    v-model="formData.company"
                    type="text"
                    class="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#E8E8ED] text-[#0D2C54] placeholder-[#6B7B8A] focus:outline-none focus:border-[#41808B] focus:ring-1 focus:ring-[#41808B] transition-colors"
                    :placeholder="locale === 'nl' ? 'Bedrijfsnaam' : 'Company name'"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[#0D2C54] mb-2">
                    {{ t('common.phone') }}
                  </label>
                  <input
                    v-model="formData.phone"
                    type="tel"
                    class="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#E8E8ED] text-[#0D2C54] placeholder-[#6B7B8A] focus:outline-none focus:border-[#41808B] focus:ring-1 focus:ring-[#41808B] transition-colors"
                    placeholder="+31 6 12345678"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-[#0D2C54] mb-2">
                  {{ t('common.message') }} *
                </label>
                <textarea
                  v-model="formData.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#E8E8ED] text-[#0D2C54] placeholder-[#6B7B8A] focus:outline-none focus:border-[#41808B] focus:ring-1 focus:ring-[#41808B] transition-colors resize-none"
                  :placeholder="locale === 'nl' ? 'Vertel ons over uw project...' : 'Tell us about your project...'"
                />
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-4 text-base font-medium rounded-full bg-[#41808B] text-white hover:bg-[#357078] transition-colors disabled:opacity-50"
              >
                <span v-if="!isSubmitting">{{ t('common.sendMessage') }}</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {{ locale === 'nl' ? 'Verzenden...' : 'Sending...' }}
                </span>
              </button>

              <!-- Success message -->
              <Transition
                enter-active-class="transition duration-200"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
              >
                <div
                  v-if="submitStatus === 'success'"
                  class="p-4 rounded-xl bg-[#7FB800]/10 text-[#7FB800] text-center font-medium"
                >
                  {{ locale === 'nl' ? 'Bedankt! We nemen snel contact met u op.' : 'Thank you! We\'ll be in touch soon.' }}
                </div>
              </Transition>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
