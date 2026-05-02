// Department configuration and product mapping
export interface Department {
  id: string;
  name: string;
  nameNl: string;
  tagline: string;
  taglineNl: string;
  pain: string;
  painNl: string;
  solution: string;
  solutionNl: string;
  products: Product[];
  cta: string;
  ctaNl: string;
  colorVar: string; // CSS variable name for theme-aware color
  icon: string;
}

export interface Product {
  name: string;
  nameNl: string;
  description?: string;
  descriptionNl?: string;
}

export const departments: Department[] = [
  {
    id: 'operations',
    name: 'Operations',
    nameNl: 'Operaties',
    tagline: 'From handoffs to live flow control.',
    taglineNl: 'Van overdrachten naar live flow control.',
    pain: 'Disconnected steps create delays and blind spots.',
    painNl: 'Losse stappen creëren vertragingen en blinde vlekken.',
    solution: 'Loggix orchestrates workflows with one live operational view.',
    solutionNl: 'Loggix orkestreert workflows met één live operationeel overzicht.',
    products: [
      { name: 'Operations Cockpit', nameNl: 'Operations Cockpit' },
      { name: 'Workflow Automation', nameNl: 'Workflow Automatisering' },
      { name: 'Live Process Monitor', nameNl: 'Live Proces Monitor' },
    ],
    cta: 'Optimize Operations',
    ctaNl: 'Optimaliseer Operaties',
    colorVar: '--dept-operations',
    icon: 'cog',
  },
  {
    id: 'finance',
    name: 'Finance',
    nameNl: 'Financiën',
    tagline: 'Automated control from invoice to insight.',
    taglineNl: 'Geautomatiseerde controle van factuur tot inzicht.',
    pain: 'Manual routines slow decisions and increase error risk.',
    painNl: 'Handmatige routines vertragen beslissingen en verhogen foutrisico.',
    solution: 'Automate approvals, invoicing, KPI visibility.',
    solutionNl: 'Automatiseer goedkeuringen, facturatie en KPI-zichtbaarheid.',
    products: [
      { name: 'Invoice Automation', nameNl: 'Factuur Automatisering' },
      { name: 'Cost Control Dashboard', nameNl: 'Kostenbeheer Dashboard' },
      { name: 'Approval Workflow', nameNl: 'Goedkeurings Workflow' },
    ],
    cta: 'See Finance Use Cases',
    ctaNl: 'Bekijk Finance Cases',
    colorVar: '--dept-finance',
    icon: 'chart-bar',
  },
  {
    id: 'sales',
    name: 'Sales',
    nameNl: 'Sales',
    tagline: 'Faster from first lead to signed deal.',
    taglineNl: 'Sneller van eerste lead naar getekende deal.',
    pain: 'Lead/quote friction hurts conversion.',
    painNl: 'Lead/offerte frictie schaadt conversie.',
    solution: 'Structured flows and clearer handovers.',
    solutionNl: 'Gestructureerde flows en duidelijkere overdrachten.',
    products: [
      { name: 'Quote Accelerator', nameNl: 'Offerte Versneller' },
      { name: 'Pipeline Visibility', nameNl: 'Pipeline Inzicht' },
      { name: 'Lead Qualification Flow', nameNl: 'Lead Kwalificatie Flow' },
    ],
    cta: 'Accelerate Sales',
    ctaNl: 'Versnel Sales',
    colorVar: '--dept-sales',
    icon: 'trending-up',
  },
  {
    id: 'planning',
    name: 'Planning',
    nameNl: 'Planning',
    tagline: 'Capacity decisions with fewer surprises.',
    taglineNl: 'Capaciteitsbeslissingen met minder verrassingen.',
    pain: 'Static plans age quickly.',
    painNl: 'Statische plannen verouderen snel.',
    solution: 'Dynamic planning with scenarios/capacity clarity.',
    solutionNl: 'Dynamische planning met scenario\'s en capaciteitsduidelijkheid.',
    products: [
      { name: 'Capacity Planner', nameNl: 'Capaciteitsplanner' },
      { name: 'Scenario Forecasting', nameNl: 'Scenario Voorspelling' },
      { name: 'Cross-Team Scheduler', nameNl: 'Cross-Team Planner' },
    ],
    cta: 'Improve Planning',
    ctaNl: 'Verbeter Planning',
    colorVar: '--dept-planning',
    icon: 'calendar',
  },
  {
    id: 'production',
    name: 'Production',
    nameNl: 'Productie',
    tagline: 'Execution quality at every stage.',
    taglineNl: 'Uitvoeringskwaliteit in elke fase.',
    pain: 'Missing checkpoints harms delivery and quality.',
    painNl: 'Ontbrekende checkpoints schaden levering en kwaliteit.',
    solution: 'Track jobs, quality gates, exceptions in real time.',
    solutionNl: 'Volg taken, kwaliteitspoorten en uitzonderingen in real-time.',
    products: [
      { name: 'Production Tracker', nameNl: 'Productie Tracker' },
      { name: 'Quality Control Flow', nameNl: 'Kwaliteitscontrole Flow' },
      { name: 'Exception Alerting', nameNl: 'Uitzondering Alerts' },
    ],
    cta: 'Control Production',
    ctaNl: 'Beheers Productie',
    colorVar: '--dept-production',
    icon: 'cube',
  },
  {
    id: 'hr',
    name: 'HR',
    nameNl: 'HR',
    tagline: 'People processes without administrative drag.',
    taglineNl: 'People processes zonder administratieve rompslomp.',
    pain: 'Fragmented onboarding/requests create inconsistency.',
    painNl: 'Gefragmenteerde onboarding/verzoeken creëren inconsistentie.',
    solution: 'Standardized, automated employee workflows.',
    solutionNl: 'Gestandaardiseerde, geautomatiseerde medewerker workflows.',
    products: [
      { name: 'Onboarding Flow', nameNl: 'Onboarding Flow' },
      { name: 'HR Self-Service Portal', nameNl: 'HR Self-Service Portaal' },
      { name: 'Policy & Approval Tracking', nameNl: 'Beleid & Goedkeuring Tracking' },
    ],
    cta: 'Streamline HR',
    ctaNl: 'Stroomlijn HR',
    colorVar: '--dept-hr',
    icon: 'users',
  },
];

// Motion settings
export const motionSettings = {
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  revealStagger: 100, // ms between elements
  sectionDuration: 600, // ms for section transitions
};

export function useDepartments() {
  const { locale } = useI18n();

  const localizedDepartments = computed(() => {
    return departments.map(dept => ({
      ...dept,
      displayName: locale.value === 'nl' ? dept.nameNl : dept.name,
      displayTagline: locale.value === 'nl' ? dept.taglineNl : dept.tagline,
      displayPain: locale.value === 'nl' ? dept.painNl : dept.pain,
      displaySolution: locale.value === 'nl' ? dept.solutionNl : dept.solution,
      displayCta: locale.value === 'nl' ? dept.ctaNl : dept.cta,
      displayProducts: dept.products.map(p => ({
        ...p,
        displayName: locale.value === 'nl' ? p.nameNl : p.name,
      })),
    }));
  });

  return {
    departments: localizedDepartments,
    motionSettings,
  };
}
