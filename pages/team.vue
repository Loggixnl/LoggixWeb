<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: t('pages.team.title'),
  description: t('pages.team.description'),
});

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    { threshold: 0.15 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  onUnmounted(() => {
    observer.disconnect();
  });
});

const leadership = [
  { name: 'Jeroen', role: 'Owner/Director', description: 'Certified FileMaker Developer, FMBF specialist. Founded MacSense in 1993.', quote: 'Here we are, what is your second wish', location: 'Netherlands' },
];

const fmDevelopers = [
  { name: 'Shubham', role: 'Certified FileMaker Developer', description: 'Director of Indian branch. Certified Senior FileMaker Developer (2023).', location: 'India' },
  { name: 'Shantanu', role: 'Certified FileMaker Developer', description: 'Product owner. Works with Vue.js team on process optimization.', location: 'India' },
  { name: 'Rohan', role: 'FileMaker Developer', description: 'Focused on Digital Transformation strategies.', location: 'India' },
];

const vueDevelopers = [
  { name: 'Ashish', role: 'Senior Vue.js Developer', description: "Product owner of 'ScrumBan'.", location: 'India' },
  { name: 'Satyam', role: 'Senior Vue.js Developer', description: 'Working on SafetySys SaaS product.', location: 'India' },
  { name: 'Bhushan', role: 'Senior Vue.js Developer', description: 'Working on IndepHR platform.', location: 'India' },
];

const otherTeam = [
  { name: 'Pratiksha', role: 'Project Manager/Developer', description: 'Developing internal project management system.', location: 'India' },
  { name: 'Mike', role: 'Technologist & AI Specialist', description: 'Working on Pinnio concept.', location: 'New Zealand' },
  { name: 'Team Vietnam', role: 'React Developers', description: 'Mobile development and AI integration specialists.', location: 'Vietnam' },
];

const locations = [
  { flag: 'NL', country: 'Netherlands', city: 'Utrecht (HQ)' },
  { flag: 'IN', country: 'India', city: 'Pune' },
  { flag: 'VN', country: 'Vietnam', city: 'Partner Team' },
  { flag: 'NZ', country: 'New Zealand', city: 'Auckland' },
];
</script>

