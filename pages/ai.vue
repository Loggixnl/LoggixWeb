<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: locale.value === 'nl' ? 'AI Integraties - Loggix' : 'AI Integrations - Loggix',
  description: locale.value === 'nl'
    ? 'Integreer AI in uw bedrijfsprocessen: ChatGPT, Claude, automatische analyses en slimme workflows.'
    : 'Integrate AI into your business processes: ChatGPT, Claude, automatic analyses and smart workflows.',
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

const projects = computed(() => locale.value === 'nl' ? [
  {
    subtitle: 'AI Assistent',
    title: 'Slimme Klantenservice Bot',
    description: 'AI-gestuurde chatbot die klanten helpt met veelgestelde vragen, orders tracken en afspraken plannen. Geïntegreerd met uw FileMaker CRM.',
    features: [
      'Natuurlijke taalverwerking in NL en EN',
      'Directe toegang tot klantgegevens',
      'Automatische escalatie naar medewerkers',
      '24/7 beschikbaar zonder extra personeel',
    ],
  },
  {
    subtitle: 'Document AI',
    title: 'Automatische Factuurverwerking',
    description: 'AI die inkomende facturen leest, categoriseert en automatisch verwerkt in uw boekhouding. Van PDF naar gestructureerde data in seconden.',
    features: [
      'OCR + AI voor nauwkeurige extractie',
      'Automatische leveranciersherkenning',
      'Integratie met exact, Twinfield, etc.',
      'Lerende algoritmes - wordt steeds beter',
    ],
  },
  {
    subtitle: 'Predictive Analytics',
    title: 'Voorspellende Analyses',
    description: 'AI-modellen die patronen herkennen in uw data: voorspel verkopen, identificeer risico\'s en optimaliseer voorraad automatisch.',
    features: [
      'Verkoopvoorspellingen per product/klant',
      'Churn preventie - identificeer risico klanten',
      'Voorraadoptimalisatie',
      'Custom dashboards met inzichten',
    ],
  },
] : [
  {
    subtitle: 'AI Assistant',
    title: 'Smart Customer Service Bot',
    description: 'AI-powered chatbot that helps customers with FAQs, order tracking and appointment scheduling. Integrated with your FileMaker CRM.',
    features: [
      'Natural language processing in multiple languages',
      'Direct access to customer data',
      'Automatic escalation to staff',
      '24/7 available without extra personnel',
    ],
  },
  {
    subtitle: 'Document AI',
    title: 'Automatic Invoice Processing',
    description: 'AI that reads incoming invoices, categorizes them and automatically processes them in your accounting. From PDF to structured data in seconds.',
    features: [
      'OCR + AI for accurate extraction',
      'Automatic supplier recognition',
      'Integration with accounting software',
      'Learning algorithms - keeps improving',
    ],
  },
  {
    subtitle: 'Predictive Analytics',
    title: 'Predictive Analysis',
    description: 'AI models that recognize patterns in your data: predict sales, identify risks and optimize inventory automatically.',
    features: [
      'Sales predictions per product/customer',
      'Churn prevention - identify at-risk customers',
      'Inventory optimization',
      'Custom dashboards with insights',
    ],
  },
]);

const aiCapabilities = [
  { icon: 'chatbot', label: 'Chatbots', labelNl: 'Chatbots' },
  { icon: 'document', label: 'Document AI', labelNl: 'Document AI' },
  { icon: 'chart', label: 'Predictive', labelNl: 'Predictive' },
  { icon: 'bolt', label: 'Automation', labelNl: 'Automatisering' },
];
</script>

