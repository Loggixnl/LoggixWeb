<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isAnimating = ref(false);
const isComplete = ref(false);

onMounted(() => {
  // Start animation after a short delay for better UX
  setTimeout(() => {
    isAnimating.value = true;
    // Mark complete after animations finish
    setTimeout(() => {
      isComplete.value = true;
    }, 1500);
  }, 300);
});
</script>

<template>
  <div class="hero-animation-container relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
    <!-- Background gradient mesh -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-transparent to-accent-100/30 animate-gradient-shift"></div>

    <!-- Floating particles background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>
      <div class="particle particle-5"></div>
    </div>

    <!-- Main assembly container -->
    <div class="assembly-wrapper relative w-[320px] h-[280px] md:w-[450px] md:h-[350px]">

      <!-- Central hub - Logo/Brand element -->
      <div
        class="assembly-element center-element absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        :class="{ 'animate-center': isAnimating, 'glow-complete': isComplete }"
      >
        <div class="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-2xl">
          <svg class="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      <!-- FileMaker Database Block - Left -->
      <div
        class="assembly-element db-element absolute left-0 top-1/2 -translate-y-1/2 z-10"
        :class="{ 'animate-from-left': isAnimating }"
      >
        <div class="w-16 h-20 md:w-20 md:h-24 bg-white rounded-xl shadow-xl border border-gray-100 p-2 md:p-3">
          <div class="w-full h-1.5 bg-primary-200 rounded mb-1.5"></div>
          <div class="w-3/4 h-1.5 bg-primary-300 rounded mb-1.5"></div>
          <div class="w-full h-1.5 bg-primary-200 rounded mb-1.5"></div>
          <div class="w-2/3 h-1.5 bg-primary-400 rounded mb-1.5"></div>
          <div class="w-full h-1.5 bg-primary-200 rounded"></div>
          <div class="mt-2 text-[8px] md:text-[10px] text-primary-600 font-mono">database</div>
        </div>
      </div>

      <!-- Web Browser Window - Top Right -->
      <div
        class="assembly-element browser-element absolute right-4 top-0 z-10"
        :class="{ 'animate-from-right': isAnimating }"
        style="animation-delay: 0.1s"
      >
        <div class="w-20 h-16 md:w-28 md:h-20 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
          <div class="h-3 md:h-4 bg-gray-100 flex items-center px-1.5 gap-1">
            <div class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-400"></div>
            <div class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-400"></div>
            <div class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400"></div>
          </div>
          <div class="p-1.5 md:p-2">
            <div class="w-full h-1 md:h-1.5 bg-accent-200 rounded mb-1"></div>
            <div class="w-2/3 h-1 md:h-1.5 bg-accent-300 rounded"></div>
          </div>
        </div>
      </div>

      <!-- API Connector Lines - Top Left -->
      <div
        class="assembly-element api-element absolute left-8 top-4 z-10"
        :class="{ 'animate-from-top': isAnimating }"
        style="animation-delay: 0.15s"
      >
        <div class="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
          <svg class="w-full h-full text-secondary-500" viewBox="0 0 60 60" fill="none">
            <circle cx="10" cy="30" r="4" fill="currentColor" class="animate-pulse-soft" />
            <circle cx="30" cy="10" r="4" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.2s" />
            <circle cx="50" cy="30" r="4" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.4s" />
            <circle cx="30" cy="50" r="4" fill="currentColor" class="animate-pulse-soft" style="animation-delay: 0.6s" />
            <path d="M14 30 L26 30 M30 14 L30 26 M46 30 L34 30 M30 46 L30 34" stroke="currentColor" stroke-width="2" stroke-dasharray="4 2" />
            <circle cx="30" cy="30" r="6" fill="currentColor" />
          </svg>
        </div>
      </div>

      <!-- Mobile App Screen - Right -->
      <div
        class="assembly-element mobile-element absolute right-0 top-1/2 -translate-y-1/2 z-10"
        :class="{ 'animate-from-right': isAnimating }"
        style="animation-delay: 0.2s"
      >
        <div class="w-12 h-20 md:w-16 md:h-28 bg-white rounded-xl shadow-xl border border-gray-200 p-1.5 md:p-2">
          <div class="w-full h-full bg-gradient-to-b from-primary-50 to-accent-50 rounded-lg flex flex-col items-center justify-center gap-1">
            <div class="w-3 h-3 md:w-4 md:h-4 bg-primary-400 rounded"></div>
            <div class="w-2/3 h-0.5 md:h-1 bg-gray-300 rounded"></div>
            <div class="w-1/2 h-0.5 md:h-1 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      <!-- Cloud Element - Bottom Left -->
      <div
        class="assembly-element cloud-element absolute left-4 bottom-4 z-10"
        :class="{ 'animate-from-bottom': isAnimating }"
        style="animation-delay: 0.25s"
      >
        <div class="w-16 h-10 md:w-24 md:h-14 relative">
          <svg class="w-full h-full text-primary-300" viewBox="0 0 80 50" fill="currentColor">
            <ellipse cx="55" cy="35" rx="20" ry="12" />
            <ellipse cx="35" cy="30" rx="18" ry="14" />
            <ellipse cx="22" cy="38" rx="14" ry="10" />
            <ellipse cx="60" cy="42" rx="12" ry="8" />
          </svg>
          <div class="absolute inset-0 flex items-center justify-center">
            <svg class="w-5 h-5 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 16V8M8 12l4-4 4 4" />
            </svg>
          </div>
        </div>
      </div>

      <!-- AI Brain/Chip - Bottom Right -->
      <div
        class="assembly-element ai-element absolute right-8 bottom-0 z-10"
        :class="{ 'animate-from-bottom': isAnimating }"
        style="animation-delay: 0.3s"
      >
        <div class="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-violet-500 to-blue-600 rounded-xl shadow-xl flex items-center justify-center">
          <svg class="w-8 h-8 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <circle cx="9" cy="9" r="1.5" fill="currentColor" />
            <circle cx="15" cy="9" r="1.5" fill="currentColor" />
            <circle cx="9" cy="15" r="1.5" fill="currentColor" />
            <circle cx="15" cy="15" r="1.5" fill="currentColor" />
            <path d="M12 4V1M12 23v-3M4 12H1M23 12h-3M6.5 6.5L4 4M18 18l2.5 2.5M6.5 17.5L4 20M18 6l2.5-2.5" />
          </svg>
        </div>
      </div>

      <!-- Connection lines (appear after assembly) -->
      <svg
        class="absolute inset-0 w-full h-full pointer-events-none z-0"
        :class="{ 'opacity-100': isComplete, 'opacity-0': !isComplete }"
        style="transition: opacity 0.5s ease-in-out"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#41808b;stop-opacity:0.2" />
            <stop offset="50%" style="stop-color:#41808b;stop-opacity:0.6" />
            <stop offset="100%" style="stop-color:#41808b;stop-opacity:0.2" />
          </linearGradient>
        </defs>
        <!-- Lines connecting elements to center -->
        <line x1="20%" y1="50%" x2="40%" y2="50%" stroke="url(#line-gradient)" stroke-width="2" stroke-dasharray="4 4" class="animate-connection" />
        <line x1="80%" y1="50%" x2="60%" y2="50%" stroke="url(#line-gradient)" stroke-width="2" stroke-dasharray="4 4" class="animate-connection" />
        <line x1="50%" y1="15%" x2="50%" y2="35%" stroke="url(#line-gradient)" stroke-width="2" stroke-dasharray="4 4" class="animate-connection" />
        <line x1="50%" y1="85%" x2="50%" y2="65%" stroke="url(#line-gradient)" stroke-width="2" stroke-dasharray="4 4" class="animate-connection" />
      </svg>
    </div>

    <!-- Tagline that appears after assembly -->
    <div
      class="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-center"
      :class="{ 'animate-fade-in-up': isComplete, 'opacity-0': !isComplete }"
    >
      <p class="text-sm md:text-base text-primary-600 font-medium tracking-wide">
        Building Your Software Ecosystem
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Assembly animations */
.animate-from-left {
  animation: assemble-from-left 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-from-right {
  animation: assemble-from-right 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-from-top {
  animation: assemble-from-top 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-from-bottom {
  animation: assemble-from-bottom 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-center {
  animation: assemble-center 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.glow-complete {
  animation: final-glow 1.5s ease-in-out forwards;
}

/* Initial state for assembly elements */
.assembly-element {
  opacity: 0;
}

/* Particles */
.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--tw-gradient-from, #41808b) 0%, var(--tw-gradient-to, #01B976) 100%);
  opacity: 0.3;
  animation: particle-move 15s ease-in-out infinite;
}

.particle-1 {
  top: 10%;
  left: 20%;
  animation-delay: 0s;
}

.particle-2 {
  top: 30%;
  right: 15%;
  width: 6px;
  height: 6px;
  animation-delay: -3s;
}

.particle-3 {
  bottom: 25%;
  left: 10%;
  width: 10px;
  height: 10px;
  animation-delay: -6s;
}

.particle-4 {
  bottom: 15%;
  right: 25%;
  width: 5px;
  height: 5px;
  animation-delay: -9s;
}

.particle-5 {
  top: 50%;
  left: 50%;
  width: 7px;
  height: 7px;
  animation-delay: -12s;
}

/* Connection line animation */
.animate-connection {
  animation: connection-pulse 2s ease-in-out infinite;
}

/* Keyframes */
@keyframes assemble-from-left {
  0% {
    transform: translateX(-200px) translateY(-50%) rotate(-15deg);
    opacity: 0;
  }
  60% {
    transform: translateX(10px) translateY(calc(-50% + 5px)) rotate(2deg);
    opacity: 1;
  }
  80% {
    transform: translateX(-5px) translateY(calc(-50% - 2px)) rotate(-1deg);
  }
  100% {
    transform: translateX(0) translateY(-50%) rotate(0);
    opacity: 1;
  }
}

@keyframes assemble-from-right {
  0% {
    transform: translateX(200px) translateY(-50%) rotate(15deg);
    opacity: 0;
  }
  60% {
    transform: translateX(-10px) translateY(calc(-50% + 5px)) rotate(-2deg);
    opacity: 1;
  }
  80% {
    transform: translateX(5px) translateY(calc(-50% - 2px)) rotate(1deg);
  }
  100% {
    transform: translateX(0) translateY(-50%) rotate(0);
    opacity: 1;
  }
}

@keyframes assemble-from-top {
  0% {
    transform: translateY(-150px) rotate(10deg);
    opacity: 0;
  }
  60% {
    transform: translateY(8px) rotate(-2deg);
    opacity: 1;
  }
  80% {
    transform: translateY(-3px) rotate(1deg);
  }
  100% {
    transform: translateY(0) rotate(0);
    opacity: 1;
  }
}

@keyframes assemble-from-bottom {
  0% {
    transform: translateY(150px) rotate(-10deg);
    opacity: 0;
  }
  60% {
    transform: translateY(-8px) rotate(2deg);
    opacity: 1;
  }
  80% {
    transform: translateY(3px) rotate(-1deg);
  }
  100% {
    transform: translateY(0) rotate(0);
    opacity: 1;
  }
}

@keyframes assemble-center {
  0% {
    transform: translate(-50%, -50%) scale(0.3) rotate(180deg);
    opacity: 0;
  }
  60% {
    transform: translate(-50%, -50%) scale(1.1) rotate(-10deg);
    opacity: 1;
  }
  80% {
    transform: translate(-50%, -50%) scale(0.95) rotate(5deg);
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(0);
    opacity: 1;
  }
}

@keyframes final-glow {
  0% {
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    filter: drop-shadow(0 0 30px rgba(65, 128, 139, 0.6));
  }
  100% {
    filter: drop-shadow(0 0 15px rgba(65, 128, 139, 0.3));
  }
}

@keyframes connection-pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes particle-move {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  25% {
    transform: translate(20px, -30px) scale(1.1);
    opacity: 0.6;
  }
  50% {
    transform: translate(-10px, -50px) scale(0.9);
    opacity: 0.4;
  }
  75% {
    transform: translate(30px, -20px) scale(1.05);
    opacity: 0.5;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .assembly-element {
    opacity: 1;
    animation: none !important;
  }
  .particle {
    animation: none !important;
    opacity: 0.2;
  }
  .glow-complete {
    animation: none !important;
    filter: drop-shadow(0 0 15px rgba(65, 128, 139, 0.3));
  }
}
</style>
