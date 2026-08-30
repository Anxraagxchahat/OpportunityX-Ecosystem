# Product Requirements Document (PRD) — 01
# OpportunityX Main Ecosystem Website

---

## Document Metadata
- **Product Name:** OpportunityX Main Ecosystem Website
- **Parent Brand:** OpportunityX
- **Primary Domain:** `https://opportunityx.co.in`
- **Document Version:** 1.0.0
- **Document Status:** Draft / Approved for Technical Architecture & Design Specs
- **Target Audience:** Students, Developers, Builders, Creators, Founders, Early-Career Professionals, Hiring Partners & Academic Collaborators

---

## 1. Executive Summary & Product Vision

### 1.1 Executive Summary
OpportunityX is a technology-driven ecosystem built to revolutionize how students and young professionals discover career-defining opportunities, build real-world products, cultivate meaningful professional networks, and accelerate their career trajectories.

The **OpportunityX Main Ecosystem Website** serves as the canonical, authoritative digital home of the entire parent brand. It unifies all ecosystem sub-products, platform downloads, official updates, editorial resources, and the central community under a single, highly cohesive, premium web interface.

### 1.2 Core Product Vision
> **"One ecosystem. Endless possibilities."**

OpportunityX is designed to dismantle fragmented discovery, gatekept professional networks, and disjointed tooling for young talent. The ecosystem provides a unified platform where ambitious individuals transition seamlessly from **Discovery** (via OpportunityX Radar) to **Skill Validation & Building** (via upcoming ecosystem tools) to **Community Collaboration**.

---

## 2. Problem Statement & Market Opportunity

### 2.1 The Problem
1. **Fragmented Opportunity Landscape:** Hackathons, internships, fellowships, open-source initiatives, and scholarships are scattered across dozens of unstandardized portals, social channels, and institutional boards.
2. **Disconnected Career Ecosystems:** Career platforms treat discovery, building, portfolio validation, and community as isolated silos, forcing students to navigate disjointed tools.
3. **Impersonal & Corporate Aesthetics:** Traditional edtech and career sites rely on outdated, uninspiring visuals (graduation caps, stock photography, uninspired portals) that fail to resonate with modern developers and digital builders.
4. **Lack of Centralized Community Identity:** Most platforms segment their users by individual features rather than fostering a singular, collaborative builder culture.

### 2.2 The OpportunityX Solution
- A **monolithic parent ecosystem** communicating technological excellence, trust, and global standards.
- A **central hub** routing users to dedicated specialized products (starting with OpportunityX Radar) while anchoring them in a shared ecosystem identity.
- A **world-class digital presence** engineered with precision design, fast performance, and an uncompromising anti-slop aesthetic.

---

## 3. Brand Architecture & Ecosystem Separation

The brand architecture of OpportunityX follows a strict **Parent Ecosystem vs. Specialized Product** model.

```
                         ┌────────────────────────┐
                         │      OpportunityX      │
                         │   opportunityx.co.in   │
                         │  (Parent Ecosystem)    │
                         └───────────┬────────────┘
                                     │
       ┌─────────────────────────────┼─────────────────────────────┐
       │                             │                             │
       ▼                             ▼                             ▼
┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐
│   OpportunityX Radar    │  │  OpportunityX Career    │  │ OpportunityX Freelance  │
│ radar.opportunityx.co.in│  │     (Planned/Beta)      │  │        (Planned)        │
│   [Flagship Product]    │  └─────────────────────────┘  └─────────────────────────┘
└─────────────────────────┘
       │
       ├─► Hackathons, Internships, Scholarships, Fellowships, Open Source, etc.
```

### 3.1 Parent: OpportunityX (`opportunityx.co.in`)
- **Role:** The overarching umbrella, holding identity, brand voice, global community, ecosystem directory, official updates, blogs, and downloads.
- **Boundary:** The main website **must NOT** become a copy or clone of OpportunityX Radar. It represents the broader vision and routes traffic to specialized products.

