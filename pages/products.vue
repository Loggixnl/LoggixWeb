<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: locale.value === 'nl' ? 'Producten - Loggix' : 'Products - Loggix',
  description: locale.value === 'nl'
    ? 'Onze software producten: WorkplaceOS ERP framework, API connectoren en kant-en-klare modules.'
    : 'Our software products: WorkplaceOS ERP framework, API connectors and ready-to-use modules.',
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

const products = computed(() => locale.value === 'nl' ? [
  {
    subtitle: 'ERP Framework',
    title: 'WorkplaceOS',
    description: 'Ons complete ERP framework gebouwd op FileMaker. Een modulair systeem dat meegroeit met uw bedrijf. Start klein en breid uit wanneer nodig.',
    features: [
      'CRM, Offertes, Facturatie, HR modules',
      'Volledig aanpasbaar aan uw processen',
      'Multi-user, multi-locatie ondersteuning',
      'Web portal en mobiele app ready',
    ],
  },
  {
    subtitle: 'Integratie Platform',
    title: 'API Connector Suite',
    description: 'Meer dan 40 kant-en-klare API connectoren om uw FileMaker te verbinden met populaire diensten: Exact, Mollie, SendGrid, Mailchimp en meer.',
    features: [
      '40+ voorgebouwde connectoren',
      'Twee-weg synchronisatie',
      'Foutafhandeling en logging',
      'Custom connectoren op aanvraag',
    ],
  },
  {
    subtitle: 'Web Toolset',
    title: 'FMBetterForms Templates',
    description: 'Startklare web templates voor FMBetterForms. Van klantportalen tot interne dashboards - begin niet vanaf nul.',
    features: [
      'Responsive design templates',
      'Authenticatie en autorisatie',
      'Dashboard componenten',
      'E-commerce bouwstenen',
    ],
  },
  {
    subtitle: 'Standalone Product',
    title: 'FactuurSimple',
    description: 'Eenvoudige facturatie software voor ZZP\'ers en kleine bedrijven. Geen gedoe, gewoon facturen maken en versturen.',
    features: [
      'Professionele facturen in minuten',
      'Automatische betalingsherinneringen',
      'BTW aangifte overzichten',
      'Koppeling met bank',
    ],
  },
] : [
  {
    subtitle: 'ERP Framework',
    title: 'WorkplaceOS',
    description: 'Our complete ERP framework built on FileMaker. A modular system that grows with your business. Start small and expand when needed.',
    features: [
      'CRM, Quotes, Invoicing, HR modules',
      'Fully customizable to your processes',
      'Multi-user, multi-location support',
      'Web portal and mobile app ready',
    ],
  },
  {
    subtitle: 'Integration Platform',
    title: 'API Connector Suite',
    description: 'Over 40 ready-made API connectors to connect your FileMaker to popular services: Exact, Mollie, SendGrid, Mailchimp and more.',
    features: [
      '40+ pre-built connectors',
      'Two-way synchronization',
      'Error handling and logging',
      'Custom connectors on request',
    ],
  },
  {
    subtitle: 'Web Toolset',
    title: 'FMBetterForms Templates',
    description: 'Ready-to-use web templates for FMBetterForms. From customer portals to internal dashboards - don\'t start from scratch.',
    features: [
      'Responsive design templates',
      'Authentication and authorization',
      'Dashboard components',
      'E-commerce building blocks',
    ],
  },
  {
    subtitle: 'Standalone Product',
    title: 'InvoiceSimple',
    description: 'Simple invoicing software for freelancers and small businesses. No hassle, just create and send invoices.',
    features: [
      'Professional invoices in minutes',
      'Automatic payment reminders',
      'Tax report overviews',
      'Bank connection',
    ],
  },
]);
</script>

