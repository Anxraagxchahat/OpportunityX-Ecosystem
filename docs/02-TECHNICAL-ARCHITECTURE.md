# Technical Architecture Document — 02
# OpportunityX Main Ecosystem Website

---

## Document Metadata
- **Product Name:** OpportunityX Main Ecosystem Website
- **Parent Brand:** OpportunityX
- **Primary Domain:** `https://opportunityx.co.in`
- **Source of Truth:** [`docs/01-PRD.md`](./01-PRD.md)
- **Document Version:** 1.0.0
- **Document Status:** Complete / Architectural Baseline
- **Target Audience:** Engineering Leads, Frontend Engineers, DevOps/Platform Engineers, System Architects & QA Engineers

---

## 1. Overview & Architectural Vision

The **OpportunityX Main Ecosystem Website** is the central digital hub and authoritative umbrella platform for OpportunityX. It serves to unify ecosystem products (led by OpportunityX Radar), centralized community initiatives, official editorial publications, release changelogs, platform downloads, and corporate communications under a performant, accessible, and beautifully crafted single-page application (SPA).

This document establishes the technical blueprint for the frontend architecture. It defines component composition, data abstraction, theme mechanics, performance budgets, routing behavior, and deployment pipelines to ensure the codebase remains modular, resilient, and effortless to scale without premature complexity.

```
                              ┌──────────────────────────────────┐
                              │           Client Browser         │
                              └────────────────┬─────────────────┘
                                               │
                                               ▼
                              ┌──────────────────────────────────┐
                              │       Vercel Edge Network        │
                              │    (Global CDN / SSL / Caching)  │
                              └────────────────┬─────────────────┘
                                               │
                                               ▼
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                           OpportunityX Frontend Architecture (SPA)                          │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────────────────────┐  │
│  │                                  Global App Shell                                     │  │
│  │   ┌─────────────────────┐  ┌────────────────────────┐  ┌──────────────────────────┐   │  │
│  │   │     Header / Nav    │  │   Tri-Mode Theme Engine│  │     Ecosystem Footer     │   │  │
│  │   └─────────────────────┘  └────────────────────────┘  └──────────────────────────┘   │  │
│  └───────────────────────────────────────────┬───────────────────────────────────────────┘  │
│                                              │                                              │
│                                              ▼                                              │
│  ┌───────────────────────────────────────────────────────────────────────────────────────┐  │
│  │                                 Client Routing Engine                                 │  │
│  │   ┌───────────┐ ┌──────────────┐ ┌───────────────────┐ ┌─────────────┐ ┌───────────┐   │  │
│  │   │  Home (/) │ │ Blogs Hub    │ │ Notifications Feed│ │  Downloads  │ │  Contact  │   │  │
│  │   └───────────┘ └──────────────┘ └───────────────────┘ └─────────────┘ └───────────┘   │  │
│  └───────────────────────────────────────────┬───────────────────────────────────────────┘  │
│                                              │                                              │
│                                              ▼                                              │
│  ┌───────────────────────────────────────────────────────────────────────────────────────┐  │
│  │                              Data Access & Service Layer                              │  │
│  │   ┌─────────────────────┐  ┌────────────────────────┐  ┌──────────────────────────┐   │  │
│  │   │   Products Registry │  │    Editorial Service   │  │  Notifications Provider  │   │  │
│  │   └─────────────────────┘  └────────────────────────┘  └──────────────────────────┘   │  │
│  └───────────────────────────────────────────┬───────────────────────────────────────────┘  │
│                                              │                                              │
│                                              ▼                                              │
│  ┌───────────────────────────────────────────────────────────────────────────────────────┐  │
│  │                      Local Structured Data (API/CMS Ready Abstraction)                │  │
│  │         [products.json]      [blogs.json]      [notifications.json]      [downloads]  │  │
│  └───────────────────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Architecture Goals

The engineering implementation is guided by the following principles:

1. **Modular & Composable:** Strictly avoid monolithic components. Employ compound component patterns and feature-sliced structures.
2. **High Performance by Default:** Target sub-1.8s LCP, zero CLS, sub-100ms INP, and a lean initial JavaScript bundle.
3. **Data-Decoupled & CMS-Ready:** Never hardcode content within JSX structures. Abstract data access behind a service interface so future headless CMS or API integration requires zero component restructuring.
4. **Tri-Theme First-Class Support:** Seamless runtime switching across **Dark**, **Light**, and **Monochromatic** modes with zero Flash of Unstyled Content (FOUC) and persistent local preference.
5. **Radical Accessibility (a11y):** Full WCAG 2.1 AA compliance, accessible focus indicators, semantic landmarks, and full keyboard navigability.
6. **Zero-Slop Code Quality:** Follow Vercel React Best Practices, avoid boolean prop explosion, eliminate unnecessary waterfalls, and ensure maintainable code.
7. **Appropriate Simplicity:** Eliminate premature enterprise microservices, state library bloat, or complex event buses for a public web application.

---

## 3. Technology Stack & Rationale

| Layer | Technology | Version / Spec | Technical Rationale & Role |
|---|---|---|---|
| **Runtime & Core** | **React** | `^18.3` (or `19.x`) | Declarative UI, component lifecycle, concurrent rendering, and broad ecosystem stability. |
| **Build & Dev Tool** | **Vite** | `^5.x` / `^6.x` | Instant Hot Module Replacement (HMR), lightning-fast ESM bundling, and optimized Rollup production builds. |
| **Language** | **JavaScript / TypeScript** | ESNext (Strict) | Clean, standards-compliant, modular syntax with explicit type safety across data contracts and component props. |
| **Styling Framework** | **Tailwind CSS** | `^3.4` (or `v4`) | Atomic utility-first styling mapped directly to CSS custom properties (design tokens) for multi-theme switching. |
| **Client Routing** | **React Router DOM** | `^6.22+` | Client-side routing, route-based code splitting (`React.lazy`), URL search parameter management, and 404 routing. |
| **Animation & Motion** | **Framer Motion** | `^11.x` | Declarative physics-based animations, layout transitions, exit/enter presence, and strict `prefers-reduced-motion` handling. |
| **Icons & Vectors** | **Lucide React** | `^0.350+` | Clean, standardized, tree-shakeable SVG vector icons with zero emoji fallbacks. |
| **Testing & QA** | **Playwright + Vitest** | Latest | End-to-end multi-browser validation, responsive viewport testing, and unit testing for core utilities and data services. |
| **Deployment** | **Vercel** | Platform Native | Global Edge CDN caching, instant preview branches, atomic deployments, and automated SSL. |

---

## 4. Application Architecture & High-Level System Design

The application follows a **Domain-Layered Architecture** designed to keep concerns isolated:

```text
Application Root
│
├── App Shell Layer (Global Chrome)
│   ├── Navigation Bar & Mobile Drawer
│   ├── Theme Provider & CSS Variable Injector
│   ├── Main Content Outlet
│   └── Multi-Column Ecosystem Footer
│
├── Routing & View Layer (Pages)
│   ├── Landing / Home (/)
│   ├── Blogs Hub (/blogs) & Article Reader (/blogs/:slug)
│   ├── Notifications Hub (/notifications)
│   ├── Downloads Hub (/downloads)
│   ├── Contact Portal (/contact)
│   └── 404 Error Boundary (/404)
│
├── Feature Components Layer (Domain-Specific)
│   ├── Ecosystem Directory & Flagship Spotlight (Radar)
│   ├── Central Community Gateway & Highlights
│   ├── Blog Cards, Article Filter & Search
│   ├── Release Changelogs & Notification Filters
│   ├── Download Binary Cards & Platform Detectors
│   └── Validated Contact Inquiry Form
│
├── Shared UI Primitives Layer (Design System)
│   ├── Button, IconButton, Badge, StatusPill
│   ├── Card, SectionHeader, Divider, Container
│   ├── Modal, Drawer, Tooltip, Dropdown
│   └── EmptyState, SkeletonLoader, ErrorFallback
│
└── Service & Data Abstraction Layer
    ├── Product Service (Ecosystem Directory Registry)
    ├── Blog Service (Article Repository & Markdown Renderer)
    ├── Notification Service (System Changelog Ingestion)
    ├── Download Service (Binary Version & Checksum Manifest)
    └── Storage Service (Local Storage & Preference Persistence)
