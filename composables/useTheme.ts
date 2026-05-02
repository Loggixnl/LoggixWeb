// Theme management composable with localStorage persistence
export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'loggix-theme';

export function useTheme() {
  const colorMode = useState<Theme>('color-mode', () => 'light');
  const isClient = import.meta.client;

  // Initialize theme from localStorage or system preference
  const initTheme = () => {
    if (!isClient) return;

    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored && (stored === 'light' || stored === 'dark')) {
      colorMode.value = stored;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      colorMode.value = 'dark';
    }
    applyTheme(colorMode.value);
  };

  // Apply theme to document
  const applyTheme = (theme: Theme) => {
    if (!isClient) return;

    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  // Toggle between light and dark
  const toggleTheme = () => {
    const newTheme: Theme = colorMode.value === 'light' ? 'dark' : 'light';
    colorMode.value = newTheme;

    if (isClient) {
      localStorage.setItem(STORAGE_KEY, newTheme);
      applyTheme(newTheme);
    }
  };

  // Set specific theme
  const setTheme = (theme: Theme) => {
    colorMode.value = theme;

    if (isClient) {
      localStorage.setItem(STORAGE_KEY, theme);
      applyTheme(theme);
    }
  };

  // Computed helpers
  const isDark = computed(() => colorMode.value === 'dark');
  const isLight = computed(() => colorMode.value === 'light');

  // Listen to system preference changes
  const watchSystemPreference = () => {
    if (!isClient) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      // Only auto-switch if user hasn't manually set preference
      if (!localStorage.getItem(STORAGE_KEY)) {
        const newTheme: Theme = e.matches ? 'dark' : 'light';
        colorMode.value = newTheme;
        applyTheme(newTheme);
      }
    });
  };

  // Initialize on client
  onMounted(() => {
    initTheme();
    watchSystemPreference();
  });

  return {
    theme: colorMode,
    isDark,
    isLight,
    toggleTheme,
    setTheme,
    initTheme,
  };
}
