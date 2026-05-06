<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t('pages.privacy.title'),
  description: () => t('pages.privacy.description'),
});
</script>

<template>
  <div class="section">
    <div class="container-narrow">
      <h1 class="text-gray-900 mb-8">{{ t('pages.privacy.headline') }}</h1>

      <div class="prose prose-lg max-w-none">
        <p class="text-gray-600">
          {{ t('pages.privacy.intro') }}
        </p>

        <!-- Add privacy policy content here -->
        <h2>{{ t('pages.privacy.dataCollectionTitle') }}</h2>
        <p class="text-gray-600">
          {{ t('pages.privacy.dataCollectionText') }}
        </p>

        <h2>Contact</h2>
        <p class="text-gray-600">
          Loggix BV<br>
          Utrecht, Netherlands<br>
          <a href="tel:+31854872106">+31.(0)85.487.2106</a>
        </p>
      </div>
    </div>
  </div>
</template>