### 3.2 Product: OpportunityX Radar (`radar.opportunityx.co.in`)
- **Role:** The dedicated discovery engine for real-time opportunities:
  - Hackathons & Hiring Challenges
  - Internships & Early Career Roles
  - Scholarships & Fellowships
  - Open Source Programs & Grants
  - Technical Workshops & Summits
- **Boundary:** Radar is a distinct, specialized sub-application within the ecosystem with its own focused operational workflows.

---

## 4. Brand Identity & Visual System

### 4.1 Official Logo System
The OpportunityX visual mark is built around the proprietary **"X" core mark**.

#### Strict Identity Rules:
- **Locked Brand Mark:** The geometric X mark is final and locked. Do not redraw, distort, skew, rotate, or alter the geometry of the logo.
- **No Alternate Marks:** Do not generate alternative symbols, shields, or abstract icons to represent OpportunityX.
- **No Taglines Attached:** Do not append lockup taglines or sub-labels directly into the primary vector logo file.
- **Universal Consistency:** The identical core identity must remain uniform across all present and future ecosystem sub-domains.

#### Official Logo Variants:
1. **Dark Mode Variant:** High-contrast white/accent glyph optimized for deep-dark and OLED backgrounds (`#0A0A0B` / `#000000`).
2. **Light Mode Variant:** Near-black/accent glyph optimized for crisp white and light surface backgrounds (`#FFFFFF` / `#F8FAFC`).
3. **Monochromatic Variant:** Pure neutral black-and-white glyph for print, minimal badges, and high-contrast monochrome UI states.

### 4.2 Tri-Mode Theme System
The OpportunityX platform natively supports exactly **three** first-class visual themes driven by a singular unified design token architecture:

| Theme Mode | Surface & Background | Primary Text / Headings | Accent & Focus | Secondary / Muted |
|---|---|---|---|---|
| **1. Dark (Default)** | Near-black (`#09090B`, `#121215`, `#18181B`) | Pure / Off-White (`#FAFAFA`, `#F4F4F5`) | OpportunityX Amber/Orange (`#FF6B00` / `#F59E0B`) | Zinc / Slate (`#71717A`, `#A1A1AA`) |
| **2. Light** | Crisp White & Neutral Light (`#FFFFFF`, `#F8FAFC`, `#F1F5F9`) | Near-black Slate (`#09090B`, `#18181B`) | OpportunityX Amber/Orange (`#EA580C` / `#D97706`) | Muted Slate (`#64748B`, `#475569`) |
| **3. Monochromatic** | Pure Stark Black / High-Contrast White (`#000000` / `#FFFFFF`) | High-Contrast White / Black (`#FFFFFF` / `#000000`) | Stark Neutral White / Black (`#FFFFFF` / `#000000`) | Grayscale Tones (`#52525B`, `#D4D4D8`) |

---

## 5. Goals & Non-Goals

### 5.1 Project Goals (v1 Scope)
1. **Establish Brand Authority:** Present OpportunityX as an innovative, premium, and reliable technology ecosystem for modern learners and builders.
2. **Clear Ecosystem Navigation:** Enable visitors to immediately understand what OpportunityX is, explore its products (with primary focus on Radar), and navigate seamlessly.
3. **Centralized Communication Hub:** Provide an official destination for editorial publications (`/blogs`) and official system notices (`/notifications`).
4. **Platform Distribution Hub:** Provide a verified download directory (`/downloads`) for desktop and mobile clients.
5. **Direct Channel Access:** Offer a categorized contact and partnership channel (`/contact`).
6. **Community Seed:** Articulate the mission of the single unified OpportunityX Community and drive early member acquisition.

