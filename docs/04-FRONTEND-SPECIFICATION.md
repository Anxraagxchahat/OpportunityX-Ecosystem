# Frontend Design & UI/UX Specification — 04
# OpportunityX Main Ecosystem Website

---

## Document Metadata
- **Product Name:** OpportunityX Main Ecosystem Website
- **Parent Brand:** OpportunityX
- **Primary Domain:** `https://opportunityx.co.in`
- **Flagship Subdomain:** `https://radar.opportunityx.co.in`
- **Sources of Truth:** [`docs/01-PRD.md`](./01-PRD.md), [`docs/02-TECHNICAL-ARCHITECTURE.md`](./02-TECHNICAL-ARCHITECTURE.md), and [`docs/03-SECURITY-AND-ACCESS.md`](./03-SECURITY-AND-ACCESS.md)
- **Document Version:** 1.0.0
- **Document Status:** Approved UI/UX Design Specification
- **Design Intelligence Stack:** `ui-ux-pro-max`, `impeccable`, `taste-skill`, `minimalist-skill`, `claude-design-recipes`, `premium-web-design-motion`, `emilkowalski-skills`

---

## 1. Purpose & Design Overview

The **OpportunityX Frontend Specification** establishes the precise, visual, interactive, and typographic blueprint for the OpportunityX Main Ecosystem Website. It bridges high-level product strategy ([`01-PRD.md`](./01-PRD.md)) and system architecture ([`02-TECHNICAL-ARCHITECTURE.md`](./02-TECHNICAL-ARCHITECTURE.md)) into an actionable, pixel-perfect user interface specification.

This document guides frontend engineers and designers in building an interface that embodies **world-class digital craft**: understated, confident, fast, technologically advanced, and strictly free of generic AI design cliches ("slop").

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    OpportunityX Visual Hierarchy Map                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [ GLOBAL APP SHELL ]                                                       │
│  ├── Unified Sticky Header (Brand Mark + Primary Nav + Theme Toggle)        │
│  │                                                                          │
│  ├── [ ROOT LANDING PAGE: / ]                                               │
│  │   ├── 1. Hero Section (Ecosystem Narrative + Node Interaction + CTAs)    │
│  │   ├── 2. Ecosystem Directory (Flagship Radar Spotlight + Sub-Products)  │
│  │   ├── 3. Central Community Gateway (Text-first Preview + Action CTA)     │
│  │   ├── 4. Editorial Preview (3-Card Curated Blog Grid)                    │
│  │   ├── 5. Official Updates (Chronological Release & Bulletin Feed)        │
│  │   ├── 6. Platform Downloads (Verified OS Binary Availability)            │
│  │   ├── 7. Contact Gateway (Categorized Direct Outreach)                   │
│  │   └── 8. Final Ecosystem CTA ("One ecosystem. Endless possibilities.")   │
│  │                                                                          │
│  ├── [ DEDICATED SECONDARY HUBS ]                                           │
│  │   ├── /blogs & /blogs/:slug (Editorial Index & Focused Reader)           │
│  │   ├── /notifications (Full Filterable Changelog & Notices)               │
│  │   ├── /downloads (Complete Binary Center with SHA-256 Checksums)         │
│  │   ├── /contact (Validated Inquiry Portal with Category Routing)          │
│  │   └── /404 (Branded Ecosystem Recovery View)                            │
│  │                                                                          │
│  └── [ GLOBAL ECOSYSTEM FOOTER ]                                            │
│      └── 4-Column Directory + Official Socials + Status Badge + Copyright  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Source Documents & Alignment

This specification strictly derives all rules, boundaries, and features from the primary documentation suite:
1. **[`docs/01-PRD.md`](./01-PRD.md):** Defines brand goals, ecosystem separation, route map, page section sequence, community rules, and v1 non-goals.
2. **[`docs/02-TECHNICAL-ARCHITECTURE.md`](./02-TECHNICAL-ARCHITECTURE.md):** Defines React/Vite/Tailwind tech stack, component composition patterns, service layer abstractions, CSS variable token trees, and Vercel routing.
3. **[`docs/03-SECURITY-AND-ACCESS.md`](./03-SECURITY-AND-ACCESS.md):** Defines public access boundaries, zero client secrets, contact form rate throttling, text-first community security, and download binary verification.

---

## 3. Product Identity & Ecosystem Hierarchy

The brand identity adheres to a clear **Parent Ecosystem vs. Specialized Sub-Product** distinction:

```
┌─────────────────────────────────────────────────────────────┐
│                        OpportunityX                         │
│                    (Parent Ecosystem)                       │
│                     opportunityx.co.in                      │
└──────────────────────────────┬──────────────────────────────┘
                               │
            ┌──────────────────┴──────────────────┐
            ▼                                     ▼
┌──────────────────────────────┐    ┌──────────────────────────────┐
│      OpportunityX Radar      │    │  Future Ecosystem Products   │
│   (Flagship Discovery App)   │    │ (Career, Freelance, Resume)  │
│    radar.opportunityx.co.in  │    │     *.opportunityx.co.in     │
└──────────────────────────────┘    └──────────────────────────────┘
```

