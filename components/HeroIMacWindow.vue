<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

const { t } = useI18n();
const localePath = useLocalePath();

// Scroll state
const scrollProgress = ref(0);
const heroRef = ref<HTMLElement | null>(null);
const isInView = ref(true);

// Active department based on scroll
const activeDepartmentIndex = ref(0);
const isZoomed = ref(false);
const showProducts = ref(false);

// Department data
const { departments, motionSettings } = useDepartments();

// Calculate which department is active based on scroll
// Mobile gets shorter scroll sections for better UX
const isMobile = ref(false);
const sectionHeight = computed(() => isMobile.value ? 400 : 600);
const totalScrollHeight = computed(() => departments.value.length * sectionHeight.value);

function handleScroll() {
  if (!heroRef.value) return;

  const rect = heroRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Check if hero is in view
  isInView.value = rect.top < windowHeight && rect.bottom > 0;

  if (!isInView.value) return;

  // Calculate scroll progress within the hero section
  const scrollTop = -rect.top;
  const maxScroll = rect.height - windowHeight;
  scrollProgress.value = Math.max(0, Math.min(1, scrollTop / maxScroll));

  // Determine active department
  const deptProgress = scrollProgress.value * departments.value.length;
  const newIndex = Math.min(Math.floor(deptProgress), departments.value.length - 1);

  if (newIndex !== activeDepartmentIndex.value) {
    activeDepartmentIndex.value = newIndex;
    isZoomed.value = false;
    showProducts.value = false;
  }

  // Determine zoom state (zoom in middle of each department section)
  const withinDept = deptProgress - newIndex;
  isZoomed.value = withinDept > 0.4;
  showProducts.value = withinDept > 0.6;
}

// Reduced motion check
const prefersReducedMotion = ref(false);

function checkMobile() {
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  checkMobile();
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', checkMobile, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', checkMobile);
});

// Current active department
const activeDepartment = computed(() => departments.value[activeDepartmentIndex.value]);

// Zoom transform for the monitor content
const monitorTransform = computed(() => {
  if (prefersReducedMotion.value) return 'scale(1)';
  return isZoomed.value ? 'scale(1.5)' : 'scale(1)';
});

// Parallax offsets for each layer
const getParallaxOffset = (speed: number) => {
  if (prefersReducedMotion.value) return 0;
  const baseOffset = scrollProgress.value * 100;
  return -baseOffset * speed;
};
</script>

<template>
  <section
    ref="heroRef"
    class="imac-hero relative"
    :style="{ height: isMobile ? `${100 + departments.length * 50}vh` : `${100 + departments.length * 80}vh` }"
  >
    <!-- Sticky container -->
    <div class="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <!-- Background particles (reduced on mobile for performance) -->
      <ParticleField
        :particle-count="isMobile ? 30 : 60"
        color="94, 234, 212"
        :max-size="2"
        :speed="0.2"
        :connect-distance="isMobile ? 80 : 100"
        :mouse-influence="isMobile ? 60 : 80"
      />

      <!-- Ambient gradient orbs -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute w-[600px] h-[600px] -top-40 -left-40 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div class="absolute w-[500px] h-[500px] -bottom-40 -right-40 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <!-- Main content wrapper -->
      <div class="relative z-10 w-full max-w-6xl mx-auto px-4">
        <!-- Header text -->
        <div
          class="text-center mb-8 transition-all duration-700"
          :class="isZoomed ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'"
        >
          <p class="text-accent-400 text-sm uppercase tracking-wider mb-2 font-medium">
            {{ t('home.imac.tagline') }}
          </p>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {{ t('home.imac.headline') }}
          </h1>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            {{ t('home.imac.description') }}
          </p>
        </div>

        <!-- iMac Frame -->
        <div class="imac-frame relative mx-auto" style="max-width: 900px;">
          <!-- iMac outer shell -->
          <div class="relative">
            <!-- Monitor bezel -->
            <div class="bg-gray-800 rounded-[24px] p-3 shadow-2xl shadow-black/50 border border-gray-700">
              <!-- Screen area -->
              <div class="relative bg-gray-900 rounded-[12px] overflow-hidden aspect-[16/10]">
                <!-- Screen content with zoom -->
                <div
                  class="absolute inset-0 transition-transform duration-700"
                  :style="{
                    transform: monitorTransform,
                    transitionTimingFunction: motionSettings.easing
                  }"
                >
                  <!-- Department parallax scene -->
                  <DepartmentParallaxScene
                    :departments="departments"
                    :active-index="activeDepartmentIndex"
                    :scroll-progress="scrollProgress"
                    :is-zoomed="isZoomed"
                  />
                </div>

                <!-- Screen glare effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>

                <!-- Department label overlay -->
                <DepartmentOverlayLabel
                  v-if="activeDepartment"
                  :department="activeDepartment"
                  :is-zoomed="isZoomed"
                />
              </div>
            </div>

            <!-- iMac stand neck -->
            <div class="mx-auto w-24 h-12 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg"></div>

            <!-- iMac stand base -->
            <div class="mx-auto w-48 h-3 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full shadow-lg"></div>
          </div>
        </div>

        <!-- Product reveal cards -->
        <DepartmentProductReveal
          v-if="activeDepartment"
          :department="activeDepartment"
          :show="showProducts"
        />

        <!-- Scroll indicator -->
        <div
          class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-500"
          :class="scrollProgress > 0.1 ? 'opacity-0' : 'opacity-100'"
        >
          <span class="text-gray-500 text-sm mb-2">
            {{ t('home.imac.scrollHint') }}
          </span>
          <div class="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
            <div class="w-1.5 h-3 bg-accent-400 rounded-full animate-bounce"></div>
          </div>
        </div>

        <!-- Department progress dots with accessibility -->
        <nav
          class="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
          aria-label="Department navigation"
        >
          <button
            v-for="(dept, index) in departments"
            :key="dept.id"
            class="group relative w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            :class="index === activeDepartmentIndex ? 'bg-accent-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'"
            :aria-label="`Go to ${dept.displayName} department`"
            :aria-current="index === activeDepartmentIndex ? 'true' : undefined"
            @click="activeDepartmentIndex = index"
          >
            <span
              class="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity whitespace-nowrap"
            >
              {{ dept.displayName }}
            </span>
          </button>
        </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
.imac-hero {
  /* Smooth scroll behavior for the section */
}

/* iMac frame shadow and depth */
.imac-frame {
  perspective: 1000px;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .imac-frame {
    transform: scale(0.85);
    transform-origin: center top;
  }
}

@media (max-width: 640px) {
  .imac-frame {
    transform: scale(0.7);
  }
}

/* Reduced motion - simplified experience */
@media (prefers-reduced-motion: reduce) {
  .imac-frame * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }

  .animate-bounce {
    animation: none !important;
  }
}
</style>