### 5.2 Non-Goals (Explicitly Excluded from v1)
- ❌ **No Full Social Network Implementation:** No live feed engine, follower graphs, DMs, or real-time social timeline in Phase 1.
- ❌ **No Product-Specific Communities:** No siloed communities for individual products (Radar, Career, etc.).
- ❌ **No Complex User Authentication / Account System:** The v1 ecosystem landing site is public and access-unlocked.
- ❌ **No Direct Opportunity Ingestion Engine on Main Site:** The main site does not host live hackathon application forms or direct job application databases (managed within Radar).
- ❌ **No Heavy 3D Graphics / Bloated Canvases:** No heavy WebGL 3D meshes that degrade mobile battery life or lighthouse performance scores.
- ❌ **No Vanity Metrics or Artificial Proof:** No simulated user counters, fake testimonials, or fabricated corporate partnership logos.

---

## 6. Information Architecture & Route Hierarchy

```
opportunityx.co.in
├── / (Root Home Landing Page)
│   ├── #hero
│   ├── #ecosystem
│   ├── #community
│   ├── #blogs
│   ├── #notifications
│   ├── #downloads
│   └── #contact
├── /blogs (Editorial Index)
│   └── /blogs/:slug (Individual Article Reader)
├── /notifications (Official System Feed & Releases)
├── /downloads (Platform Download Center)
└── /contact (Inquiries & Partnerships Portal)
```

### 6.1 Primary Navigation Bar
The top header provides fixed/sticky global navigation across all routes:
- **Brand Identity:** OpportunityX Core Logo + Wordmark (routes to `/`)
- **Navigation Links:**
  1. `Home` (Smooth-scrolls to top when on `/`, routes to `/` from subpages)
  2. `Blogs` (`/blogs`)
  3. `Notifications` (`/notifications`)
  4. `Downloads` (`/downloads`)
  5. `Contact` (`/contact`)
- **Actions:**
  - `Theme Selector` (Toggles Dark / Light / Monochromatic)
  - `Ecosystem CTA` ("Explore Radar" / "Join Community")

### 6.2 Global Footer Architecture
A structured four-column ecosystem footer providing deep routing, legal compliance, and network presence:
1. **Column 1 — Ecosystem:** OpportunityX Radar (Live), Career (In Dev), Freelance (Planned), Resume Studio (Planned), Portfolio (Planned), Identity & Verification (Planned).
2. **Column 2 — Resources:** Blogs & Insights, Official Notifications, Platform Downloads, System Status.
3. **Column 3 — Company & Connect:** Contact & Partnerships, Community Discord/Telegram, About OpportunityX, Brand Assets.
4. **Column 4 — Legal & Standards:** Privacy Policy, Terms of Service, Community Guidelines, Security Disclosures.
5. **Bottom Bar:** Copyright notices, dynamic theme indicator, and active ecosystem status badge.

---

## 7. Page-by-Page Functional Specifications

### 7.1 Home / Root Landing Page (`/`)
The root page serves as the narrative spine of OpportunityX. It guides the visitor through the complete value story.

#### 8.1.1 Hero Section
- **Objective:** Immediate cognitive clarity within 3 seconds of load.
- **Content Hierarchy:**
  - Eyebrow Badge: `The Unified Student & Builder Ecosystem`
  - Primary Headline: `One ecosystem. Endless possibilities.` (or calibrated copy)
  - Sub-headline: Supporting narrative on discovering opportunities, building proof-of-work, and accelerating technical careers.
  - Action Cluster: Primary CTA (`Explore Ecosystem` / `Launch Radar`) + Secondary CTA (`Join Community`).
  - Visual Focal Element: Interactive ecosystem preview card / clean geometric structural diagram (lightweight SVG/CSS).

#### 8.1.2 Ecosystem Section
- **Objective:** Showcase the multi-product roadmap with clear operational transparency.
- **Component Structure — Product Grid:**
  - **OpportunityX Radar (Flagship Prominence):** Expanded card highlight with live opportunity category pills (Hackathons, Internships, Open Source, Fellowships), direct external link to `radar.opportunityx.co.in`, and status badge: `LIVE`.
  - **OpportunityX Career:** Next-gen career mapping & mentoring. Status: `IN DEVELOPMENT`.
  - **OpportunityX Freelance & Bounties:** Curated micro-gigs and project bounties for student builders. Status: `COMING SOON`.
  - **OpportunityX Resume & Portfolio:** Verified proof-of-work builder profiles. Status: `PLANNED`.
  - **OpportunityX Verification:** Credentialing and skill validation network. Status: `PLANNED`.