<template>
  <div>
    <!-- Hero Section with Blue Gradient -->
    <section class="pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-b from-[#d5e1eb] via-[#e8eff4] to-[#F5F5F7]">
      <div class="container-wide">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8ED] rounded-full text-sm text-[#6B7B8A] mb-8">
            <span class="w-2 h-2 bg-[#7FB800] rounded-full"></span>
            {{ locale === 'nl' ? 'Kant-en-klare oplossingen' : 'Ready-made solutions' }}
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0D2C54] mb-6">
            {{ locale === 'nl' ? 'Software Producten' : 'Software Products' }}
          </h1>

          <p class="text-lg text-[#41808B] mb-8 max-w-3xl mx-auto leading-relaxed">
            {{ locale === 'nl'
              ? 'Naast maatwerk ontwikkelen we eigen software producten. Modulaire ERP-systemen, API connectoren en web templates die direct waarde toevoegen aan uw bedrijf.'
              : 'Besides custom development, we create our own software products. Modular ERP systems, API connectors and web templates that immediately add value to your business.'
            }}
          </p>

          <!-- Quick stats -->
          <div class="grid grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div class="bg-white rounded-xl p-4 border border-[#E8E8ED]">
              <div class="text-3xl font-bold text-[#41808B] mb-1">4+</div>
              <div class="text-sm text-[#6B7B8A]">{{ locale === 'nl' ? 'Producten' : 'Products' }}</div>
            </div>
            <div class="bg-white rounded-xl p-4 border border-[#E8E8ED]">
              <div class="text-3xl font-bold text-[#41808B] mb-1">40+</div>
              <div class="text-sm text-[#6B7B8A]">{{ locale === 'nl' ? 'API Connectoren' : 'API Connectors' }}</div>
            </div>
            <div class="bg-white rounded-xl p-4 border border-[#E8E8ED]">
              <div class="text-3xl font-bold text-[#41808B] mb-1">99.9%</div>
              <div class="text-sm text-[#6B7B8A]">Uptime</div>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-4">
            <a href="#products" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
              {{ locale === 'nl' ? 'Bekijk producten' : 'View products' }}
            </a>
            <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 text-[#41808B] font-medium hover:underline">
              {{ t('common.contactUs') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section id="products" ref="sectionRef" class="py-20 md:py-32 bg-white">
      <div class="container-wide">
        <div class="space-y-20">
          <div
            v-for="(product, index) in products"
            :key="product.title"
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
                {{ product.subtitle }}
              </span>
              <h3 class="text-2xl font-semibold text-[#0D2C54] mb-4">{{ product.title }}</h3>
              <p class="text-[#41808B] mb-6 leading-relaxed">{{ product.description }}</p>

              <ul class="space-y-2 mb-6">
                <li v-for="feature in product.features" :key="feature" class="flex items-start gap-2 text-[#6B7B8A]">
                  <svg class="w-5 h-5 text-[#7FB800] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-sm">{{ feature }}</span>
                </li>
              </ul>

              <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 text-[#41808B] font-medium hover:underline">
                {{ locale === 'nl' ? 'Vraag demo aan' : 'Request demo' }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Teaser -->
    <section class="py-20 md:py-32 bg-[#F5F5F7]">
      <div class="container-wide">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-xl md:text-2xl font-semibold text-[#0D2C54] mb-6">
            {{ locale === 'nl' ? 'Flexibele Prijzen' : 'Flexible Pricing' }}
          </h2>
          <p class="text-[#41808B] mb-8 leading-relaxed">
            {{ locale === 'nl'
              ? 'Onze producten zijn beschikbaar als licentie, SaaS of als onderdeel van een maatwerk project. We denken graag mee over de beste oplossing voor uw situatie.'
              : 'Our products are available as license, SaaS or as part of a custom project. We\'re happy to help find the best solution for your situation.'
            }}
          </p>
          <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
            {{ locale === 'nl' ? 'Vraag prijzen aan' : 'Request pricing' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32 bg-[#0D2C54]">
      <div class="container-wide text-center">
        <h2 class="text-3xl md:text-4xl font-semibold text-white mb-6">
          {{ locale === 'nl' ? 'Interesse in een van onze producten?' : 'Interested in one of our products?' }}
        </h2>
        <p class="text-[#41808B] text-lg mb-8 max-w-2xl mx-auto">
          {{ locale === 'nl'
            ? 'Vraag een demo aan of neem contact op voor meer informatie.'
            : 'Request a demo or contact us for more information.'
          }}
        </p>
        <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center gap-2 px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078] transition-colors">
          {{ t('common.contactUs') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
