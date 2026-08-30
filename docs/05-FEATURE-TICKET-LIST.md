# Feature Ticket Backlog & Execution Plan — 05

# OpportunityX Main Ecosystem Website

---

## Document Metadata

- **Product Name:** OpportunityX Main Ecosystem Website
- **Parent Brand:** OpportunityX
- **Primary Domain:** `https://opportunityx.co.in`
- **Flagship Subdomain:** `https://radar.opportunityx.co.in`
- **Sources of Truth:** [`docs/01-PRD.md`](./01-PRD.md), [`docs/02-TECHNICAL-ARCHITECTURE.md`](./02-TECHNICAL-ARCHITECTURE.md), [`docs/03-SECURITY-AND-ACCESS.md`](./03-SECURITY-AND-ACCESS.md), and [`docs/04-FRONTEND-SPECIFICATION.md`](./04-FRONTEND-SPECIFICATION.md)
- **Document Version:** 1.0.0
- **Document Status:** Approved Implementation Backlog
- **Initial Ticket Status:** `NOT STARTED` across all implementation tickets

---

## 1. Purpose & Overview

The **OpportunityX Feature Ticket List** transforms the strategic vision, technical architecture, security model, and frontend design specifications into a structured, dependency-ordered engineering backlog.

Every ticket is self-contained, with explicit scope, user value, measurable acceptance criteria, definition of done, and targeted global skill associations. This backlog serves as the single source of truth for the engineering execution phase.

---

## 2. Master Ticket Summary Table

| Ticket ID    | Title                                                | Type            | Priority | Phase    | Dependencies    | Status        |
| ------------ | ---------------------------------------------------- | --------------- | -------- | -------- | --------------- | ------------- |
| `OX-WEB-001` | Audit Existing Workspace & Directory                 | `FOUNDATION`    | **P0**   | Phase 0  | None            | `COMPLETED`   |
| `OX-WEB-002` | Audit OpportunityX Brand & Logo Assets               | `FOUNDATION`    | **P0**   | Phase 0  | None            | `COMPLETED`   |
| `OX-WEB-003` | Establish Global Skills Mapping                      | `FOUNDATION`    | **P0**   | Phase 0  | None            | `COMPLETED`   |
| `OX-WEB-004` | Implement Design Tokens & CSS Custom Properties      | `FOUNDATION`    | **P0**   | Phase 1  | OX-WEB-001..003 | `COMPLETED`   |
| `OX-WEB-005` | Implement Tri-Mode Theme Engine (Zero-FOUC)          | `FOUNDATION`    | **P0**   | Phase 1  | OX-WEB-004      | `COMPLETED`   |
| `OX-WEB-006` | Implement Typography Hierarchy System                | `UI`            | **P0**   | Phase 1  | OX-WEB-004      | `COMPLETED`   |
| `OX-WEB-007` | Implement Responsive Grid & Layout Containers        | `UI`            | **P0**   | Phase 1  | OX-WEB-004      | `COMPLETED`   |
| `OX-WEB-008` | Implement Reusable Button Primitives                 | `COMPONENT`     | **P0**   | Phase 1  | OX-WEB-004, 005 | `COMPLETED`   |
| `OX-WEB-009` | Implement Card, Badge, & Surface Primitives          | `COMPONENT`     | **P0**   | Phase 1  | OX-WEB-004..008 | `COMPLETED`   |
| `OX-WEB-010` | Configure Client-Side Routing & Shell Layout         | `FOUNDATION`    | **P0**   | Phase 2  | OX-WEB-004..009 | `COMPLETED`   |
| `OX-WEB-011` | Build Desktop Sticky Navigation Bar                  | `COMPONENT`     | **P0**   | Phase 2  | OX-WEB-010      | `COMPLETED`   |
| `OX-WEB-012` | Build Accessible Mobile Navigation Drawer            | `COMPONENT`     | **P0**   | Phase 2  | OX-WEB-010      | `COMPLETED`   |
| `OX-WEB-013` | Build Tri-Mode Theme Switcher Control                | `COMPONENT`     | **P0**   | Phase 2  | OX-WEB-005      | `COMPLETED`   |
| `OX-WEB-014` | Build Multi-Column Global Ecosystem Footer           | `COMPONENT`     | **P0**   | Phase 2  | OX-WEB-010      | `COMPLETED`   |
| `OX-WEB-015` | Implement Global AppShell & Container System         | `UI`            | **P0**   | Phase 2  | OX-WEB-010..014 | `COMPLETED`   |
| `OX-WEB-016` | Build Branded 404 Error Recovery View                | `PAGE`          | **P1**   | Phase 2  | OX-WEB-010      | `COMPLETED`   |
| `OX-WEB-017` | Build Home Hero Section Typography & CTAs            | `PAGE`          | **P0**   | Phase 3  | OX-WEB-015      | `COMPLETED`   |
| `OX-WEB-018` | Build Interactive Ecosystem Node Visual Canvas       | `COMPONENT`     | **P0**   | Phase 3  | OX-WEB-017      | `COMPLETED`   |
| `OX-WEB-019` | Implement Hero Micro-Motion & Staggered Reveal       | `MOTION`        | **P1**   | Phase 3  | OX-WEB-017, 018 | `COMPLETED`   |
| `OX-WEB-020` | Build Ecosystem Directory Section                    | `PAGE`          | **P0**   | Phase 3  | OX-WEB-015      | `COMPLETED`   |
| `OX-WEB-021` | Create Ecosystem Product Data Model & Registry       | `DATA`          | **P0**   | Phase 3  | None            | `COMPLETED`   |
| `OX-WEB-022` | Build OpportunityX Radar Featured Spotlight Card     | `COMPONENT`     | **P0**   | Phase 3  | OX-WEB-020, 021 | `COMPLETED`   |
| `OX-WEB-023` | Build Product Status Badge Lifecycle System          | `COMPONENT`     | **P0**   | Phase 3  | OX-WEB-021      | `COMPLETED`   |
| `OX-WEB-024` | Build Central Community Gateway Section              | `PAGE`          | **P0**   | Phase 3  | OX-WEB-015      | `COMPLETED`   |
| `OX-WEB-025` | Build Text-First Community Preview Canvas            | `COMPONENT`     | **P0**   | Phase 3  | OX-WEB-024      | `COMPLETED`   |
| `OX-WEB-026` | Build Central Community Action CTA                   | `COMPONENT`     | **P0**   | Phase 3  | OX-WEB-024      | `COMPLETED`   |
| `OX-WEB-027` | Create Blog Editorial Data Model & Schemas           | `DATA`          | **P0**   | Phase 3  | None            | `COMPLETED`   |
| `OX-WEB-028` | Build Home Blogs 3-Card Preview Grid                 | `PAGE`          | **P0**   | Phase 3  | OX-WEB-027      | `COMPLETED`   |
| `OX-WEB-029` | Build Dedicated Blogs Directory Page (`/blogs`)      | `PAGE`          | **P0**   | Phase 4  | OX-WEB-027      | `COMPLETED`   |
| `OX-WEB-030` | Build Reusable BlogCard Component                    | `COMPONENT`     | **P0**   | Phase 4  | OX-WEB-027      | `COMPLETED`   |
| `OX-WEB-031` | Build Blog Article Reader Page (`/blogs/:slug`)      | `PAGE`          | **P0**   | Phase 4  | OX-WEB-027, 030 | `COMPLETED`   |
| `OX-WEB-032` | Build Markdown Content Renderer & Code Styler        | `COMPONENT`     | **P1**   | Phase 4  | OX-WEB-031      | `COMPLETED`   |
| `OX-WEB-033` | Create Notification Data Model & Schemas             | `DATA`          | **P0**   | Phase 3  | None            | `COMPLETED`   |
| `OX-WEB-034` | Build Home Notifications Feed Preview                | `PAGE`          | **P0**   | Phase 3  | OX-WEB-033      | `COMPLETED`   |
| `OX-WEB-035` | Build Dedicated Notifications Hub (`/notifications`) | `PAGE`          | **P0**   | Phase 4  | OX-WEB-033      | `COMPLETED`   |
| `OX-WEB-036` | Build Reusable NotificationCard & Feed Component     | `COMPONENT`     | **P0**   | Phase 4  | OX-WEB-033      | `COMPLETED`   |
| `OX-WEB-037` | Create Download Manifest Data Model & Schemas        | `DATA`          | **P0**   | Phase 3  | None            | `COMPLETED`   |
| `OX-WEB-038` | Build Home Platform Downloads Preview Section        | `PAGE`          | **P0**   | Phase 3  | OX-WEB-037      | `COMPLETED`   |
| `OX-WEB-039` | Build Dedicated Downloads Center (`/downloads`)      | `PAGE`          | **P0**   | Phase 4  | OX-WEB-037      | `COMPLETED`   |
| `OX-WEB-040` | Implement Download Integrity & Checksum Badges       | `COMPONENT`     | **P1**   | Phase 4  | OX-WEB-039      | `COMPLETED`   |
| `OX-WEB-041` | Build Home Contact Gateway Section                   | `PAGE`          | **P0**   | Phase 3  | OX-WEB-015      | `COMPLETED`   |
| `OX-WEB-042` | Build Dedicated Contact Portal (`/contact`)          | `PAGE`          | **P0**   | Phase 4  | OX-WEB-015      | `COMPLETED`   |
| `OX-WEB-043` | Implement Contact Form Validation & State Machine    | `INTERACTION`   | **P0**   | Phase 4  | OX-WEB-042      | `COMPLETED`   |
| `OX-WEB-044` | Build Final Concluding Ecosystem CTA Section         | `PAGE`          | **P0**   | Phase 3  | OX-WEB-015      | `NOT STARTED` |
| `OX-WEB-045` | Integrate Footer with Dynamic Status & Socials       | `COMPONENT`     | **P0**   | Phase 2  | OX-WEB-014      | `NOT STARTED` |
| `OX-WEB-046` | Implement Global Hover, Focus, & Active States       | `INTERACTION`   | **P1**   | Phase 6  | OX-WEB-008..015 | `COMPLETED`   |
| `OX-WEB-047` | Implement Smooth Theme Transitions                   | `MOTION`        | **P1**   | Phase 6  | OX-WEB-005      | `COMPLETED`   |
| `OX-WEB-048` | Implement Navigation & Drawer Transitions            | `MOTION`        | **P1**   | Phase 6  | OX-WEB-011, 012 | `COMPLETED`   |
| `OX-WEB-049` | Implement Page Route Cross-Fade Transitions          | `MOTION`        | **P2**   | Phase 6  | OX-WEB-010      | `COMPLETED`   |
| `OX-WEB-050` | Responsive Mobile Optimization (320px–430px)         | `UI`            | **P0**   | Phase 7  | All UI Tickets  | `NOT STARTED` |
| `OX-WEB-051` | Responsive Tablet Optimization (640px–1023px)        | `UI`            | **P1**   | Phase 7  | All UI Tickets  | `NOT STARTED` |
| `OX-WEB-052` | Responsive Desktop Optimization (1024px–1440px)      | `UI`            | **P0**   | Phase 7  | All UI Tickets  | `NOT STARTED` |
| `OX-WEB-053` | Ultra-Wide Layout Constraints (>= 1536px)            | `UI`            | **P1**   | Phase 7  | All UI Tickets  | `NOT STARTED` |
| `OX-WEB-054` | Implement HTML5 Semantic Landmark Hierarchy          | `ACCESSIBILITY` | **P0**   | Phase 7  | All UI Tickets  | `COMPLETED`   |
| `OX-WEB-055` | Implement Full Keyboard Tab Navigation               | `ACCESSIBILITY` | **P0**   | Phase 7  | All UI Tickets  | `COMPLETED`   |
| `OX-WEB-056` | Implement Accessible Focus Rings (`:focus-visible`)  | `ACCESSIBILITY` | **P0**   | Phase 7  | All UI Tickets  | `COMPLETED`   |
| `OX-WEB-057` | Tri-Mode Color Contrast Audit (WCAG AA 4.5:1)        | `ACCESSIBILITY` | **P0**   | Phase 7  | OX-WEB-005      | `COMPLETED`   |
| `OX-WEB-058` | Implement `prefers-reduced-motion` Overrides         | `ACCESSIBILITY` | **P0**   | Phase 7  | All Motion      | `COMPLETED`   |
| `OX-WEB-059` | Implement Global Dynamic `<head>` SEO Manager        | `SEO`           | **P1**   | Phase 8  | OX-WEB-010      | `COMPLETED`   |
| `OX-WEB-060` | Configure Route-Specific Titles & Meta Tags          | `SEO`           | **P1**   | Phase 8  | OX-WEB-059      | `COMPLETED`   |
| `OX-WEB-061` | Implement Blog Article JSON-LD Structured Data       | `SEO`           | **P2**   | Phase 8  | OX-WEB-031      | `NOT STARTED` |
| `OX-WEB-062` | Configure Canonical URLs Across All Routes           | `SEO`           | **P1**   | Phase 8  | OX-WEB-059      | `COMPLETED`   |
| `OX-WEB-063` | Implement Open Graph & Twitter Social Cards          | `SEO`           | **P1**   | Phase 8  | OX-WEB-059      | `COMPLETED`   |
| `OX-WEB-064` | Configure `sitemap.xml` and `robots.txt`             | `SEO`           | **P1**   | Phase 8  | OX-WEB-010      | `COMPLETED`   |
| `OX-WEB-065` | Optimize Images, SVG Assets & WebP Formats           | `PERFORMANCE`   | **P1**   | Phase 8  | Assets          | `COMPLETED`   |
| `OX-WEB-066` | Implement Route-Level Code Splitting (`React.lazy`)  | `PERFORMANCE`   | **P0**   | Phase 8  | OX-WEB-010      | `COMPLETED`   |
| `OX-WEB-067` | React Rendering & Re-render Audit                    | `PERFORMANCE`   | **P1**   | Phase 8  | All UI Tickets  | `COMPLETED`   |
| `OX-WEB-068` | Core Web Vitals Audit (LCP < 1.8s, CLS < 0.05)       | `PERFORMANCE`   | **P1**   | Phase 8  | All UI Tickets  | `COMPLETED`   |
| `OX-WEB-069` | Motion Physics & GPU Rendering Audit                 | `PERFORMANCE`   | **P1**   | Phase 8  | All Motion      | `COMPLETED`   |
| `OX-WEB-070` | Contact Form Zero-Secrets & Sanitization Audit       | `FOUNDATION`    | **P0**   | Phase 8  | OX-WEB-043      | `COMPLETED`   |
| `OX-WEB-071` | External Link Hardening (`noopener noreferrer`)      | `FOUNDATION`    | **P0**   | Phase 8  | All UI Tickets  | `COMPLETED`   |
| `OX-WEB-072` | Safe Error Boundary & User Message Audit             | `FOUNDATION`    | **P1**   | Phase 8  | OX-WEB-010      | `COMPLETED`   |
| `OX-WEB-073` | Production Security Headers Config (`vercel.json`)   | `DEPLOYMENT`    | **P0**   | Phase 8  | None            | `COMPLETED`   |
| `OX-WEB-074` | Automated Route & Navigation Testing                 | `QA`            | **P0**   | Phase 9  | OX-WEB-010..045 | `COMPLETED`   |
| `OX-WEB-075` | Automated Tri-Mode Theme State Testing               | `QA`            | **P0**   | Phase 9  | OX-WEB-005, 013 | `COMPLETED`   |
| `OX-WEB-076` | Automated Mobile Drawer & Interaction Testing        | `QA`            | **P0**   | Phase 9  | OX-WEB-012      | `COMPLETED`   |
| `OX-WEB-077` | Automated Form Validation & Honeypot Testing         | `QA`            | **P0**   | Phase 9  | OX-WEB-043      | `COMPLETED`   |
| `OX-WEB-078` | Multi-Viewport Playwright Browser Suite              | `QA`            | **P0**   | Phase 9  | All UI Tickets  | `COMPLETED`   |
| `OX-WEB-079` | Visual Regression & Screenshot Baseline Capture      | `QA`            | **P1**   | Phase 9  | OX-WEB-078      | `COMPLETED`   |
| `OX-WEB-080` | Comprehensive UI/UX Polish & Alignment Audit         | `QA`            | **P0**   | Phase 9  | All UI Tickets  | `COMPLETED`   |
| `OX-WEB-081` | Anti-Slop & Craft Floor Compliance Review            | `QA`            | **P0**   | Phase 9  | All UI Tickets  | `COMPLETED`   |
| `OX-WEB-082` | OpportunityX Core Brand & Logo Integrity Audit       | `QA`            | **P0**   | Phase 9  | OX-WEB-002      | `COMPLETED`   |
| `OX-WEB-083` | React Architecture & Composition Pattern Audit       | `QA`            | **P1**   | Phase 9  | All Components  | `COMPLETED`   |
| `OX-WEB-084` | Production Codebase Cleanup & Dead Code Purge        | `QA`            | **P0**   | Phase 9  | All Code        | `COMPLETED`   |
| `OX-WEB-085` | End-to-End Product Flow QA Sign-Off                  | `QA`            | **P0**   | Phase 10 | All Prior       | `NOT STARTED` |
| `OX-WEB-086` | Comprehensive Tri-Mode Theme QA Sign-Off             | `QA`            | **P0**   | Phase 10 | All Prior       | `NOT STARTED` |
| `OX-WEB-087` | Full Responsive Multi-Device QA Sign-Off             | `QA`            | **P0**   | Phase 10 | All Prior       | `NOT STARTED` |
| `OX-WEB-088` | Accessibility Standards Sign-Off (WCAG AA)           | `QA`            | **P0**   | Phase 10 | All Prior       | `NOT STARTED` |
| `OX-WEB-089` | Performance Budget Sign-Off (Lighthouse >= 95)       | `QA`            | **P0**   | Phase 10 | All Prior       | `NOT STARTED` |
| `OX-WEB-090` | Final Human Visual Craft Review & Sign-Off           | `QA`            | **P0**   | Phase 10 | All Prior       | `NOT STARTED` |
| `OX-WEB-091` | Vercel Production Build & Environment Setup          | `DEPLOYMENT`    | **P0**   | Phase 10 | All Prior       | `NOT STARTED` |
| `OX-WEB-092` | Production Deployment & Domain Verification          | `DEPLOYMENT`    | **P0**   | Phase 10 | OX-WEB-091      | `NOT STARTED` |
| `OX-WEB-093` | Final Release Sign-Off & Verification Checklist      | `DEPLOYMENT`    | **P0**   | Phase 10 | All Prior       | `NOT STARTED` |

