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

// Client logos data
const clients = [
  { name: 'TechCorp', color: '#41808B' },
  { name: 'DataFlow', color: '#0D2C54' },
  { name: 'CloudSync', color: '#7FB800' },
  { name: 'NetWave', color: '#F6511D' },
  { name: 'ByteLogic', color: '#FFB400' },
  { name: 'InfoSys', color: '#41808B' },
  { name: 'DigiCore', color: '#0D2C54' },
  { name: 'SmartHub', color: '#7FB800' },
];

// Duplicate for seamless loop
const allClients = [...clients, ...clients];
</script>

<template>
  <section class="relative min-h-screen flex flex-col bg-gradient-to-b from-[#e3ebe7] via-[#eff3f1] to-[#F5F5F7]">
    <!-- Main Content -->
    <div class="flex-1 flex flex-col pt-20 pb-8">
      <div class="container-wide">
        <!-- Badge Pill -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8ED] rounded-full text-sm text-[#6B7B8A]">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7FB800] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-[#7FB800]"></span>
            </span>
            {{ locale === 'nl' ? 'Maatwerk software, web apps, AI en API\'s' : 'Bespoke software, web apps, AI and API\'s' }}
          </div>
        </div>

        <!-- Main Headline -->
        <div class="text-center max-w-5xl mx-auto mb-12 md:mb-16">
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
          class="grid md:grid-cols-[320px_1fr] gap-16 items-center max-w-6xl mx-auto"
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
                  <div class="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg class="w-6 h-6 text-[#41808B] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
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
            <p class="text-xl md:text-2xl text-[#0D2C54] leading-[2.0] mb-10" v-html="t('home.hero.description')"></p>
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
                class="inline-flex items-center gap-2 px-6 py-3 text-[#41808B] font-medium border border-[#41808B] rounded-full hover:bg-[#41808B] hover:text-white transition-colors"
              >
                {{ t('home.hero.contactUs') }}
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
      </div>
    </div>

    <!-- Client Logos Section (at bottom of hero) -->
    <div
      class="pb-8"
      :class="{ 'animate-fade-in-up': heroReady }"
      :style="heroReady ? { animationDelay: '500ms' } : {}"
    >
      <div class="container-wide">
        <!-- Label -->
        <p class="text-center text-sm text-[#6B7B8A] mb-6">
          {{ t('home.trustedBy') }}
        </p>

        <!-- Auto-scrolling Logo Carousel -->
        <div class="relative overflow-hidden">
          <!-- Fade edges -->
          <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F5F7] via-[#F5F5F7]/80 to-transparent z-10 pointer-events-none"></div>
          <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F5F7] via-[#F5F5F7]/80 to-transparent z-10 pointer-events-none"></div>

          <!-- Scrolling container -->
          <div class="flex animate-scroll px-8">
            <div
              v-for="(client, index) in allClients"
              :key="index"
              class="flex-shrink-0 mx-6"
            >
              <!-- Simple logo placeholder with company initial -->
              <div
                class="h-12 px-8 rounded-lg flex items-center justify-center gap-3 border border-[#E8E8ED] bg-white"
              >
                <div
                  class="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-sm"
                  :style="{ backgroundColor: client.color }"
                >
                  {{ client.name.charAt(0) }}
                </div>
                <span class="text-[#0D2C54] font-medium text-sm whitespace-nowrap">{{ client.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 25s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