- **Status Lifecycle System:** Every ecosystem entity must display a standardized badge:
  - `🟢 Live`
  - `🟡 Beta`
  - `🟣 In Development`
  - `⚪ Coming Soon`
  - `🔵 Planned`

#### 8.1.3 Central Community Section
- **Objective:** Introduce the single unified community foundation without fragmenting into product-specific silos.
- **Core Narrative:** One central gathering place uniting student engineers, product designers, open-source contributors, and founders.
- **Key Highlights:**
  - Cross-domain collaboration (teams for hackathons, co-founders for projects).
  - Direct AMA sessions, technical workshops, and peer code reviews.
  - Active channels on primary communication platforms (Discord / Telegram / Community forum).
- **CTA:** `Join the OpportunityX Community` (Routes to official invite/portal).

#### 8.1.4 Blogs Preview Section
- **Objective:** Demonstrate thought leadership and provide valuable technical and career reading.
- **Components:**
  - Section header + `View All Articles →` link (routes to `/blogs`).
  - 3-card curated grid featuring latest/featured posts with category tags (`Career`, `Technology`, `Opportunities`, `Student Guides`, `Product Updates`).
  - Card metadata: Title, excerpt, read time, publication date, author attribution.

#### 8.1.5 Notifications Preview Section
- **Objective:** Provide a transparent, real-time pulse of official ecosystem updates, maintenance, and launches.
- **Components:**
  - Section header + `View All Updates →` link (routes to `/notifications`).
  - Compact feed showing the 3 most recent official bulletins with category badges (`Product Launch`, `Feature Release`, `Maintenance`, `Announcement`).
  - Bulletins display timestamps and one-line summaries.

#### 8.1.6 Downloads Preview Section
- **Objective:** Give instant visibility into client application availability across operating systems.
- **Components:**
  - Grid of supported OS platforms: Android, Windows, macOS, Linux, and iOS (marked with real-time status: `Available`, `Beta`, or `In Pipeline`).
  - Strict Rule: **Never claim a platform build is downloadable unless verified and active.**

#### 8.1.7 Contact Preview Section
- **Objective:** Low-friction bridge for inquiries, enterprise hiring partnerships, and community feedback.
- **Components:**
  - Clean card summarizing contact channels (General Support, Business & Partnerships, University Collaborations).
  - Quick action button: `Get in Touch →` (opens `/contact`).

#### 8.1.8 Final CTA Section
- **Objective:** High-impact ecosystem conclusion leaving a strong, confident impression.
- **Copy Direction:** `Your next opportunity could start here.`
- **Action Buttons:** `Explore OpportunityX` + `Join Community`.

---

### 7.2 Editorial Hub (`/blogs`) & Reader (`/blogs/:slug`)

#### 7.2.1 Blog Listing Page (`/blogs`)
- **Featured Hero Article:** Large highlight card showcasing the most critical editorial publication.
- **Category Filter Tabs:** `All`, `Career Growth`, `Tech & Engineering`, `Hackathons & Radar`, `Student Guides`, `Ecosystem`.
- **Search Bar:** Real-time client-side keyword filtering across titles, excerpts, and tags.
- **Article Grid:** Responsive card layout with semantic metadata, reading time, and author badges.
- **Pagination / Load More:** Scalable structure for long-term editorial expansion.

#### 7.2.2 Individual Article Reader (`/blogs/:slug`)
- **Header:** Category breadcrumb, article title, subtitle, author avatar & bio, publication date, estimated read time.
- **Typography & Prose:** High-legibility typography optimized for focused reading (calibrated line heights, code-block syntax styling, callout alerts).
- **Social Sharing & Action Bar:** Copy link, Twitter/X share, LinkedIn share.
- **Related Articles:** 2–3 contextual article recommendations based on matching category tags.
- **Back Navigation:** Clean return link to `/blogs`.