### Visual Separation Rules:
- **Parent Authority:** The main website (`opportunityx.co.in`) represents the entire umbrella brand. It must never appear to be just "OpportunityX Radar".
- **Product Distinction:** OpportunityX Radar is featured prominently as the **flagship live product** within the ecosystem section, maintaining a clear link out to `radar.opportunityx.co.in`.

---

## 4. Design Objective & Visual Personality

The visual personality of OpportunityX is inspired by high-end engineering platforms (Linear, Vercel, Apple, Stripe, Swiss typographic design):

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          Core Visual Attributes                             │
├─────────────────┬───────────────────────────────────────────────────────────┤
│ **Minimal**     │ Clean layout grids, generous whitespace, zero visual noise│
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **Confident**   │ Strong typography hierarchy, optical alignment, bold scale│
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **Tech-Driven** │ Monospace metadata tags, crisp borders, geometric vectors │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **Trustworthy** │ Verifiable release hashes, honest statuses, no fake counters│
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **Youthful**    │ High energy accents, dynamic micro-motion, modern rhythm  │
└─────────────────┴───────────────────────────────────────────────────────────┘
```

### 🚫 Strict Anti-Slop Discipline (Banned Visual Tropes):
- **NO Traditional EdTech Stereotypes:** Strictly zero graduation caps, chalkboards, open books, pencils, or cartoon mascots.
- **NO AI Clichés:** Strictly zero purple/pink nebula gradients, floating neon bubbles, wireframe glowing brains, or heavy backdrop blur on every element.
- **NO Container Bloat:** Do not wrap every sentence in elevated cards with thick drop shadows. Let typography and spacing carry visual structure.
- **NO Fake Proof:** Strictly zero fabricated user counts ("100,000+ happy students"), simulated 5-star reviews, or unverified corporate badges.

---

## 5. Brand Identity & Locked Logo System

The OpportunityX core visual mark is proprietary and permanently locked.

```
Dark Backgrounds:           Light Backgrounds:          Monochromatic:
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│  [X] OpportunityX│         │  [X] OpportunityX│         │  [X] OpportunityX│
│  White + Amber  │         │  Slate + Amber  │         │  Pure White/Black│
└─────────────────┘         └─────────────────┘         └─────────────────┘
```

### Logo Rules:
1. **Locked Geometry:** The geometric X vector mark must never be stretched, rotated, skewed, or outlined with drop shadows.
2. **No Tagline Lockups:** Do not attach sub-labels or slogans inside the primary logo file.
3. **Dedicated SVG Assets:** Use `public/brand/logo-dark.svg`, `public/brand/logo-light.svg`, and `public/brand/logo-monochromatic.svg` matching the active theme.

---

## 6. Tri-Mode Theme System

The design system implements three first-class, fully styled themes mapped to centralized CSS custom properties:

```css
/* Color Palette Specifications */
```

### 1. Dark Mode (`data-theme="dark"`) — Default
- **Canvas Base:** `#09090B` (Zinc-950)
- **Surface Layer:** `#121215` / Elevated Surface: `#18181B`
- **Text Primary:** `#FAFAFA` (Zinc-50) | **Text Secondary:** `#A1A1AA` (Zinc-400) | **Text Muted:** `#71717A`
- **Accent Primary:** `#FF6B00` (OpportunityX Electric Amber) | **Hover:** `#FF8533`
- **Accent Subtle:** `rgba(255, 107, 0, 0.12)` (Pill backgrounds, hover highlights)
- **Border Subtle:** `#27272A` (Zinc-800) | **Border Strong:** `#3F3F46`

### 2. Light Mode (`data-theme="light"`)
- **Canvas Base:** `#FFFFFF` (Pure White)
- **Surface Layer:** `#F8FAFC` (Slate-50) | **Elevated Surface:** `#FFFFFF`
- **Text Primary:** `#09090B` (Near Black) | **Text Secondary:** `#475569` (Slate-600) | **Text Muted:** `#64748B`
- **Accent Primary:** `#EA580C` (Warm Amber-Orange) | **Hover:** `#C2410C`
- **Accent Subtle:** `rgba(234, 88, 12, 0.08)`
- **Border Subtle:** `#E2E8F0` (Slate-200) | **Border Strong:** `#CBD5E1`

### 3. Monochromatic Mode (`data-theme="monochromatic"`)
- **Canvas Base:** `#000000` (Pitch Black)
- **Surface Layer:** `#0C0C0C` | **Elevated Surface:** `#161616`
- **Text Primary:** `#FFFFFF` | **Text Secondary:** `#D4D4D8` | **Text Muted:** `#A1A1AA`
- **Accent Primary:** `#FFFFFF` (High-contrast neutral white) | **Hover:** `#E4E4E7`
- **Accent Subtle:** `rgba(255, 255, 255, 0.12)`
- **Border Subtle:** `#27272A` | **Border Strong:** `#52525B`
- **Special Rule:** Zero orange/yellow chromatic hues. Strict grayscale aesthetic.