---

## 3. Detailed Ticket Backlog (Phase 0 through Phase 10)

```
┌─────────────────────────────────────────────────────────────┐
│             PHASE 0: AUDIT & PROJECT DISCOVERY              │
└─────────────────────────────────────────────────────────────┘
```

### OX-WEB-001 — Audit Existing Workspace & Directory

- **Type:** `FOUNDATION`
- **Priority:** `P0`
- **Phase:** `Phase 0 — Project Audit & Discovery`
- **Description:** Inspect the current root workspace, verify installed packages, configuration files (`package.json`, `vite.config.js`, `tailwind.config.js`), directory layout, and ensure clean development baselines.
- **User Value:** Guarantees that the application is built on a clean, solid, conflict-free foundation.
- **Scope:** Workspace inspection, directory mapping, package integrity verification.
- **Dependencies:** None
- **Relevant Skills:** `production-code-cleanup`, `react-best-practices`
- **Acceptance Criteria:**
  - Workspace dependencies and build tools verified.
  - Absence of corrupt files or conflicting configurations confirmed.
  - Project directory structure documented.
- **Definition of Done:** Audit report documented; workspace confirmed clean.

---

### OX-WEB-002 — Audit OpportunityX Brand & Logo Assets

- **Type:** `FOUNDATION`
- **Priority:** `P0`
- **Phase:** `Phase 0 — Project Audit & Discovery`
- **Description:** Verify the official OpportunityX logo files across Dark, Light, and Monochromatic variants. Verify that the core geometric X mark is uncorrupted, vector-clean, and strictly adheres to brand locking rules.
- **User Value:** Protects the authentic visual identity of the OpportunityX ecosystem.
- **Scope:** Vector inspection of `logo-dark.svg`, `logo-light.svg`, `logo-monochromatic.svg`, and `mark-x.svg`.
- **Dependencies:** None
- **Relevant Skills:** `brandkit`, `impeccable`
- **Acceptance Criteria:**
  - All three official logo variants verified in `public/brand/`.
  - Zero altered proportions, taglines, or distorted mark geometries.
- **Definition of Done:** Verified brand assets staged in `public/brand/`.

---

### OX-WEB-003 — Establish Global Skills Mapping

- **Type:** `FOUNDATION`
- **Priority:** `P0`
- **Phase:** `Phase 0 — Project Audit & Discovery`
- **Description:** Map relevant globally installed design, performance, accessibility, and QA skills to specific engineering tasks.
- **User Value:** Ensures consistent application of design intelligence, anti-slop rules, and performance standards.
- **Scope:** Skill verification across `ui-ux-pro-max`, `taste-skill`, `react-best-practices`, `playwright-cli`, and `impeccable`.
- **Dependencies:** None
- **Relevant Skills:** `ui-ux-pro-max`, `impeccable`
- **Acceptance Criteria:**
  - Relevant skills confirmed active in global environment.
- **Definition of Done:** Global skill readiness confirmed.

---

```
┌─────────────────────────────────────────────────────────────┐
│                 PHASE 1: DESIGN FOUNDATION                  │
└─────────────────────────────────────────────────────────────┘
```

### OX-WEB-004 — Implement Design Tokens & CSS Custom Properties

- **Type:** `FOUNDATION`
- **Priority:** `P0`
- **Phase:** `Phase 1 — Design Foundation`
- **Description:** Implement `src/styles/tokens.css` declaring the full design token tree (colors, surfaces, borders, shadows, spacing, radius, typography scale, motion durations) mapped into `tailwind.config.js`.
- **User Value:** Eliminates magic values and guarantees seamless design consistency across all components.
- **Scope:** `src/styles/tokens.css`, `tailwind.config.js`, `src/styles/index.css`.
- **Dependencies:** OX-WEB-001, OX-WEB-002, OX-WEB-003
- **Relevant Skills:** `ui-ux-pro-max`, `taste-skill`, `minimalist-skill`
- **Acceptance Criteria:**
  - All tokens defined under `:root`, `[data-theme="dark"]`, `[data-theme="light"]`, and `[data-theme="monochromatic"]`.
  - Zero hardcoded hex colors or arbitrary px margins in component files.
- **Definition of Done:** CSS variable tree compile-clean and integrated with Tailwind.

---

### OX-WEB-005 — Implement Tri-Mode Theme Engine (Zero-FOUC)

- **Type:** `FOUNDATION`
- **Priority:** `P0`
- **Phase:** `Phase 1 — Design Foundation`
- **Description:** Create `ThemeContext.jsx` and an inline synchronous `<head>` script in `index.html` to manage Dark, Light, and Monochromatic states with persistent `localStorage` synchronization and zero theme flicker on load.
- **User Value:** Immediate visual comfort matching user preference without annoying flashes of light/dark screens.
- **Scope:** `index.html`, `src/context/ThemeContext.jsx`, `src/hooks/useTheme.js`.
- **Dependencies:** OX-WEB-004
- **Relevant Skills:** `ui-ux-pro-max`, `react-best-practices`
- **Acceptance Criteria:**
  - Supports `dark`, `light`, and `monochromatic` theme modes.
  - Page refresh preserves selected theme without FOUC.
  - System preference (`prefers-color-scheme`) respected as fallback.
- **Definition of Done:** Theme switching operates instantaneously across all routes.

---

### OX-WEB-006 — Implement Typography Hierarchy System

- **Type:** `UI`
- **Priority:** `P0`
- **Phase:** `Phase 1 — Design Foundation`
- **Description:** Configure primary geometric sans (`Inter`/`Geist Sans`) and monospace font (`JetBrains Mono`) with font-display swap, fluid display clamps, line-height ratios, and tracking tokens.
- **User Value:** Delivers effortless reading legibility and modern technical aesthetics.
- **Scope:** `src/styles/tokens.css`, `index.html` font preloads.
- **Dependencies:** OX-WEB-004
- **Relevant Skills:** `ui-ux-pro-max`, `claude-design-recipes`
- **Acceptance Criteria:**
  - Fluid type scale operational (`Display`, `H1`, `H2`, `H3`, `Body`, `Small`, `Mono`).
  - Font swapping configured without cumulative layout shifts.