```

---

## 5. Routing Architecture & Lifecycle

The routing configuration is managed using `react-router-dom` with route-level code splitting via `React.lazy()` and `Suspense` fallbacks:

```text
Route Map:
/                     ──► HomeView (Root Ecosystem Landing Page)
/blogs                ──► BlogsView (Editorial Directory, Filters & Search)
/blogs/:slug          ──► BlogDetailView (Individual Article Reader)
/notifications        ──► NotificationsView (Official Updates & System Releases)
/downloads            ──► DownloadsView (Platform Binary Distribution)
/contact              ──► ContactView (Structured Inquiries Portal)
*                     ──► NotFoundView (Branded 404 Error Boundary)
```

### 5.1 Route Lifecycle & Navigation Principles
1. **Root is Landing:** The `/` route is the complete Home ecosystem experience. There is no redundant `/home` redirect or duplicate route.
2. **Scroll Restoration:** Automatic scroll-to-top on route change via a dedicated `ScrollToTop` router listener.
3. **Deep Linking & Query State:**
   - `/blogs?category=tech&search=hackathon` — Filters and search keywords synchronize with URL search parameters for link sharing.
   - `/notifications?filter=releases` — Direct category links are bookmarkable.
4. **External Product Redirection:** External ecosystem products (e.g. `https://radar.opportunityx.co.in`) are declared as full external URI targets (`target="_blank" rel="noopener noreferrer"` or direct domain transition), clearly distinguished from internal SPA navigation.

---

## 6. Component Architecture & Composition Patterns

To prevent boolean prop proliferation and large unmaintainable components, the design follows **Composition Patterns** (Vercel Composition Standards):