<template>
  <div>
    <!-- Hero Section with Green Gradient -->
    <section class="pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-b from-[#8AA399]/20 via-[#8AA399]/10 to-[#F5F5F7]">
      <div class="container-wide">
        <div class="text-center max-w-4xl mx-auto">
          <!-- AI Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8ED] rounded-full text-sm text-[#6B7B8A] mb-8">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7FB800] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-[#7FB800]"></span>
            </span>
            {{ locale === 'nl' ? 'Powered by GPT-4, Claude & meer' : 'Powered by GPT-4, Claude & more' }}
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0D2C54] mb-6">
            {{ locale === 'nl' ? 'AI Integraties voor uw Bedrijf' : 'AI Integrations for your Business' }}
          </h1>

          <p class="text-lg text-[#41808B] mb-8 max-w-3xl mx-auto leading-relaxed">
            {{ locale === 'nl'
              ? 'Wij integreren de nieuwste AI technologie in uw bestaande systemen. Automatiseer documenten, krijg voorspellende inzichten en transformeer uw klantenservice met slimme chatbots.'
              : 'We integrate the latest AI technology into your existing systems. Automate documents, gain predictive insights and transform your customer service with smart chatbots.'
            }}
          </p>

          <!-- AI capabilities -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            <div v-for="cap in aiCapabilities" :key="cap.icon" class="bg-white rounded-xl p-4 border border-[#E8E8ED]">
              <div class="w-10 h-10 rounded-lg bg-[#F5F5F7] flex items-center justify-center mx-auto mb-2">
                <svg v-if="cap.icon === 'chatbot'" class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <svg v-if="cap.icon === 'document'" class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <svg v-if="cap.icon === 'chart'" class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <svg v-if="cap.icon === 'bolt'" class="w-5 h-5 text-[#41808B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div class="text-sm text-[#6B7B8A]">{{ locale === 'nl' ? cap.labelNl : cap.label }}</div>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-4">
            <a href="#examples" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
              {{ locale === 'nl' ? 'Bekijk mogelijkheden' : 'View possibilities' }}
            </a>
            <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 text-[#41808B] font-medium hover:underline">
              {{ t('common.contactUs') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Partners/Tech -->
    <section class="py-12 bg-white border-b border-[#E8E8ED]">
      <div class="container-wide">
        <p class="text-center text-sm text-[#6B7B8A] mb-6 uppercase tracking-wider">
          {{ locale === 'nl' ? 'Technologieën die we gebruiken' : 'Technologies we use' }}
        </p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <span class="text-2xl font-bold text-[#E8E8ED]">OpenAI</span>
          <span class="text-2xl font-bold text-[#E8E8ED]">Claude</span>
          <span class="text-2xl font-bold text-[#E8E8ED]">Azure AI</span>
          <span class="text-2xl font-bold text-[#E8E8ED]">Google AI</span>
        </div>
      </div>
    </section>

    <!-- Examples -->
    <section id="examples" ref="sectionRef" class="py-20 md:py-32 bg-white">
      <div class="container-wide">
        <div class="text-center mb-16" :class="{ 'animate-fade-in-up': isVisible }">
          <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] mb-2">
            {{ locale === 'nl' ? 'AI Toepassingen' : 'AI Applications' }}
          </h2>
          <p class="text-sm text-[#6B7B8A]">
            {{ locale === 'nl'
              ? 'Concrete voorbeelden van hoe AI uw bedrijf kan transformeren.'
              : 'Concrete examples of how AI can transform your business.'
            }}
          </p>
        </div>

        <div class="space-y-20">
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="grid md:grid-cols-2 gap-12 items-center"
            :class="{ 'animate-fade-in-up': isVisible }"
            :style="isVisible ? { animationDelay: `${(index + 1) * 100}ms` } : {}"
          >
            <!-- Image Placeholder -->
            <div :class="index % 2 === 1 ? 'md:order-2' : 'md:order-1'">
              <div class="aspect-[4/3] bg-[#F5F5F7] rounded-2xl flex items-center justify-center border border-[#E8E8ED]">
                <span class="text-[#86868B]">Image</span>
              </div>
            </div>

            <!-- Content -->
            <div :class="index % 2 === 1 ? 'md:order-1' : 'md:order-2'">
              <span class="text-sm uppercase tracking-wider text-[#6B7B8A] font-medium mb-2 block">
                {{ project.subtitle }}
              </span>
              <h3 class="text-2xl font-semibold text-[#0D2C54] mb-4">{{ project.title }}</h3>
              <p class="text-[#41808B] mb-6 leading-relaxed">{{ project.description }}</p>

              <ul class="space-y-2 mb-6">
                <li v-for="feature in project.features" :key="feature" class="flex items-start gap-2 text-[#6B7B8A]">
                  <svg class="w-5 h-5 text-[#7FB800] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-sm">{{ feature }}</span>
                </li>
              </ul>

              <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 text-[#41808B] font-medium hover:underline">
                {{ locale === 'nl' ? 'Meer informatie' : 'Learn more' }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32 bg-[#0D2C54]">
      <div class="container-wide text-center">
        <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6">
          {{ locale === 'nl' ? 'Klaar voor AI in uw organisatie?' : 'Ready for AI in your organization?' }}
        </h2>
        <p class="text-[#41808B] text-lg mb-8 max-w-2xl mx-auto">
          {{ locale === 'nl'
            ? 'Laten we samen ontdekken welke AI mogelijkheden het beste passen bij uw bedrijf.'
            : 'Let\'s discover together which AI possibilities best fit your business.'
          }}
        </p>
        <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
          {{ t('common.contactUs') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
