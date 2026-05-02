<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();

const currentYear = new Date().getFullYear();

const quickLinks = [
  { path: '/filemaker', labelKey: 'nav.fm' },
  { path: '/ai', labelKey: 'nav.ai' },
  { path: '/products', labelKey: 'nav.products' },
  { path: '/blog', labelKey: 'nav.blog' },
  { path: '/team', labelKey: 'nav.team' },
];
</script>

<template>
  <footer class="bg-white border-t border-[#E8E8ED]">
    <!-- Main Footer -->
    <div class="container-wide py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <NuxtLink :to="localePath('/')" class="inline-block mb-6">
            <img
              src="/images/loggix-logo.png"
              alt="Loggix"
              class="h-10 transition-all duration-200"
            />
          </NuxtLink>

          <p class="text-[#6B7B8A] mb-6 max-w-md leading-relaxed">
            {{ t('footer.description') }}
          </p>

          <!-- Social Links -->
          <div class="flex gap-3 mb-8">
            <a
              href="https://facebook.com/lutmers"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-[#F5F5F7] flex items-center justify-center text-[#6B7B8A] hover:text-[#41808B] hover:bg-white hover:border-[#E8E8ED] border border-transparent transition-colors"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://x.com/FMProNL"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-[#F5F5F7] flex items-center justify-center text-[#6B7B8A] hover:text-[#41808B] hover:bg-white hover:border-[#E8E8ED] border border-transparent transition-colors"
              aria-label="X (Twitter)"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/loggix"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-[#F5F5F7] flex items-center justify-center text-[#6B7B8A] hover:text-[#41808B] hover:bg-white hover:border-[#E8E8ED] border border-transparent transition-colors"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <!-- Partner Badge -->
          <img
            src="/images/claris-partner-badge.svg"
            alt="Claris FileMaker Partner"
            class="h-10 opacity-60"
          />
        </div>

        <!-- Offices -->
        <div>
          <h4 class="text-[#0D2C54] font-semibold text-lg mb-6">
            {{ t('footer.offices') }}
          </h4>
          <div class="space-y-6">
            <div>
              <p class="text-[#0D2C54] font-medium mb-1">Loggix BV</p>
              <p class="text-[#6B7B8A] text-sm">Utrecht, Netherlands</p>
              <a
                href="tel:+31854872106"
                class="text-[#41808B] hover:underline text-sm transition-colors"
              >
                +31 (0)85 487 2106
              </a>
            </div>
            <div>
              <p class="text-[#0D2C54] font-medium mb-1">Loggix India Ltd</p>
              <p class="text-[#6B7B8A] text-sm">Pune, Maharashtra</p>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-[#0D2C54] font-semibold text-lg mb-6">
            {{ t('footer.links') }}
          </h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink
                :to="localePath(link.path)"
                class="text-[#6B7B8A] hover:text-[#41808B] text-sm transition-colors"
              >
                {{ t(link.labelKey) }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/privacy-policy')"
                class="text-[#6B7B8A] hover:text-[#41808B] text-sm transition-colors"
              >
                Privacy Policy
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-[#E8E8ED]">
      <div class="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-[#86868B] text-sm">
          &copy; {{ currentYear }} Loggix BV &mdash; {{ t('footer.copyright') }}
        </p>
        <p class="text-[#86868B] text-sm">
          {{ t('footer.globalTeam') }}
        </p>
      </div>
    </div>
  </footer>
</template>
