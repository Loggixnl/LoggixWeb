<script setup lang="ts">
const { locale } = useI18n();

useSeoMeta({
  title: 'Privacy Policy - Loggix',
  description: 'Loggix privacy policy',
});
</script>

<template>
  <div class="section">
    <div class="container-narrow">
      <h1 class="text-gray-900 mb-8">Privacy Policy</h1>

      <div class="prose prose-lg max-w-none">
        <p class="text-gray-600">
          {{ locale === 'nl'
            ? 'Deze pagina bevat het privacybeleid van Loggix BV.'
            : 'This page contains the privacy policy of Loggix BV.'
          }}
        </p>

        <!-- Add privacy policy content here -->
        <h2>{{ locale === 'nl' ? 'Gegevensverzameling' : 'Data Collection' }}</h2>
        <p class="text-gray-600">
          {{ locale === 'nl'
            ? 'We verzamelen alleen gegevens die nodig zijn voor onze dienstverlening.'
            : 'We only collect data necessary for our services.'
          }}
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