---

### 7.3 Notifications & Announcements Hub (`/notifications`)
- **Purpose:** Distinct chronological log of official OpportunityX updates (separate from long-form blog articles).
- **Filter Tabs:** `All Updates`, `Product Releases`, `Radar Feed`, `Maintenance & Reliability`, `Community Bulletins`.
- **Feed Item Specifications:**
  - Release version / Announcement type badge.
  - Date & timestamp.
  - Concise title and detailed markdown changelog / description.
  - Optional action link (e.g., `Read Release Notes`, `Visit Product`, `Download Patch`).

---

### 7.4 Official Downloads Center (`/downloads`)
- **Purpose:** The verified, secure download repository for official OpportunityX desktop, mobile, and CLI software binaries.
- **Platform Matrix:**
  - **Android:** `.apk` direct download and Google Play Store link (when active).
  - **Windows:** `.exe` / `.msi` installers and Windows Store package info.
  - **macOS:** Universal `.dmg` (Apple Silicon & Intel builds).
  - **Linux:** `.deb`, `.AppImage`, and `.tar.gz` packages.
  - **iOS:** TestFlight / App Store availability status.
- **Card Information Architecture:**
  - OS Icon & Platform Title.
  - Current Version (e.g. `v1.2.0`).
  - Release Date & Download Size.
  - Primary `Download Now` CTA.
  - Checksum (SHA-256) & Release Notes link.
  - Explicit status tag if platform is in development (`Coming Soon` / `Private Beta`).

---

### 7.5 Contact & Inquiries Portal (`/contact`)
- **Purpose:** Structured, spam-protected inquiry system for the global ecosystem.
- **Form Fields:**
  - `Full Name` (Required)
  - `Email Address` (Required, validated)
  - `Inquiry Category` (Dropdown: `General Inquiry`, `Partnership & Sponsorship`, `College Club & University Collaboration`, `Press & Media`, `Bug / Issue Report`)
  - `Subject` (Required)
  - `Message` (Required, multi-line)
- **Direct Contact Sidebar:**
  - Official email routing (`contact@opportunityx.co.in`, `partnerships@opportunityx.co.in`).
  - Community support channel links.
  - Expected response timeline indicator (e.g., `Typical response time: 24–48 hours`).

---

## 8. Community Architecture: Centralized Model

### 8.1 The Single Community Rule
OpportunityX adheres to a **Unified Global Community** principle:
- There will **never** be fragmented, isolated community silos (e.g., no isolated "Radar Community", "Resume Community", or "Career Community").
- Every builder, student, engineer, designer, and partner belongs to the unified **OpportunityX Community**.

```
                           ┌─────────────────────────────┐
                           │   OpportunityX Community    │
                           │     (Unified Platform)      │
                           └──────────────┬──────────────┘
                                          │
       ┌──────────────────┬───────────────┴───────────────┬──────────────────┐
       ▼                  ▼                               ▼                  ▼
┌──────────────┐   ┌──────────────┐                ┌──────────────┐   ┌──────────────┐
│  Hackathon   │   │ Open Source  │                │  Peer Code   │   │ Project Team │
│  Teammates   │   │ Contributors │                │   Reviews    │   │  Formation   │
└──────────────┘   └──────────────┘                └──────────────┘   └──────────────┘
```

### 8.2 Roadmap Evolution: Phase 1 vs. Future Vision
- **Phase 1 (Current Website Scope):**
  - High-impact value proposition presentation on the landing page.
  - Onboarding funnel routing users to official communication hubs (Discord, Telegram, Events).
  - Foundation for community showcases.
- **Future Scope (Phase 2+ Product Roadmap):**
  - Verified Builder Profiles & Skill Badges.
  - Proof-of-work project showcases with live feedback.
  - Peer-to-peer hackathon teammate matching algorithm.
  - Integrated community discussion boards linked to OpportunityX Radar opportunity IDs.

---

## 9. Design Philosophy & Anti-Slop Guidelines

