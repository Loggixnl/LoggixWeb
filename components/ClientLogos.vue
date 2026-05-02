<script setup lang="ts">
const { locale } = useI18n();

// Sample client logos (using placeholder SVG logos)
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
  <section class="py-12 bg-white border-t border-[#E8E8ED]">
    <div class="container-wide">
      <!-- Label -->
      <p class="text-center text-sm text-[#6B7B8A] mb-8">
        {{ locale === 'nl' ? 'Vertrouwd door toonaangevende bedrijven' : 'Trusted by leading companies' }}
      </p>

      <!-- Auto-scrolling Logo Carousel -->
      <div class="relative overflow-hidden">
        <!-- Fade edges -->
        <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        <!-- Scrolling container -->
        <div class="flex animate-scroll px-8">
          <div
            v-for="(client, index) in allClients"
            :key="index"
            class="flex-shrink-0 mx-6"
          >
            <!-- Simple logo placeholder with company initial -->
            <div
              class="h-12 px-8 rounded-lg flex items-center justify-center gap-3 border border-[#E8E8ED] bg-[#F5F5F7]"
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