<template>
  <div>
    <!-- Hero with Amber Gradient -->
    <section class="h-[calc(100vh-5rem)] pt-8 flex flex-col bg-gradient-to-b from-[#fdf0d5] via-[#fef7e8] to-[#F5F5F7] snap-start">
      <div class="flex-1 flex flex-col">
        <div class="container-wide">
          <!-- Badge Pill -->
          <div class="text-center mb-14 md:mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8ED] rounded-full text-sm text-[#6B7B8A]">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4AC32] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#F4AC32]"></span>
              </span>
              <span v-html="t('pages.team.badge')"></span>
            </div>
          </div>

          <!-- Main Headline -->
          <div class="text-center max-w-5xl mx-auto mb-16 md:mb-20">
            <h1 class="font-display text-[#0D2C54]">
              <span class="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight" v-html="t('pages.team.headline')"></span>
            </h1>
          </div>

          <!-- Image + Description Row -->
          <div class="grid md:grid-cols-[280px_1fr] gap-10 items-start max-w-6xl mx-auto">
            <!-- Circular Image Container -->
            <div class="flex flex-col items-center justify-center">
              <div class="relative w-56 h-56 md:w-64 md:h-64">
                <div class="w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-[#F4AC32]/20 bg-gradient-to-br from-[#F4AC32]/20 to-[#41808B]/20 flex items-center justify-center">
                  <svg class="w-24 h-24 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div>
              <p class="text-lg md:text-xl text-[#0D2C54] leading-relaxed mb-11 pr-10" v-html="t('pages.team.intro')"></p>

              <div class="flex flex-wrap gap-4">
                <a href="#leadership" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
                  {{ t('common.meetTeam') || 'Meet the Team' }}
                </a>
                <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 text-[#41808B] font-medium border border-[#41808B] rounded-full hover:bg-[#41808B] hover:text-white transition-colors">
                  {{ t('common.contactUs') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership -->
    <section id="leadership" ref="sectionRef" class="min-h-[calc(100vh-5rem)] py-12 md:py-16 bg-white border-t border-[#E8E8ED] snap-start flex flex-col justify-center">
      <div class="container-wide">
        <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] text-center mb-12" :class="{ 'animate-fade-in-up': isVisible }" v-html="t('pages.team.sections.leadership')"></h2>
        <div class="max-w-2xl mx-auto" :class="{ 'animate-fade-in-up': isVisible }" :style="isVisible ? { animationDelay: '100ms' } : {}">
          <div v-for="member in leadership" :key="member.name" class="bg-white rounded-2xl p-8 border border-[#E8E8ED] text-center">
            <div class="w-24 h-24 rounded-full bg-[#F5F5F7] mx-auto mb-6 flex items-center justify-center border border-[#E8E8ED]">
              <span class="text-4xl">👨‍💼</span>
            </div>
            <h3 class="text-2xl font-semibold text-[#0D2C54] mb-1" v-html="member.name"></h3>
            <p class="text-[#41808B] font-medium mb-4" v-html="member.role"></p>
            <p class="text-[#6B7B8A] mb-4" v-html="member.description"></p>
            <p class="text-[#6B7B8A] italic">"<span v-html="member.quote"></span>"</p>
            <p class="text-sm text-[#86868B] mt-4">📍 <span v-html="member.location"></span></p>
          </div>
        </div>
      </div>
    </section>

    <!-- FileMaker Developers -->
    <section class="min-h-[calc(100vh-5rem)] py-12 md:py-16 bg-[#F5F5F7] snap-start flex flex-col justify-center">
      <div class="container-wide">
        <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] text-center mb-12" v-html="t('pages.team.sections.fmDevelopers')"></h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="member in fmDevelopers" :key="member.name" class="bg-white rounded-2xl p-6 border border-[#E8E8ED] text-center">
            <div class="w-20 h-20 rounded-full bg-[#41808B]/10 mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">👨‍💻</span>
            </div>
            <h3 class="text-xl font-semibold text-[#0D2C54] mb-1" v-html="member.name"></h3>
            <p class="text-[#41808B] text-sm font-medium mb-3" v-html="member.role"></p>
            <p class="text-[#6B7B8A] text-sm" v-html="member.description"></p>
            <p class="text-xs text-[#86868B] mt-3">📍 <span v-html="member.location"></span></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vue.js Developers -->
    <section class="min-h-[calc(100vh-5rem)] py-12 md:py-16 bg-white border-t border-[#E8E8ED] snap-start flex flex-col justify-center">
      <div class="container-wide">
        <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] text-center mb-12" v-html="t('pages.team.sections.vueDevelopers')"></h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="member in vueDevelopers" :key="member.name" class="bg-white rounded-2xl p-6 border border-[#E8E8ED] text-center">
            <div class="w-20 h-20 rounded-full bg-[#7FB800]/10 mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">👨‍💻</span>
            </div>
            <h3 class="text-xl font-semibold text-[#0D2C54] mb-1" v-html="member.name"></h3>
            <p class="text-[#7FB800] text-sm font-medium mb-3" v-html="member.role"></p>
            <p class="text-[#6B7B8A] text-sm" v-html="member.description"></p>
            <p class="text-xs text-[#86868B] mt-3">📍 <span v-html="member.location"></span></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Extended Team -->
    <section class="min-h-[calc(100vh-5rem)] py-12 md:py-16 bg-[#F5F5F7] snap-start flex flex-col justify-center">
      <div class="container-wide">
        <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] text-center mb-12" v-html="t('pages.team.sections.extendedTeam')"></h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="member in otherTeam" :key="member.name" class="bg-white rounded-2xl p-6 border border-[#E8E8ED] text-center">
            <div class="w-20 h-20 rounded-full bg-[#FFB400]/10 mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">{{ member.name === 'Team Vietnam' ? '👥' : '👨‍💻' }}</span>
            </div>
            <h3 class="text-xl font-semibold text-[#0D2C54] mb-1" v-html="member.name"></h3>
            <p class="text-[#FFB400] text-sm font-medium mb-3" v-html="member.role"></p>
            <p class="text-[#6B7B8A] text-sm" v-html="member.description"></p>
            <p class="text-xs text-[#86868B] mt-3">📍 <span v-html="member.location"></span></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Presence -->
    <section class="min-h-[calc(100vh-5rem)] py-12 md:py-16 bg-[#0D2C54] snap-start flex items-center">
      <div class="container-wide text-center">
        <h2 class="text-xl md:text-2xl font-semibold text-white mb-12" v-html="t('pages.team.sections.globalPresence')"></h2>
        <div class="flex flex-wrap justify-center gap-12">
          <div v-for="loc in locations" :key="loc.country" class="text-center">
            <div class="text-4xl mb-3">
              <span v-if="loc.flag === 'NL'">🇳🇱</span>
              <span v-if="loc.flag === 'IN'">🇮🇳</span>
              <span v-if="loc.flag === 'VN'">🇻🇳</span>
              <span v-if="loc.flag === 'NZ'">🇳🇿</span>
            </div>
            <p class="font-semibold text-white" v-html="loc.country"></p>
            <p class="text-[#41808B] text-sm" v-html="loc.city"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