In accordance with our design intelligence standards (`ui-ux-pro-max`, `taste-skill`, `claude-design-recipes`, and `impeccable`), the OpportunityX website enforces a strict visual craft floor.

### 9.1 Brand Mood & Tone
- **Vibe:** Technology-driven, precise, quietly confident, modern, Swiss-inspired typography, high information hierarchy, and developer-first polish.
- **Visual Personality:** Fast, lightweight, geometric, elegant, trustworthy.

### 9.2 Strict Anti-Slop Guardrails (Absolute Bans)
1. 🚫 **No Traditional EdTech Clichés:** Strictly forbid graduation caps, stacked books, pencils, blackboard textures, and cartoonish mascots.
2. 🚫 **No AI Slop & Tropes:** Strictly forbid glowing purple/pink mesh gradients, floating neon spheres, generic AI brains, and arbitrary backdrop-blur on every element.
3. 🚫 **No Card Container Overuse:** Do not wrap every single sentence or heading in rounded border boxes. Use typography scale, whitespace, and subtle divider rules to create visual rhythm.
4. 🚫 **No Fake Social Proof:** Absolutely no fabricated user counters (e.g. "Joined by 1,000,000+ students"), fake 5-star ratings, or unverified corporate logos.
5. 🚫 **No Stock Student Photos:** Avoid generic stock photography of smiling students pointing at blank laptop screens. Use crisp vector graphics, UI previews, and typography-driven layouts.
6. 🚫 **No Raw Emojis as UI Icons:** Use clean, professional SVG icons (Lucide / Radix / Phosphor) exclusively.

### 9.3 Typography & Color Execution
- **Type Scale:** Crisp geometric sans-serif for UI labels and headings (e.g., `Inter`, `Geist Sans`, or `Outfit`) paired with a robust monospace font for metadata and versions (e.g., `JetBrains Mono` or `Fira Code`).
- **Contrast Ratios:** Minimum **4.5:1** contrast for normal text and **3:1** for UI components across all three theme modes (WCAG 2.1 AA Compliance).
- **Intentional Spacing:** Strict 4px/8px modular spacing grid (no arbitrary margins or layout shifts).

---

## 10. Responsive, Motion & Accessibility Standards

### 10.1 Responsive Breakpoint Matrix
The layout is designed mobile-first and tested across standard device classes:

| Breakpoint Target | Width Range | Layout Adaptation |
|---|---|---|
| **Mobile (Compact)** | `< 640px` | Single-column fluid layout, full-width touch targets (min 44×44px), collapsible slide drawer nav. |
| **Tablet (Medium)** | `640px – 1023px` | 2-column balanced grid, adapted ecosystem cards, adjusted typography scale. |
| **Laptop / Desktop (Large)** | `1024px – 1439px` | Standard 12-column grid, max content container width `1280px`, persistent header. |
| **Wide Screen (Ultra-wide)** | `≥ 1440px` | Centered layout container, optical margins, proportional whitespace breathing room. |

### 10.2 Motion Principles
- **Subtle & Purposeful:** Motion exists solely to indicate state change, reinforce spatial hierarchy, or reward interaction.
- **Timing Budgets:** Micro-interactions (hover, active) must complete in **150ms – 250ms**. Section transitions must not exceed **350ms**.
- **Reduced Motion Support:** Always wrap non-essential animations inside `@media (prefers-reduced-motion: reduce)`. Provide instantaneous, graceful fallback states.