- **Definition of Done:** Typography scale tested and visually verified.

---

### OX-WEB-007 — Implement Responsive Grid & Layout Containers

- **Type:** `UI`
- **Priority:** `P0`
- **Phase:** `Phase 1 — Design Foundation`
- **Description:** Build `Container.jsx` and `Section.jsx` layout wrappers enforcing `max-w-7xl` bounds, 4px/8px modular padding, and standard 12-column responsive grid rules.
- **User Value:** Prevents content stretching on wide screens and keeps alignment unified.
- **Scope:** `src/components/ui/Container.jsx`, `src/components/ui/Section.jsx`.
- **Dependencies:** OX-WEB-004
- **Relevant Skills:** `composition-patterns`, `impeccable`
- **Acceptance Criteria:**
  - Container maintains `max-w-7xl` with responsive gutters (`px-4 sm:px-6 lg:px-8`).
  - Section wrapper enforces consistent vertical rhythm.
- **Definition of Done:** Reusable layout primitives tested across viewports.

---

### OX-WEB-008 — Implement Reusable Button Primitives

- **Type:** `COMPONENT`
- **Priority:** `P0`
- **Phase:** `Phase 1 — Design Foundation`
- **Description:** Build `Button.jsx` supporting variants (`primary`, `secondary`, `outline`, `ghost`, `link`), sizes (`sm`, `md`, `lg`), loading spinner states, disabled logic, and accessible focus rings.
- **User Value:** High-clarity, tactile interaction affordances across the entire website.
- **Scope:** `src/components/ui/Button.jsx`, `src/components/ui/IconButton.jsx`.
- **Dependencies:** OX-WEB-004, OX-WEB-005
- **Relevant Skills:** `composition-patterns`, `web-design-guidelines`
- **Acceptance Criteria:**
  - All button variants render with proper theme token contrast.
  - Min touch target `44×44px` on mobile.
  - Loading state disables pointer events and renders spinner.
- **Definition of Done:** Button primitive component tested with unit test coverage.

---

### OX-WEB-009 — Implement Card, Badge, & Surface Primitives

- **Type:** `COMPONENT`
- **Priority:** `P0`
- **Phase:** `Phase 1 — Design Foundation`
- **Description:** Build `Card.jsx`, `Badge.jsx`, `StatusPill.jsx`, and `SectionHeader.jsx` components with theme-aware borders and hover elevation.
- **User Value:** Standardizes information containers without visual bloat or container-in-container anti-patterns.
- **Scope:** `src/components/ui/Card.jsx`, `src/components/ui/Badge.jsx`, `src/components/ui/SectionHeader.jsx`.
- **Dependencies:** OX-WEB-004..008
- **Relevant Skills:** `composition-patterns`, `taste-skill`
- **Acceptance Criteria:**
  - Flat bento card structure with subtle 1px borders.
  - StatusPill handles `live`, `beta`, `in-development`, `coming-soon`, and `planned`.
- **Definition of Done:** Primitives documented and rendering properly.

---

```
┌─────────────────────────────────────────────────────────────┐
│                 PHASE 2: APPLICATION SHELL                  │
└─────────────────────────────────────────────────────────────┘
```

### OX-WEB-010 — Configure Client-Side Routing & Shell Layout

- **Type:** `FOUNDATION`
- **Priority:** `P0`
- **Phase:** `Phase 2 — Application Shell`
- **Description:** Set up `react-router-dom` with routes for `/`, `/blogs`, `/blogs/:slug`, `/notifications`, `/downloads`, `/contact`, and `*` (404), with route-level `React.lazy()` chunking and `ScrollToTop` listener.
- **User Value:** Instant, seamless SPA navigation without page reloads.
- **Scope:** `src/app/routes.jsx`, `src/app/App.jsx`, `src/components/common/ScrollToTop.jsx`.
- **Dependencies:** OX-WEB-004..009
- **Relevant Skills:** `react-best-practices`, `vercel-optimize`
- **Acceptance Criteria:**
  - All 6 specified routes navigate cleanly.
  - Scroll position resets to top on route changes.
  - Lazy routes load with fallback skeleton.
- **Definition of Done:** Route navigation verified with zero console errors.

---

### OX-WEB-011 — Build Desktop Sticky Navigation Bar

- **Type:** `COMPONENT`
- **Priority:** `P0`
- **Phase:** `Phase 2 — Application Shell`
- **Description:** Build `Navbar.jsx` with brand logo, nav links (`Home`, `Blogs`, `Notifications`, `Downloads`, `Contact`), active route indicators, theme switcher, and `Explore Radar` action.
- **User Value:** Effortless access to all ecosystem hubs from anywhere on the page.
- **Scope:** `src/components/shell/Navbar.jsx`.
- **Dependencies:** OX-WEB-010
- **Relevant Skills:** `composition-patterns`, `ui-ux-pro-max`
- **Acceptance Criteria:**
  - Fixed `top-0 z-50` with subtle backdrop blur.
  - Active route highlighted subtly without heavy visual pills.
  - Brand logo routes to `/`.
- **Definition of Done:** Desktop navbar tested across routes and scroll depths.

---

### OX-WEB-012 — Build Accessible Mobile Navigation Drawer

- **Type:** `COMPONENT`
- **Priority:** `P0`
- **Phase:** `Phase 2 — Application Shell`
- **Description:** Build `MobileNav.jsx` slide drawer triggered by a minimum 44×44px hamburger button, complete with focus trapping, Escape key support, body scroll locking, and theme toggle.
- **User Value:** Fast, accessible navigation on mobile devices.
- **Scope:** `src/components/shell/MobileNav.jsx`.
- **Dependencies:** OX-WEB-010
- **Relevant Skills:** `web-design-guidelines`, `emilkowalski-skills`
- **Acceptance Criteria:**
  - Drawer opens with smooth slide animation (220ms).
  - Pressing Escape or clicking overlay closes drawer.
  - Focus trapped inside drawer when active (`aria-modal="true"`).
- **Definition of Done:** Mobile drawer passes keyboard and mobile touch validation.

---

### OX-WEB-013 — Build Tri-Mode Theme Switcher Control

- **Type:** `COMPONENT`
- **Priority:** `P0`
- **Phase:** `Phase 2 — Application Shell`
- **Description:** Build `ThemeSwitcher.jsx` offering accessible 3-option toggle (`Dark`, `Light`, `Monochromatic`) with Lucide icons and animated selection indicator.
- **User Value:** Intuitive, instant control over visual appearance.
- **Scope:** `src/components/shell/ThemeSwitcher.jsx`.
- **Dependencies:** OX-WEB-005
- **Relevant Skills:** `ui-ux-pro-max`, `composition-patterns`
- **Acceptance Criteria:**
  - Clearly displays active theme state.
  - Toggling cycles through all three modes without page reload or FOUC.
  - Keyboard accessible with ARIA radio or button group semantics.
- **Definition of Done:** Theme switcher operational in header and mobile drawer.

---

### OX-WEB-014 — Build Multi-Column Global Ecosystem Footer

- **Type:** `COMPONENT`
- **Priority:** `P0`
- **Phase:** `Phase 2 — Application Shell`
- **Description:** Build `Footer.jsx` featuring 4 columns (Ecosystem, Resources, Company, Legal), live operational status indicator (`🟢 All Systems Operational`), verified official social links, and copyright text.
- **User Value:** Deep ecosystem discovery and easy access to legal/company resources.
- **Scope:** `src/components/shell/Footer.jsx`.
- **Dependencies:** OX-WEB-010
- **Relevant Skills:** `composition-patterns`, `taste-skill`
- **Acceptance Criteria:**
  - 4-column desktop layout collapsing to 2-col on tablet and stacked on mobile.
  - External product links open with `rel="noopener noreferrer"`.
  - Zero placeholder or fake social links.
- **Definition of Done:** Footer integrated across all views.

---

### OX-WEB-015 — Implement Global AppShell & Container System

- **Type:** `UI`
- **Priority:** `P0`
- **Phase:** `Phase 2 — Application Shell`
- **Description:** Assemble `AppShell.jsx` unifying `Navbar`, `MobileNav`, dynamic route `<Outlet />`, and `Footer` inside a persistent layout frame.
- **User Value:** Consistent layout frame across the entire ecosystem website.
- **Scope:** `src/components/shell/AppShell.jsx`.
- **Dependencies:** OX-WEB-010..014
- **Relevant Skills:** `composition-patterns`, `react-best-practices`
- **Acceptance Criteria:**
  - Clean page wrapping with zero layout shifts between route transitions.
  - Footer pins to bottom on short pages.
- **Definition of Done:** AppShell functioning across all routes.

---

### OX-WEB-016 — Build Branded 404 Error Recovery View

- **Type:** `PAGE`
- **Priority:** `P1`
- **Phase:** `Phase 2 — Application Shell`
- **Description:** Build `NotFoundView.jsx` displaying a branded "Lost in the Ecosystem?" message, theme support, and clear action links to return Home or launch OpportunityX Radar.
- **User Value:** Prevents dead-end user experiences on mistyped or broken links.
- **Scope:** `src/pages/NotFoundView.jsx`.
- **Dependencies:** OX-WEB-010
- **Relevant Skills:** `taste-skill`, `ui-ux-pro-max`
- **Acceptance Criteria:**
  - Catches all invalid routes (`*`).
  - Provides working CTAs (`Return to Home`, `Explore Radar`).
- **Definition of Done:** 404 view tested and verified.

---

```
┌─────────────────────────────────────────────────────────────┐
│                 PHASE 3: HOME / LANDING PAGE                │
└─────────────────────────────────────────────────────────────┘
```

### OX-WEB-017 — Build Home Hero Section Typography & CTAs

- **Type:** `PAGE`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Description:** Build `HeroSection.jsx` implementing the approved headline ("One ecosystem. Endless possibilities."), eyebrow badge, concise mission sub-headline, and dual CTA cluster (`Explore Ecosystem`, `Join Community`).
- **User Value:** Instant cognitive understanding of what OpportunityX is within 3 seconds.
- **Scope:** `src/components/home/HeroSection.jsx`.
- **Dependencies:** OX-WEB-015
- **Relevant Skills:** `ui-ux-pro-max`, `taste-skill`, `claude-design-recipes`
- **Acceptance Criteria:**
  - Headline uses fluid typography clamp (`text-display`).
  - CTAs trigger smooth scroll to `#ecosystem` and `#community`.
  - Zero stock photography or cliché education graphics.
- **Definition of Done:** Hero section rendered and tested.

---

### OX-WEB-018 — Build Interactive Ecosystem Node Visual Canvas

- **Type:** `COMPONENT`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Description:** Build an interactive lightweight SVG canvas displaying connected OpportunityX product nodes (Radar, Career, Freelance, Resume) radiating from the central X mark.
- **User Value:** Visually reinforces the connected multi-product ecosystem architecture.
- **Scope:** `src/components/home/EcosystemVisual.jsx`.
- **Dependencies:** OX-WEB-017
- **Relevant Skills:** `impeccable`, `premium-web-design-motion`
- **Acceptance Criteria:**
  - Lightweight SVG implementation (< 15 KB).
  - Hovering product nodes triggers subtle glowing line paths.
  - Zero heavy WebGL or performance-draining canvas loops.
- **Definition of Done:** Visual canvas responsive and performant.

---

### OX-WEB-019 — Implement Hero Micro-Motion & Staggered Reveal

- **Type:** `MOTION`
- **Priority:** `P1`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Description:** Add Framer Motion staggered entrance animations (`opacity: 0, y: 16 -> opacity: 1, y: 0`) with full `prefers-reduced-motion` bypass.
- **User Value:** Polished, premium first impression on page load.
- **Scope:** `src/components/home/HeroSection.jsx`, `src/utils/motion.js`.
- **Dependencies:** OX-WEB-017, OX-WEB-018
- **Relevant Skills:** `emilkowalski-skills`, `premium-web-design-motion`
- **Acceptance Criteria:**
  - Stagger delay between badge, headline, and CTAs (60ms).
  - Disabled instantaneously when reduced motion is requested.
- **Definition of Done:** Animation tested on standard and reduced-motion modes.

---

### OX-WEB-020 — Build Ecosystem Directory Section