---

## 7. Global Layout Structure

```text
Desktop Window (>= 1024px):
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Navbar: Logo]        [Links: Home | Blogs | Updates | Downloads | Contact]  [Theme] │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                       MAIN CONTENT AREA (max-w-7xl)                         │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ [Footer: Ecosystem | Resources | Company | Legal | Socials | Status]        │
└─────────────────────────────────────────────────────────────────────────────┘

Mobile Viewport (< 640px):
┌─────────────────────────────────────────────────────────┐
│ [Logo]                                           [Menu] │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                   FLUID MOBILE STREAM                   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ [Mobile Footer: Collapsible Sections + Brand Info]      │
└─────────────────────────────────────────────────────────┘
```

---

## 8. Desktop Navigation Bar Specification

- **Positioning:** Fixed / Sticky top (`top-0 z-50`), full width with backdrop blur (`backdrop-blur-md bg-opacity-80`).
- **Dimensions:** Height `64px` (`h-16`).
- **Left Column:** OpportunityX Vector Logo + Wordmark (`h-8`, clickable, smooth-scrolls to top when on root `/`).
- **Center Column (Nav Links):**
  - Items: `Home`, `Blogs`, `Notifications`, `Downloads`, `Contact`.
  - Font: Sans-serif, weight 500, size `14px` (`text-sm`).
  - Color: `text-secondary`, transition to `text-primary` on hover (150ms).
  - Active Indicator: Subtle bottom border highlight or pill tint (`bg-subtle text-primary`).
- **Right Column (Utility Action):**
  - `ThemeSwitcher` component (accessible 3-option toggle).
  - Primary Action CTA: `Explore Radar ↗` (button size `sm`, variant `primary`).

---

## 9. Mobile Navigation Drawer Specification

- **Trigger:** Hamburger icon button (`aria-label="Open Navigation Menu"`, min touch target `44×44px`).
- **Drawer Animation:** Slides from right or top (`easeOutCubic`, 220ms duration).
- **Backdrop:** Dimmed overlay (`rgba(0, 0, 0, 0.6)`) with click-to-dismiss.
- **Accessibility & Focus:**
  - Focus is trapped inside the drawer when open (`aria-modal="true"`).
  - Pressing `Escape` or clicking any navigation link immediately closes the drawer.
  - Body scroll is locked when the drawer is active.
- **Drawer Contents:**
  - OpportunityX Brand Mark + Close button (`X` icon).
  - Vertical list of navigation routes with large touch hit areas (`py-3 text-lg font-medium`).
  - Integrated Theme Selector toggle bar.
  - Primary CTA button: `Explore Radar`.

---

## 10. Home / Root Landing Page Overview

The root path `/` is the single canonical ecosystem home. The sections must render in this **exact sequential order**:

```
1. Hero Section               ──► Immediate cognitive clarity & ecosystem mission
2. Ecosystem Section          ──► Multi-product registry & Radar flagship spotlight
3. Central Community Section  ──► Single unified builder community preview & CTA
4. Blogs Preview Section      ──► Curated 3-article editorial highlight
5. Notifications Preview      ──► Chronological official release and system bulletin feed
6. Downloads Preview          ──► Operating system client availability matrix
7. Contact Preview            ──► Categorized direct inquiry bridge
8. Final Ecosystem CTA        ──► High-impact concluding value proposition
9. Global Footer              ──► Deep ecosystem directory & compliance links
```

---

## 11. Hero Section Visual & Motion Specification

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Eyebrow Badge: The Unified Student & Builder Ecosystem]                    │
│                                                                             │
│   One ecosystem.                                   ┌─────────────────────┐  │
│   Endless possibilities.                           │  Interactive        │  │
│                                                    │  Ecosystem Network  │  │
│   OpportunityX connects student opportunities,     │  Visual (Nodes &    │  │
│   real-world building, verified credentials,       │  Pathways)          │  │
│   and a global developer community.                └─────────────────────┘  │
│                                                                             │
│   [Explore Ecosystem →]   [Join Community]                                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

- **Eyebrow Badge:** Monospace tag with subtle border: `THE UNIFIED STUDENT & BUILDER ECOSYSTEM`.
- **Primary Headline:** Display scale (`clamp(2.5rem, 5vw, 4.5rem)`), font-weight 700, tight tracking (`tracking-tight`).
- **Sub-headline:** Max width `600px`, line-height 1.6, `text-secondary`, font size `18px` (`text-lg`).
- **Interactive Visual Canvas:** Minimal, lightweight SVG network representing the OpportunityX X-core connecting outward to product nodes (Radar, Career, Freelance, Resume). Nodes respond subtly to cursor hover with glowing amber accents.
- **Hero Motion:** Text elements fade up (`y: 16 -> 0`, duration `300ms`, staggered by `60ms`). Motion strictly respects `prefers-reduced-motion`.

---

## 12. Ecosystem Section & OpportunityX Radar Flagship Spotlight

