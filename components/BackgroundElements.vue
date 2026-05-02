<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  theme: 'software' | 'ai' | 'saas' | 'default';
  intensity?: 'light' | 'medium' | 'strong';
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'default',
  intensity: 'light',
});

const opacityClass = computed(() => {
  switch (props.intensity) {
    case 'strong':
      return 'opacity-20';
    case 'medium':
      return 'opacity-15';
    default:
      return 'opacity-10';
  }
});
</script>

<template>
  <div class="background-elements absolute inset-0 overflow-hidden pointer-events-none" :class="opacityClass">

    <!-- SOFTWARE / DATABASE THEME -->
    <template v-if="theme === 'software'">
      <!-- Code brackets -->
      <div class="absolute top-[10%] left-[5%] text-primary-500 font-mono text-6xl md:text-8xl animate-float-slow">
        {
      </div>
      <div class="absolute bottom-[15%] right-[8%] text-primary-500 font-mono text-6xl md:text-8xl animate-float-slow" style="animation-delay: -2s">
        }
      </div>

      <!-- Database table representation -->
      <svg class="absolute top-[20%] right-[15%] w-32 h-32 md:w-48 md:h-48 text-primary-400 animate-float" viewBox="0 0 100 100" fill="none">
        <rect x="10" y="20" width="80" height="60" rx="4" stroke="currentColor" stroke-width="2" />
        <line x1="10" y1="35" x2="90" y2="35" stroke="currentColor" stroke-width="2" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="1" stroke-dasharray="4 2" />
        <line x1="10" y1="65" x2="90" y2="65" stroke="currentColor" stroke-width="1" stroke-dasharray="4 2" />
        <line x1="35" y1="20" x2="35" y2="80" stroke="currentColor" stroke-width="1" />
        <line x1="65" y1="20" x2="65" y2="80" stroke="currentColor" stroke-width="1" />
      </svg>

      <!-- Connected nodes (API flow) -->
      <svg class="absolute bottom-[25%] left-[10%] w-40 h-40 md:w-56 md:h-56 text-accent-400 animate-float-reverse" viewBox="0 0 100 100" fill="none">
        <circle cx="20" cy="20" r="8" fill="currentColor" class="animate-pulse-soft" />
        <circle cx="80" cy="20" r="8" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.5s" />
        <circle cx="50" cy="50" r="10" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 1s" />
        <circle cx="20" cy="80" r="8" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 1.5s" />
        <circle cx="80" cy="80" r="8" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 2s" />
        <path d="M20 20 L50 50 L80 20 M20 80 L50 50 L80 80" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" />
      </svg>

      <!-- Terminal/console element -->
      <div class="absolute top-[50%] right-[5%] w-24 h-16 md:w-36 md:h-24 bg-gray-800/30 rounded-lg animate-float-slow" style="animation-delay: -3s">
        <div class="h-3 md:h-4 bg-gray-700/40 rounded-t-lg flex items-center px-2 gap-1">
          <div class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-400/60"></div>
          <div class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-400/60"></div>
          <div class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400/60"></div>
        </div>
        <div class="p-2 font-mono text-[8px] md:text-xs text-primary-300/60">
          <div>> npm run build</div>
          <div class="animate-pulse">_</div>
        </div>
      </div>

      <!-- Floating code snippet -->
      <div class="absolute bottom-[10%] left-[25%] font-mono text-xs md:text-sm text-primary-400/50 animate-float" style="animation-delay: -4s">
        <div>const data = await</div>
        <div class="ml-4">fetchAPI();</div>
      </div>
    </template>

    <!-- AI / NEURAL NETWORK THEME -->
    <template v-else-if="theme === 'ai'">
      <!-- Neural network pattern -->
      <svg class="absolute top-[5%] left-[5%] w-64 h-64 md:w-96 md:h-96 text-violet-400" viewBox="0 0 200 200" fill="none">
        <!-- Input layer -->
        <circle cx="30" cy="40" r="6" fill="currentColor" class="animate-pulse-soft" />
        <circle cx="30" cy="80" r="6" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.2s" />
        <circle cx="30" cy="120" r="6" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.4s" />
        <circle cx="30" cy="160" r="6" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.6s" />

        <!-- Hidden layer 1 -->
        <circle cx="80" cy="50" r="6" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.3s" />
        <circle cx="80" cy="100" r="6" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.5s" />
        <circle cx="80" cy="150" r="6" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.7s" />

        <!-- Hidden layer 2 -->
        <circle cx="130" cy="60" r="6" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.4s" />
        <circle cx="130" cy="100" r="6" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.6s" />
        <circle cx="130" cy="140" r="6" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.8s" />

        <!-- Output layer -->
        <circle cx="180" cy="80" r="8" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.5s" />
        <circle cx="180" cy="120" r="8" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.7s" />

        <!-- Connections -->
        <g stroke="currentColor" stroke-width="1" opacity="0.3">
          <!-- Input to Hidden 1 -->
          <line x1="36" y1="40" x2="74" y2="50" />
          <line x1="36" y1="40" x2="74" y2="100" />
          <line x1="36" y1="80" x2="74" y2="50" />
          <line x1="36" y1="80" x2="74" y2="100" />
          <line x1="36" y1="80" x2="74" y2="150" />
          <line x1="36" y1="120" x2="74" y2="100" />
          <line x1="36" y1="120" x2="74" y2="150" />
          <line x1="36" y1="160" x2="74" y2="150" />
          <!-- Hidden 1 to Hidden 2 -->
          <line x1="86" y1="50" x2="124" y2="60" />
          <line x1="86" y1="50" x2="124" y2="100" />
          <line x1="86" y1="100" x2="124" y2="60" />
          <line x1="86" y1="100" x2="124" y2="100" />
          <line x1="86" y1="100" x2="124" y2="140" />
          <line x1="86" y1="150" x2="124" y2="100" />
          <line x1="86" y1="150" x2="124" y2="140" />
          <!-- Hidden 2 to Output -->
          <line x1="136" y1="60" x2="172" y2="80" />
          <line x1="136" y1="100" x2="172" y2="80" />
          <line x1="136" y1="100" x2="172" y2="120" />
          <line x1="136" y1="140" x2="172" y2="120" />
        </g>
      </svg>

      <!-- Brain/chip hybrid -->
      <svg class="absolute bottom-[15%] right-[10%] w-32 h-32 md:w-48 md:h-48 text-blue-400 animate-float" viewBox="0 0 100 100" fill="none">
        <rect x="25" y="25" width="50" height="50" rx="8" stroke="currentColor" stroke-width="2" />
        <!-- Chip pins -->
        <line x1="35" y1="25" x2="35" y2="15" stroke="currentColor" stroke-width="2" />
        <line x1="50" y1="25" x2="50" y2="15" stroke="currentColor" stroke-width="2" />
        <line x1="65" y1="25" x2="65" y2="15" stroke="currentColor" stroke-width="2" />
        <line x1="35" y1="75" x2="35" y2="85" stroke="currentColor" stroke-width="2" />
        <line x1="50" y1="75" x2="50" y2="85" stroke="currentColor" stroke-width="2" />
        <line x1="65" y1="75" x2="65" y2="85" stroke="currentColor" stroke-width="2" />
        <line x1="25" y1="35" x2="15" y2="35" stroke="currentColor" stroke-width="2" />
        <line x1="25" y1="50" x2="15" y2="50" stroke="currentColor" stroke-width="2" />
        <line x1="25" y1="65" x2="15" y2="65" stroke="currentColor" stroke-width="2" />
        <line x1="75" y1="35" x2="85" y2="35" stroke="currentColor" stroke-width="2" />
        <line x1="75" y1="50" x2="85" y2="50" stroke="currentColor" stroke-width="2" />
        <line x1="75" y1="65" x2="85" y2="65" stroke="currentColor" stroke-width="2" />
        <!-- Inner circuit -->
        <circle cx="40" cy="40" r="4" fill="currentColor" class="animate-pulse-soft" />
        <circle cx="60" cy="40" r="4" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.3s" />
        <circle cx="50" cy="55" r="5" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.6s" />
        <circle cx="40" cy="65" r="3" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.9s" />
        <circle cx="60" cy="65" r="3" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 1.2s" />
      </svg>

      <!-- Data flow lines -->
      <div class="absolute top-[40%] left-[30%] w-40 h-1 bg-gradient-to-r from-transparent via-violet-400 to-transparent animate-data-flow"></div>
      <div class="absolute top-[60%] right-[20%] w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-data-flow" style="animation-delay: -2s"></div>

      <!-- Gradient mesh orbs -->
      <div class="absolute top-[30%] right-[30%] w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-violet-400/30 to-blue-500/30 blur-2xl animate-pulse-soft"></div>
      <div class="absolute bottom-[30%] left-[20%] w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-500/30 blur-2xl animate-pulse-soft" style="animation-delay: -1.5s"></div>
    </template>

    <!-- SAAS / CLOUD THEME -->
    <template v-else-if="theme === 'saas'">
      <!-- Cloud shapes -->
      <svg class="absolute top-[10%] right-[15%] w-32 h-20 md:w-48 md:h-28 text-emerald-300 animate-cloud-drift" viewBox="0 0 120 70" fill="currentColor">
        <ellipse cx="85" cy="50" rx="28" ry="18" />
        <ellipse cx="55" cy="42" rx="30" ry="22" />
        <ellipse cx="30" cy="52" rx="22" ry="16" />
        <ellipse cx="95" cy="58" rx="18" ry="12" />
      </svg>

      <svg class="absolute bottom-[20%] left-[8%] w-28 h-18 md:w-40 md:h-24 text-teal-300 animate-cloud-drift" style="animation-delay: -3s" viewBox="0 0 100 60" fill="currentColor">
        <ellipse cx="70" cy="42" rx="24" ry="16" />
        <ellipse cx="45" cy="35" rx="26" ry="20" />
        <ellipse cx="25" cy="44" rx="18" ry="14" />
      </svg>

      <!-- Dashboard/chart elements -->
      <div class="absolute top-[35%] left-[12%] w-28 h-20 md:w-40 md:h-28 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg animate-float p-2 md:p-3">
        <div class="flex items-end justify-between h-full gap-1">
          <div class="w-2 md:w-3 bg-emerald-400/60 rounded-t" style="height: 40%"></div>
          <div class="w-2 md:w-3 bg-emerald-400/60 rounded-t" style="height: 70%"></div>
          <div class="w-2 md:w-3 bg-emerald-400/60 rounded-t" style="height: 55%"></div>
          <div class="w-2 md:w-3 bg-emerald-400/60 rounded-t" style="height: 85%"></div>
          <div class="w-2 md:w-3 bg-emerald-400/60 rounded-t" style="height: 60%"></div>
          <div class="w-2 md:w-3 bg-emerald-400/60 rounded-t" style="height: 75%"></div>
        </div>
      </div>

      <!-- User icons grid -->
      <div class="absolute bottom-[35%] right-[12%] grid grid-cols-3 gap-2 animate-float-slow" style="animation-delay: -2s">
        <div v-for="i in 9" :key="i" class="w-6 h-6 md:w-8 md:h-8 rounded-full bg-teal-300/40 flex items-center justify-center">
          <svg class="w-3 h-3 md:w-4 md:h-4 text-teal-600/60" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="8" r="4" />
            <path d="M20 21a8 8 0 10-16 0" />
          </svg>
        </div>
      </div>

      <!-- Sync/refresh element -->
      <div class="absolute top-[55%] right-[35%] animate-orbit">
        <svg class="w-8 h-8 md:w-12 md:h-12 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M23 4v6h-6M1 20v-6h6" />
          <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
        </svg>
      </div>

      <!-- Circular orbit elements -->
      <div class="absolute top-[25%] left-[40%] w-32 h-32 md:w-48 md:h-48">
        <div class="absolute inset-0 border-2 border-dashed border-emerald-200/30 rounded-full"></div>
        <div class="absolute w-4 h-4 md:w-6 md:h-6 bg-emerald-400/50 rounded-full animate-orbit"></div>
        <div class="absolute w-3 h-3 md:w-4 md:h-4 bg-teal-400/50 rounded-full animate-orbit-reverse"></div>
      </div>
    </template>

    <!-- DEFAULT / SUBTLE THEME -->
    <template v-else>
      <!-- Simple geometric shapes -->
      <div class="absolute top-[15%] right-[20%] w-20 h-20 md:w-32 md:h-32 border-2 border-primary-200 rounded-full animate-float-slow"></div>
      <div class="absolute bottom-[25%] left-[15%] w-16 h-16 md:w-24 md:h-24 border-2 border-accent-200 rounded-lg rotate-45 animate-float" style="animation-delay: -2s"></div>
      <div class="absolute top-[50%] left-[8%] w-12 h-12 md:w-16 md:h-16 bg-primary-100/50 rounded-full animate-pulse-soft"></div>
      <div class="absolute bottom-[10%] right-[25%] w-10 h-10 md:w-14 md:h-14 bg-accent-100/50 rounded-lg animate-pulse-soft" style="animation-delay: -1s"></div>

      <!-- Subtle dots pattern -->
      <div class="absolute top-[35%] right-[10%] grid grid-cols-3 gap-3 md:gap-4">
        <div v-for="i in 9" :key="i" class="w-2 h-2 rounded-full bg-primary-200/40 animate-pulse-soft" :style="{ animationDelay: `${i * 0.2}s` }"></div>
      </div>
    </template>
  </div>