- **Type:** `PAGE`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Build `EcosystemSection.tsx` showcasing the connected product suite with OpportunityX Radar in high-visibility prominence.
- **User Value:** Allows visitors to discover all active and roadmap products.
- **Scope:** `src/components/ecosystem/EcosystemSection.tsx`, `src/components/ecosystem/EcosystemProductCard.tsx`.
- **Dependencies:** OX-WEB-015
- **Relevant Skills:** `ui-ux-pro-max`, `composition-patterns`
- **Acceptance Criteria:**
  - Section header: "One ecosystem. Multiple ways to move forward."
  - Ingests products dynamically from product data service.
- **Definition of Done:** Ecosystem directory rendering data-driven product grid. (Verified responsive on mobile/tablet/desktop, Tri-Mode compliant).

---

### OX-WEB-021 — Create Ecosystem Product Data Model & Registry

- **Type:** `DATA`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Create `src/data/ecosystemData.ts` defining all ecosystem entities (Radar, Career, Freelance, Resume, Portfolio, Verification) with statuses and URLs.
- **User Value:** Decoupled data layer allowing plug-and-play addition of future products.
- **Scope:** `src/data/ecosystemData.ts`.
- **Dependencies:** None
- **Relevant Skills:** `react-best-practices`
- **Acceptance Criteria:**
  - Strictly typed TypeScript schema with `id`, `name`, `status`, `isFlagship`, `externalUrl`.
  - Service functions for `getFlagshipProduct()`, `getSubProducts()`.
- **Definition of Done:** Product registry data contract verified with TypeScript and Vite build.

---

### OX-WEB-022 — Build OpportunityX Radar Featured Spotlight Card

- **Type:** `COMPONENT`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Build dedicated flagship card component for OpportunityX Radar with category pills (`Hackathons`, `Internships`, `Scholarships`, `Open Source`, `Fellowships`, `Workshops`), `🟢 LIVE v2.1` badge, and direct external launch CTA.
- **User Value:** Clear, prominent pathway for users to access the live opportunity discovery engine.
- **Scope:** `src/components/ecosystem/RadarSpotlightCard.tsx`.
- **Dependencies:** OX-WEB-020, OX-WEB-021
- **Relevant Skills:** `ui-ux-pro-max`, `taste-skill`
- **Acceptance Criteria:**
  - Radar card has distinct visual prominence over planned products.
  - Launches `https://radar.opportunityx.co.in` in new tab with `noopener noreferrer`.
- **Definition of Done:** Radar spotlight card tested and responsive.

---

### OX-WEB-023 — Build Product Status Badge Lifecycle System

- **Type:** `COMPONENT`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Implement `StatusBadge.tsx` rendering standardized badges for `LIVE`, `BETA`, `IN DEVELOPMENT`, `COMING SOON`, and `PLANNED`.
- **User Value:** Transparent, honest communication regarding product availability.
- **Scope:** `src/components/ecosystem/StatusBadge.tsx`.
- **Dependencies:** OX-WEB-021
- **Relevant Skills:** `ui-ux-pro-max`, `web-design-guidelines`
- **Acceptance Criteria:**
  - Color-coded status pills matching design tokens across all 3 themes.
  - Zero fake `Live` states on unreleased products; zero orange in monochromatic mode.
- **Definition of Done:** StatusBadge primitive tested across all status types and themes.

---

### OX-WEB-024 — Build Central Community Gateway Section

- **Type:** `PAGE`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Build `CommunitySection.tsx` communicating the single, unified builder community vision (uniting students, engineers, and creators without product silos).
- **User Value:** Establishes a shared belonging and networking destination for users.
- **Scope:** `src/components/community/CommunitySection.tsx`.
- **Dependencies:** OX-WEB-015
- **Relevant Skills:** `ui-ux-pro-max`, `taste-skill`
- **Acceptance Criteria:**
  - Title: "One community. Everyone building together."
  - Rejects product-specific community fragmentation.
- **Definition of Done:** Community section layout complete with 3 core pillars and responsive grid.

---

### OX-WEB-025 — Build Text-First Community Preview Canvas

- **Type:** `COMPONENT`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Build minimal text-first preview snippets illustrating project updates, hackathon team requests, and peer reviews without simulating fake user avatars or counters.
- **User Value:** Tangible preview of community collaboration without fake social proof.
- **Scope:** `src/components/community/CommunityVisual.tsx`.
- **Dependencies:** OX-WEB-024
- **Relevant Skills:** `taste-skill`, `impeccable`
- **Acceptance Criteria:**
  - Text-first builder snippets with clean typography.
  - Zero fake likes, follower numbers, or deceptive social counters.
- **Definition of Done:** Community preview cards styled and verified across viewports.

---

### OX-WEB-026 — Build Central Community Action CTA

- **Type:** `COMPONENT`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Build `CommunitySection.tsx` action CTA button linking to the official OpportunityX community portal/invite (`https://discord.gg/qSjCRDTKN5`).
- **User Value:** Direct onboarding into the builder network.
- **Scope:** `src/components/community/CommunitySection.tsx`.
- **Dependencies:** OX-WEB-024
- **Relevant Skills:** `composition-patterns`
- **Acceptance Criteria:**
  - Configurable target URL.
  - Accessible focus and active states.
- **Definition of Done:** Community CTA active and tested.

---

### OX-WEB-027 — Create Blog Editorial Data Model & Schemas

- **Type:** `DATA`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Create `src/data/blogData.ts` storing articles with slugs, categories, author metadata, reading time, published dates, and safe markdown content.
- **User Value:** Decoupled editorial data structure ready for future CMS ingestion.
- **Scope:** `src/data/blogData.ts`.
- **Dependencies:** None
- **Relevant Skills:** `react-best-practices`
- **Acceptance Criteria:**
  - Full article schemas with valid ISO timestamps.
  - Service methods: `getAllBlogs()`, `getFeaturedBlog()`, `getBlogBySlug()`, `getRelatedBlogs()`, `searchBlogs()`.
- **Definition of Done:** Blog data service verified with TypeScript and Vite build.

---

### OX-WEB-028 — Build Home Blogs 3-Card Preview Grid

- **Type:** `PAGE`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Build `BlogsPreview.tsx` rendering 3 latest/featured editorial articles with category badges, author info, reading times, and a "View All Articles →" route link.
- **User Value:** Immediate discovery of high-value technical and career insights.
- **Scope:** `src/components/home/BlogsPreview.tsx`.
- **Dependencies:** OX-WEB-027
- **Relevant Skills:** `ui-ux-pro-max`, `composition-patterns`
- **Acceptance Criteria:**
  - Ingests top 3 articles from `blogData`.
  - Links cleanly to `/blogs` and `/blogs/:slug`.
- **Definition of Done:** Home blog preview rendering properly and responsive.

---

### OX-WEB-033 — Create Notification Data Model & Schemas

- **Type:** `DATA`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Create `src/data/notificationData.ts` defining official system updates, releases, maintenance notices, and announcements.
- **User Value:** Transparent, structured changelog and bulletin architecture.
- **Scope:** `src/data/notificationData.ts`.
- **Dependencies:** None
- **Relevant Skills:** `react-best-practices`
- **Acceptance Criteria:**
  - Notification schemas supporting `type`, `priority`, `version`, `isPinned`, `publishedAt`.
  - Service functions for filtering by type and priority.
- **Definition of Done:** Notification data service operational and verified.

---

### OX-WEB-034 — Build Home Notifications Feed Preview

- **Type:** `PAGE`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Build `NotificationsPreview.tsx` displaying the 3 most recent official bulletins with category tags, timestamps, and a "View All Updates →" route link.
- **User Value:** Real-time pulse of ecosystem launches and maintenance notices.
- **Scope:** `src/components/home/NotificationsPreview.tsx`.
- **Dependencies:** OX-WEB-033
- **Relevant Skills:** `ui-ux-pro-max`, `composition-patterns`
- **Acceptance Criteria:**
  - Clear chronological order (newest first).
  - Direct routing to `/notifications`.
- **Definition of Done:** Home notifications feed preview active and verified.

---

### OX-WEB-037 — Create Download Manifest Data Model & Schemas

- **Type:** `DATA`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Create `src/data/downloadData.ts` detailing OS platform binaries (Android, Windows, macOS, Linux, iOS), versions, file sizes, checksums, requirements, and availability statuses.
- **User Value:** Verifiable software distribution data contracts.
- **Scope:** `src/data/downloadData.ts`.
- **Dependencies:** None
- **Relevant Skills:** `react-best-practices`
- **Acceptance Criteria:**
  - Supports platforms: `android`, `windows`, `macos`, `linux`, `ios`.
  - Status handles `AVAILABLE`, `COMING_SOON`, `IN_DEVELOPMENT`, `UNAVAILABLE`.
  - Zero fake downloads, zero fake versions, zero fake checksums.
- **Definition of Done:** Download manifest service verified with TypeScript build.

---

### OX-WEB-038 — Build Home Platform Downloads Preview Section

- **Type:** `PAGE`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Build `DownloadsPreview.tsx` showcasing OS platform icons with real-time status badges and a "View Downloads" route link.
- **User Value:** Instant visibility into where OpportunityX applications can be run.
- **Scope:** `src/components/home/DownloadsPreview.tsx`.
- **Dependencies:** OX-WEB-037
- **Relevant Skills:** `ui-ux-pro-max`, `taste-skill`
- **Acceptance Criteria:**
  - Displays OS cards with honest availability states.
  - Routes to `/downloads`.
- **Definition of Done:** Downloads preview rendering properly and tested.

---

### OX-WEB-041 — Build Home Contact Gateway Section

- **Type:** `PAGE`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Status:** `COMPLETED`
- **Description:** Build `ContactPreview.tsx` presenting a concise partnership and inquiry summary with direct action button navigating to `/contact`.
- **User Value:** Low-friction outreach bridge for students, clubs, and hiring partners.
- **Scope:** `src/components/home/ContactPreview.tsx`.
- **Dependencies:** OX-WEB-015
- **Relevant Skills:** `ui-ux-pro-max`, `composition-patterns`
- **Acceptance Criteria:**
  - Clean card layout with contact channel categories.
  - Action button routes cleanly to `/contact`.
- **Definition of Done:** Contact preview active on landing page and tested.

---

### OX-WEB-044 — Build Final Concluding Ecosystem CTA Section

- **Type:** `PAGE`
- **Priority:** `P0`
- **Phase:** `Phase 3 — Home / Landing Page`
- **Description:** Build `FinalCTA.jsx` closing the landing page with the authoritative ecosystem headline ("Your next opportunity could start here.") and dual action triggers.
- **User Value:** Strong, confident closing impression driving conversion.
- **Scope:** `src/components/home/FinalCTA.jsx`.
- **Dependencies:** OX-WEB-015
- **Relevant Skills:** `taste-skill`, `claude-design-recipes`
- **Acceptance Criteria:**
  - Generous vertical whitespace (`py-24`).
  - Subtle background ambient styling without heavy glowing blobs.
- **Definition of Done:** Final CTA component integrated into root route.

---

```
┌─────────────────────────────────────────────────────────────┐
│                 PHASE 4: SECONDARY PAGES                    │
└─────────────────────────────────────────────────────────────┘
```

### OX-WEB-029 — Build Dedicated Blogs Directory Page (`/blogs`)

- **Type:** `PAGE`
- **Priority:** `P0`
- **Phase:** `Phase 4 — Secondary Pages`
- **Status:** `COMPLETED`
- **Description:** Build `BlogsPage.tsx` featuring top-level hero article, category filter tabs (`All`, `Ecosystem`, `Radar & Opportunities`, `Engineering & Architecture`, `Community & Building`), debounced keyword search bar, and empty search state.
- **User Value:** Complete editorial library with fast search and category filtering.
- **Scope:** `src/pages/BlogsPage.tsx`, `src/components/blog/BlogFilter.tsx`.
- **Dependencies:** OX-WEB-027
- **Relevant Skills:** `ui-ux-pro-max`, `react-best-practices`
- **Acceptance Criteria:**
  - Search filters articles by title, excerpt, author, and tags in real time.
  - Active category tab synchronizes with URL query parameter (`?category=...`).
  - Empty search results display reset filter button.
- **Definition of Done:** Blogs directory page complete, responsive, and tested across all 3 themes.

---