```
┌────────────────────────────────────────────────────────┐
│                      ProductCard                       │
├────────────────────────────────────────────────────────┤
│  ┌──────────────────┐            ┌──────────────────┐  │
│  │ ProductCard.Icon │            │ProductCard.Status│  │
│  └──────────────────┘            └──────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ ProductCard.Title & ProductCard.Tagline          │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ ProductCard.Description                          │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ ProductCard.Pills (Feature Highlights)           │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ ProductCard.Action (CTA Button / External Link)  │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

### 6.1 Key Reusable Component Inventory

#### Layout & Navigation:
- `AppShell` — Root layout wrapper managing header, theme context, dynamic route container, and global footer.
- `Navbar` & `MobileNav` — Desktop sticky navigation and mobile responsive slide drawer.
- `ThemeSwitcher` — Tri-mode accessible toggle with animated indicator.
- `Section` & `Container` — Standardized horizontal rhythm and max-width bounds (`max-w-7xl px-4 sm:px-6 lg:px-8`).

#### Domain-Specific Components:
- `ProductGrid` / `ProductCard` — Modular card ecosystem with status badges and flagship visual distinction for OpportunityX Radar.
- `BlogGrid` / `BlogCard` / `BlogFilter` / `ArticleContent` — Editorial card system with tag filtering, reading time, and prose styling.
- `NotificationList` / `NotificationItem` — Timeline feed of ecosystem bulletins with severity/category indicators.
- `DownloadGrid` / `DownloadCard` — OS-specific binary cards displaying file size, versioning, and SHA-256 checksums.
- `ContactForm` / `FormField` / `FormFeedback` — Validated contact form with accessibility labels and status toasts.

#### Shared Primitives:
- `Button` — Variants: `primary`, `secondary`, `outline`, `ghost`, `link`; Sizes: `sm`, `md`, `lg`.
- `Badge` / `StatusPill` — Variants: `live`, `beta`, `in-development`, `coming-soon`, `planned`.
- `SkeletonLoader` / `EmptyState` — Zero-flicker loading placeholders and informative empty results states.

---

## 7. Data Architecture & Domain Schemas

All initial application data is stored in structured, strictly-typed local JSON files within `src/data/`. These models map 1:1 with future REST/GraphQL schemas.

```
src/data/
├── products.json      ──► Ecosystem Products & Status Registry
├── blogs.json         ──► Editorial Articles, Authors, Content & Categories
├── notifications.json ──► Release Notices, Bulletins & Changelogs
└── downloads.json     ──► Platform OS Binary Matrix & Releases
```

### 7.1 Data Contract Specifications

#### 1. Product Contract (`EcosystemProduct`)
```typescript
interface EcosystemProduct {
  id: string;                      // e.g. "opportunityx-radar"
  name: string;                    // e.g. "OpportunityX Radar"
  slug: string;                    // e.g. "radar"
  tagline: string;                 // e.g. "Discover Real-Time Opportunities"
  description: string;             // Detailed description
  category: 'discovery' | 'career' | 'building' | 'validation';
  status: 'live' | 'beta' | 'in-development' | 'coming-soon' | 'planned';
  isFlagship: boolean;             // true for OpportunityX Radar
  externalUrl?: string;            // e.g. "https://radar.opportunityx.co.in"
  icon: string;                    // Lucide icon identifier or SVG asset path
  highlightPills: string[];        // e.g. ["Hackathons", "Internships", "Scholarships", "Open Source"]
  releaseVersion?: string;         // e.g. "v2.1"
}
```

#### 2. Blog Article Contract (`BlogArticle`)
```typescript
interface BlogArticle {
  id: string;
  slug: string;                    // e.g. "navigating-tech-hackathons-2026"
  title: string;
  excerpt: string;
  content: string;                 // Full markdown prose
  category: 'career' | 'technology' | 'radar' | 'guides' | 'ecosystem';
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  publishedAt: string;             // ISO 8601 string (e.g. "2026-08-24T12:00:00Z")
  readTimeMinutes: number;
  featured: boolean;
  coverImageUrl?: string;
  tags: string[];
}
```

#### 3. System Notification Contract (`SystemNotification`)
```typescript
interface SystemNotification {
  id: string;
  title: string;
  summary: string;
  details?: string;
  category: 'product' | 'release' | 'announcement' | 'maintenance' | 'community';
  publishedAt: string;             // ISO 8601 string
  version?: string;                // e.g. "v1.4.0"
  actionUrl?: string;
  actionLabel?: string;
  isPinned: boolean;
}
```

#### 4. Download Binary Contract (`DownloadBinary`)
```typescript
interface DownloadBinary {
  id: string;
  platform: 'android' | 'windows' | 'macos' | 'linux' | 'ios';
  platformName: string;            // e.g. "Windows (x64 / ARM)"
  version: string;                 // e.g. "1.2.0"
  status: 'available' | 'beta' | 'coming-soon';
  releaseDate?: string;
  fileSize?: string;               // e.g. "48.2 MB"
  downloadUrl?: string;            // Direct binary URL (if available)
  sha256Checksum?: string;         // Checksum for validation
  releaseNotesUrl?: string;
}
```

---

## 8. API & CMS Readiness / Service Layer Abstraction

To ensure the user interface never becomes tightly coupled to local JSON files, all data retrieval flows through a standardized **Service Access Layer**.

```
[UI Components] ──► [Data Services] ──► [Local JSON Provider (v1)] 
                                     └──► [FastAPI / Headless CMS Provider (Future)]
