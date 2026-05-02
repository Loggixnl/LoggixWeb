<script setup lang="ts">
import { computed } from 'vue';
import type { Department } from '~/composables/useDepartments';

interface Props {
  departments: (Department & {
    displayName: string;
    displayTagline: string;
    displayPain: string;
    displaySolution: string;
    displayCta: string;
    displayProducts: { name: string; nameNl: string; displayName: string }[];
  })[];
  activeIndex: number;
  scrollProgress: number;
  isZoomed: boolean;
}

const props = defineProps<Props>();

// Parallax layer speeds
const layerSpeeds = {
  background: 0.3,
  midground: 0.6,
  foreground: 1.0,
};

// Calculate offset for each layer based on scroll
const getLayerOffset = (layer: 'background' | 'midground' | 'foreground') => {
  const speed = layerSpeeds[layer];
  return props.scrollProgress * 50 * speed;
};

// Department positions in the scene (arranged in a grid-like pattern)
const departmentPositions = [
  { x: 15, y: 20, scale: 0.9 },  // Operations - top left
  { x: 75, y: 25, scale: 0.85 }, // Finance - top right
  { x: 20, y: 50, scale: 1.0 },  // Sales - middle left
  { x: 70, y: 55, scale: 0.95 }, // Planning - middle right
  { x: 25, y: 80, scale: 0.9 },  // Production - bottom left
  { x: 72, y: 78, scale: 0.85 }, // HR - bottom right
];

// Get visual properties for each department card
const getDepartmentStyle = (index: number, dept: Props['departments'][0]) => {
  const pos = departmentPositions[index];
  const isActive = index === props.activeIndex;
  const speed = dept.parallaxSpeed;

  // Calculate parallax offset
  const yOffset = -props.scrollProgress * 100 * speed;

  // Opacity based on distance from active
  const distance = Math.abs(index - props.activeIndex);
  const opacity = isActive ? 1 : Math.max(0.3, 1 - distance * 0.25);

  // Scale adjustment
  const baseScale = pos.scale;
  const activeScale = isActive && props.isZoomed ? 1.2 : baseScale;

  return {
    left: `${pos.x}%`,
    top: `${pos.y}%`,
    transform: `translate(-50%, calc(-50% + ${yOffset}px)) scale(${activeScale})`,
    opacity,
    zIndex: isActive ? 10 : 5 - distance,
  };
};

// Icon paths for departments
const iconPaths: Record<string, string> = {
  cog: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  'chart-bar': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  'trending-up': 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  cube: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  users: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
};
</script>

<template>
  <div class="parallax-scene absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">
    <!-- Grid background pattern -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute inset-0"
        style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 40px 40px;"
      ></div>
    </div>

    <!-- Background layer - slowest parallax -->
    <div
      class="parallax-layer absolute inset-0 transition-transform duration-300"
      :style="{ transform: `translateY(${-getLayerOffset('background')}px)` }"
    >
      <!-- Abstract shapes -->
      <div class="absolute top-[10%] left-[5%] w-32 h-32 border border-gray-700/30 rounded-2xl rotate-12"></div>
      <div class="absolute bottom-[20%] right-[10%] w-24 h-24 border border-gray-700/30 rounded-full"></div>
      <div class="absolute top-[60%] left-[80%] w-16 h-16 bg-gray-800/30 rounded-lg rotate-45"></div>
    </div>

    <!-- Midground layer - medium parallax -->
    <div
      class="parallax-layer absolute inset-0 transition-transform duration-300"
      :style="{ transform: `translateY(${-getLayerOffset('midground')}px)` }"
    >
      <!-- Connecting lines between departments -->
      <svg class="absolute inset-0 w-full h-full" style="opacity: 0.15;">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#5EEAD4" stop-opacity="0" />
            <stop offset="50%" stop-color="#5EEAD4" stop-opacity="0.5" />
            <stop offset="100%" stop-color="#5EEAD4" stop-opacity="0" />
          </linearGradient>
        </defs>
        <!-- Horizontal connections -->
        <line x1="20%" y1="30%" x2="70%" y2="35%" stroke="url(#lineGradient)" stroke-width="1" />
        <line x1="25%" y1="55%" x2="65%" y2="60%" stroke="url(#lineGradient)" stroke-width="1" />
        <line x1="30%" y1="80%" x2="68%" y2="78%" stroke="url(#lineGradient)" stroke-width="1" />
        <!-- Vertical connections -->
        <line x1="18%" y1="25%" x2="22%" y2="75%" stroke="url(#lineGradient)" stroke-width="1" />
        <line x1="72%" y1="30%" x2="70%" y2="75%" stroke="url(#lineGradient)" stroke-width="1" />
      </svg>
    </div>

    <!-- Foreground layer - department cards -->
    <div
      class="parallax-layer absolute inset-0 transition-transform duration-300"
      :style="{ transform: `translateY(${-getLayerOffset('foreground')}px)` }"
    >
      <!-- Department cards -->
      <div
        v-for="(dept, index) in departments"
        :key="dept.id"
        class="department-card absolute transition-all duration-500"
        :style="getDepartmentStyle(index, dept)"
      >
        <div
          class="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border transition-all duration-300"
          :class="index === activeIndex ? 'border-accent-400/50 shadow-lg shadow-accent-400/20' : 'border-gray-700/50'"
          style="min-width: 140px;"
        >
          <!-- Department icon -->
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300"
            :style="{ backgroundColor: `${dept.color}20` }"
          >
            <svg
              class="w-5 h-5 transition-colors duration-300"
              :style="{ color: dept.color }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                :d="iconPaths[dept.icon] || iconPaths.cog"
              />
            </svg>
          </div>

          <!-- Department name -->
          <h4 class="text-white font-semibold text-sm mb-1">{{ dept.displayName }}</h4>

          <!-- Mini status indicator -->
          <div class="flex items-center gap-1.5">
            <span
              class="w-2 h-2 rounded-full animate-pulse"
              :style="{ backgroundColor: dept.color }"
            ></span>
            <span class="text-gray-400 text-xs">Active</span>
          </div>

          <!-- Expanded content when active -->
          <div
            v-if="index === activeIndex && isZoomed"
            class="mt-3 pt-3 border-t border-gray-700/50 animate-fade-in"
          >
            <p class="text-gray-300 text-xs leading-relaxed">
              {{ dept.displayTagline }}
            </p>
          </div>
        </div>

        <!-- Connection dot -->
        <div
          class="absolute -right-1 top-1/2 w-2 h-2 rounded-full transition-colors duration-300"
          :style="{ backgroundColor: index === activeIndex ? dept.color : '#374151' }"
        ></div>
      </div>
    </div>

    <!-- Center focus indicator -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 pointer-events-none"
      :class="isZoomed ? 'opacity-0 scale-150' : 'opacity-30 scale-100'"
    >
      <div class="w-32 h-32 border-2 border-dashed border-accent-400/30 rounded-full"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent-400/20 rounded-full"></div>
    </div>
  </div>
</template>

<style scoped>
.parallax-layer {
  will-change: transform;
}

.department-card {
  will-change: transform, opacity;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .parallax-layer,
  .department-card {
    transition: none !important;
  }

  .animate-pulse {
    animation: none !important;
  }
}
</style>