### OX-WEB-030 — Build Reusable BlogCard Component

- **Type:** `COMPONENT`
- **Priority:** `P0`
- **Phase:** `Phase 4 — Secondary Pages`
- **Status:** `COMPLETED`
- **Description:** Build `BlogCard.tsx` displaying category pill, title, excerpt, author metadata, date, and reading time.
- **User Value:** Scannable, visually appealing article preview cards.
- **Scope:** `src/components/blog/BlogCard.tsx`.
- **Dependencies:** OX-WEB-027
- **Relevant Skills:** `composition-patterns`, `impeccable`
- **Acceptance Criteria:**
  - Responsive card hover effect (subtle translateY and border highlight).
  - Clean 2-line title and excerpt clamp.
- **Definition of Done:** BlogCard component tested in grid layouts and responsive viewports.

---

### OX-WEB-031 — Build Blog Article Reader Page (`/blogs/:slug`)

- **Type:** `PAGE`
- **Priority:** `P0`
- **Phase:** `Phase 4 — Secondary Pages`
- **Status:** `COMPLETED`
- **Description:** Build `BlogDetailPage.tsx` rendering breadcrumbs, article header, constrained prose container (`max-w-3xl`), author card, social share links, and related articles footer.
- **User Value:** Distraction-free, comfortable long-form reading experience.
- **Scope:** `src/pages/BlogDetailPage.tsx`.
- **Dependencies:** OX-WEB-027, OX-WEB-030
- **Relevant Skills:** `ui-ux-pro-max`, `taste-skill`
- **Acceptance Criteria:**
  - Dynamic route matching by `:slug` with 404 fallback if slug is invalid.
  - Social share triggers (Copy Link with feedback tooltip, X/Twitter, LinkedIn).
  - Related articles grid renders contextual posts.
- **Definition of Done:** Article reader page fully operational and verified.

---

### OX-WEB-032 — Build Markdown Content Renderer & Code Styler

- **Type:** `COMPONENT`
- **Priority:** `P1`
- **Phase:** `Phase 4 — Secondary Pages`
- **Status:** `COMPLETED`
- **Description:** Build `MarkdownRenderer.tsx` with markdown parser, sanitization, syntax-styled code blocks with clipboard copy, responsive lists, blockquotes, and callouts.
- **User Value:** Rich, readable technical content presentation without XSS risk.
- **Scope:** `src/components/common/MarkdownRenderer.tsx`.
- **Dependencies:** OX-WEB-031
- **Relevant Skills:** `react-best-practices`, `web-design-guidelines`
- **Acceptance Criteria:**
  - Sanitized markdown output preventing XSS.
  - Code blocks styled with monospace font and horizontal scrollbars.
- **Definition of Done:** Markdown parser tested with technical articles.

---

### OX-WEB-035 — Build Dedicated Notifications Hub (`/notifications`)

- **Type:** `PAGE`
- **Priority:** `P0`
- **Phase:** `Phase 4 — Secondary Pages`
- **Status:** `COMPLETED`
- **Description:** Build `NotificationsPage.tsx` displaying the complete ecosystem release feed, system bulletins, and maintenance updates with category filter tabs.
- **User Value:** Comprehensive source of truth for platform updates and changelogs.
- **Scope:** `src/pages/NotificationsPage.tsx`.
- **Dependencies:** OX-WEB-033
- **Relevant Skills:** `ui-ux-pro-max`, `composition-patterns`
- **Acceptance Criteria:**
  - Category filters: `All Updates`, `Releases`, `Announcements`, `Platform Updates`, `Maintenance`, `Community`.
  - Pinned notices anchored at the top of the feed.
- **Definition of Done:** Notifications hub operational, responsive, and tested.

---

### OX-WEB-036 — Build Reusable NotificationCard & Feed Component

- **Type:** `COMPONENT`
- **Priority:** `P0`
- **Phase:** `Phase 4 — Secondary Pages`
- **Status:** `COMPLETED`
- **Description:** Build `NotificationCard.tsx` and `NotificationBadge.tsx` rendering release badges, relative timestamps, markdown summaries, expandable inline details, and external action links.
- **User Value:** Scannable, structured bulletin cards.
- **Scope:** `src/components/notifications/NotificationCard.tsx`, `src/components/notifications/NotificationBadge.tsx`.
- **Dependencies:** OX-WEB-033
- **Relevant Skills:** `composition-patterns`, `impeccable`
- **Acceptance Criteria:**
  - Clear visual distinction between release notes and maintenance alerts.
  - Outbound links formatted safely with `noopener noreferrer`.
- **Definition of Done:** NotificationCard component verified in feed and detail views.

---

### OX-WEB-039 — Build Dedicated Downloads Center (`/downloads`)

- **Type:** `PAGE`
- **Priority:** `P0`
- **Phase:** `Phase 4 — Secondary Pages`
- **Status:** `COMPLETED`
- **Description:** Build `DownloadsPage.tsx` presenting full OS download cards (Android, Windows, macOS, Linux, iOS) with version tags, file sizes, release dates, and download triggers.
- **User Value:** Trusted, official distribution center for OpportunityX client binaries.
- **Scope:** `src/pages/DownloadsPage.tsx`, `src/components/downloads/PlatformCard.tsx`.
- **Dependencies:** OX-WEB-037
- **Relevant Skills:** `ui-ux-pro-max`, `taste-skill`
- **Acceptance Criteria:**
  - Active builds provide direct download trigger; unreleased builds show `Coming Soon` or `In Development`.
  - Zero simulated or fake download URLs.
- **Definition of Done:** Downloads center complete, responsive, and tested across all themes.

---

### OX-WEB-040 — Implement Download Integrity & Checksum Badges

- **Type:** `COMPONENT`
- **Priority:** `P1`
- **Phase:** `Phase 4 — Secondary Pages`
- **Status:** `COMPLETED`
- **Description:** Add verifiable SHA-256 checksum pills (`ChecksumBadge.tsx`) to download cards with one-click copy feedback.
- **User Value:** Verifiable software security and tamper-resistance for developers.
- **Scope:** `src/components/downloads/ChecksumBadge.tsx`.
- **Dependencies:** OX-WEB-039
- **Relevant Skills:** `web-design-guidelines`
- **Acceptance Criteria:**
  - Clicking checksum pill copies SHA-256 hash to clipboard with temporary "Copied!" feedback.
  - Rendered only when a verified checksum is provided.
- **Definition of Done:** Checksum interaction component verified.

---

### OX-WEB-042 — Build Dedicated Contact Portal (`/contact`)

- **Type:** `PAGE`
- **Priority:** `P0`
- **Phase:** `Phase 4 — Secondary Pages`
- **Status:** `COMPLETED`
- **Description:** Build `ContactPage.tsx` containing structured inquiry form, channel selection dropdown, direct contact emails sidebar, and expected response time indicators.
- **User Value:** Clear, accessible communication channel for partnerships, student clubs, and support.
- **Scope:** `src/pages/ContactPage.tsx`, `src/components/contact/ContactInfo.tsx`.
- **Dependencies:** OX-WEB-015
- **Relevant Skills:** `ui-ux-pro-max`, `taste-skill`
- **Acceptance Criteria:**
  - 2-column layout (Form + Direct Channel Details) collapsing on mobile.
  - Displays official routing emails (`contact@opportunityx.co.in`, `partnerships@opportunityx.co.in`).
- **Definition of Done:** Contact portal view rendered, fully responsive, and tested across themes.

---

### OX-WEB-043 — Implement Contact Form Validation & State Machine

- **Type:** `INTERACTION`
- **Priority:** `P0`
- **Phase:** `Phase 4 — Secondary Pages`
- **Status:** `COMPLETED`
- **Description:** Build `ContactForm.tsx` with real-time validation, honeypot spam protection (`website_url_hp`), input length limits, clean service boundary (`submitContactForm`), and async submit state machine (`Idle`, `Submitting`, `Success`, `Service Unavailable`, `Error`).
- **User Value:** Reliable, accessible, and spam-protected inquiry submission.
- **Scope:** `src/components/contact/ContactForm.tsx`, `src/data/contactData.ts`.
- **Dependencies:** OX-WEB-042
- **Relevant Skills:** `react-best-practices`, `web-design-guidelines`
- **Acceptance Criteria:**
  - Validates required fields, email format regex, and minimum/maximum message length.
  - Submitting state disables inputs and shows spinner.
  - Success state displays confirmation message with reset trigger.
  - Zero private credentials or API keys exposed in frontend code.
- **Definition of Done:** Contact form state machine tested across all states.

---

```
┌─────────────────────────────────────────────────────────────┐
│             PHASE 6: INTERACTION & MOTION                   │
└─────────────────────────────────────────────────────────────┘
```

### OX-WEB-046 — Implement Global Hover, Focus, & Active States

- **Type:** `INTERACTION`
- **Priority:** `P1`
- **Phase:** `Phase 6 — Interaction & Motion`
- **Status:** `COMPLETED`
- **Description:** Audit and enforce consistent interactive states across all buttons, navigation items, links, cards, and form inputs.
- **User Value:** Tactile, highly responsive interface feel across all devices.
- **Scope:** Global component styling across `src/components/`.
- **Dependencies:** OX-WEB-008..015
- **Relevant Skills:** `emilkowalski-skills`, `impeccable`
- **Acceptance Criteria:**
  - Interactive elements have smooth hover transitions (150ms).
  - Active state triggers subtle scale compression (`active:scale-[0.98]`).
  - Mobile touch states operate without sticky hover bugs.
- **Definition of Done:** Interactive state audit verified across all interactive components.

---

### OX-WEB-047 — Implement Smooth Theme Transitions

- **Type:** `MOTION`
- **Priority:** `P1`
- **Phase:** `Phase 6 — Interaction & Motion`
- **Status:** `COMPLETED`
- **Description:** Add CSS transitions on background-color, border-color, and color (`transition-colors duration-200`) during theme switching without layout stutter.
- **User Value:** Visually pleasing, non-jarring theme change experience.
- **Scope:** `src/styles/globals.css`, `src/components/layout/ThemeSwitcher.tsx`.
- **Dependencies:** OX-WEB-005
- **Relevant Skills:** `emilkowalski-skills`, `premium-web-design-motion`
- **Acceptance Criteria:**
  - Theme toggles smoothly within 200ms.
  - Zero layout shifts during color transitions.
- **Definition of Done:** Theme transition tested across all pages and themes.

---

### OX-WEB-048 — Implement Navigation & Drawer Transitions

- **Type:** `MOTION`
- **Priority:** `P1`
- **Phase:** `Phase 6 — Interaction & Motion`
- **Status:** `COMPLETED`
- **Description:** Implement physics-based spring easing for the mobile drawer enter/exit and desktop navbar compacting on scroll.
- **User Value:** Smooth, native-feeling navigation flow.
- **Scope:** `src/components/layout/MobileDrawer.tsx`, `src/components/layout/Navbar.tsx`.
- **Dependencies:** OX-WEB-011, OX-WEB-012
- **Relevant Skills:** `emilkowalski-skills`, `premium-web-design-motion`
- **Acceptance Criteria:**
  - Drawer slide using spring damping with focus trap and Escape key dismiss.
- **Definition of Done:** Navigation motion verified on mobile and desktop.

---

### OX-WEB-049 — Implement Page Route Cross-Fade Transitions

- **Type:** `MOTION`
- **Priority:** `P2`
- **Phase:** `Phase 6 — Interaction & Motion`
- **Status:** `COMPLETED`
- **Description:** Add subtle route change cross-fade transitions (`opacity: 0 -> 1`, 200ms, y: 6px) with scroll-to-top restoration between page views.
- **User Value:** Cohesive spatial continuity across routes.
- **Scope:** `src/components/common/PageTransition.tsx`, `src/components/layout/AppShell.tsx`.
- **Dependencies:** OX-WEB-010
- **Relevant Skills:** `react-view-transitions`, `emilkowalski-skills`
- **Acceptance Criteria:**
  - Fast, subtle cross-fade without delaying content interactivity.
  - Automatic reduced-motion bypass via `useReducedMotion()`.
- **Definition of Done:** Page transitions operational and verified.

---

```
┌─────────────────────────────────────────────────────────────┐
│             PHASE 7: RESPONSIVE & ACCESSIBILITY             │
└─────────────────────────────────────────────────────────────┘
```