```

### 8.1 Service Interface Pattern
```javascript
// src/services/productService.js
import productsData from '../data/products.json';

export const ProductService = {
  async getAllProducts() {
    // Current: return local structured data
    // Future: const res = await fetch(`${API_BASE}/products`); return res.json();
    return Promise.resolve(productsData);
  },
  async getProductBySlug(slug) {
    const product = productsData.find(p => p.slug === slug);
    return Promise.resolve(product || null);
  },
  async getFlagshipProduct() {
    const flagship = productsData.find(p => p.isFlagship);
    return Promise.resolve(flagship || productsData[0]);
  }
};
```

This abstraction allows future migration to a REST API, FastAPI backend, or Headless CMS by updating the service module implementation without modifying a single line of React component UI code.

---

## 9. Theme Architecture & Zero-FOUC Init

The website supports **exactly three first-class visual themes**:
1. **`dark` (Default):** Deep dark aesthetic (`#09090B`) with OpportunityX orange accent.
2. **`light`:** Clean bright aesthetic (`#FFFFFF`) with deep slate text and warm amber accent.
3. **`monochromatic`:** High-contrast stark black & white neutral theme with zero chromatic hue.

```
┌───────────────────────────────────────────────────────────┐
│                    Theme Engine Flow                      │
└─────────────────────────────┬─────────────────────────────┘
                              │
               1. Inline Head Script Executes
        (Reads localStorage or prefers-color-scheme)
                              │
                              ▼
       2. Injects class="dark" | "light" | "monochromatic"
                     to <html> root
                              │
                              ▼
         3. CSS Variables Instantly Applied (<1ms)
                  (Zero Flash of Unstyled Theme)
                              │
                              ▼
        4. React ThemeContext syncs state on Mount
```

### 9.1 Zero-FOUC Inline Initialization Script
An inline script in `index.html` runs synchronously before DOM rendering to prevent any flash of incorrect theme:

```html
<script>
  (function() {
    try {
      const storedTheme = localStorage.getItem('ox_theme');
      const supportThemes = ['dark', 'light', 'monochromatic'];
      let theme = 'dark';
      if (storedTheme && supportThemes.includes(storedTheme)) {
        theme = storedTheme;
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        theme = 'light';
      }
      document.documentElement.classList.remove('dark', 'light', 'monochromatic');
      document.documentElement.classList.add(theme);
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
</script>
```

---

## 10. Design Token Architecture & CSS Variable System

All styles are driven by standardized CSS custom properties defined in `src/styles/tokens.css` and exposed via Tailwind CSS config:

```css
/* src/styles/tokens.css */
:root, [data-theme="dark"] {
  --color-bg-canvas: #09090B;
  --color-bg-surface: #121215;
  --color-bg-surface-elevated: #18181B;
  --color-bg-subtle: #27272A;
  
  --color-text-primary: #FAFAFA;
  --color-text-secondary: #A1A1AA;
  --color-text-muted: #71717A;
  
  --color-border-subtle: #27272A;
  --color-border-strong: #3F3F46;
  
  --color-accent-primary: #FF6B00;
  --color-accent-hover: #FF8533;
  --color-accent-subtle: rgba(255, 107, 0, 0.12);
  --color-accent-on: #FFFFFF;
  
  --shadow-card: 0 4px 20px -2px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 24px -4px rgba(255, 107, 0, 0.25);
}

[data-theme="light"] {
  --color-bg-canvas: #FFFFFF;
  --color-bg-surface: #F8FAFC;
  --color-bg-surface-elevated: #FFFFFF;
  --color-bg-subtle: #F1F5F9;
  
  --color-text-primary: #09090B;
  --color-text-secondary: #475569;
  --color-text-muted: #64748B;
  
  --color-border-subtle: #E2E8F0;
  --color-border-strong: #CBD5E1;
  
  --color-accent-primary: #EA580C;
  --color-accent-hover: #C2410C;
  --color-accent-subtle: rgba(234, 88, 12, 0.08);
  --color-accent-on: #FFFFFF;
  
  --shadow-card: 0 4px 16px -2px rgba(0, 0, 0, 0.06);
  --shadow-glow: 0 0 20px -4px rgba(234, 88, 12, 0.15);
}

[data-theme="monochromatic"] {
  --color-bg-canvas: #000000;
  --color-bg-surface: #0C0C0C;
  --color-bg-surface-elevated: #161616;
  --color-bg-subtle: #242424;
  
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #D4D4D8;
  --color-text-muted: #A1A1AA;
  
  --color-border-subtle: #27272A;
  --color-border-strong: #52525B;
  
  --color-accent-primary: #FFFFFF;
  --color-accent-hover: #E4E4E7;
  --color-accent-subtle: rgba(255, 255, 255, 0.12);
  --color-accent-on: #000000;
  
  --shadow-card: 0 4px 20px -2px rgba(0, 0, 0, 0.8);
  --shadow-glow: none;
}
```

---

## 11. Responsive Architecture & Multi-Device Breakpoints

The responsive architecture is built mobile-first and audited across standard device dimensions:

| Breakpoint Token | Min Width | Target Viewports | Key Layout Adaptations |
|---|---|---|---|
| **`xs` (Mobile Narrow)** | `320px – 374px` | iPhone SE, small Android | Single-column, reduced font scale, edge padding `16px`. |
| **`sm` (Mobile Standard)**| `375px – 639px` | iPhone 14/15, Galaxy S23 | Touch targets min `44×44px`, collapsible hamburger drawer. |
| **`md` (Tablet)** | `640px – 1023px`| iPad Mini, iPad Pro 11" | 2-column product/blog grid, adapted hero metrics. |
| **`lg` (Laptop)** | `1024px – 1279px`| MacBook Air, Laptop 13" | Full horizontal navbar, 3-column blog grid, sticky sidebar. |
| **`xl` (Desktop)** | `1280px – 1535px`| 1080p Desktop Displays | Max container width `1280px` centered with optical padding. |
| **`2xl` (Ultra-wide)** | `≥ 1536px` | 1440p / 4K Displays | Bounded reading containers, enhanced negative space. |

---

## 12. Motion & Micro-Interaction Architecture

Motion is engineered strictly for **spatial continuity, interaction feedback, and brand elevation** — never for decorative distraction.

```
┌──────────────────────────────────────────────────────────┐
│                   Motion Timing Budgets                  │
├──────────────────────────┬───────────────────────────────┤
│ Micro-Interactions       │ 120ms – 180ms (Hover / Press) │
├──────────────────────────┼───────────────────────────────┤
│ Menu / Drawer Triggers   │ 200ms – 250ms (Ease Out Cubic)│
├──────────────────────────┼───────────────────────────────┤
│ Route / Section Enters   │ 250ms – 350ms (Fade + Stagger)│
└──────────────────────────┴───────────────────────────────┘
```

### 12.1 Motion Standards (`framer-motion`)
1. **Reduced Motion First:** All animations must respect `prefers-reduced-motion: reduce`.
```javascript
// src/utils/motion.js
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const fadeInVariant = {
  hidden: { opacity: 0, y: prefersReducedMotion() ? 0 : 12 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: prefersReducedMotion() ? 0.01 : 0.25, ease: 'easeOut' } 
  }
};
```
2. **Zero Infinite Layout Animations:** Do not use continuous CPU/GPU looping transforms on landing page elements.
3. **Hardware Acceleration:** Restrict animated CSS properties to `transform` and `opacity` to avoid triggering browser layout recalculations.

---

## 13. Asset Management Strategy & Directory Structure

All static binary assets, images, icons, and brand graphics are organized inside the `public/` directory with logical categorization:

```text
public/
├── brand/
│   ├── logo-dark.svg            ──► Official dark mode vector logo
│   ├── logo-light.svg           ──► Official light mode vector logo
│   ├── logo-monochromatic.svg   ──► Official monochromatic vector logo
│   ├── mark-x.svg               ──► Canonical isolated X core symbol
│   └── favicon.ico / icon.svg   ──► Browser tab favicons
├── products/
│   ├── radar-icon.svg           ──► OpportunityX Radar visual mark
│   ├── career-icon.svg          ──► Career product mark
│   └── freelance-icon.svg       ──► Freelance product mark
├── images/
│   ├── hero-ecosystem.webp      ──► Optimized hero visual
│   ├── community-banner.webp    ──► Community highlight banner
│   └── og-preview.png           ──► 1200x630 Open Graph sharing card
├── icons/                       ──► Specialized platform & OS SVG icons
└── robots.txt / sitemap.xml     ──► Search engine crawlers
```

---

## 14. Typography System & Font Loading Strategy

The typographic hierarchy balances modern engineering aesthetics with effortless readability:

- **Primary Sans (Headings & UI):** Geometric, highly legible sans-serif (e.g. `Inter`, `Geist Sans`, or `Outfit`).
- **Monospace (Metadata, Versions & Badges):** Clean monospace font (e.g. `JetBrains Mono` or `Fira Code`).

### 14.1 Font Loading Optimization
- Self-host or use Google Fonts with `font-display: swap` to eliminate FOIT (Flash of Invisible Text).
- Preload the primary regular and bold subsets in `index.html`.

---

## 15. SEO, Meta Tags & Structured Data Architecture

Every route injects calibrated SEO metadata using a dedicated `SEOHead` component:

```javascript
// src/components/common/SEOHead.jsx
export function SEOHead({ title, description, path = '', ogType = 'website', image }) {
  const fullUrl = `https://opportunityx.co.in${path}`;
  const defaultImage = 'https://opportunityx.co.in/images/og-preview.png';
  
  return (
    <Helmet>
      <title>{title ? `${title} | OpportunityX` : 'OpportunityX — One Ecosystem. Endless Possibilities.'}</title>
      <meta name="description" content={description || 'OpportunityX is the unified technology ecosystem for student opportunities, building, and career growth.'} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title || 'OpportunityX Ecosystem'} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image || defaultImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}