### 10.3 Accessibility (a11y) Foundation
- Full keyboard navigation support (logical tab order, visible non-clipped `:focus-visible` focus rings).
- Proper ARIA landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<aside>`).
- Explicit `alt` attributes on all illustrations and `aria-hidden="true"` on decorative SVGs.
- Form controls with visible `<label>` elements and inline error state announcements.

---

## 11. Content & Data Architecture

To ensure the website remains easily maintainable and future-proof for API/CMS integrations, all core content must be decoupled from UI presentation components.

### 11.1 Data Schema Specifications (JSON / Data Modules)

#### 1. Ecosystem Products Schema
```typescript
interface EcosystemProduct {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  status: 'live' | 'beta' | 'in-development' | 'coming-soon' | 'planned';
  isFlagship: boolean;
  externalUrl?: string;
  icon: string;
  highlightPills: string[];
}
```

#### 2. Blog Article Schema
```typescript
interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or rich content
  category: 'career' | 'technology' | 'radar' | 'guides' | 'ecosystem';
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  publishedAt: string; // ISO date string
  readTimeMinutes: number;
  featured: boolean;
  coverImageUrl?: string;
  tags: string[];
}
```

#### 3. Notification Schema
```typescript
interface SystemNotification {
  id: string;
  title: string;
  summary: string;
  category: 'product' | 'release' | 'announcement' | 'maintenance' | 'community';
  publishedAt: string;
  version?: string;
  actionUrl?: string;
  actionLabel?: string;
  isPinned: boolean;
}
```

#### 4. Download Binary Schema
```typescript
interface DownloadItem {
  id: string;
  platform: 'android' | 'windows' | 'macos' | 'linux' | 'ios';
  platformName: string;
  version: string;
  status: 'available' | 'beta' | 'coming-soon';
  releaseDate?: string;
  fileSize?: string;
  downloadUrl?: string;
  sha256Checksum?: string;
  releaseNotesUrl?: string;
}
```

---

## 12. SEO & Performance Principles

### 12.1 SEO Requirements
- **Dynamic Meta Tags:** Comprehensive `<title>`, `<meta name="description">`, and canonical URLs per route.
- **Open Graph & Twitter Cards:** Rich preview cards with customized OG images (`og:title`, `og:description`, `og:image`, `og:url`).
- **Semantic Hierarchy:** Exactly one `<h1>` per page, sequential `<h2>` and `<h3>` tags.
- **Sitemap & Robots:** Clean automated `sitemap.xml` and `robots.txt` generated at root.
- **JSON-LD Structured Data:** Organization schema on the root landing page and Article schema on `/blogs/:slug`.

### 12.2 Performance Targets (Core Web Vitals)
- **LCP (Largest Contentful Paint):** `< 1.8s`
- **CLS (Cumulative Layout Shift):** `< 0.05` (zero unexpected layout shifts)
- **FID / INP (Interaction to Next Paint):** `< 100ms`
- **Asset Optimization:** WebP/SVG vector imagery, font preloading, and dynamic code splitting for sub-routes.

---

## 13. Multi-Phase Implementation Roadmap

The implementation of the OpportunityX ecosystem website will proceed in strict accordance with the following nine-phase engineering lifecycle:

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   PHASE 0    │ ──► │   PHASE 1    │ ──► │   PHASE 2    │ ──► │   PHASE 3    │
│ Discovery &  │     │ Design System│     │ Shell, Nav & │     │ Home Landing │
│ Project Audit│     │  Foundations │     │ Theme Engine │     │  Page Build  │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                      │
┌──────────────┐     ┌──────────────┐     ┌──────────────┐            │
│   PHASE 7    │ ◄── │   PHASE 6    │ ◄── │   PHASE 5    │ ◄──────────┘
│  SEO, Perf & │     │ Micro-Motion │     │ Responsive & │     ┌──────────────┐
│ Optimization │     │  Engineering │     │ Accessibility│ ──► │   PHASE 4    │
└──────┬───────┘     └──────────────┘     └──────────────┘     │  Secondary   │
       │                                                       │  Pages Build │
       ▼                                                       └──────────────┘
┌──────────────┐
│   PHASE 8    │
│ QA, Playwright│
│  & Readying  │
└──────────────┘
```

### Phase 0 — Discovery & Audit
- Inspect workspace dependencies, directory structure, brand assets, and configuration.
- Validate global skill availability and confirm all requirements.

### Phase 1 — Design System & Foundation
- Establish brand tokens, CSS custom properties, tri-mode color mapping, typography scale, spacing tokens, and base reset styles.

