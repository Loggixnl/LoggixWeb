import type { Config } from 'tailwindcss';

export default <Config>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme foundation
        background: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          elevated: 'var(--bg-elevated)',
        },
        foreground: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        // Accent color (theme-aware)
        accent: {
          DEFAULT: 'var(--accent)',
          glow: 'var(--accent-glow)',
        },
        // Brand colors
        brand: {
          primary: 'var(--color-primary)',
          warning: 'var(--color-warning)',
          attention: 'var(--color-attention)',
          action: 'var(--color-action)',
          support: 'var(--color-support)',
        },
        // Static brand colors
        loggix: {
          teal: '#41808B',
          orange: '#F6511D',
          yellow: '#FFB400',
          green: '#7FB800',
          navy: '#0D2C54',
        },
      },
      fontFamily: {
        // Montserrat for headings/display
        display: [
          'Montserrat',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
        // Montserrat for headings
        montserrat: [
          'Montserrat',
          'sans-serif',
        ],
        // Open Sans for body text
        sans: [
          'Open Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
        // Open Sans alias
        opensans: [
          'Open Sans',
          'sans-serif',
        ],
        mono: ['SF Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],
        'label': ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '500' }],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 40px var(--accent-glow)',
        'glow-lg': '0 0 80px var(--accent-glow)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'draw-line': 'drawLine 1s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'grid-fade': 'gridFade 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        counter: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        gridFade: {
          '0%, 100%': { opacity: '0.03' },
          '50%': { opacity: '0.06' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