- **Section Header:**
  - Eyebrow: `OUR PRODUCTS & ROADMAP`
  - Title: `Everything starts here.`
  - Subtitle: `A connected suite of tools engineered to discover opportunities, build proof-of-work, and accelerate your engineering journey.`

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ 🟢 FLAGSHIP PRODUCT                                                         │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │  [Radar Icon]  OpportunityX Radar                       [🟢 LIVE v2.1]  │ │
│ │  The real-time discovery engine for global student opportunities.       │ │
│ │  [Hackathons] [Internships] [Scholarships] [Open Source] [Fellowships]  │ │
│ │  [Explore OpportunityX Radar ↗]                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌───────────────────────┐ ┌───────────────────────┐ ┌─────────────────────┐ │
│ │ OpportunityX Career   │ │OpportunityX Freelance │ │OpportunityX Resume  │ │
│ │ Mentorship & roadmaps │ │ Bounties & micro-gigs │ │ Verified portfolio  │ │
│ │ [🟣 IN DEVELOPMENT]   │ │ [⚪ COMING SOON]      │ │ [🔵 PLANNED]        │ │
│ └───────────────────────┘ └───────────────────────┘ └─────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Radar Featured Card Design:
- Spans full grid width or 2/3 highlight.
- Subtle accent border (`border-accent-primary / 30%`).
- Category pills: `Hackathons`, `Internships`, `Scholarships`, `Open Source`, `Fellowships`, `Workshops`.
- Direct outbound button: `Launch Radar ↗` (`target="_blank"` to `https://radar.opportunityx.co.in`).

---

## 13. Centralized Community Preview Section

- **Headline:** `One community. Everyone building together.`
- **Narrative:** The single home for student developers, designers, and founders. No fragmented product silos.
- **Text-First Visual Canvas:** Stylized, minimal preview cards representing real builder conversations:
  - *"Looking for 2 frontend teammates for the upcoming Web3 Global Hackathon..."*
  - *"Just shipped my first open-source contribution to OpportunityX Core!"*
  - *"Peer review request: Open feedback on my distributed systems portfolio..."*
- **Strict Rule:** These are clean concept mockups clearly labeled as preview demonstrations. **Zero fake likes, follower counts, or fabricated user avatars.**
- **CTA:** `Join the OpportunityX Community →` (Routes to Discord / Telegram / Community Portal).

---

## 14. Blog Section & Hub Page (`/blogs` & `/blogs/:slug`)

### 14.1 Home Page Blog Preview
- **Heading:** `From the OpportunityX Blog`
- **Layout:** 3-card responsive grid.
- **Card Specs:**
  - Category pill (e.g. `HACKATHONS`, `CAREER GUIDES`, `SYSTEM ARCHITECTURE`).
  - Article Title (H3, weight 600, hover underline/accent shift).
  - 2-line excerpt with clean ellipsis.
  - Metadata footer: Date, Author, Estimated Reading Time (`5 min read`).
- **Footer Link:** `View All Articles →` (navigates to `/blogs`).

### 14.2 Dedicated Blogs Hub (`/blogs`)
- **Header:** Title `OpportunityX Insights` + Subtitle.
- **Search & Filter Bar:**
  - Interactive search input with debounced keyword filtering.
  - Category tabs: `All`, `Career Growth`, `Tech & Engineering`, `Hackathons & Radar`, `Student Guides`, `Ecosystem`.
- **Featured Hero Card:** Top-of-page full-width spotlight on the flagship editorial piece.
- **Article Grid:** Remaining articles in a balanced 3-column responsive grid.

### 14.3 Article Reader (`/blogs/:slug`)
- **Header:** Breadcrumbs (`Home / Blogs / Article Title`), Category, Published Date, Author Avatar & Name, Reading Time.
- **Reading Container:** Constrained reading width (`max-w-prose` / `65ch` / `720px`) centered with generous optical margins.
- **Prose Typography:** Calibrated font size (`18px`), line height `1.75`, styled blockquotes, syntax-highlighted code snippets, responsive markdown tables.
- **Related Articles Footer:** 2–3 contextual articles based on matching tags.

---

## 15. Notifications Section & Hub Page (`/notifications`)

- **Distinction:** Notifications are short, timestamped operational releases, feature drops, maintenance bulletins, and ecosystem announcements — separate from long-form blogs.

### 15.1 Home Preview & Dedicated Hub (`/notifications`)
- **Filter Categories:** `All Updates`, `Product Launches`, `Radar Bulletins`, `Maintenance & Reliability`, `Community`.
- **Timeline Item Component:**
  - Category Tag & Version Badge (`v2.1.0`, `MAINTENANCE`, `ANNOUNCEMENT`).
  - Timestamp (relative date e.g., `2 hours ago` + full ISO tooltip).
  - Title & expandable changelog summary.
  - Action link if applicable (e.g., `View Release Notes ↗`, `Visit Product ↗`).

---

## 16. Downloads Section & Hub Page (`/downloads`)

