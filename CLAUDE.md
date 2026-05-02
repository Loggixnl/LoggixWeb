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