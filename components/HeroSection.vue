<script setup lang="ts">
const { t } = useI18n();

const heroReady = ref(false);
const videoRef = ref<HTMLVideoElement | null>(null);
const videoLoaded = ref(false);
const loadingProgress = ref(0);

onMounted(() => {
  // Small delay to ensure smooth animation start
  requestAnimationFrame(() => {
    heroReady.value = true;
  });
});

// Track video loading progress
const onProgress = () => {
  if (videoRef.value) {
    const video = videoRef.value;
    if (video.buffered.length > 0 && video.duration > 0) {
      const bufferedEnd = video.buffered.end(video.buffered.length - 1);
      loadingProgress.value = (bufferedEnd / video.duration) * 100;
    }
  }
};

// Called when video is ready to play
const onVideoReady = () => {
  videoLoaded.value = true;
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
  <section class="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-b from-[#e3ebe7] via-[#eff3f1] to-[#F5F5F7]">
    <div class="container-wide">
      <!-- Main Headline -->
      <div class="text-center max-w-5xl mx-auto mb-16 md:mb-24">
        <h1
          class="font-display text-[#0D2C54]"
          :class="{ 'animate-fade-in-up': heroReady }"
          :style="heroReady ? { animationDelay: '100ms' } : {}"
        >
          <span class="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight whitespace-nowrap">
            {{ t('home.hero.headline') }}
          </span>
          <span class="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-[#41808B]">
            {{ t('home.hero.headlineSub') }}
          </span>
        </h1>
      </div>

      <!-- Video + Description Row -->
      <div
        class="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
        :class="{ 'animate-fade-in-up': heroReady }"
        :style="heroReady ? { animationDelay: '300ms' } : {}"
      >
        <!-- Circular Video Container -->
        <div class="flex flex-col items-center justify-center">
          <div
            class="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer"
            @mouseenter="playVideo"
            @mouseleave="pauseVideo"
          >
            <div class="w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-[#41808B]/20 bg-white relative">
              <!-- Video element - replace src with actual video when available -->
              <video
                ref="videoRef"
                src="/videos/loggix-intro-web.mp4"
                loop
                playsinline
                preload="auto"
                class="w-full h-full object-cover"
                @progress="onProgress"
                @loadeddata="onProgress"
                @canplaythrough="onVideoReady"
              >
                <!-- Fallback content when video not available -->
              </video>

              <!-- Placeholder when no video -->
              <div v-if="!videoLoaded" class="absolute inset-0 flex items-center justify-center bg-[#F5F5F7]">
                <div class="text-center">
                  <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg class="w-6 h-6 text-[#41808B]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <span class="text-sm text-[#6B7B8A]">Video</span>
                </div>
              </div>
            </div>

            <!-- Circular progress ring -->
            <svg
              v-if="!videoLoaded && loadingProgress > 0"
              class="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
              viewBox="0 0 100 100"
            >
              <!-- Background ring -->
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="rgba(65, 128, 139, 0.2)"
                stroke-width="2"
              />
              <!-- Progress ring -->
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#41808B"
                stroke-width="2"
                stroke-linecap="round"
                :stroke-dasharray="301.6"
                :stroke-dashoffset="301.6 - (301.6 * loadingProgress / 100)"
                class="transition-all duration-300"
              />
            </svg>
          </div>

          <!-- Hover hint -->
          <p class="mt-4 text-[#6B7B8A] text-sm italic text-center flex items-center justify-center gap-1.5">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" />
            </svg>
            {{ t('home.hero.videoHint') }}
          </p>
        </div>

        <!-- Description -->
        <div>
          <p class="text-xl md:text-2xl text-[#0D2C54] leading-relaxed mb-6">
            {{ t('home.hero.description') }}
          </p>
          <div class="flex flex-wrap gap-4">
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
              class="inline-flex items-center gap-2 px-6 py-3 text-[#41808B] font-medium hover:underline"
            >
              {{ t('home.hero.contactUs') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