- **Headline:** `OpportunityX, wherever you go.`
- **Platform Matrix:**
  - **Android:** Direct `.apk` / Play Store status.
  - **Windows:** Desktop installer (`.exe` / `.msi`).
  - **macOS:** Universal Apple Silicon & Intel DMG.
  - **Linux:** `.deb` / `.AppImage`.
  - **iOS:** TestFlight status.
- **Download Card Information Architecture:**
  - OS Vector Icon + Title (`Windows x64`).
  - Version (`v1.4.0`) + Release Date + File Size (`48.2 MB`).
  - Checksum Pill: `SHA-256: e3b0c44298fc1c...` (Click to copy).
  - Action Button: `Download Now ↓` (if active) or disabled `Coming Soon` badge.
  - **Rule:** Never generate fake download links or simulated download triggers.

---

## 17. Contact Section & Dedicated Portal (`/contact`)

- **Heading:** `Let's build what's next.`
- **Form Specifications:**
  - `Full Name` (Text input, required).
  - `Email Address` (Email input, RFC 5322 validation, required).
  - `Inquiry Reason` (Select dropdown: `General Support`, `Partnership & Sponsorship`, `University / College Club Collaboration`, `Bug / Issue Report`).
  - `Subject` (Text input, max 150 chars, required).
  - `Message` (Textarea, min 20 chars, max 2000 chars, required).
- **Form States:**
  - `Default`: Clean inputs with clear label and focus rings.
  - `Submitting`: Button shows spinner + `Sending Inquiry...`, inputs disabled.
  - `Success`: Animated checkmark card + `Message Received! We typically respond within 24-48 hours.`
  - `Error`: Inline error message with retry trigger.
- **Direct Contacts Sidebar:** Official emails (`contact@opportunityx.co.in`, `partnerships@opportunityx.co.in`).

---

## 18. Final CTA Section

- **Positioning:** Pre-footer ecosystem closing statement.
- **Copy:**
  - Primary: `Your next opportunity could start here.`
  - Subtitle: `Join thousands of student builders, developers, and creators discovering their potential on OpportunityX.`
- **Buttons:** `Explore OpportunityX` (scrolls to top/ecosystem) + `Join the Community ↗`.
- **Aesthetic:** Clean, generous vertical spacing (`py-24`), subtle ambient background gradient.

---

## 19. Global Ecosystem Footer

- **Structure:** 4-Column Responsive Grid + Bottom Legal Bar.
  - **Col 1 (Brand):** Logo + "The technology ecosystem for opportunities, career growth, and builders."
  - **Col 2 (Ecosystem):** OpportunityX Radar, Career (In Dev), Freelance (Coming Soon), Resume (Planned), Portfolio (Planned).
  - **Col 3 (Resources):** Blogs, Notifications, Downloads, System Status.
  - **Col 4 (Company & Legal):** Contact, Privacy Policy, Terms of Service, Community Guidelines.
- **Bottom Bar:**
  - Copyright `© 2026 OpportunityX. All rights reserved.`
  - Active ecosystem status indicator: `🟢 All Systems Operational`.
  - Verified official social links (GitHub, X/Twitter, LinkedIn, Discord).

---

## 20. Typography Scale & Hierarchy System

```css
/* Typography Scale Tokens */
--text-display: clamp(2.5rem, 5vw, 4.5rem);  /* Hero Title */
--text-h1:      clamp(2rem, 3.5vw, 3rem);      /* Page Titles */
--text-h2:      clamp(1.5rem, 2.5vw, 2.25rem); /* Section Headers */
--text-h3:      1.25rem;                      /* Card Titles */
--text-body-lg: 1.125rem;                     /* Hero Subtitle, Lead Text */
--text-body:    1rem;                         /* Standard Body (16px) */
--text-sm:      0.875rem;                     /* UI Labels, Navigation (14px) */
--text-xs:      0.75rem;                      /* Monospace Badges, Timestamps (12px) */
```

- **Primary Font Family:** `Inter`, `Geist Sans`, or `Outfit` with `font-display: swap`.
- **Monospace Family:** `JetBrains Mono` or `Fira Code` for tags, versions, and checksums.

---

## 21. Spacing System & Vertical Rhythm

Built on a strict **4px / 8px modular spacing scale**:

| Spacing Token | Pixels | Application |
|---|---|---|
| `--space-1` | `4px` | Fine adjustments, badge internal padding |
| `--space-2` | `8px` | Gap between icon and text, compact tags |
| `--space-3` | `12px`| Button vertical padding, small card gap |
| `--space-4` | `16px`| Standard container padding on mobile |
| `--space-6` | `24px`| Card internal padding, grid gutters |
| `--space-8` | `32px`| Section internal groupings |
| `--space-12`| `48px`| Mobile section margins |
| `--space-16`| `64px`| Desktop section top/bottom padding |
| `--space-24`| `96px`| Major landing page section dividers |

---

## 22. Responsive Grid System

- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (Max content bounds `1280px`).
- **Grid Layouts:**
  - Desktop: 12-column grid (`gap-6` or `gap-8`).
  - Tablet: 6-column or 2-column auto-fit.
  - Mobile: Single-column fluid stream (`100% width`).

---

## 23. Button & Action Primitives System