```

### 15.1 JSON-LD Schema Integration
- **Root Page (`/`):** `Organization` and `WebSite` schemas declaring brand identity, logo, and official product subdomains.
- **Blog Detail (`/blogs/:slug`):** `BlogPosting` schema declaring headline, author, datePublished, and dateModified.

---

## 16. Performance Architecture & Core Web Vitals Optimization

Following Vercel Engineering guidelines (`react-best-practices` & `vercel-optimize`):

1. **Route-Level Code Splitting:** Heavy view components are lazy-loaded:
   ```javascript
   const BlogsView = React.lazy(() => import('../pages/BlogsView'));
   const DownloadsView = React.lazy(() => import('../pages/DownloadsView'));
   ```
2. **Zero Waterfall Data Loading:** Independent data fetches execute in parallel (`Promise.all()`).
3. **Avoid Re-render Cascades:** Use functional state updates, avoid inline object definitions in hot loops, and isolate state to leaf components.
4. **Image Formats:** WebP/SVG with explicit `width`, `height`, and `loading="lazy"` attributes.
5. **Asset Compression:** Brotli/Gzip enabled on Vercel Edge CDN.

---

## 17. Security Boundaries & Threat Modeling

| Scope | Security Rule | Implementation Strategy |
|---|---|---|
| **Zero Client Secrets** | No private API keys or tokens in bundle | Static SPA bundle contains zero private credentials. |
| **Input Sanitization** | Form inputs sanitized against XSS | React default JSX escaping + DOMPurify on markdown output. |
| **External Link Hardening** | Protect against tab-nabbing | All external links enforce `rel="noopener noreferrer"`. |
| **Content Security Policy (CSP)** | Restrict untrusted script execution | Vercel HTTP response headers configured in `vercel.json`. |
| **Contact Spam Defense** | Prevent automated form spam | Rate limiting and honeypot field on the contact form. |

---

## 18. Contact Form Architecture & Validation Flow

```
[User Form Input] 
       │
       ▼
[Client Validation (Email Regex, Required Fields, Honeypot Check)]
       │
       ├── (Invalid) ──► Show Inline Accessible Error Label
       │
       ▼ (Valid)
[Submission State: isSubmitting = true]
       │
       ▼
[ContactService.submitInquiry(payload)]
       │
       ├── (v1 Phase) ──► Simulated Async Handshake (Local Success Toast)
       └── (v2 Phase) ──► POST to /api/contact (Server validation & email dispatch)
```

---

## 19. Download Architecture & Binary Distribution Matrix

The `/downloads` route renders verified desktop, mobile, and CLI release binaries:
- If a binary build is currently compiled and available, the card provides an active download link, file size, and SHA-256 integrity hash.
- If a platform is in development (e.g. iOS or Linux packaging), the status is displayed as `Coming Soon` or `Private Beta`, with disabled download triggers. **Never generate fake download links.**

---

## 20. Blog & Editorial System Architecture

```
[Blog Article Source (JSON / Markdown)]
                  │
                  ▼
         [BlogService Parser]
                  │
                  ▼
        [BlogArticle Model]
                  │
                  ├──► [Listing Grid (/blogs)] ──► Filter & Search State
                  │
                  └──► [Article Reader (/blogs/:slug)] ──► Markdown Prose, Code Highlight, Related Posts
```

- Decoupled markdown parser isolated inside `src/components/blog/ArticleContent.jsx`.
- Dynamic reading time calculator based on word count (`totalWords / 200`).

---

## 21. Notification & System Changelog Architecture

- Notifications remain a distinct data and presentation domain separate from blog posts.
- Supports category categorization (`product`, `release`, `announcement`, `maintenance`, `community`).
- Filter bar provides real-time client-side switching with URL synchronization.

---

## 22. Error, Loading, Offline & Empty State Strategy

1. **Global Error Boundary:** Wraps the entire routing tree to catch runtime rendering errors and present a branded recovery UI.
2. **Skeleton Screens:** Section-specific skeleton placeholders during async chunk loading.
3. **Empty States:** Clear illustrations and action triggers when search queries or filters yield zero results.

---

## 23. Custom 404 Experience & Fallback Architecture

- Unmatched routes automatically render `src/pages/NotFoundView.jsx`.
- Consistent with active theme (Dark, Light, Monochromatic).
- Includes direct CTAs: `Return to Ecosystem Home` and `Explore OpportunityX Radar`.

---

## 24. Testing Architecture & Quality Assurance

```
┌──────────────────────────────────────────────────────────┐
│                   Testing Pyramid                        │
├──────────────────────────────────────────────────────────┤
│  E2E / Browser Tests (Playwright CLI)                   │
│  - Route navigation, theme toggling, form submissions   │
├──────────────────────────────────────────────────────────┤
│  Integration / Route Tests (Vitest + React Testing Lib)  │
│  - Filter synchronization, data service resolution       │
├──────────────────────────────────────────────────────────┤
│  Unit Tests (Vitest)                                     │
│  - Utility functions, token parsers, schema validators   │
└──────────────────────────────────────────────────────────┘
```

### 24.1 Playwright E2E Test Suite Matrix
- **Test 1 — Root Navigation:** Verify all 8 home page sections render and navigation links scroll/route correctly.
- **Test 2 — Tri-Mode Theme Switcher:** Validate `dark`, `light`, and `monochromatic` classes and CSS variable persistence across refreshes.
- **Test 3 — Blogs & Search:** Test category filtering, keyword search, and article slug navigation.
- **Test 4 — Responsive Drawer:** Verify mobile drawer open/close and keyboard focus trapping.

---

## 25. Visual QA & Automated Verification Pipeline

Prior to production sign-off, the application must pass visual auditing using `playwright-cli` and design heuristics from `impeccable` and `taste-skill`:
1. **Contrast Check:** Verify WCAG AA 4.5:1 text contrast across all three theme modes.
2. **Alignment & Spacing:** Inspect 8px grid alignment across mobile (`375px`), tablet (`768px`), and desktop (`1440px`).
3. **Zero AI Slop:** Ensure absence of glowing blobs, excessive glassmorphism, or unstyled emojis.

---

## 26. Code Quality, Composition Rules & Production Cleanup Standards

- **Max Component Length:** Individual component files should not exceed 150 lines. Large views must be decomposed into sub-components.
- **No Boolean Prop Proliferation:** Replace `isFeatured={true} isCompact={false} isDark={true}` with explicit compound components or variant strings.
- **Explicit Naming:** Component files use PascalCase (`ProductCard.jsx`), utilities use camelCase (`formatDate.js`), data models use lowercase (`products.json`).

---

## 27. Deployment Architecture (Vercel)

The application is deployed as a static Single Page Application on **Vercel**:

```json
// vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

