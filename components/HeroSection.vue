<script setup lang="ts">
const { t, locale } = useI18n();

const heroReady = ref(false);
const videoRef = ref<HTMLVideoElement | null>(null);
const videoReady = ref(false);

onMounted(() => {
  // Small delay to ensure smooth animation start
  requestAnimationFrame(() => {
    heroReady.value = true;
  });
});

// Called when video is ready to play
const onVideoReady = () => {
  videoReady.value = true;
};

// Play video on hover
const playVideo = () => {
  if (videoRef.value) {
    videoRef.value.play().catch(() => {});
  }
};

// Pause video when mouse leaves
const pauseVideo = () => {
  if (videoRef.value) {
    videoRef.value.pause();
    videoRef.value.currentTime = 0;
  }
};

</script>

<template>
  <section class="relative h-[calc(100vh-5rem)] pt-6 pb-8 flex flex-col bg-gradient-to-b from-[#e3ebe7] via-[#eff3f1] to-[#F5F5F7] snap-start overflow-hidden">
    <!-- Main Content - Use flex to spread content -->
    <div class="flex-1 flex flex-col justify-between">
      <div class="container-wide flex flex-col flex-1 justify-between">

        <!-- Top Section: Badge + Headline -->
        <div>
          <!-- Badge Pill -->
          <div class="text-center mb-4 md:mb-6">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8ED] rounded-full text-sm text-[#6B7B8A]">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7FB800] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#7FB800]"></span>
              </span>
              {{ locale === 'nl' ? 'Maatwerk software, web apps, AI en API\'s' : 'Bespoke software, web apps, AI and API\'s' }}
            </div>
          </div>

          <!-- Main Headline -->
          <div class="text-center max-w-5xl mx-auto mt-20">
            <h1
              class="font-display text-[#0D2C54]"
              :class="{ 'animate-fade-in-up': heroReady }"
              :style="heroReady ? { animationDelay: '100ms' } : {}"
            >
              <span class="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                {{ t('home.hero.headline') }}
              </span>
              <span class="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-[#41808B]">
                {{ t('home.hero.headlineSub') }}
              </span>
            </h1>
          </div>
        </div>

        <!-- Middle Section: Video + Description + Buttons -->
        <div
          class="grid md:grid-cols-[200px_1fr] lg:grid-cols-[220px_1fr] gap-8 lg:gap-10 items-start max-w-3xl mx-auto mt-2 py-6"
          :class="{ 'animate-fade-in-up': heroReady }"
          :style="heroReady ? { animationDelay: '300ms' } : {}"
        >
          <!-- Circular Video Container -->
          <div class="flex flex-col items-center justify-center">
            <div
              class="relative w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 cursor-pointer"
              @mouseenter="playVideo"
              @mouseleave="pauseVideo"
            >
              <div class="w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-[#41808B]/20 bg-white relative">
                <!-- Video element -->
                <video
                  ref="videoRef"
                  src="/videos/loggix-intro-small.mp4"
                  poster="/videos/loggix-poster.jpg"
                  loop
                  playsinline
                  preload="metadata"
                  muted
                  class="w-full h-full object-cover"
                  @loadeddata="onVideoReady"
                  @canplay="onVideoReady"
                >
                </video>

                <!-- Play icon overlay (shown when not playing) -->
                <div
                  v-if="videoReady"
                  class="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  <div class="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg class="w-6 h-6 text-[#41808B] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Hover hint -->
            <p class="mt-3 text-[#6B7B8A] text-sm italic text-center flex items-center justify-center gap-1.5">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" />
              </svg>
              {{ t('home.hero.videoHint') }}
            </p>
          </div>

          <!-- Description with Buttons -->
          <div>
            <p class="text-base md:text-lg text-[#0D2C54] leading-relaxed" v-html="t('home.hero.description')"></p>

            <!-- Buttons -->
            <div class="flex flex-wrap justify-center gap-4 mt-14">
              <NuxtLink
                :to="{ hash: '#solutions' }"
                class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors"
              >
                {{ t('home.hero.discoverMore') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </NuxtLink>
              <NuxtLink
                :to="{ hash: '#contact' }"
                class="inline-flex items-center gap-2 px-6 py-3 bg-[#7FB800] text-white rounded-full font-medium hover:bg-[#6a9c00] transition-colors"
              >
                {{ t('home.hero.freeAdvice') }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Bottom Section: Feature Cards + Support Text -->
        <div>
          <!-- Feature Cards -->
          <div
            class="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
            :class="{ 'animate-fade-in-up': heroReady }"
            :style="heroReady ? { animationDelay: '500ms' } : {}"
          >
            <!-- Database Solutions -->
            <NuxtLink
              :to="{ hash: '#database-solutions' }"
              class="bg-white rounded-2xl p-4 md:p-5 border border-[#E8E8ED] text-center hover:border-[#41808B] hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <div class="w-11 h-11 mx-auto mb-3 rounded-xl bg-[#F5F5F7] flex items-center justify-center">
                <svg class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 class="text-[#0D2C54] text-sm font-semibold mb-1">{{ t('home.hero.features.database.title') }}</h3>
              <p class="text-xs text-[#6B7B8A] leading-relaxed hidden lg:block">{{ t('home.hero.features.database.description') }}</p>
            </NuxtLink>

            <!-- AI Applications -->
            <NuxtLink
              :to="{ hash: '#ai-solutions' }"
              class="bg-white rounded-2xl p-4 md:p-5 border border-[#E8E8ED] text-center hover:border-[#41808B] hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <div class="w-11 h-11 mx-auto mb-3 rounded-xl bg-[#F5F5F7] flex items-center justify-center">
                <svg class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 class="text-[#0D2C54] text-sm font-semibold mb-1">{{ t('home.hero.features.ai.title') }}</h3>
              <p class="text-xs text-[#6B7B8A] leading-relaxed hidden lg:block">{{ t('home.hero.features.ai.description') }}</p>
            </NuxtLink>

            <!-- Web Apps -->
            <NuxtLink
              :to="{ hash: '#products' }"
              class="bg-white rounded-2xl p-4 md:p-5 border border-[#E8E8ED] text-center hover:border-[#41808B] hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <div class="w-11 h-11 mx-auto mb-3 rounded-xl bg-[#F5F5F7] flex items-center justify-center">
                <svg class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 class="text-[#0D2C54] text-sm font-semibold mb-1">{{ t('home.hero.features.webapps.title') }}</h3>
              <p class="text-xs text-[#6B7B8A] leading-relaxed hidden lg:block">{{ t('home.hero.features.webapps.description') }}</p>
            </NuxtLink>

            <!-- API Connections -->
            <NuxtLink
              :to="{ hash: '#database-solutions' }"
              class="bg-white rounded-2xl p-4 md:p-5 border border-[#E8E8ED] text-center hover:border-[#41808B] hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <div class="w-11 h-11 mx-auto mb-3 rounded-xl bg-[#F5F5F7] flex items-center justify-center">
                <svg class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 class="text-[#0D2C54] text-sm font-semibold mb-1">{{ t('home.hero.features.api.title') }}</h3>
              <p class="text-xs text-[#6B7B8A] leading-relaxed hidden lg:block">{{ t('home.hero.features.api.description') }}</p>
            </NuxtLink>
          </div>

          <!-- Support Text at bottom -->
          <p
            class="text-center text-lg md:text-xl text-[#41808B] font-medium italic mt-6"
            :class="{ 'animate-fade-in-up': heroReady }"
            :style="heroReady ? { animationDelay: '600ms' } : {}"
          >
            {{ t('home.hero.supportText') }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