```text
┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
│ Primary Button            │ Secondary Button          │ Ghost / Outline Button    │
├───────────────────────────┼───────────────────────────┼───────────────────────────┤
│ Background: Accent Color  │ Background: Surface Layer │ Background: Transparent   │
│ Text: High-contrast On-Acc│ Text: Primary Text        │ Border: 1px Subtle Border │
│ Hover: 10% brightness     │ Hover: Subtle Background  │ Hover: Border Strong      │
│ Radius: 8px (rounded-lg)  │ Radius: 8px (rounded-lg)  │ Radius: 8px (rounded-lg)  │
└───────────────────────────┴───────────────────────────┴───────────────────────────┘
```

- **Hit Targets:** Minimum `44×44px` touch bounding box on mobile devices.
- **Transitions:** `transition-all duration-150 ease-out` with subtle scale-down on click (`active:scale-[0.98]`).

---

## 24. Card System & Structural Surfaces

- **Surface Tokens:** `--color-bg-surface` (`#121215` in Dark, `#F8FAFC` in Light, `#0C0C0C` in Mono).
- **Border:** `1px solid var(--color-border-subtle)`.
- **Border Radius:** `12px` (`rounded-xl`).
- **Hover State:** Border transitions to `var(--color-border-strong)` with a subtle translateY shift (`-2px`).
- **Rule:** Never layer cards inside cards inside cards. Maintain flat bento structures.

---

## 25. Iconography & SVG System

- **Icon Provider:** `lucide-react` vector icons exclusively.
- **Stroke Width:** Uniform `1.75px` across all icons for visual cohesion.
- **Sizes:** `16px` (sm, metadata), `20px` (md, buttons/nav), `24px` (lg, section headers), `32px` (xl, product icons).
- **Rule:** Zero emojis as UI icons.

---

## 26. Image Strategy & Aspect Ratio Guidelines

- **Image Format:** WebP or optimized SVG vectors.
- **Aspect Ratios:**
  - Blog Cards: `16:9` (`aspect-video`).
  - Hero Illustrations: `4:3` or auto-scaled SVG viewBox.
  - Author Avatars: `1:1` (`rounded-full w-10 h-10`).
- **Loading:** `loading="lazy"` on all below-the-fold imagery.

---

## 27. Responsive Viewport Adaptations

```
┌─────────────────┬─────────────────┬─────────────────┬─────────────────┐
│ Mobile (<640px) │ Tablet (640-1023│ Desktop (1024-  │ Ultra-wide      │
│                 │ px)             │ 1439px)         │ (>=1440px)      │
├─────────────────┼─────────────────┼─────────────────┼─────────────────┤
│ 1-Column        │ 2-Column Grid   │ 3-Column Grid   │ Centered 1280px │
│ Hamburger Menu  │ Compact Nav     │ Full Header Nav │ Max-Width Bounds│
│ 16px Padding    │ 24px Padding    │ 32px Padding    │ Generous Gutters│
│ 24px Display H1 │ 36px Display H1 │ 48px Display H1 │ 56px Display H1 │
└─────────────────┴─────────────────┴─────────────────┴─────────────────┘
```

---

## 28. Accessibility (a11y) & Contrast Specification

- **Contrast Ratios:** Minimum **4.5:1** contrast for all body text and **3:1** for UI borders and focus rings.
- **Focus Rings:** High-visibility keyboard focus rings: `focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2`.
- **ARIA Semantics:** Proper roles (`role="navigation"`, `role="main"`, `role="feed"`, `aria-expanded`).
- **Screen Reader Labels:** `aria-label` on all icon-only buttons.

---

## 29. Motion, Easing & Physics Specification

- **Easing Curves:**
  - Standard Enter: `cubic-bezier(0.16, 1, 0.3, 1)` (Smooth spring-out).
  - Micro-Interaction: `cubic-bezier(0.4, 0, 0.2, 1)` (Standard ease-in-out).
- **Timing Budgets:**
  - Hover / Press: `120ms – 160ms`.
  - Dropdown / Drawer: `200ms – 240ms`.
  - Page Fade Transition: `250ms`.
- **Reduced Motion:** If `prefers-reduced-motion: reduce` is active, duration is set to `0ms` and transform animations are bypassed.

---

## 30. Loading States & Skeletons

- **Skeleton Screens:** Shimmering animated placeholders (`animate-pulse bg-subtle rounded-md`) matching component shapes during data hydration.
- **Button Loading:** Replaces text with a clean spinner and disables click triggers (`pointer-events-none`).

---

## 31. Error States & Fallbacks

- **Inline Form Errors:** Red text label (`text-red-500 text-sm`) placed directly below the invalid input.
- **Route Error Boundary:** Branded card displaying `Something went wrong loading this section` with a `Retry` action button.

---

## 32. Empty States & Query Resets

- **No Blog Results:** "No articles match your search criteria." + `Reset Search Filters` button.
- **No Notifications:** "All caught up! No recent system notices to display."

---

## 33. Branded 404 Experience

