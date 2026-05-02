<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: locale.value === 'nl' ? 'FileMaker Development - Loggix' : 'FileMaker Development - Loggix',
  description: locale.value === 'nl'
    ? 'Professionele FileMaker development: maatwerk databases, integraties en web apps. Claris Partner met 30+ jaar ervaring.'
    : 'Professional FileMaker development: custom databases, integrations and web apps. Claris Partner with 30+ years experience.',
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
    subtitle: 'ERP Systeem',
    title: 'WorkplaceOS Framework',
    description: 'Ons modulaire ERP framework gebouwd op FileMaker. Volledig aanpasbaar met kant-en-klare modules voor CRM, offertes, facturatie, HR en meer.',
    features: [
      'Modulaire architectuur - gebruik alleen wat u nodig heeft',
      'Volledige aanpasbaarheid aan uw werkprocessen',
      'Integratie met externe systemen via API\'s',
      'Multi-user en multi-locatie ondersteuning',
    ],
  },
  {
    subtitle: 'Klantproject',
    title: 'Mediabedrijf Workflow',
    description: 'Complete workflow oplossing voor een mediabedrijf: van projectplanning tot facturatie, inclusief resource management en rapportages.',
    features: [
      'Projectplanning met resource allocatie',
      'Urenregistratie en kostenbeheer',
      'Automatische facturatie',
      'Management dashboards',
    ],
  },
  {
    subtitle: 'Integratie',
    title: 'FileMaker + Web Portal',
    description: 'FileMaker database gekoppeld aan een klantportaal. Klanten kunnen online orders plaatsen, status bekijken en facturen downloaden.',
    features: [
      'Realtime data synchronisatie',
      'Veilige klant login',
      'Online orderverwerking',
      'Automatische notificaties',
    ],
  },
] : [
  {
    subtitle: 'ERP System',
    title: 'WorkplaceOS Framework',
    description: 'Our modular ERP framework built on FileMaker. Fully customizable with ready-to-use modules for CRM, quotes, invoicing, HR and more.',
    features: [
      'Modular architecture - use only what you need',
      'Full customization to your workflows',
      'Integration with external systems via APIs',
      'Multi-user and multi-location support',
    ],
  },
  {
    subtitle: 'Client Project',
    title: 'Media Company Workflow',
    description: 'Complete workflow solution for a media company: from project planning to invoicing, including resource management and reporting.',
    features: [
      'Project planning with resource allocation',
      'Time tracking and cost management',
      'Automatic invoicing',
      'Management dashboards',
    ],
  },
  {
    subtitle: 'Integration',
    title: 'FileMaker + Web Portal',
    description: 'FileMaker database connected to a customer portal. Customers can place orders online, view status and download invoices.',
    features: [
      'Real-time data synchronization',
      'Secure customer login',
      'Online order processing',
      'Automatic notifications',
    ],
  },
]);
</script>

<template>
  <div>
    <!-- Hero Section with Teal Gradient -->
    <section class="pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-b from-[#d5e1eb] via-[#e8eff4] to-[#F5F5F7]">
      <div class="container-wide">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Partner Badge -->
          <div class="flex justify-center mb-8">
            <div class="bg-white rounded-xl px-6 py-3 border border-[#E8E8ED]">
              <img src="/images/claris-partner-badge.svg" alt="Claris FileMaker Partner" class="h-12 opacity-70" />
            </div>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0D2C54] mb-6">
            {{ locale === 'nl' ? 'FileMaker Development' : 'FileMaker Development' }}
          </h1>

          <p class="text-lg text-[#41808B] mb-8 max-w-3xl mx-auto leading-relaxed">
            {{ locale === 'nl'
              ? 'Al meer dan 30 jaar bouwen wij perfect passend maatwerk met het FileMaker platform. Van eenvoudige databases tot complete ERP-systemen die meegroeien met uw bedrijf.'
              : 'For over 30 years we build perfectly fitting custom solutions with the FileMaker platform. From simple databases to complete ERP systems that grow with your business.'
            }}
          </p>

          <!-- Key benefits -->
          <div class="flex flex-wrap justify-center gap-6 mb-10">
            <div class="flex items-center gap-2 text-[#6B7B8A]">
              <svg class="w-5 h-5 text-[#7FB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ locale === 'nl' ? 'Snel & betaalbaar' : 'Fast & affordable' }}</span>
            </div>
            <div class="flex items-center gap-2 text-[#6B7B8A]">
              <svg class="w-5 h-5 text-[#7FB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ locale === 'nl' ? 'Cross-platform' : 'Cross-platform' }}</span>
            </div>
            <div class="flex items-center gap-2 text-[#6B7B8A]">
              <svg class="w-5 h-5 text-[#7FB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ locale === 'nl' ? 'Schaalbaar' : 'Scalable' }}</span>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-4">
            <a href="#projects" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
              {{ locale === 'nl' ? 'Bekijk voorbeelden' : 'View examples' }}
            </a>
            <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 text-[#41808B] font-medium hover:underline">
              {{ t('common.contactUs') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Benefits -->
    <section class="py-12 bg-white border-b border-[#E8E8ED]">
      <div class="container-wide">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold text-[#41808B] mb-1">30+</div>
            <div class="text-[#6B7B8A] text-sm">{{ locale === 'nl' ? 'Jaar ervaring' : 'Years experience' }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-[#41808B] mb-1">100+</div>
            <div class="text-[#6B7B8A] text-sm">{{ locale === 'nl' ? 'Projecten' : 'Projects' }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-[#41808B] mb-1">40+</div>
            <div class="text-[#6B7B8A] text-sm">{{ locale === 'nl' ? 'API Connectoren' : 'API Connectors' }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-[#41808B] mb-1">24/7</div>
            <div class="text-[#6B7B8A] text-sm">{{ locale === 'nl' ? 'Ondersteuning' : 'Support' }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects / Examples -->
    <section id="projects" ref="sectionRef" class="py-20 md:py-32 bg-white">
      <div class="container-wide">
        <div class="text-center mb-16" :class="{ 'animate-fade-in-up': isVisible }">
          <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] mb-2">
            {{ locale === 'nl' ? 'Voorbeelden van ons werk' : 'Examples of our work' }}
          </h2>
          <p class="text-sm text-[#6B7B8A]">
            {{ locale === 'nl'
              ? 'Ontdek hoe wij FileMaker inzetten voor verschillende bedrijven en branches.'
              : 'Discover how we use FileMaker for various businesses and industries.'
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
                {{ locale === 'nl' ? 'Vergelijkbaar project?' : 'Similar project?' }}
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
          {{ locale === 'nl' ? 'Klaar om uw FileMaker project te starten?' : 'Ready to start your FileMaker project?' }}
        </h2>
        <p class="text-[#41808B] text-lg mb-8 max-w-2xl mx-auto">
          {{ locale === 'nl'
            ? 'Neem contact op voor een vrijblijvend gesprek over uw wensen en mogelijkheden.'
            : 'Contact us for a no-obligation conversation about your needs and possibilities.'
          }}
        </p>
        <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
          {{ t('common.contactUs') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