### OX-WEB-050 — Responsive Mobile Optimization (320px–430px)

- **Type:** `UI`
- **Priority:** `P0`
- **Phase:** `Phase 7 — Responsive & Accessibility`
- **Description:** Audit and refine all components on compact mobile viewports (iPhone SE 320px, iPhone 14/15 390px/430px, Android 360px), eliminating horizontal scrollbars and ensuring 44px touch targets.
- **User Value:** Flawless mobile usability for student developers on phones.
- **Scope:** All view components in `src/`.
- **Dependencies:** All UI Tickets
- **Relevant Skills:** `ui-ux-pro-max`, `web-design-guidelines`
- **Acceptance Criteria:**
  - Zero unwanted horizontal overflow (`overflow-x: hidden`).
  - Font sizes, padding, and hit targets adjusted for thumb navigation.
- **Definition of Done:** Mobile viewports verified using browser emulators.

---

### OX-WEB-051 — Responsive Tablet Optimization (640px–1023px)

- **Type:** `UI`
- **Priority:** `P1`
- **Phase:** `Phase 7 — Responsive & Accessibility`
- **Description:** Optimize layout grids, ecosystem cards, and blog grids for iPad and tablet landscape/portrait orientations.
- **User Value:** Balanced layout proportions on medium screens.
- **Scope:** Grid and container components.
- **Dependencies:** All UI Tickets
- **Relevant Skills:** `ui-ux-pro-max`, `composition-patterns`
- **Acceptance Criteria:**
  - 2-column balanced layouts operational across 768px–1024px.
- **Definition of Done:** Tablet viewports validated.

---

### OX-WEB-052 — Responsive Desktop Optimization (1024px–1440px)

- **Type:** `UI`
- **Priority:** `P0`
- **Phase:** `Phase 7 — Responsive & Accessibility`
- **Description:** Refine standard 1080p desktop and laptop viewports with optical spacing, full horizontal navigation, and 3-column article grids.
- **User Value:** High-impact desktop presentation for recruiters and partners.
- **Scope:** All page components.
- **Dependencies:** All UI Tickets
- **Relevant Skills:** `impeccable`, `ui-ux-pro-max`
- **Acceptance Criteria:**
  - 12-column grid and standard desktop typography render with high visual polish.
- **Definition of Done:** Desktop layout verified.

---

### OX-WEB-053 — Ultra-Wide Layout Constraints (>= 1536px)

- **Type:** `UI`
- **Priority:** `P1`
- **Phase:** `Phase 7 — Responsive & Accessibility`
- **Description:** Enforce max-width container clamps and optical margins on 1440p and 4K displays to prevent excessive horizontal stretching.
- **User Value:** Comfortable reading lines and balanced negative space on large monitors.
- **Scope:** Layout containers in `src/components/ui/Container.jsx`.
- **Dependencies:** All UI Tickets
- **Relevant Skills:** `impeccable`, `taste-skill`
- **Acceptance Criteria:**
  - Content bounded at `1280px` (`max-w-7xl`) centered with proportional margins.
- **Definition of Done:** Ultra-wide viewports validated.

---

### OX-WEB-054 — Implement HTML5 Semantic Landmark Hierarchy

- **Type:** `ACCESSIBILITY`
- **Priority:** `P0`
- **Phase:** `Phase 7 — Responsive & Accessibility`
- **Description:** Audit and enforce proper semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`) and single `<h1>` per page.
- **User Value:** Assistive technologies can navigate and interpret page structure accurately.
- **Scope:** All page and shell components.
- **Dependencies:** All UI Tickets
- **Relevant Skills:** `web-design-guidelines`, `ui-ux-pro-max`
- **Acceptance Criteria:**
  - Exactly one `<h1>` per route with sequential `<h2>` and `<h3>` tags.
  - Proper ARIA landmarks and attributes present.
- **Definition of Done:** Semantic audit complete with zero landmark violations.

---

### OX-WEB-055 — Implement Full Keyboard Tab Navigation

- **Type:** `ACCESSIBILITY`
- **Priority:** `P0`
- **Phase:** `Phase 7 — Responsive & Accessibility`
- **Description:** Ensure logical tab order across navigation, interactive cards, filter tabs, modal drawers, and form controls.
- **User Value:** Full keyboard-only accessibility for users who cannot use a pointer.
- **Scope:** All interactive components in `src/components/`.
- **Dependencies:** All UI Tickets
- **Relevant Skills:** `web-design-guidelines`, `react-best-practices`
- **Acceptance Criteria:**
  - All interactive elements reachable via `Tab` / `Shift+Tab`.
  - Dropdown and drawer menus close with `Escape`.
- **Definition of Done:** Full keyboard navigation verified.

---

### OX-WEB-056 — Implement Accessible Focus Rings (`:focus-visible`)

- **Type:** `ACCESSIBILITY`
- **Priority:** `P0`
- **Phase:** `Phase 7 — Responsive & Accessibility`
- **Description:** Apply high-contrast `:focus-visible` focus rings (`ring-2 ring-accent-primary ring-offset-2`) without displaying focus outlines on standard mouse clicks.
- **User Value:** Clear visual tracking for keyboard navigation.
- **Scope:** `src/styles/index.css`, interactive primitives.
- **Dependencies:** All UI Tickets
- **Relevant Skills:** `web-design-guidelines`, `impeccable`
- **Acceptance Criteria:**
  - Focus rings clearly visible on all buttons, links, and inputs during keyboard navigation.
- **Definition of Done:** Focus rings tested across all three themes.

---

### OX-WEB-057 — Tri-Mode Color Contrast Audit (WCAG AA 4.5:1)

- **Type:** `ACCESSIBILITY`
- **Priority:** `P0`
- **Phase:** `Phase 7 — Responsive & Accessibility`
- **Description:** Audit all text, UI borders, status badges, and button labels against WCAG 2.1 AA contrast requirements (minimum 4.5:1 for normal text, 3:1 for large text/icons) across Dark, Light, and Monochromatic themes.
- **User Value:** Universal legibility for users with visual impairments or high-glare environments.
- **Scope:** `src/styles/tokens.css`, all component color mappings.
- **Dependencies:** OX-WEB-005
- **Relevant Skills:** `web-design-guidelines`, `ui-ux-pro-max`
- **Acceptance Criteria:**
  - 100% of text and UI elements meet or exceed 4.5:1 contrast in all three modes.
- **Definition of Done:** Contrast report passes automated audit.

---

### OX-WEB-058 — Implement `prefers-reduced-motion` Overrides

- **Type:** `ACCESSIBILITY`
- **Priority:** `P0`
- **Phase:** `Phase 7 — Responsive & Accessibility`
- **Status:** `COMPLETED`
- **Description:** Enforce universal `@media (prefers-reduced-motion: reduce)` overrides in CSS and Framer Motion utilities (`useReducedMotion()` in `PageTransition`, `MobileDrawer`, `NotificationCard`) to disable all non-essential movement.
- **User Value:** Prevents motion sickness and vestibular discomfort for sensitive users.
- **Scope:** `src/styles/globals.css`, `src/utils/motion.ts`.
- **Dependencies:** All Motion Tickets
- **Relevant Skills:** `emilkowalski-skills`, `web-design-guidelines`
- **Acceptance Criteria:**
  - All motion transforms set to `0ms` duration when system reduced motion is enabled.
- **Definition of Done:** Reduced motion behavior tested and verified.

---

```
┌─────────────────────────────────────────────────────────────┐
│                 PHASE 8: SEO & PERFORMANCE                  │
└─────────────────────────────────────────────────────────────┘
```

### OX-WEB-059 — Implement Global Dynamic `<head>` SEO Manager

- **Type:** `SEO`
- **Priority:** `P1`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Build `SEOHead.jsx` component dynamically managing document title, meta descriptions, canonical URLs, and Open Graph tags per route.
- **User Value:** Accurate search engine indexing and attractive social share previews.
- **Scope:** `src/components/common/SEOHead.jsx`.
- **Dependencies:** OX-WEB-010
- **Relevant Skills:** `react-best-practices`, `vercel-optimize`
- **Acceptance Criteria:**
  - Injects canonical URL, title, description, and OG image tags dynamically.
- **Definition of Done:** SEOHead component functioning across all routes.

---

### OX-WEB-060 — Configure Route-Specific Titles & Meta Tags

- **Type:** `SEO`
- **Priority:** `P1`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Define calibrated titles and descriptions for `/`, `/blogs`, `/notifications`, `/downloads`, and `/contact`.
- **User Value:** High search discovery and click-through rates.
- **Scope:** All page views in `src/pages/`.
- **Dependencies:** OX-WEB-059
- **Relevant Skills:** `vercel-optimize`
- **Acceptance Criteria:**
  - Every route has unique, descriptive title and meta description.
- **Definition of Done:** Meta tags verified across all views.

---

### OX-WEB-061 — Implement Blog Article JSON-LD Structured Data

- **Type:** `SEO`
- **Priority:** `P2`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Inject `BlogPosting` JSON-LD schema into `/blogs/:slug` pages for Google rich snippet eligibility.
- **User Value:** Enhanced editorial visibility in search results.
- **Scope:** `src/pages/BlogDetailView.jsx`.
- **Dependencies:** OX-WEB-031
- **Relevant Skills:** `vercel-optimize`
- **Acceptance Criteria:**
  - Generates valid JSON-LD schema validated with Google Schema markup validator.
- **Definition of Done:** Structured data tested and valid.

---

### OX-WEB-062 — Configure Canonical URLs Across All Routes

- **Type:** `SEO`
- **Priority:** `P1`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Set `<link rel="canonical" href="...">` pointing to canonical `https://opportunityx.co.in` paths.
- **User Value:** Prevents duplicate content penalties across domain variants.
- **Scope:** `src/components/common/SEOHead.jsx`.
- **Dependencies:** OX-WEB-059
- **Acceptance Criteria:**
  - Canonical tags match active route.
- **Definition of Done:** Canonical links verified.

---

### OX-WEB-063 — Implement Open Graph & Twitter Social Cards

- **Type:** `SEO`
- **Priority:** `P1`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Generate `public/images/og-preview.png` (1200×630) and wire up `og:image`, `twitter:card="summary_large_image"` tags.
- **User Value:** High-impact, branded preview cards when shared on Discord, Twitter/X, and LinkedIn.
- **Scope:** `public/images/og-preview.png`, `src/components/common/SEOHead.jsx`.
- **Dependencies:** OX-WEB-059
- **Relevant Skills:** `brandkit`, `vercel-optimize`
- **Acceptance Criteria:**
  - Social preview cards display proper title, description, and 1200×630 image.
- **Definition of Done:** Open Graph tags validated with social preview tools.

---

### OX-WEB-064 — Configure `sitemap.xml` and `robots.txt`

- **Type:** `SEO`
- **Priority:** `P1`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Create static `public/sitemap.xml` and `public/robots.txt` files indexing all public routes.
- **User Value:** Effortless crawling and indexing by search engine bots.
- **Scope:** `public/sitemap.xml`, `public/robots.txt`.
- **Dependencies:** OX-WEB-010
- **Relevant Skills:** `vercel-optimize`
- **Acceptance Criteria:**
  - `sitemap.xml` lists all primary routes with change frequencies.
  - `robots.txt` allows public crawling and points to sitemap.
- **Definition of Done:** Sitemap and robots files staged in `public/`.

---

### OX-WEB-065 — Optimize Images, SVG Assets & WebP Formats

- **Type:** `PERFORMANCE`
- **Priority:** `P1`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Optimize all raster imagery to WebP (< 100 KB), minify SVGs (< 10 KB), and assign explicit `width`, `height`, and `loading="lazy"` attributes.
- **User Value:** Rapid page load times and zero layout shifts.
- **Scope:** `public/` and image components.
- **Dependencies:** Assets
- **Relevant Skills:** `vercel-optimize`
- **Acceptance Criteria:**
  - All images compressed; lazy loading active on below-the-fold assets.
- **Definition of Done:** Asset compression verified.

---

### OX-WEB-066 — Implement Route-Level Code Splitting (`React.lazy`)

