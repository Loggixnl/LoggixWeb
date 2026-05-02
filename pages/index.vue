<script setup lang="ts">
const { t, locale } = useI18n();

useHead({
  title: t('home.title'),
  meta: [
    { name: 'description', content: t('home.description') },
  ],
});

useSeoMeta({
  title: () => t('home.title'),
  description: () => t('home.description'),
  ogTitle: () => t('home.title'),
  ogDescription: () => t('home.description'),
});

// Solution sections data
const solutions = [
  {
    id: 'database-solutions',
    title: 'Database Solutions',
    titleNl: 'Database Oplossingen',
    subtitle: 'Based on FileMaker, Supabase or Elastic',
    subtitleNl: 'Gebaseerd op FileMaker, Supabase of Elastic',
    description: 'We build robust database solutions that scale with your business. From simple data management to complex enterprise systems, our custom databases integrate seamlessly with your existing workflows.',
    descriptionNl: 'We bouwen robuuste database oplossingen die meegroeien met uw bedrijf. Van eenvoudig databeheer tot complexe enterprise systemen, onze databases integreren naadloos met uw bestaande workflows.',
    link: '/filemaker',
    examples: [
      {
        title: 'CRM Systems',
        titleNl: 'CRM Systemen',
        description: 'Customer relationship management',
        descriptionNl: 'Klantrelatiebeheer',
      },
      {
        title: 'ERP Solutions',
        titleNl: 'ERP Oplossingen',
        description: 'Enterprise resource planning',
        descriptionNl: 'Bedrijfsresource planning',
      },
      {
        title: 'Data Warehouses',
        titleNl: 'Data Warehouses',
        description: 'Centralized data storage',
        descriptionNl: 'Gecentraliseerde data opslag',
      },
      {
        title: 'API Integrations',
        titleNl: 'API Integraties',
        description: 'Connect your systems',
        descriptionNl: 'Verbind uw systemen',
      },
    ],
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    titleNl: 'AI Oplossingen',
    subtitle: 'RAG solutions, Lead generation and Voice agents',
    subtitleNl: 'RAG oplossingen, Lead generatie en Voice agents',
    description: 'Leverage artificial intelligence to automate processes, generate insights, and create intelligent interactions. Our AI solutions are practical, scalable, and designed for real business impact.',
    descriptionNl: 'Benut kunstmatige intelligentie om processen te automatiseren, inzichten te genereren en intelligente interacties te creëren. Onze AI-oplossingen zijn praktisch, schaalbaar en ontworpen voor echte bedrijfsimpact.',
    link: '/ai',
    examples: [
      {
        title: 'RAG Systems',
        titleNl: 'RAG Systemen',
        description: 'AI-powered knowledge bases',
        descriptionNl: 'AI-gestuurde kennisbanken',
      },
      {
        title: 'Lead Generation',
        titleNl: 'Lead Generatie',
        description: 'Automated lead qualification',
        descriptionNl: 'Geautomatiseerde lead kwalificatie',
      },
      {
        title: 'Voice Agents',
        titleNl: 'Voice Agents',
        description: 'AI phone assistants',
        descriptionNl: 'AI telefoon assistenten',
      },
      {
        title: 'Chatbots',
        titleNl: 'Chatbots',
        description: 'Intelligent conversations',
        descriptionNl: 'Intelligente gesprekken',
      },
    ],
  },
  {
    id: 'products',
    title: 'Products',
    titleNl: 'Producten',
    subtitle: 'Ready-to-use software solutions',
    subtitleNl: 'Kant-en-klare software oplossingen',
    description: 'Our product portfolio includes ready-to-deploy solutions that can be customized to your specific needs. Get started quickly with proven software that has been refined through years of development.',
    descriptionNl: 'Ons productportfolio bevat kant-en-klare oplossingen die kunnen worden aangepast aan uw specifieke behoeften. Begin snel met bewezen software die door jaren van ontwikkeling is verfijnd.',
    link: '/products',
    examples: [
      {
        title: 'Loggix CRM',
        titleNl: 'Loggix CRM',
        description: 'Complete customer management',
        descriptionNl: 'Compleet klantbeheer',
      },
      {
        title: 'Project Tracker',
        titleNl: 'Project Tracker',
        description: 'Manage projects efficiently',
        descriptionNl: 'Beheer projecten efficiënt',
      },
      {
        title: 'Invoice Pro',
        titleNl: 'Invoice Pro',
        description: 'Automated invoicing',
        descriptionNl: 'Geautomatiseerde facturatie',
      },
      {
        title: 'Stock Manager',
        titleNl: 'Stock Manager',
        description: 'Inventory control',
        descriptionNl: 'Voorraadbeheer',
      },
    ],
  },
  {
    id: 'blog',
    title: 'Blog & Insights',
    titleNl: 'Blog & Inzichten',
    subtitle: 'Knowledge sharing and industry trends',
    subtitleNl: 'Kennisdeling en branche trends',
    description: 'Stay informed with our latest articles on software development, FileMaker tips, AI innovations, and business automation. We share our expertise to help you make better technology decisions.',
    descriptionNl: 'Blijf op de hoogte met onze nieuwste artikelen over softwareontwikkeling, FileMaker tips, AI innovaties en bedrijfsautomatisering. We delen onze expertise om u te helpen betere technologiekeuzes te maken.',
    link: '/blog',
    examples: [
      {
        title: 'Tech Articles',
        titleNl: 'Tech Artikelen',
        description: 'Development insights',
        descriptionNl: 'Ontwikkelingsinzichten',
      },
      {
        title: 'Case Studies',
        titleNl: 'Case Studies',
        description: 'Real project stories',
        descriptionNl: 'Echte projectverhalen',
      },
      {
        title: 'Tutorials',
        titleNl: 'Tutorials',
        description: 'Step-by-step guides',
        descriptionNl: 'Stapsgewijze handleidingen',
      },
      {
        title: 'News',
        titleNl: 'Nieuws',
        description: 'Company updates',
        descriptionNl: 'Bedrijfsupdates',
      },
    ],
  },
  {
    id: 'team',
    title: 'Our Team',
    titleNl: 'Ons Team',
    subtitle: 'Expert developers and consultants',
    subtitleNl: 'Expert ontwikkelaars en consultants',
    description: 'Our team consists of experienced developers, consultants and project managers spread across the Netherlands, India, Vietnam and New Zealand. Together we bring over 30 years of software development expertise.',
    descriptionNl: 'Ons team bestaat uit ervaren ontwikkelaars, consultants en projectmanagers verspreid over Nederland, India, Vietnam en Nieuw-Zeeland. Samen brengen we meer dan 30 jaar softwareontwikkeling expertise.',
    link: '/team',
    examples: [
      {
        title: 'Developers',
        titleNl: 'Ontwikkelaars',
        description: 'Full-stack expertise',
        descriptionNl: 'Full-stack expertise',
      },
      {
        title: 'Consultants',
        titleNl: 'Consultants',
        description: 'Business analysis',
        descriptionNl: 'Business analyse',
      },
      {
        title: 'Support',
        titleNl: 'Support',
        description: '24/7 availability',
        descriptionNl: '24/7 beschikbaarheid',
      },
      {
        title: 'Management',
        titleNl: 'Management',
        description: 'Project leadership',
        descriptionNl: 'Project leiderschap',
      },
    ],
  },
];
</script>

<template>
  <div>
    <!-- Hero Section (includes Client Logos) -->
    <HeroSection />

    <!-- Solution Sections -->
    <div id="solutions">
      <SolutionSection
        v-for="(solution, index) in solutions"
        :key="solution.id"
        :solution="solution"
        :reversed="index % 2 === 1"
      />
    </div>

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>