</template>

<style scoped>
/* Data flow animation */
.animate-data-flow {
  animation: data-flow 3s linear infinite;
}

@keyframes data-flow {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

/* Float animations */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 7s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  50% {
    transform: translateY(-5px) translateX(-5px);
  }
  75% {
    transform: translateY(-15px) translateX(3px);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(15px) translateX(-10px);
  }
}

/* Pulse animations */
.animate-pulse-soft {
  animation: pulse-soft 4s ease-in-out infinite;
}

@keyframes pulse-soft {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

/* Cloud drift */
.animate-cloud-drift {
  animation: cloud-drift 10s ease-in-out infinite;
}

@keyframes cloud-drift {
  0%, 100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(10px) translateY(-5px);
  }
  50% {
    transform: translateX(5px) translateY(5px);
  }
  75% {
    transform: translateX(-5px) translateY(-3px);
  }
}

/* Orbit animations */
.animate-orbit {
  animation: orbit 20s linear infinite;
}

.animate-orbit-reverse {
  animation: orbit-reverse 15s linear infinite;
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(60px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(60px) rotate(-360deg);
  }
}

@keyframes orbit-reverse {
  0% {
    transform: rotate(0deg) translateX(40px) rotate(0deg);
  }
  100% {
    transform: rotate(-360deg) translateX(40px) rotate(360deg);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-float-slow,
  .animate-float-reverse,
  .animate-pulse-soft,
  .animate-cloud-drift,
  .animate-orbit,
  .animate-orbit-reverse,
  .animate-data-flow {
    animation: none !important;
  }
}
</style>
