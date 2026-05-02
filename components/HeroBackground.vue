<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  image?: string;
  theme?: 'primary' | 'ai' | 'saas' | 'dark';
  overlay?: 'gradient' | 'dark' | 'mesh';
  particles?: boolean;
  particleCount?: number;
}

const props = withDefaults(defineProps<Props>(), {
  image: '',
  theme: 'primary',
  overlay: 'gradient',
  particles: true,
  particleCount: 80,
});

// Theme-based gradient colors for overlay
const gradientColors = {
  primary: 'from-primary-900/90 via-primary-800/80 to-primary-900/90',
  ai: 'from-violet-900/90 via-blue-900/80 to-indigo-900/90',
  saas: 'from-emerald-900/90 via-teal-900/80 to-cyan-900/90',
  dark: 'from-gray-900/95 via-gray-800/90 to-gray-900/95',
};

// Theme-based base gradients (when no image)
const baseGradients = {
  primary: 'bg-gradient-to-br from-primary-800 via-primary-900 to-gray-900',
  ai: 'bg-gradient-to-br from-violet-800 via-indigo-900 to-gray-900',
  saas: 'bg-gradient-to-br from-emerald-800 via-teal-900 to-gray-900',
  dark: 'bg-gradient-to-br from-gray-800 via-gray-900 to-black',
};

// Theme-based particle colors (RGB format)
const particleColors = computed(() => {
  switch (props.theme) {
    case 'ai': return '167, 139, 250'; // violet
    case 'saas': return '52, 211, 153'; // emerald
    case 'dark': return '255, 255, 255'; // white
    default: return '94, 234, 212'; // teal/primary accent
  }
});
</script>

<template>
  <div class="hero-background absolute inset-0 overflow-hidden">
    <!-- Background: Image with Zoom OR Animated Gradient -->
    <div class="absolute inset-0 scale-110 hero-zoom">
      <!-- If image provided -->
      <div
        v-if="image"
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
      <!-- Else use animated gradient base -->
      <div
        v-else
        class="absolute inset-0"
        :class="baseGradients[theme]"
      >
        <!-- Animated gradient layers for depth -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      </div>
    </div>

    <!-- Gradient Overlay -->
    <div
      v-if="overlay === 'gradient'"
      class="absolute inset-0 bg-gradient-to-br"
      :class="gradientColors[theme]"
    ></div>

    <!-- Dark Overlay -->
    <div
      v-else-if="overlay === 'dark'"
      class="absolute inset-0 bg-black/70"
    ></div>

    <!-- Mesh Overlay -->
    <div
      v-else-if="overlay === 'mesh'"
      class="absolute inset-0"
    >
      <div class="absolute inset-0 bg-gradient-to-br" :class="gradientColors[theme]"></div>
      <div class="absolute inset-0 mesh-pattern opacity-30"></div>
    </div>

    <!-- Interactive Particle Field -->
    <ParticleField
      v-if="particles"
      :particle-count="particleCount"
      :color="particleColors"
      :max-size="3"
      :speed="0.3"
      :connect-distance="150"
      :mouse-influence="120"
      :depth="true"
    />

    <!-- Subtle gradient orbs for additional depth -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
    </div>

    <!-- Bottom fade -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
  </div>
</template>

<style scoped>
/* Zoom animation for background */
.hero-zoom {
  animation: hero-zoom 25s ease-in-out infinite alternate;
}

@keyframes hero-zoom {
  0% {
    transform: scale(1.1) translateX(0) translateY(0);
  }
  100% {
    transform: scale(1.15) translateX(-1%) translateY(-0.5%);
  }
}

/* Mesh pattern overlay */
.mesh-pattern {
  background-image:
    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Subtle floating orbs for depth */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(65, 128, 139, 0.25) 0%, transparent 70%);
  top: -10%;
  left: -5%;
  animation: float-orb 25s ease-in-out infinite;
}

.orb-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(1, 185, 118, 0.2) 0%, transparent 70%);
  bottom: -10%;
  right: -5%;
  animation: float-orb 20s ease-in-out infinite reverse;
  animation-delay: -8s;
}

@keyframes float-orb {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(30px, -20px) scale(1.1);
    opacity: 0.7;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hero-zoom,
  .orb {
    animation: none !important;
  }
  .hero-zoom {
    transform: scale(1.1);
  }
}
</style>
