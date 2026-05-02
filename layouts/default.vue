<script setup lang="ts">
// Default layout with header and footer
const { initTheme } = useTheme();

// Initialize theme on client
onMounted(() => {
  initTheme();
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background-primary theme-transition">
    <AppHeader />

    <main class="flex-1 pt-20">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