- **Route:** `*` (Catch-all).
- **Visual:** Clean geometric `404` header + `Lost in the Ecosystem?` subtitle.
- **Actions:** `Return to Home →` and `Discover Opportunities on Radar ↗`.

---

## 34. Interactive State Machine

Every clickable element must support 5 distinct states:
1. `Default` — Base styling.
2. `Hover` — Elevated contrast or background tint.
3. `Focus-Visible` — Visible 2px focus ring.
4. `Active` — Subtle scale compression (`scale-[0.98]`).
5. `Disabled` — Reduced opacity (`opacity-50 cursor-not-allowed`).

---

## 35. Honest Content Rules

- **Zero Artificial Counters:** Never display fabricated statistics ("1M+ Opportunities Found").
- **Zero Fake Testimonials:** Only display verified feedback if and when real community reviews exist.
- **Clear Status Badges:** Clearly label non-live features as `Coming Soon`, `In Development`, or `Planned`.

---

## 36. Product Visual Sub-Branding Rules

- All products share the OpportunityX core geometric design token system.
- OpportunityX Radar uses the **Radar Emerald/Cyan or Amber Accent** to signify real-time radar scanning while retaining parent brand typography and surfaces.

---

## 37. SEO & Open Graph Metadata Specification

- **`<title>` Template:** `{Page Title} | OpportunityX — One Ecosystem. Endless Possibilities.`
- **Default Meta Description:** `OpportunityX is the unified technology ecosystem connecting students and young professionals to hackathons, internships, building, and community.`
- **OG Sharing Card:** High-resolution `1200×630` vector preview located at `/images/og-preview.png`.

---

## 38. Performance Budgets & Optimization

- **Initial Bundle Target:** `< 180 KB` gzip total JS.
- **Lighthouse Performance Score:** `≥ 95/100` on Desktop and Mobile.
- **Asset Limits:** WebP images `< 100 KB`, SVG vectors `< 10 KB`.

---

## 39. Cross-Browser & Device Matrix

Validated across:
- **Desktop:** Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge.
- **Mobile:** iOS Safari (iPhone 13/14/15/SE), Android Chrome (Samsung, Pixel).

---

## 40. Visual QA & Playwright Verification Checklist

- [ ] Theme toggles seamlessly across Dark, Light, and Monochromatic with zero text contrast failures.
- [ ] Mobile navigation drawer opens, traps focus, and closes smoothly with Escape/overlay click.
- [ ] Ecosystem section features OpportunityX Radar with correct external routing.
- [ ] Blog search and category filters update URL query parameters without page reloading.
- [ ] Contact form validates email formats, enforces message lengths, and handles submission states.
- [ ] Download cards display verifiable SHA-256 checksums and honest platform availability.
- [ ] Responsive layout passes visual inspection at 320px, 375px, 768px, 1024px, 1440px, and 1920px.

---

## 41. 18-Step Frontend Implementation Roadmap

```
Step  1: Design Tokens & CSS Custom Properties (tokens.css, index.css)
Step  2: Tri-Mode Theme State Engine (ThemeContext, ThemeSwitcher, inline script)
Step  3: App Shell & Client Routing (AppShell, Navbar, MobileNav, Footer)
Step  4: Core UI Primitives (Button, Badge, Card, Container, SectionHeader)
Step  5: Home Hero Section (Typography, CTAs, Connected Node SVG visual)
Step  6: Ecosystem Section (OpportunityX Radar highlight + product matrix)
Step  7: Central Community Gateway (Text-first preview + join action)
Step  8: Home Blogs Preview & Notifications Feed Components
Step  9: Home Downloads Preview & Contact Gateway Sections
Step 10: Final CTA & Ecosystem Footer Integration
Step 11: Dedicated Blogs Hub (`/blogs`) & Markdown Reader (`/blogs/:slug`)
Step 12: Dedicated Notifications Hub (`/notifications`) with Category Filtering
Step 13: Dedicated Downloads Center (`/downloads`) with Checksums & OS Badges
Step 14: Dedicated Contact Portal (`/contact`) with Client-Side Validation
Step 15: Branded 404 Recovery View (`NotFoundView`)
Step 16: Responsive Breakpoint & Mobile Touch Refinements
Step 17: Framer Motion Transitions & `prefers-reduced-motion` Hardening
Step 18: Playwright E2E Testing, Visual QA & Core Web Vitals Optimization
```

---

## 42. Frontend Component Mapping Tree

