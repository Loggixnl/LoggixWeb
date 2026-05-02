# SEO Preservation Guide for Loggix.com Rebuild

## Tech Stack
- **Framework:** Nuxt.js 3 (Vue.js)
- **Hosting:** Vercel
- **Content:** Nuxt Content module for blog posts

## Critical Rules to Preserve Google Rankings

### 1. URL Structure - DO NOT CHANGE
Your current URLs are indexed by Google. Changing them will hurt rankings.

**Current URL Pattern:**
- English pages: `/en_home/`, `/en_web/`, `/en_apis_ai/`, `/en_saas/`, `/en_news/`, `/en_team/`
- Dutch pages: `/nl_web/`, `/nl_apis_ai/`, `/nl_saas/`, `/nl_team/`
- Blog posts: `/[post-slug]/` (at root level, NOT under /blog/)
- Privacy: `/privacy-policy/`, `/en_privacy-policy-36442/`

**Important:** All URLs use trailing slashes. `nuxt.config.ts` is configured to preserve them.

### 2. If You MUST Change a URL
Add a 301 redirect in `vercel.json`:
```json
{
  "redirects": [
    { "source": "/old-url/", "destination": "/new-url/", "permanent": true }
  ]
}
```

### 3. Sitemap
The `@nuxtjs/sitemap` module auto-generates sitemaps. Configured in `nuxt.config.ts`.

### 4. SEO Meta Tags
Use the `useSeoMeta()` composable in each page:
```vue
<script setup>
useSeoMeta({
  title: 'Page Title - Loggix',
  description: 'Page description',
  lang: 'en', // or 'nl'
  canonicalPath: '/en_web/',
  alternates: {
    en: '/en_web/',
    nl: '/nl_web/',
  },
});
</script>
```

This automatically sets:
- `<title>` and `<meta name="description">`
- `<link rel="canonical">`
- `<link rel="alternate" hreflang="...">`
- Open Graph tags

### 5. Page Structure (Nuxt file-based routing)

```
pages/
├── index.vue              # / (NL homepage)
├── [...slug].vue          # Dynamic blog posts at root
├── en_home/index.vue      # /en_home/
├── en_web/index.vue       # /en_web/
├── en_apis_ai/index.vue   # /en_apis_ai/
├── en_saas/index.vue      # /en_saas/
├── en_news/index.vue      # /en_news/
├── en_team/index.vue      # /en_team/
├── nl_web/index.vue       # /nl_web/
├── nl_apis_ai/index.vue   # /nl_apis_ai/
├── nl_saas/index.vue      # /nl_saas/
├── nl_team/index.vue      # /nl_team/
├── news/index.vue         # /news/
└── privacy-policy/index.vue
```

### 6. Blog Posts
Blog posts live in `content/blog/` as markdown files.
The `slug` in frontmatter determines the URL:

```markdown
---
title: "Post Title"
slug: "filemaker-2025-is-here-36514"
date: 2025-07-09
---
```

This creates URL: `/filemaker-2025-is-here-36514/`

## Pre-Launch Checklist

- [ ] All existing URLs return 200 OK
- [ ] 301 redirects for any changed URLs (in vercel.json)
- [ ] Sitemap accessible at /sitemap.xml
- [ ] robots.txt in place
- [ ] Canonical tags on all pages (via useSeoMeta)
- [ ] Hreflang tags for bilingual pages
- [ ] Meta titles/descriptions preserved
- [ ] Internal links use trailing slashes
- [ ] Test with Google's Rich Results Test

## After Launch

1. Submit sitemap to Google Search Console
2. Monitor for 404 errors
3. Check indexing status after 1-2 weeks
4. Monitor rankings for key terms

## Files Reference
- `config/seo-url-mapping.json` - Complete URL inventory
- `composables/useSeoMeta.ts` - SEO composable
- `public/robots.txt` - Crawler rules
- `vercel.json` - Vercel config & redirects
