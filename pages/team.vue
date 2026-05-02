<script setup lang="ts">
const { t, locale } = useI18n();

useSeoMeta({
  title: 'Team - Loggix',
  description: locale.value === 'nl'
    ? 'Maak kennis met het Loggix team van FileMaker en Vue.js developers.'
    : 'Meet the Loggix team of FileMaker and Vue.js developers.',
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
    <section class="min-h-screen flex items-center bg-gradient-to-b from-[#fdf0d5] via-[#fef7e8] to-[#F5F5F7]">
      <div class="container-wide">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0D2C54] mb-6">
            {{ locale === 'nl' ? 'Ons Team' : 'Meet Our Team' }}
          </h1>
          <p class="text-lg text-[#41808B] leading-relaxed">
            {{ locale === 'nl'
              ? 'Een wereldwijd team van FileMaker en Vue.js experts.'
              : 'A global team of FileMaker and Vue.js experts, united by a passion for building great software.'
            }}
          </p>
        </div>
      </div>
    </section>

    <!-- Leadership -->
    <section ref="sectionRef" class="py-20 md:py-32 bg-white border-t border-[#E8E8ED]">
      <div class="container-wide">
        <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] text-center mb-12" :class="{ 'animate-fade-in-up': isVisible }">
          Leadership
        </h2>
        <div class="max-w-2xl mx-auto" :class="{ 'animate-fade-in-up': isVisible }" :style="isVisible ? { animationDelay: '100ms' } : {}">
          <div v-for="member in leadership" :key="member.name" class="bg-white rounded-2xl p-8 border border-[#E8E8ED] text-center">
            <div class="w-24 h-24 rounded-full bg-[#F5F5F7] mx-auto mb-6 flex items-center justify-center border border-[#E8E8ED]">
              <span class="text-4xl">👨‍💼</span>
            </div>
            <h3 class="text-2xl font-semibold text-[#0D2C54] mb-1">{{ member.name }}</h3>
            <p class="text-[#41808B] font-medium mb-4">{{ member.role }}</p>
            <p class="text-[#6B7B8A] mb-4">{{ member.description }}</p>
            <p class="text-[#6B7B8A] italic">"{{ member.quote }}"</p>
            <p class="text-sm text-[#86868B] mt-4">📍 {{ member.location }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FileMaker Developers -->
    <section class="py-20 md:py-32 bg-[#F5F5F7]">
      <div class="container-wide">
        <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] text-center mb-12">
          FileMaker Developers
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="member in fmDevelopers" :key="member.name" class="bg-white rounded-2xl p-6 border border-[#E8E8ED] text-center">
            <div class="w-20 h-20 rounded-full bg-[#41808B]/10 mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">👨‍💻</span>
            </div>
            <h3 class="text-xl font-semibold text-[#0D2C54] mb-1">{{ member.name }}</h3>
            <p class="text-[#41808B] text-sm font-medium mb-3">{{ member.role }}</p>
            <p class="text-[#6B7B8A] text-sm">{{ member.description }}</p>
            <p class="text-xs text-[#86868B] mt-3">📍 {{ member.location }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vue.js Developers -->
    <section class="py-20 md:py-32 bg-white border-t border-[#E8E8ED]">
      <div class="container-wide">
        <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] text-center mb-12">
          Vue.js Developers
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="member in vueDevelopers" :key="member.name" class="bg-white rounded-2xl p-6 border border-[#E8E8ED] text-center">
            <div class="w-20 h-20 rounded-full bg-[#7FB800]/10 mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">👨‍💻</span>
            </div>
            <h3 class="text-xl font-semibold text-[#0D2C54] mb-1">{{ member.name }}</h3>
            <p class="text-[#7FB800] text-sm font-medium mb-3">{{ member.role }}</p>
            <p class="text-[#6B7B8A] text-sm">{{ member.description }}</p>
            <p class="text-xs text-[#86868B] mt-3">📍 {{ member.location }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Extended Team -->
    <section class="py-20 md:py-32 bg-[#F5F5F7]">
      <div class="container-wide">
        <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] text-center mb-12">
          {{ locale === 'nl' ? 'Uitgebreid Team' : 'Extended Team' }}
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="member in otherTeam" :key="member.name" class="bg-white rounded-2xl p-6 border border-[#E8E8ED] text-center">
            <div class="w-20 h-20 rounded-full bg-[#FFB400]/10 mx-auto mb-4 flex items-center justify-center">
              <span class="text-3xl">{{ member.name === 'Team Vietnam' ? '👥' : '👨‍💻' }}</span>
            </div>
            <h3 class="text-xl font-semibold text-[#0D2C54] mb-1">{{ member.name }}</h3>
            <p class="text-[#FFB400] text-sm font-medium mb-3">{{ member.role }}</p>
            <p class="text-[#6B7B8A] text-sm">{{ member.description }}</p>
            <p class="text-xs text-[#86868B] mt-3">📍 {{ member.location }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Presence -->
    <section class="py-20 md:py-32 bg-[#0D2C54]">
      <div class="container-wide text-center">
        <h2 class="text-xl md:text-2xl font-semibold text-white mb-12">
          {{ locale === 'nl' ? 'Onze Wereldwijde Aanwezigheid' : 'Our Global Presence' }}
        </h2>
        <div class="flex flex-wrap justify-center gap-12">
          <div v-for="loc in locations" :key="loc.country" class="text-center">
            <div class="text-4xl mb-3">
              <span v-if="loc.flag === 'NL'">🇳🇱</span>
              <span v-if="loc.flag === 'IN'">🇮🇳</span>
              <span v-if="loc.flag === 'VN'">🇻🇳</span>
              <span v-if="loc.flag === 'NZ'">🇳🇿</span>
            </div>
            <p class="font-semibold text-white">{{ loc.country }}</p>
            <p class="text-[#41808B] text-sm">{{ loc.city }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