### Phase 2 — Core Shell & Routing Engine
- Configure client-side routing (`/`, `/blogs`, `/blogs/:slug`, `/notifications`, `/downloads`, `/contact`).
- Implement sticky navigation header, theme-switching state manager, and structured ecosystem footer.

### Phase 3 — Home / Landing Page Assembly
- Build sections in verified sequential order:
  1. Hero section with ecosystem narrative.
  2. Ecosystem directory with OpportunityX Radar flagship highlight.
  3. Central Community introduction and CTA.
  4. Blogs preview grid.
  5. Notifications preview feed.
  6. Platform downloads preview.
  7. Contact preview portal.
  8. Final ecosystem conversion CTA.

### Phase 4 — Secondary Pages Assembly
- Build full dedicated routes:
  - `/blogs` (Category filters, search, featured post, article grid).
  - `/blogs/:slug` (Rich article reader, markdown parsing, related posts).
  - `/notifications` (Changelog feed, tag filtering).
  - `/downloads` (Platform binary directory, checksums, statuses).
  - `/contact` (Validated inquiry form, direct routing info).

### Phase 5 — Responsive Layout & Accessibility Hardening
- Audit and refine all viewport widths (375px mobile through 1440px+ ultra-wide).
- Implement full keyboard accessibility, focus rings, ARIA roles, and screen-reader testing.

### Phase 6 — Micro-Motion & Interaction Engineering
- Implement silky page transitions, hover states, scroll reveals, and tab animations adhering strictly to `prefers-reduced-motion`.

### Phase 7 — SEO, Web Vitals & Production Optimization
- Inject structured metadata, Open Graph cards, sitemap, robots configuration, and asset optimization.
- Audit bundle size and verify sub-2s Core Web Vitals.

### Phase 8 — QA Verification & Production Sign-Off
- Run Playwright E2E integration tests, verify theme consistency across routes, run visual audit, and finalize documentation.

---

## 14. Success Criteria & Verification Metrics

The OpportunityX Main Ecosystem Website will be considered successful when:
1. **Immediate Cognitive Understanding:** A first-time visitor understands what OpportunityX is and that it is an umbrella ecosystem within 5 seconds.
2. **Distinct Identity Separation:** OpportunityX Radar is recognized as a featured flagship product, not the parent company itself.
3. **Seamless Navigation Flow:** Zero broken paths between the main landing page, secondary hubs (`/blogs`, `/notifications`, `/downloads`, `/contact`), and external products (`radar.opportunityx.co.in`).
4. **Flawless Tri-Mode Experience:** Dark, Light, and Monochromatic modes render flawlessly without contrast defects, unstyled flickers, or illegible text.
5. **Zero Slop Aesthetic:** Design conveys high craft, professional credibility, and modern engineering standards without relying on generic AI tropes or stock education imagery.
6. **Central Community Focus:** Community vision is firmly established as a singular, unified builder network.

---

## 15. Definition of Done (DoD) for PRD

The PRD document `docs/01-PRD.md` is complete and approved when:
- [x] Product vision and problem statement are clearly documented.
- [x] Target personas and market opportunities are defined.
- [x] Brand architecture strictly separates parent OpportunityX from OpportunityX Radar.
- [x] Official 3-theme system (Dark, Light, Monochromatic) and locked logo rules are established.
- [x] Full navigation and route specifications are detailed.
- [x] Home page sections (Hero, Ecosystem, Community, Blogs, Notifications, Downloads, Contact, Final CTA) are mapped.
- [x] Secondary pages (`/blogs`, `/blogs/:slug`, `/notifications`, `/downloads`, `/contact`) are specified.
- [x] Centralized community architecture is documented.
- [x] Strict anti-slop guidelines and visual craft floor are outlined.
- [x] Responsive, accessibility, performance, and SEO principles are documented.
- [x] Decoupled content data schemas are designed.
- [x] Complete 9-phase implementation roadmap (Phase 0 – Phase 8) is defined.
- [x] Non-goals and success criteria are explicitly established.
