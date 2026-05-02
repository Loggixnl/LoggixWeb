<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const navItems = [
  { path: '/', labelKey: 'nav.home' },
  { path: '/filemaker', labelKey: 'nav.fm' },
  { path: '/ai', labelKey: 'nav.ai' },
  { path: '/products', labelKey: 'nav.products' },
  { path: '/blog', labelKey: 'nav.blog' },
  { path: '/team', labelKey: 'nav.team' },
];

const mobileMenuOpen = ref(false);
const scrolled = ref(false);

const { t } = useI18n();

// Handle scroll for header background
onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20;
  };
  window.addEventListener('scroll', handleScroll);
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      scrolled
        ? 'backdrop-blur-xl bg-white/80 border-b border-[#E8E8ED]'
        : 'bg-transparent'
    ]"
  >
    <nav class="container-wide flex items-center justify-between h-20">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="flex-shrink-0 relative z-10">
        <img
          src="/images/loggix-logo.png"
          alt="Loggix"
          class="h-11 transition-all duration-200"
        />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <ul class="hidden lg:flex items-center gap-8">
        <li v-for="item in navItems" :key="item.path">
          <NuxtLink
            :to="localePath(item.path)"
            class="text-base font-medium text-[#6B7B8A] hover:text-[#0D2C54] transition-colors duration-200"
          >
            {{ t(item.labelKey) }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Right section: Lang + CTA -->
      <div class="hidden lg:flex items-center gap-4">
        <!-- Language Switch -->
        <div class="flex items-center gap-1 text-xs font-mono">
          <NuxtLink
            :to="switchLocalePath('en')"
            class="px-2 py-1 rounded transition-colors duration-200"
            :class="[
              locale === 'en'
                ? 'text-[#0D2C54] bg-[#F5F5F7]'
                : 'text-[#6B7B8A] hover:text-[#0D2C54]'
            ]"
          >
            EN
          </NuxtLink>
          <span class="text-[#E8E8ED]">/</span>
          <NuxtLink
            :to="switchLocalePath('nl')"
            class="px-2 py-1 rounded transition-colors duration-200"
            :class="[
              locale === 'nl'
                ? 'text-[#0D2C54] bg-[#F5F5F7]'
                : 'text-[#6B7B8A] hover:text-[#0D2C54]'
            ]"
          >
            NL
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <NuxtLink
          :to="localePath('/') + '#contact'"
          class="text-sm px-5 py-2.5 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors"
        >
          {{ t('common.contactUs') }}
        </NuxtLink>
      </div>

      <!-- Mobile: Menu Button -->
      <div class="flex lg:hidden items-center gap-2">
        <button
          class="p-2 rounded-lg transition-colors duration-200 hover:bg-[#F5F5F7]"
          @click="mobileMenuOpen = !mobileMenuOpen"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6 text-[#0D2C54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 border-b border-[#E8E8ED] backdrop-blur-xl bg-white/95"
      >
        <ul class="container-wide py-6 space-y-1">
          <li v-for="item in navItems" :key="item.path">
            <NuxtLink
              :to="localePath(item.path)"
              class="block py-3 text-[#6B7B8A] hover:text-[#0D2C54] font-medium transition-colors"
              @click="mobileMenuOpen = false"
            >
              {{ t(item.labelKey) }}
            </NuxtLink>
          </li>

          <li class="pt-4 border-t border-[#E8E8ED]">
            <div class="flex items-center gap-4 text-sm font-mono">
              <span class="text-[#6B7B8A]">Language:</span>
              <NuxtLink
                :to="switchLocalePath('en')"
                class="px-2 py-1 rounded"
                :class="locale === 'en' ? 'bg-[#F5F5F7] text-[#0D2C54]' : 'text-[#6B7B8A]'"
                @click="mobileMenuOpen = false"
              >
                EN
              </NuxtLink>
              <NuxtLink
                :to="switchLocalePath('nl')"
                class="px-2 py-1 rounded"
                :class="locale === 'nl' ? 'bg-[#F5F5F7] text-[#0D2C54]' : 'text-[#6B7B8A]'"
                @click="mobileMenuOpen = false"
              >
                NL
              </NuxtLink>
            </div>
          </li>

          <li class="pt-4">
            <NuxtLink
              :to="localePath('/') + '#contact'"
              class="block w-full text-center px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors"
              @click="mobileMenuOpen = false"
            >
              {{ t('common.contactUs') }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