---

## 28. Environment Configuration & Secret Management

| Environment Variable | Scope | Description |
|---|---|---|
| `VITE_SITE_URL` | Public (Client) | Canonical base URL (`https://opportunityx.co.in`). |
| `VITE_RADAR_URL` | Public (Client) | OpportunityX Radar domain (`https://radar.opportunityx.co.in`). |
| `VITE_ENVIRONMENT` | Public (Client) | Environment descriptor (`development`, `preview`, `production`). |

*Note: The public frontend must never receive private tokens or database credentials.*

---

## 29. Multi-Domain Architecture & Cross-Subdomain Linking

```
Primary Ecosystem Domain:
├── https://opportunityx.co.in           ──► Parent Ecosystem Main Website (SPA)

Product Subdomains:
├── https://radar.opportunityx.co.in     ──► OpportunityX Radar (Discovery Platform)
├── https://career.opportunityx.co.in    ──► OpportunityX Career (Future Roadmap)
└── https://freelance.opportunityx.co.in ──► OpportunityX Freelance (Future Roadmap)
```

- Navigation between `opportunityx.co.in` and `radar.opportunityx.co.in` operates as seamless top-level domain routing with standardized header recognition.

---

## 30. Future Ecosystem Scalability & Plug-and-Play Product Registry

Adding a new product to the OpportunityX ecosystem in the future requires **zero UI refactoring**. An engineer simply appends an entry to `src/data/products.json`:

```json
{
  "id": "opportunityx-career",
  "name": "OpportunityX Career",
  "slug": "career",
  "tagline": "AI-Powered Career Intelligence",
  "description": "Guided career roadmaps, skill benchmarking, and 1-on-1 mentorship.",
  "category": "career",
  "status": "in-development",
  "isFlagship": false,
  "externalUrl": "https://career.opportunityx.co.in",
  "icon": "Briefcase",
  "highlightPills": ["Roadmaps", "Mentorship", "Skill Gap Analysis"]
}
```

The `ProductGrid` component dynamically ingests and renders the new product card with appropriate status tags and routing automatically.

---

## 31. Recommended Project Directory Tree