```text
src/components/
├── shell/
│   ├── AppShell.jsx
│   ├── Navbar.jsx
│   ├── MobileNav.jsx
│   ├── Footer.jsx
│   └── ThemeSwitcher.jsx
├── home/
│   ├── HeroSection.jsx
│   ├── EcosystemSection.jsx
│   ├── CommunitySection.jsx
│   ├── BlogsPreview.jsx
│   ├── NotificationsPreview.jsx
│   ├── DownloadsPreview.jsx
│   ├── ContactPreview.jsx
│   └── FinalCTA.jsx
├── ecosystem/
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   └── StatusBadge.jsx
├── blog/
│   ├── BlogCard.jsx
│   ├── BlogGrid.jsx
│   ├── BlogFilter.jsx
│   └── ArticleContent.jsx
├── notifications/
│   ├── NotificationCard.jsx
│   └── NotificationList.jsx
├── downloads/
│   ├── DownloadCard.jsx
│   └── PlatformMatrix.jsx
├── contact/
│   ├── ContactForm.jsx
│   └── ContactInfo.jsx
└── ui/
    ├── Button.jsx
    ├── Badge.jsx
    ├── Card.jsx
    ├── Container.jsx
    ├── SectionHeader.jsx
    ├── SkeletonLoader.jsx
    └── EmptyState.jsx
```

---

## 43. Data Decoupling & Boundary Contracts

- **Zero Hardcoded Content in Presentation JSX:** All product details, articles, bulletins, and download manifests live in `src/data/*.json` and pass through `src/services/*.js`.
- **API Interchangeability:** Switching from static JSON to a live FastAPI / Headless CMS endpoint in Phase 2 requires changing only the service layer, leaving UI components 100% untouched.

---

## 44. Design System Deliverables Inventory

The frontend implementation will generate:
1. `src/styles/tokens.css` (CSS custom properties for Dark, Light, Monochromatic).
2. `tailwind.config.js` (Color aliases mapped to CSS variables).
3. Reusable UI Primitives (`Button`, `Card`, `Badge`, `StatusPill`, `Container`, `SectionHeader`).
4. Tri-Mode Theme Switcher component.
5. Fully accessible Responsive Mobile Drawer.
6. Centralized Motion utility presets (`src/utils/motion.js`).

---

## 45. Frontend Non-Goals (v1 Scope Exclusions)

The initial frontend release **explicitly excludes**:
- ❌ Live interactive social feed / comment posting engine.
- ❌ User authentication login/signup modals.
- ❌ Account profile dashboards or saved opportunity bookmarks.
- ❌ Direct opportunity submission portals (managed within OpportunityX Radar).
- ❌ Heavy 3D WebGL scenes or continuous canvas particle loops.

---

## 46. 20-Point Acceptance Criteria Matrix

| # | Acceptance Criterion | Verification Method |
|---|---|---|
| 1 | OpportunityX is unequivocally presented as the parent umbrella ecosystem. | Visual Inspection / Header Brand |
| 2 | OpportunityX Radar is featured prominently as the flagship live sub-product. | Ecosystem Section Review |
| 3 | Root route (`/`) is the single canonical landing page experience. | Router Verification |
| 4 | All 8 required landing page sections render in exact sequential order. | DOM Sequence Test |
| 5 | Blogs hub (`/blogs`) and detail view (`/blogs/:slug`) operate seamlessly. | Route & Markdown Test |
| 6 | Notifications hub (`/notifications`) renders chronological system bulletins. | Tag Filter Test |
| 7 | Downloads center (`/downloads`) displays verified OS binary manifests. | Checksum Copy Test |
| 8 | Contact portal (`/contact`) validates inputs and provides clear state feedback. | Form Interaction Test |
| 9 | Community is presented as a singular centralized builder network. | Content Review |
| 10 | Dark, Light, and Monochromatic theme modes switch with zero FOUC. | Theme Switcher Test |
| 11 | Locked core X brand logo is preserved with zero geometric distortions. | Vector Asset Check |
| 12 | Mobile layout is responsive, touch-friendly, and accessible at 375px. | Viewport Audit |
| 13 | Full keyboard navigation and visible focus rings operate on all interactive elements. | Keyboard Tab Test |
| 14 | Motion is subtle, fast, and strictly respects `prefers-reduced-motion`. | Animation Inspector |
| 15 | Zero fake counters, simulated reviews, or unverified claims exist. | Content Audit |
| 16 | Zero generic AI slop tropes (purple mesh gradients, excessive cards) are present. | Visual Design Audit |
| 17 | Core Web Vitals pass performance budgets (LCP < 1.8s, CLS < 0.05). | Lighthouse Audit |
| 18 | Clean client-side routing with custom branded 404 error page. | 404 Route Test |
| 19 | Component hierarchy is modular, composable, and clean. | Code Quality Review |
| 20 | Data is completely decoupled from UI components via service layer. | Data Contract Audit |

---

## 47. Frontend Definition of Done (DoD)

The Frontend Specification `docs/04-FRONTEND-SPECIFICATION.md` is approved when:
- [x] Full alignment with PRD, Technical Architecture, and Security docs is verified.
- [x] OpportunityX parent vs OpportunityX Radar visual hierarchy is established.
- [x] Tri-mode theme system (Dark, Light, Monochromatic) is exhaustively specified.
- [x] Sequential 8-section Home page layout and secondary hubs are mapped.
- [x] Design token scales (Typography, Spacing, Grids, Radius, Shadows) are defined.
- [x] Strict Anti-Slop visual craft floor is enforced.
- [x] Component mapping and data decoupling boundaries are outlined.
- [x] 18-step implementation roadmap and 20-point acceptance criteria matrix are locked.
