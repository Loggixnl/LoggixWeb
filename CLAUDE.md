# Loggix Website Project Brief

## Project Overview
Rebuilding loggix.com from WordPress to Vue.js (Nuxt 3) with Tailwind CSS, hosted on Vercel.

**Tech Stack:**
- Nuxt 3 (Vue.js)
- Tailwind CSS
- Vercel hosting
- SEO-preserved URL structure

---

## Strategic Concept (New Hero Direction)
We want a premium, scroll-driven hero inspired by the cinematic framing/motion style seen on [Jesko Jets](https://jeskojets.com/), but translated to Loggix business software storytelling.

### Core Visual Metaphor
- Centered Apple iMac in the hero.
- The iMac monitor is a “window” into live business operations.
- Inside the monitor, multiple departments move with parallax depth.
- Department names appear over the scene.
- As the user scrolls, camera zooms into the active department.
- After zoom, related Loggix products/capabilities are revealed.

### Narrative Goal
Show that Loggix gives companies one clear view across all processes and departments, then enables action through software.

---

## Motion & Interaction Specification

### Scroll Experience Flow
1. Initial state: iMac hero with subtle ambient motion in screen.
2. Scroll phase A: department layers move in parallax.
3. Scroll phase B: active department label becomes dominant.
4. Scroll phase C: smooth cinematic zoom into that department.
5. Scroll phase D: product cards/capabilities reveal for that department.
6. Continue through remaining departments in sequence.

### Motion Behavior
- Cinematic, smooth, premium, restrained.
- Layer speed targets:
  - Background: `0.4x`
  - Midground: `0.7x`
  - Foreground: `1.0x`
- Easing: smooth film-like curve (`cubic-bezier(0.22, 1, 0.36, 1)` equivalent).
- Avoid flashy effects; readability first.

### Performance Requirements
- GPU-friendly transforms only (`translate`, `scale`, `opacity`).
- No layout thrashing.
- Optimized/lazy-loaded images.
- Lighter motion profile on mobile.

### Accessibility
- Respect `prefers-reduced-motion` with simplified fade-only behavior.
- Keep core text content semantic and crawlable.
- Keyboard/focus safe.

---

## Department → Product Story Map

### 1) Operations
- **Tagline:** From handoffs to live flow control.
- **Pain:** Disconnected steps create delays and blind spots.
- **Solution:** Loggix orchestrates workflows with one live operational view.
- **Products:**
  - Operations Cockpit
  - Workflow Automation
  - Live Process Monitor
- **CTA:** Optimize Operations

### 2) Finance
- **Tagline:** Automated control from invoice to insight.
- **Pain:** Manual routines slow decisions and increase error risk.
- **Solution:** Automate approvals, invoicing, KPI visibility.
- **Products:**
  - Invoice Automation
  - Cost Control Dashboard
  - Approval Workflow
- **CTA:** See Finance Use Cases

### 3) Sales
- **Tagline:** Faster from first lead to signed deal.
- **Pain:** Lead/quote friction hurts conversion.
- **Solution:** Structured flows and clearer handovers.
- **Products:**
  - Quote Accelerator
  - Pipeline Visibility
  - Lead Qualification Flow
- **CTA:** Accelerate Sales

### 4) Planning
- **Tagline:** Capacity decisions with fewer surprises.
- **Pain:** Static plans age quickly.
- **Solution:** Dynamic planning with scenarios/capacity clarity.
- **Products:**
  - Capacity Planner
  - Scenario Forecasting
  - Cross-Team Scheduler
- **CTA:** Improve Planning

### 5) Production
- **Tagline:** Execution quality at every stage.
- **Pain:** Missing checkpoints harms delivery and quality.
- **Solution:** Track jobs, quality gates, exceptions in real time.
- **Products:**
  - Production Tracker
  - Quality Control Flow
  - Exception Alerting
- **CTA:** Control Production

### 6) HR
- **Tagline:** People processes without administrative drag.
- **Pain:** Fragmented onboarding/requests create inconsistency.
- **Solution:** Standardized, automated employee workflows.
- **Products:**
  - Onboarding Flow
  - HR Self-Service Portal
  - Policy & Approval Tracking
- **CTA:** Streamline HR

---

## Design Preferences

### Overall Style
- Professional/corporate, premium minimal.
- Modern, cinematic motion with strong readability.
- Keep explanation simple and straightforward.

### Brand Assets
- Use placeholders where assets are missing.
- Reserve placeholders clearly for logo/colors/illustrations.

---

## Page Requirements
The pages should start with Hero sections and clear descriptions of what we do per area (FileMaker, AI, Products).  
Focus heavily on examples and software products, each block with:
- Image
- Main title
- Subtitle
- Description
- Recognizable key features (latent wishes)
- Action-oriented CTA

Navigation:
- Home, FileMaker, Ai, Products, Blog, Team

Footer:
- Company info
- Office locations
- Quick links
- Social media

Contact form:
- Name, Email, Phone, Company, Message

Languages:
- English, Dutch

---

## Technical Requirements
- Add tawk.to
- Google Analytics + Google Search Console
- SEO/SEA optimization
- Image optimization + lazy loading

---

## Hero Section Framework

All page hero sections follow a consistent layout structure for visual coherence across the site.

### Section Container
```html
<section class="h-[calc(100vh-5rem)] pt-8 flex flex-col bg-gradient-to-b from-[COLOR] via-[COLOR] to-[#F5F5F7] snap-start">
  <div class="flex-1 flex flex-col">
    <div class="container-wide">
      <!-- Content here -->
    </div>
  </div>
</section>
```

### Layout Structure (Top to Bottom)

1. **Badge Pill** - Centered, with animated ping indicator
   - Margin: `mb-14 md:mb-16` (56px / 64px)

2. **Main Headline** - Centered, max-width container
   - Margin: `mb-16 md:mb-20` (64px / 80px)
   - Font: `text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold`

3. **Image + Description Grid** - Two-column layout
   - Grid: `grid md:grid-cols-[280px_1fr] gap-10 items-start max-w-6xl mx-auto`

   **Left Column: Circular Image/Video**
   - Size: `w-56 h-56 md:w-64 md:h-64`
   - Style: `rounded-full shadow-2xl ring-4 ring-[COLOR]/20`
   - Home page: Video with hover-to-play
   - Other pages: Static image or icon placeholder

   **Right Column: Description Area**
   - Description text: `text-lg md:text-xl leading-relaxed mb-11 pr-10`
   - Additional elements (benefits, stats, capabilities): placed after description, before buttons
   - Margin before buttons: `mb-11` (44px)
   - Action buttons: `flex flex-wrap gap-4`

### Button Styles
- Primary: `px-6 py-3 bg-[#41808B] text-white rounded-full font-medium hover:bg-[#357078]`
- Secondary: `px-6 py-3 text-[#41808B] font-medium border border-[#41808B] rounded-full hover:bg-[#41808B] hover:text-white`
- Accent (home only): `px-6 py-3 bg-[#7FB800] text-white rounded-full font-medium hover:bg-[#6a9c00]`

### Page-Specific Elements
Move any page-specific UI elements (benefits, capabilities, stats, partner badges) to the description column, between the description text and the action buttons.

### Color Themes per Page
- **Home**: Green gradient `from-[#e3ebe7]`, ping color `#7FB800`
- **FileMaker**: Teal gradient `from-[#d5e1eb]`, ping color `#2F6690`
- **AI**: Green gradient `from-[#e3ebe7]`, ping color `#7FB800`
- **Products**: Blue gradient `from-[#d5e1eb]`, ping color `#7FB800`
- **Team**: Amber gradient `from-[#fdf0d5]`, ping color `#F4AC32`
- **Blog**: Purple gradient `from-[#f0dbe6]`, ping color `#A23B72`

### Vertical Alignment
- Section is aligned to top (no `justify-center`)
- The `flex-1` wrapper allows content to stay at top while section fills viewport
- Carousel/footer elements (if present) are pushed to bottom with `pb-12`

---

## Implementation Instructions for Claude
Build this in phases, with clean reusable Nuxt components and a data-driven setup:

### Components to create
- `HeroIMacWindow.vue`
- `DepartmentParallaxScene.vue`
- `DepartmentOverlayLabel.vue`
- `DepartmentProductReveal.vue`

### Data architecture
Create a single typed config source for:
- department metadata
- motion settings
- product mapping
- CTA links
- visual assets

### Build phases
1. Static iMac hero shell.
2. Add parallax department scene.
3. Add scroll-driven label focus.
4. Add zoom transition into department.
5. Add product reveal cards.
6. Performance and accessibility pass.
7. Mobile simplification pass.

### Deliverables
1. Working hero experience with first 2 departments implemented.
2. Reusable architecture to scale all 6 departments.
3. Clear notes for timing/depth tuning.
4. No regressions in SEO/accessibility baseline.