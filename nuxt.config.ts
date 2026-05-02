export default defineNuxtConfig({
  // Enable SSR for SEO
  ssr: true,

  // Site URL for sitemap and canonical URLs
  site: {
    url: 'https://loggix.com',
  },

  // Modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
  ],

  // i18n configuration
  i18n: {
    locales: [
      { code: 'nl', language: 'nl-NL', file: 'nl.json', name: 'Nederlands' },
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
    ],
    defaultLocale: 'nl',
    strategy: 'prefix_except_default', // / = NL, /en/ = EN
    lazy: false,
    langDir: 'locales',
    bundle: {
      fullInstall: true,
      optimizeTranslationDirective: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
    },
  },

  // Sitemap configuration
  sitemap: {
    xsl: false,
    sitemaps: {
      pages: {
        include: [
          '/',
          '/web/',
          '/api-ai/',
          '/saas/',
          '/team/',
          '/blog/',
          '/privacy-policy/',
          '/en/',
          '/en/web/',
          '/en/api-ai/',
          '/en/saas/',
          '/en/team/',
          '/en/blog/',
        ],
      },
    },
  },

  // Content module for blog posts
  content: {
    documentDriven: false,
  },

  // App configuration
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#000000' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preload', as: 'image', href: '/videos/loggix-poster.jpg' },
      ],
    },
  },

  // Tailwind CSS with custom styles and animations
  css: [
    '~/assets/css/main.css',
    '~/assets/css/animations.css',
  ],

  // TypeScript
  typescript: {
    strict: true,
  },

  // Vercel deployment
  nitro: {
    preset: 'vercel',
  },

  compatibilityDate: '2024-12-01',
});