```text
OpportunityX Ecosystem/
├── docs/
│   ├── 01-PRD.md
│   └── 02-TECHNICAL-ARCHITECTURE.md
├── public/
│   ├── brand/
│   │   ├── logo-dark.svg
│   │   ├── logo-light.svg
│   │   ├── logo-monochromatic.svg
│   │   └── mark-x.svg
│   ├── images/
│   ├── icons/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   ├── routes.jsx
│   │   └── providers.jsx
│   ├── components/
│   │   ├── shell/
│   │   │   ├── Navbar.jsx
│   │   │   ├── MobileNav.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ThemeSwitcher.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── EcosystemSection.jsx
│   │   │   ├── CommunitySection.jsx
│   │   │   ├── BlogsPreview.jsx
│   │   │   ├── NotificationsPreview.jsx
│   │   │   ├── DownloadsPreview.jsx
│   │   │   ├── ContactPreview.jsx
│   │   │   └── FinalCTA.jsx
│   │   ├── ecosystem/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   └── StatusBadge.jsx
│   │   ├── blog/
│   │   │   ├── BlogCard.jsx
│   │   │   ├── BlogGrid.jsx
│   │   │   ├── BlogFilter.jsx
│   │   │   └── ArticleContent.jsx
│   │   ├── notifications/
│   │   │   ├── NotificationCard.jsx
│   │   │   └── NotificationList.jsx
│   │   ├── downloads/
│   │   │   ├── DownloadCard.jsx
│   │   │   └── PlatformMatrix.jsx
│   │   ├── contact/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactInfo.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Badge.jsx
│   │       ├── Card.jsx
│   │       ├── Container.jsx
│   │       ├── SectionHeader.jsx
│   │       ├── SkeletonLoader.jsx
│   │       └── EmptyState.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── products.json
│   │   ├── blogs.json
│   │   ├── notifications.json
│   │   └── downloads.json
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useScrollPosition.js
│   │   └── useMediaQuery.js
│   ├── pages/
│   │   ├── HomeView.jsx
│   │   ├── BlogsView.jsx
│   │   ├── BlogDetailView.jsx
│   │   ├── NotificationsView.jsx
│   │   ├── DownloadsView.jsx
│   │   ├── ContactView.jsx
│   │   └── NotFoundView.jsx
│   ├── services/
│   │   ├── productService.js
│   │   ├── blogService.js
│   │   ├── notificationService.js
│   │   └── downloadService.js
│   ├── styles/
│   │   ├── tokens.css
│   │   └── index.css
│   └── utils/
│       ├── motion.js
│       ├── formatDate.js
│       └── validation.js
├── tests/
│   ├── e2e/
│   │   ├── navigation.spec.js
│   │   └── theme.spec.js
│   └── unit/
│       └── services.test.js
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

---

## 32. Architecture Decision Records (ADRs)

### ADR-001: Parent Ecosystem Identity Separation
- **Context:** Confusion between the overarching brand and OpportunityX Radar.
- **Decision:** `opportunityx.co.in` is exclusively the parent ecosystem site. Radar lives on `radar.opportunityx.co.in` and is highlighted as a featured flagship product.
- **Consequences:** Prevents duplicate SEO indexing and preserves clear brand hierarchy.

### ADR-002: Independent Flagship Subdomain for Radar
- **Context:** Radar requires complex searching, filtering, and real-time opportunity ingestion.
- **Decision:** Host Radar as an independent specialized web app on `radar.opportunityx.co.in`.
- **Consequences:** Main website remains lightweight, ultra-fast, and decoupled from Radar's ingestion workloads.

### ADR-003: Public-First Static SPA Architecture
- **Context:** Choosing between SSR (Next.js), static site (Vite/React), or dynamic micro-frontend.
- **Decision:** Implement a static React + Vite SPA deployed on Vercel Edge.
- **Consequences:** Sub-millisecond TTFB via global Edge caching, minimal operational overhead, zero server maintenance costs.

### ADR-004: Unified Global Community Architecture
- **Context:** Deciding whether to create product-specific communities (Radar Community vs Career Community).
- **Decision:** Centralize the community under the single parent OpportunityX Community.
- **Consequences:** Maximizes network effects, unifies student builders, avoids fragmented engagement.

### ADR-005: Tri-Mode First-Class Theme Engine
- **Context:** Requirement for Dark, Light, and Monochromatic visual modes.
- **Decision:** CSS custom properties driven by a single `[data-theme]` HTML attribute with inline pre-render script execution.
- **Consequences:** Zero FOUC, instantaneous runtime switching, 100% theme consistency across all sub-components.

### ADR-006: Strict Separation of Content Domains
- **Context:** Merging notifications with blog posts.
- **Decision:** Notifications and Blogs are decoupled data domains with dedicated schemas and routes.
- **Consequences:** Clean editorial velocity for long-form blogs; rapid technical logging for releases/bulletins.

### ADR-007: API & CMS Service Layer Abstraction
- **Context:** Current static JSON files vs future database/CMS backends.
- **Decision:** Access all data via asynchronous service interfaces (`ProductService`, `BlogService`, etc.).
- **Consequences:** Future backend migration requires zero UI modifications.

### ADR-008: Elimination of Premature Enterprise Complexity
- **Context:** Deciding on Redux, microservices, or complex state machinery.
- **Decision:** Rely on native React Context, URL search params, and lightweight composition.
- **Consequences:** High maintainability, fast onboarding for future developers, lean JS bundle.

---

## 33. Technical Non-Goals

The following architectural concepts are **explicitly out of scope** for the v1 implementation:
- ❌ Micro-frontend architectures (Module Federation / iframe embedding).
- ❌ Heavy WebGL / Three.js 3D canvas backgrounds.
- ❌ Client-side user session management / JWT auth tokens.
- ❌ GraphQL client caches / Apollo / Relay.
- ❌ Real-time WebSockets / live chat infrastructure.
- ❌ Client-side relational database (SQLite in WASM / IndexedDB sync engines).

---

## 34. Technical Definition of Done (DoD)

The Technical Architecture `docs/02-TECHNICAL-ARCHITECTURE.md` is approved and complete when:
- [x] Full alignment with [`docs/01-PRD.md`](./01-PRD.md) is verified with zero contradictions.
- [x] OpportunityX parent vs OpportunityX Radar subdomain boundary is enforced.
- [x] Centralized community architecture is documented.
- [x] Tri-mode theme system and zero-FOUC initialization script are designed.
- [x] Data layer contracts (Products, Blogs, Notifications, Downloads) are defined.
- [x] Service layer abstraction for API/CMS readiness is established.
- [x] Full responsive breakpoint matrix and motion guidelines are detailed.
- [x] Playwright E2E and visual QA testing strategies are specified.
- [x] Deployment configurations for Vercel are documented.
- [x] Eight Architecture Decision Records (ADR-001 through ADR-008) are articulated.