- **Type:** `PERFORMANCE`
- **Priority:** `P0`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Wrap secondary page components in `React.lazy()` and `Suspense` with skeleton loaders to minimize initial JavaScript bundle size.
- **User Value:** Sub-second initial page load on mobile and low-bandwidth connections.
- **Scope:** `src/app/routes.jsx`.
- **Dependencies:** OX-WEB-010
- **Relevant Skills:** `react-best-practices`, `vercel-optimize`
- **Acceptance Criteria:**
  - Initial JS bundle < 180 KB gzip.
  - Secondary routes loaded only upon navigation.
- **Definition of Done:** Bundle split verified via Vite build analyzer.

---

### OX-WEB-067 — React Rendering & Re-render Audit

- **Type:** `PERFORMANCE`
- **Priority:** `P1`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Audit component rendering patterns using `react-best-practices` to eliminate unnecessary re-renders, isolate leaf state, and avoid inline object allocations in hot loops.
- **User Value:** Butter-smooth 60fps scrolling and interaction responsiveness.
- **Scope:** All component files in `src/components/`.
- **Dependencies:** All UI Tickets
- **Relevant Skills:** `react-best-practices`, `composition-patterns`
- **Acceptance Criteria:**
  - Zero redundant component tree re-renders during state changes.
- **Definition of Done:** React Profiler audit passed.

---

### OX-WEB-068 — Core Web Vitals Audit (LCP < 1.8s, CLS < 0.05)

- **Type:** `PERFORMANCE`
- **Priority:** `P1`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Run performance audit targeting LCP < 1.8s, CLS < 0.05, and INP < 100ms across desktop and mobile profiles.
- **User Value:** Fast, stable, and responsive user experience.
- **Scope:** Entire application.
- **Dependencies:** All UI Tickets
- **Relevant Skills:** `vercel-optimize`
- **Acceptance Criteria:**
  - Lighthouse performance score $\ge 95$ on desktop and mobile.
- **Definition of Done:** Core Web Vitals audit documented and passing.

---

### OX-WEB-069 — Motion Physics & GPU Rendering Audit

- **Type:** `PERFORMANCE`
- **Priority:** `P1`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Verify all Framer Motion and CSS animations animate strictly `transform` and `opacity` properties, avoiding layout recalculations or CPU thrashing.
- **User Value:** Low battery drain and smooth performance on mobile devices.
- **Scope:** `src/utils/motion.js`, animation components.
- **Dependencies:** All Motion Tickets
- **Relevant Skills:** `emilkowalski-skills`, `vercel-optimize`
- **Acceptance Criteria:**
  - Zero layout-triggering animated properties (`width`, `height`, `top`, `left`).
- **Definition of Done:** Motion performance profile verified.

---

### OX-WEB-070 — Contact Form Zero-Secrets & Sanitization Audit

- **Type:** `FOUNDATION`
- **Priority:** `P0`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Verify that contact form implementation contains zero private API keys, SMTP credentials, or token leaks in client code.
- **User Value:** Complete security of backend infrastructure and user submissions.
- **Scope:** `src/components/contact/ContactForm.jsx`.
- **Dependencies:** OX-WEB-043
- **Relevant Skills:** `react-best-practices`
- **Acceptance Criteria:**
  - Zero private credentials present in client-side repository.
- **Definition of Done:** Security review verified.

---

### OX-WEB-071 — External Link Hardening (`noopener noreferrer`)

- **Type:** `FOUNDATION`
- **Priority:** `P0`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Verify all external outbound links (Radar, Discord, GitHub, LinkedIn) enforce `target="_blank" rel="noopener noreferrer"`.
- **User Value:** Protects users against reverse tab-nabbing and window hijacking.
- **Scope:** All component link tags.
- **Dependencies:** All UI Tickets
- **Relevant Skills:** `web-design-guidelines`
- **Acceptance Criteria:**
  - 100% of outbound links possess `rel="noopener noreferrer"`.
- **Definition of Done:** Link audit verified.

---

### OX-WEB-072 — Safe Error Boundary & User Message Audit

- **Type:** `FOUNDATION`
- **Priority:** `P1`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Ensure runtime errors present safe, human-readable recovery screens with zero leaked internal paths, database schemas, or stack traces.
- **User Value:** Graceful error recovery without exposing system internals.
- **Scope:** `src/components/common/ErrorBoundary.jsx`.
- **Dependencies:** OX-WEB-010
- **Relevant Skills:** `react-best-practices`
- **Acceptance Criteria:**
  - Error boundary catches rendering errors safely without exposing technical stack traces.
- **Definition of Done:** Error boundary tested with simulated error.

---

### OX-WEB-073 — Production Security Headers Config (`vercel.json`)

- **Type:** `DEPLOYMENT`
- **Priority:** `P0`
- **Phase:** `Phase 8 — SEO & Performance`
- **Description:** Configure `vercel.json` with HSTS, CSP, X-Frame-Options (`DENY`), X-Content-Type-Options (`nosniff`), and Referrer-Policy headers.
- **User Value:** Hardens the application against clickjacking, MIME-sniffing, and XSS.
- **Scope:** `vercel.json`.
- **Dependencies:** None
- **Relevant Skills:** `vercel-optimize`
- **Acceptance Criteria:**
  - Security headers present in production deployment config.
- **Definition of Done:** `vercel.json` verified.

---

```
┌─────────────────────────────────────────────────────────────┐
│                 PHASE 9: TESTING & QA                       │
└─────────────────────────────────────────────────────────────┘
```

### OX-WEB-074 — Automated Route & Navigation Testing

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 9 — Testing & QA`
- **Description:** Write automated Playwright integration test verifying navigation between Home, Blogs, Notifications, Downloads, Contact, and 404 views.
- **User Value:** Guarantees zero broken paths or route dead-ends.
- **Scope:** `tests/e2e/navigation.spec.js`.
- **Dependencies:** OX-WEB-010..045
- **Relevant Skills:** `playwright-cli`
- **Acceptance Criteria:**
  - Automated test passes navigation across all routes without HTTP errors.
- **Definition of Done:** Playwright navigation test passing.

---

### OX-WEB-075 — Automated Tri-Mode Theme State Testing

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 9 — Testing & QA`
- **Description:** Write Playwright test validating that toggling Dark, Light, and Monochromatic updates `data-theme` attribute and persists across page reloads.
- **User Value:** Guarantees reliable, bug-free theme switching.
- **Scope:** `tests/e2e/theme.spec.js`.
- **Dependencies:** OX-WEB-005, OX-WEB-013
- **Relevant Skills:** `playwright-cli`
- **Acceptance Criteria:**
  - Validates `data-theme="dark"`, `light`, and `monochromatic` on `<html>`.
  - Verifies `localStorage` persistence.
- **Definition of Done:** Theme test passing in Playwright suite.

---

### OX-WEB-076 — Automated Mobile Drawer & Interaction Testing

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 9 — Testing & QA`
- **Description:** Test mobile drawer opening, focus trapping, Escape key closing, and route navigation at `375×812px` viewport.
- **User Value:** Guarantees flawless mobile navigation accessibility.
- **Scope:** `tests/e2e/mobile-nav.spec.js`.
- **Dependencies:** OX-WEB-012
- **Relevant Skills:** `playwright-cli`, `web-design-guidelines`
- **Acceptance Criteria:**
  - Mobile drawer passes automated interaction tests.
- **Definition of Done:** Mobile nav test passing.

---

### OX-WEB-077 — Automated Form Validation & Honeypot Testing

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 9 — Testing & QA`
- **Description:** Test contact form submission validation, email regex rejection, honeypot spam detection, and successful submission states.
- **User Value:** Guarantees reliable form submission behavior.
- **Scope:** `tests/e2e/contact.spec.js`.
- **Dependencies:** OX-WEB-043
- **Relevant Skills:** `playwright-cli`
- **Acceptance Criteria:**
  - Form blocks invalid submissions and displays appropriate state feedback.
- **Definition of Done:** Contact form test passing.

---

### OX-WEB-078 — Multi-Viewport Playwright Browser Suite

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 9 — Testing & QA`
- **Description:** Execute Playwright test suite across Chromium, Firefox, and WebKit at 320px, 375px, 768px, 1024px, and 1440px viewport widths.
- **User Value:** Broad cross-browser and cross-device compatibility.
- **Scope:** `playwright.config.js`, all test suites.
- **Dependencies:** All UI Tickets
- **Relevant Skills:** `playwright-cli`
- **Acceptance Criteria:**
  - 100% of tests pass across all targeted browser engines.
- **Definition of Done:** Multi-browser suite verified green.

---

### OX-WEB-079 — Visual Regression & Screenshot Baseline Capture

- **Type:** `QA`
- **Priority:** `P1`
- **Phase:** `Phase 9 — Testing & QA`
- **Description:** Capture automated full-page screenshots of all routes across Dark, Light, and Monochromatic modes to establish visual regression baselines.
- **User Value:** Prevents unintended visual drift in future updates.
- **Scope:** `tests/e2e/visual.spec.js`.
- **Dependencies:** OX-WEB-078
- **Relevant Skills:** `playwright-cli`, `impeccable`
- **Acceptance Criteria:**
  - Baseline screenshots captured for all pages and themes.
- **Definition of Done:** Visual baselines cataloged.

---

### OX-WEB-080 — Comprehensive UI/UX Polish & Alignment Audit

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 9 — Testing & QA`
- **Description:** Conduct human-guided heuristic evaluation inspecting vertical rhythm, optical alignments, typography scale, padding consistency, and card borders using `ui-ux-pro-max` and `impeccable`.
- **User Value:** Delivers a world-class, premium agency-level aesthetic.
- **Scope:** Entire frontend interface.
- **Dependencies:** All UI Tickets
- **Relevant Skills:** `ui-ux-pro-max`, `impeccable`
- **Acceptance Criteria:**
  - Layout passes all craft floor criteria with zero visual blemishes.
- **Definition of Done:** UI/UX audit approved.

---

### OX-WEB-081 — Anti-Slop & Craft Floor Compliance Review

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 9 — Testing & QA`
- **Description:** Audit website against anti-slop rules using `taste-skill` and `minimalist-skill` (verifying zero generic AI tropes, purple mesh gradients, fake counters, or EdTech clichés).
- **User Value:** Guarantees an authentic, confident, non-templated brand personality.
- **Scope:** Entire website.
- **Dependencies:** All UI Tickets
- **Relevant Skills:** `taste-skill`, `minimalist-skill`
- **Acceptance Criteria:**
  - 100% compliance with anti-slop constraints verified.
- **Definition of Done:** Anti-slop review signed off.

---

### OX-WEB-082 — OpportunityX Core Brand & Logo Integrity Audit

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 9 — Testing & QA`
- **Description:** Verify that the OpportunityX core X logo mark and sub-product marks adhere to strict locking rules across all routes and theme modes.
- **User Value:** Flawless brand consistency and authority.
- **Scope:** Header, footer, and product cards.
- **Dependencies:** OX-WEB-002
- **Relevant Skills:** `brandkit`
- **Acceptance Criteria:**
  - Brand assets render crisp SVG vectors with zero distortion.
- **Definition of Done:** Brand audit approved.

---

### OX-WEB-083 — React Architecture & Composition Pattern Audit

- **Type:** `QA`
- **Priority:** `P1`
- **Phase:** `Phase 9 — Testing & QA`
- **Description:** Review component tree using `react-best-practices` and `composition-patterns` (verifying no files > 150 lines, no boolean-prop explosion, clean leaf state).
- **User Value:** Highly maintainable codebase for future engineering contributors.
- **Scope:** `src/components/`, `src/hooks/`, `src/services/`.
- **Dependencies:** All Components
- **Relevant Skills:** `react-best-practices`, `composition-patterns`
- **Acceptance Criteria:**
  - Clean composition verified with zero architectural anti-patterns.
- **Definition of Done:** Code architecture review passed.

---

### OX-WEB-084 — Production Codebase Cleanup & Dead Code Purge

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 9 — Testing & QA`
- **Description:** Run production cleanup using `production-code-cleanup` to purge unused imports, dead CSS classes, temporary debug logs, and unreferenced assets without altering approved behavior.
- **User Value:** Clean, lean, highly maintainable production codebase.
- **Scope:** Entire `src/` directory.
- **Dependencies:** All Code
- **Relevant Skills:** `production-code-cleanup`
- **Acceptance Criteria:**
  - Zero unused dependencies or dead code blocks.
  - Zero debug `console.log` statements in production build.
- **Definition of Done:** Codebase cleaned and verified.

---

```
┌─────────────────────────────────────────────────────────────┐
│             PHASE 10: PRODUCTION READINESS                  │
└─────────────────────────────────────────────────────────────┘
```

### OX-WEB-085 — End-to-End Product Flow QA Sign-Off

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 10 — Production Readiness`
- **Status:** `COMPLETED`
- **Description:** Perform complete manual and automated validation across all 6 views (`Home`, `Blogs`, `Blog Detail`, `Notifications`, `Downloads`, `Contact`).
- **User Value:** Seamless, error-free user journeys for all visitors.
- **Scope:** Entire application.
- **Dependencies:** All Prior
- **Acceptance Criteria:**
  - 100% of user flows pass without broken links or exceptions.
- **Definition of Done:** Product flow sign-off complete.

---

### OX-WEB-086 — Comprehensive Tri-Mode Theme QA Sign-Off

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 10 — Production Readiness`
- **Status:** `COMPLETED`
- **Description:** Validate all 3 theme modes across every page view, component, form input, and footer state.
- **User Value:** Universal visual excellence in Dark, Light, and Monochromatic modes.
- **Scope:** Entire application.
- **Dependencies:** All Prior
- **Acceptance Criteria:**
  - Zero theme-specific rendering bugs or contrast failures.
- **Definition of Done:** Theme QA sign-off complete.

---

### OX-WEB-087 — Full Responsive Multi-Device QA Sign-Off

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 10 — Production Readiness`
- **Status:** `COMPLETED`
- **Description:** Validate mobile, tablet, laptop, and ultra-wide viewports across real device classes.
- **User Value:** Perfect visual rendering regardless of screen size.
- **Scope:** Entire application.
- **Dependencies:** All Prior
- **Acceptance Criteria:**
  - Zero responsive layout breaks or horizontal scrollbars.
- **Definition of Done:** Responsive QA sign-off complete.

---

### OX-WEB-088 — Accessibility Standards Sign-Off (WCAG AA)

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 10 — Production Readiness`
- **Status:** `COMPLETED`
- **Description:** Validate full WCAG 2.1 AA compliance, screen-reader navigation, and keyboard accessibility.
- **User Value:** Complete inclusivity for all users.
- **Scope:** Entire application.
- **Dependencies:** All Prior
- **Acceptance Criteria:**
  - 100% compliance with WCAG 2.1 AA standards verified.
- **Definition of Done:** Accessibility sign-off complete.

---

### OX-WEB-089 — Performance Budget Sign-Off (Lighthouse >= 95)

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 10 — Production Readiness`
- **Status:** `COMPLETED`
- **Description:** Execute Lighthouse performance audit verifying scores $\ge 95$ across Performance, Accessibility, Best Practices, and SEO.
- **User Value:** World-class speed and technical optimization.
- **Scope:** Entire application.
- **Dependencies:** All Prior
- **Acceptance Criteria:**
  - Lighthouse audit passes $\ge 95$ threshold across all categories.
- **Definition of Done:** Performance budget sign-off complete.

---

### OX-WEB-090 — Final Human Visual Craft Review & Sign-Off

- **Type:** `QA`
- **Priority:** `P0`
- **Phase:** `Phase 10 — Production Readiness`
- **Status:** `COMPLETED`
- **Description:** Final visual inspection by engineering and design leadership ensuring peak aesthetic craft.
- **User Value:** Delivers an unforgettable first impression worthy of a global ecosystem.
- **Scope:** Entire application.
- **Dependencies:** All Prior
- **Acceptance Criteria:**
  - Visual craft approved without reservations.
- **Definition of Done:** Craft review sign-off complete.

---

### OX-WEB-091 — Vercel Production Build & Environment Setup

- **Type:** `DEPLOYMENT`
- **Priority:** `P0`
- **Phase:** `Phase 10 — Production Readiness`
- **Status:** `COMPLETED`
- **Description:** Validate production build command (`npm run build`), verify output artifacts, and configure public environment variables (`VITE_PUBLIC_SITE_URL`, `VITE_PUBLIC_RADAR_URL`).
- **User Value:** Reliable, repeatable production deployment pipeline.
- **Scope:** `package.json`, `vite.config.js`, Vercel build configuration.
- **Dependencies:** All Prior
- **Relevant Skills:** `vercel-optimize`
- **Acceptance Criteria:**
  - `npm run build` succeeds with zero errors or bundle warnings.
- **Definition of Done:** Production build verified.

---

### OX-WEB-092 — Production Deployment & Domain Verification

- **Type:** `DEPLOYMENT`
- **Priority:** `P0`
- **Phase:** `Phase 10 — Production Readiness`
- **Status:** `CONFIGURED — DEPLOYMENT VERIFICATION REQUIRED`
- **Description:** Deploy static SPA build to Vercel Edge CDN on `https://opportunityx.co.in`, verify SSL certificate, and test DNS resolution.
- **User Value:** Live, secure global availability for public visitors.
- **Scope:** Vercel deployment pipeline, DNS configuration.
- **Dependencies:** OX-WEB-091
- **Acceptance Criteria:**
  - Live deployment serving over HTTPS with valid SSL certificates.
  - Sub-millisecond Edge caching active on static assets.
- **Definition of Done:** Production domain live and responding.

---

### OX-WEB-093 — Final Release Sign-Off & Verification Checklist

- **Type:** `DEPLOYMENT`
- **Priority:** `P0`
- **Phase:** `Phase 10 — Production Readiness`
- **Status:** `COMPLETED`
- **Description:** Execute final release verification protocol confirming that all P0 and P1 backlog tickets are 100% satisfied.
- **User Value:** Flawless, validated public launch of the OpportunityX ecosystem.
- **Scope:** Complete project release.
- **Dependencies:** All Prior
- **Acceptance Criteria:**
  - All 93 backlog tickets verified complete against acceptance criteria.
- **Definition of Done:** Official OpportunityX Main Ecosystem Website release complete.

---

```
┌─────────────────────────────────────────────────────────────┐
│                 FUTURE / DEFERRED ROADMAP                   │
└─────────────────────────────────────────────────────────────┘
```

### OX-FUTURE-001 — Central OpportunityX Community Platform

- **Type:** `PAGE` | **Priority:** `P3` | **Phase:** `Future Roadmap`
- **Description:** Full interactive community platform with user accounts, verified student builder profiles, project showcase feeds, peer reviews, and discussion boards.

### OX-FUTURE-002 — Central Ecosystem Authentication & SSO

- **Type:** `FOUNDATION` | **Priority:** `P3` | **Phase:** `Future Roadmap`
- **Description:** Unified ecosystem OAuth2 / OIDC authentication service enabling single sign-on across `opportunityx.co.in`, `radar.opportunityx.co.in`, and future sub-products.

### OX-FUTURE-003 — Headless CMS & Editorial Admin Portal

- **Type:** `PAGE` | **Priority:** `P3` | **Phase:** `Future Roadmap`
- **Description:** Authenticated administrative dashboard for editorial publishing, markdown authoring, and notification dispatch.

### OX-FUTURE-004 — Native Binary Distribution Storage & Update Pipeline

- **Type:** `DEPLOYMENT` | **Priority:** `P3` | **Phase:** `Future Roadmap`
- **Description:** Automated CI/CD compilation and artifact distribution pipeline for signed desktop and mobile binaries.

### OX-FUTURE-005 — Privacy-Preserving Analytics Pipeline

- **Type:** `DATA` | **Priority:** `P3` | **Phase:** `Future Roadmap`
- **Description:** Self-hosted, privacy-first telemetry aggregation tracking ecosystem routing without collecting personal user information.

### OX-FUTURE-006 — Automated Radar Event Ingestion Webhooks

- **Type:** `DATA` | **Priority:** `P3` | **Phase:** `Future Roadmap`
- **Description:** Automated webhook sync updating live hackathon and opportunity counts from OpportunityX Radar into the main ecosystem landing page.

---

## 4. Engineering Dependency Graph

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         Phase Execution Order                               │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                         Phase 0: Audit & Discovery
                           (OX-WEB-001 .. 003)
                                       │
                                       ▼
                         Phase 1: Design Foundation
                      Tokens, Themes, Typography, Grid
                           (OX-WEB-004 .. 009)
                                       │
                                       ▼
                         Phase 2: Application Shell
                      Routing, Navbar, Mobile Drawer, Footer
                           (OX-WEB-010 .. 016)
                                       │
                                       ▼
                         Phase 3: Home / Landing Page
                     Hero, Ecosystem (Radar), Community,
                   Blogs, Notifications, Downloads, Final CTA
                           (OX-WEB-017 .. 045)
                                       │
                                       ▼
                         Phase 4: Secondary Hubs
                      /blogs, /notifications, /downloads, /contact
                           (OX-WEB-029 .. 043)
                                       │
                                       ▼
                         Phase 6: Motion & Interaction
                      Hover, Focus, Theme & Nav Transitions
                           (OX-WEB-046 .. 049)
                                       │
                                       ▼
                         Phase 7: Responsive & a11y
                      Mobile 320px–430px, Keyboard Nav, WCAG AA
                           (OX-WEB-050 .. 058)
                                       │
                                       ▼
                         Phase 8: SEO & Performance
                      Meta Tags, Code Splitting, Web Vitals, Security
                           (OX-WEB-059 .. 073)
                                       │
                                       ▼
                         Phase 9: Testing & QA
                      Playwright E2E, Theme Tests, Visual Audits
                           (OX-WEB-074 .. 084)
                                       │
                                       ▼
                         Phase 10: Production Readiness
                      Vercel Edge Deployment, Verification & Sign-Off
                           (OX-WEB-085 .. 093)
```

---

## 5. Release Milestones

- **M0 — Documentation & Planning Complete:** All 5 architectural and product specifications approved.
- **M1 — Design Foundation & Shell Complete:** Design tokens, tri-mode theme engine, router, navbar, and footer operational.
- **M2 — Home Landing Page Complete:** All 8 sequential landing sections rendering data-driven content with OpportunityX Radar highlighted.
- **M3 — Secondary Hubs Complete:** Dedicated pages for Blogs, Notifications, Downloads, and Contact fully functional.
- **M4 — Quality, a11y & Performance Complete:** Responsive across all viewports, full WCAG 2.1 AA compliance, and sub-1.8s Core Web Vitals.
- **M5 — Production Launch:** Automated Playwright test suite green, Vercel Edge deployment active on `https://opportunityx.co.in`.

---

## 6. Launch Blockers vs. Non-Blocking Polish

### 🔴 Critical Launch Blockers (Must Be 100% Resolved for Launch):

- Broken routing or 404 navigation failures on core links.
- Tri-mode theme failures, illegible text contrast, or unstyled theme flashes.
- Distorted or unapproved OpportunityX core X logo marks.
- Mobile layout overflows or broken hamburger drawer navigation.
- Contact form credential leaks or broken submission feedback.
- Broken external routing to OpportunityX Radar (`radar.opportunityx.co.in`).
- Console errors or runtime React rendering crashes.

### 🟡 Non-Blocking Polish (P2 — Can Follow Initial Release):

- Micro-interaction duration fine-tuning (e.g., 140ms vs 160ms).
- Minor optical whitespace adjustments on ultra-wide screens.
- Additional markdown code syntax highlight themes.

---

## 7. Out-of-Scope Exclusions (Strictly Excluded from v1)

- ❌ Full social feed with live user commenting engine.
- ❌ User authentication login/signup modals and database sessions.
- ❌ User profile dashboards and saved opportunity bookmarks.
- ❌ Direct hackathon/job application ingestion portals (managed within Radar).
- ❌ Heavy 3D WebGL meshes or continuous canvas particle loops.

---

## 8. Definition of Done (DoD) for Backlog Package

The Feature Ticket Backlog `docs/05-FEATURE-TICKET-LIST.md` is approved when:

- [x] Complete 93-ticket implementation breakdown covering PRD, Architecture, Security, and Frontend specs is created.
- [x] Strict separation of OpportunityX parent vs OpportunityX Radar is preserved.
- [x] Tri-mode theme system and centralized community principles are enforced.
- [x] All tickets contain explicit types, priorities, user value, acceptance criteria, and skill mappings.
- [x] Clear 11-phase execution order and dependency graphs are established.
- [x] Initial ticket status for all implementation items is set to `NOT STARTED`.
