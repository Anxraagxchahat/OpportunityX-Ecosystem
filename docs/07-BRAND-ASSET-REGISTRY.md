# Brand Asset Registry & Logo System Specification — 07
# OpportunityX Main Ecosystem Website

---

## Document Metadata
- **Product Name:** OpportunityX Main Ecosystem Website
- **Parent Brand:** OpportunityX
- **Primary Domain:** `https://opportunityx.co.in`
- **Document Version:** 1.0.0
- **Document Status:** Authoritative Brand Specification / Locked Visual Source of Truth
- **Approved Reference Count:** 3 Authoritative Master Images (Dark, Light, Monochromatic)
- **Target Audience:** Engineering Team, UI/UX Designers, Brand Custodians, Frontend Developers, DevOps & Release Managers

---

## 1. Executive Summary & Brand Authority

### 1.1 Brand Definition & Scope
**OpportunityX** is the overarching parent ecosystem brand. It serves as the single authoritative digital umbrella for all modern discovery, learning, career building, skill validation, and student-developer tooling across the ecosystem.

```
                      ┌────────────────────────────────────────┐
                      │              OPPORTUNITYX              │
                      │        Parent Ecosystem Brand          │
                      │        https://opportunityx.co.in      │
                      └───────────────────┬────────────────────┘
                                          │
        ┌──────────────┬──────────────────┼──────────────────┬──────────────┐
        ▼              ▼                  ▼                  ▼              ▼
┌──────────────┐┌──────────────┐  ┌──────────────┐┌──────────────┐┌──────────────┐
│ OpportunityX ││ OpportunityX │  │ OpportunityX ││ OpportunityX ││ OpportunityX │
│    Radar     ││    Career    │  │ Freelancing  ││    Resume    ││ Verification │
└──────────────┘└──────────────┘  └──────────────┘└──────────────┘└──────────────┘
```

### 1.2 Permanent Logo Lock Directive
The OpportunityX logo geometry and visual architecture are **permanently locked**.
- **DO NOT** redesign the logo.
- **DO NOT** reinterpret the geometry or visual metaphor.
- **DO NOT** generate alternative replacement concepts.
- **DO NOT** substitute a generic letter "X" or icon font.
- **DO NOT** use AI generation to produce alternative logo variations.
- **DO NOT** modify proportions, angles, corner radii, or stroke weights.

This document serves as the **SINGLE SOURCE OF TRUTH (SSOT)** for all branding assets, color relationships, directory structures, export standards, and runtime implementations across the OpportunityX ecosystem.

---

## 2. Official Logo Reference Inspection & Visual Anatomy

The project owner has provided **THREE authoritative logo reference images**. These images constitute the baseline visual source of truth against which all derivatives and digital implementations must be audited and verified.

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                      OFFICIAL LOGO REFERENCE INVENTORY                           │
├─────────────────────────┬─────────────────────────────┬──────────────────────────┤
│ 1. DARK MODE MASTER     │ 2. LIGHT MODE MASTER        │ 3. MONOCHROMATIC MASTER  │
│ Black Squircle Canvas   │ White Squircle Canvas       │ White Squircle Canvas    │
│ White Foundation Arm (\)│ Dark Charcoal Arm (\)       │ Pure Black Arm (\)       │
│ Orange Ascending (↗)    │ Orange Ascending (↗)        │ Pure Black Ascending (↗) │
└─────────────────────────┴─────────────────────────────┴──────────────────────────┘
```

### 2.1 Geometric Breakdown & Visual Architecture
The approved OpportunityX core mark is a dynamic swirling dot vortex / spiral construct:

1. **Swirling Dot Spiral / Dynamic Vortex (Core Visual Mark):**
   - **Form & Movement:** Concentric ascending dot clusters spiraling dynamically outward with progressive diameter and scale.
   - **Symbolism:** Direct visual metaphor for ecosystem expansion, opportunity convergence, continuous upward mobility, community interconnectivity, and forward velocity.
   - **Color Dynamics:**
     - **Dark Mode:** Glowing Electric Orange & Crisp White dot clusters on deep dark/transparent canvas.
     - **Light Mode:** Vibrant Electric Orange & Obsidian Dark dot clusters on pure white/transparent canvas.
     - **Monochromatic Mode:** Pure Solid Jet Black dot clusters on pure white/transparent canvas.

2. **Container & Sizing Standard:**
   - **Aspect Ratio:** 1:1 (Square canvas).
   - **Padding / Margins:** Proportional breathing margin ensuring the swirling outer dots are fully protected with zero clipping across all viewport sizes.

---

## 3. Brand Color Rules & Tri-Mode Specifications

OpportunityX operates under **EXACTLY THREE** official visual modes. No auxiliary, hybrid, or speculative theme variations are permitted.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                 TRI-MODE COLOR MATRIX                                │
├─────────────────┬──────────────────┬───────────────────────┬─────────────────────────┤
│ Mode            │ Canvas / Surface │ Wordmark "Opportunity"│ Accent "X" & Arrow Mark │
├─────────────────┼──────────────────┼───────────────────────┼─────────────────────────┤
│ 1. Dark Mode    │ Deep Black       │ Pure White (`#FFFFFF`)│ Electric Orange         │
│                 │ (`#09090B` / 00) │                       │ (`#FF6B00` / `#FF7A00`) │
├─────────────────┼──────────────────┼───────────────────────┼─────────────────────────┤
│ 2. Light Mode   │ Pure White       │ Deep Black (`#09090B`)│ Electric Orange         │
│                 │ (`#FFFFFF`)      │                       │ (`#FF6B00` / `#EA580C`) │
├─────────────────┼──────────────────┼───────────────────────┼─────────────────────────┤
│ 3. Monochrome   │ Pure White / Off │ Pure Black (`#000000`)│ Pure Black (`#000000`)  │
│                 │ (`#FFFFFF`)      │                       │ (Zero chromatic hue)    │
└─────────────────┴──────────────────┴───────────────────────┴─────────────────────────┘
```

### 3.1 Mode 1: Dark Mode Specification (Default Theme)
- **Primary Canvas:** Deep Black (`#000000` / `#09090B`)
- **Wordmark Typography:** `"Opportunity"` in High-Contrast White (`#FAFAFA` / `#FFFFFF`)
- **Accent Glyph & Ascending Arrow:** `"X"` in Official OpportunityX Electric Orange (`#FF6B00`)
- **Foundation Bar:** Crisp Clean White (`#FFFFFF`)
- **Conceptual Equation:**
  $$\text{Logo}_{\text{Dark}} = \text{Black Canvas} + \text{Opportunity}_{\text{WHITE}} + \text{X}_{\text{ORANGE}}$$
- **Usage:** Default ecosystem theme, developer surfaces, IDEs, terminal modes, high-contrast night viewing.

### 3.2 Mode 2: Light Mode Specification
- **Primary Canvas:** Pure Crisp White (`#FFFFFF` / `#F8FAFC`)
- **Wordmark Typography:** `"Opportunity"` in Deep Obsidian Black (`#09090B` / `#0F172A`)
- **Accent Glyph & Ascending Arrow:** `"X"` in Official OpportunityX Electric Orange (`#FF6B00` / `#EA580C`)
- **Foundation Bar:** Deep Charcoal / Obsidian (`#18181B` / `#09090B`)
- **Conceptual Equation:**
  $$\text{Logo}_{\text{Light}} = \text{White Canvas} + \text{Opportunity}_{\text{BLACK}} + \text{X}_{\text{ORANGE}}$$
- **Usage:** Editorial documentation, light desktop reading, daylight presentations, institutional review.

### 3.3 Mode 3: Monochromatic Mode Specification
- **Primary Canvas:** Pure White (`#FFFFFF`)
- **Wordmark Typography:** `"Opportunity"` in Solid Jet Black (`#000000`)
- **Accent Glyph & Ascending Arrow:** `"X"` in Solid Jet Black (`#000000`)
- **Foundation Bar:** Solid Jet Black (`#000000`)
- **Conceptual Equation:**
  $$\text{Logo}_{\text{Monochrome}} = \text{White Canvas} + \text{Opportunity}_{\text{BLACK}} + \text{X}_{\text{BLACK}}$$
- **Hard Rule:** **Strictly zero orange or chromatic accents**. This mode is intentionally pure binary black-and-white for print media, laser engraving, official certificates, single-color silk-screening, stamp watermarks, and high-legibility document exports.

---

## 4. Canonical Design Tokens & Color Palettes

The following tokens are the single source of truth for all CSS, SCSS, Tailwind, SVG attributes, and asset generation pipelines:

```css
:root {
  /* ==========================================================================
     OPPORTUNITYX CORE BRAND TOKENS
     ========================================================================== */
  
  /* Primary Brand Accent (OpportunityX Electric Orange) */
  --oppx-brand-orange-500: #FF6B00;
  --oppx-brand-orange-400: #FF8533;
  --oppx-brand-orange-600: #EA580C;
  --oppx-brand-orange-rgb: 255, 107, 0;
  --oppx-brand-orange-subtle: rgba(255, 107, 0, 0.12);
  --oppx-brand-orange-glow: rgba(255, 107, 0, 0.24);

  /* Monochrome Spectrum */
  --oppx-color-white: #FFFFFF;
  --oppx-color-black: #000000;
  --oppx-color-zinc-50: #FAFAFA;
  --oppx-color-zinc-100: #F4F4F5;
  --oppx-color-zinc-200: #E4E4E7;
  --oppx-color-zinc-400: #A1A1AA;
  --oppx-color-zinc-800: #27272A;
  --oppx-color-zinc-900: #18181B;
  --oppx-color-zinc-950: #09090B;
}

/* --------------------------------------------------------------------------
   THEME MAPPINGS FOR LOGO SYSTEM
   -------------------------------------------------------------------------- */

[data-theme="dark"] {
  --brand-logo-bg: #09090B;
  --brand-logo-wordmark: #FAFAFA;
  --brand-logo-foundation-bar: #FFFFFF;
  --brand-logo-accent: #FF6B00;
}

[data-theme="light"] {
  --brand-logo-bg: #FFFFFF;
  --brand-logo-wordmark: #09090B;
  --brand-logo-foundation-bar: #18181B;
  --brand-logo-accent: #FF6B00;
}

[data-theme="monochromatic"] {
  --brand-logo-bg: #FFFFFF;
  --brand-logo-wordmark: #000000;
  --brand-logo-foundation-bar: #000000;
  --brand-logo-accent: #000000;
}
```

---

## 5. Official Logo Asset Categories & Anatomy

The brand asset registry recognizes **SIX official asset categories**:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           OFFICIAL ASSET CATEGORIES                             │
├─────────────────┬──────────────────────────────────┬────────────────────────────┤
│ Category        │ Composition                      │ Primary Usage              │
├─────────────────┼──────────────────────────────────┼────────────────────────────┤
│ 1. Full Logo    │ Icon Mark + "OpportunityX" Text  │ Header / Desktop Nav / Hero│
│ 2. Icon-Only    │ Standalone "X" Arrow Mark        │ Favicon / App Icon / Avatar│
│ 3. Wordmark     │ Stylized "OpportunityX" Type Only│ Editorial / Inline Credits │
│ 4. Favicon      │ Multi-size ICO / 16-48px Mark    │ Browser Tabs & Bookmarks   │
│ 5. Social / OG  │ 1200x630px Branded Social Card   │ Open Graph / Meta Previews │
│ 6. App / PWA    │ Maskable & Standalone 192-512px  │ PWA / Mobile / Desktop PWA │
└─────────────────┴──────────────────────────────────┴────────────────────────────┘
```

### 5.1 Category Breakdown
1. **Full Brand Logo:** Combines the geometric X mark with the primary "OpportunityX" wordmark. Used in top-level navigation headers, footers, splash screens, and official media kits.
2. **Icon-Only Mark:** Standalone geometric X mark (with or without squircle container). Used when horizontal space is constrained (<120px width), in mobile headers, app drawer headers, and platform icons.
3. **Wordmark:** Pure typographic lockup without the separate standalone icon badge.
4. **Favicon:** Specialized icon-only asset rendered at 16x16, 32x32, and 48x48 pixel densities for zero blurriness in browser tab bars.
5. **Social / Open Graph Branding:** High-resolution 1200x630 pixel landscape images configured with the official logo, tagline, and ecosystem trust signals for URL sharing.
6. **App / PWA Icons:** Standardized icon assets (192x192, 512x512, maskable) adhering to Android, iOS, Windows, and macOS launcher specifications.

---

## 6. Required File Formats & Technical Standards

Every official brand asset must adhere to strict technical guidelines per format:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          FORMAT SPECIFICATION MATRIX                            │
├─────────┬──────────────────────┬─────────────┬──────────────────────────────────┤
│ Format  │ Primary Target       │ Transp. Sup │ Rendering Quality Target         │
├─────────┼──────────────────────┼─────────────┼──────────────────────────────────┤
│ SVG     │ Web UI, Vectors, CAD │ Full Alpha  │ Infinite crispness, clean paths  │
│ PNG     │ Docs, Decks, Apps    │ 8-bit Alpha │ Lossless, zero fringing/haloing  │
│ WebP    │ High-Performance Web │ Full Alpha  │ 90%+ quality, ultra-lightweight  │
│ ICO     │ Browser Favicons     │ Full Alpha  │ Multi-resolution embedded matrix │
└─────────┴──────────────────────┴─────────────┴──────────────────────────────────┘
```

### 6.1 Scalable Vector Graphics (SVG) Standards
- **Standard:** SVG 1.1 / SVG 2 compliant, standalone (no external fonts or scripts).
- **viewBox:** Normalized square `viewBox="0 0 512 512"` or rectangular `viewBox="0 0 1200 320"` with proper coordinates.
- **Purity:** Pure vector path geometry (`<path>`, `<rect>`, `<g>`). Zero embedded raster `<image>` tags.
- **Optimization:** Cleaned of editor metadata (Inkscape, Illustrator, Figma tags), unnecessary layers, and hidden objects.
- **Security:** Zero `<script>`, `onload`, or foreign object markup. Safe for Content Security Policy (`CSP`).

### 6.2 Portable Network Graphics (PNG) Standards
- **Bit Depth:** 32-bit PNG (24-bit RGB + 8-bit alpha transparency channel).
- **Anti-Aliasing:** Crisp, sub-pixel accurate edge rendering without matte haloing or black/white fringe lines.
- **Resolutions:** Master exports rendered at $2048 \times 2048\text{ px}$ before downsampling to target resolutions.
- **Color Profile:** sRGB standard IEC61966-2.1.

### 6.3 WebP Standards
- **Encoding:** Lossless WebP or High-Fidelity Lossy ($Q \ge 95$) with full alpha transparency preserved.
- **Delivery:** Serves high-DPR screens with maximum compression efficiency.

### 6.4 Windows Icon (ICO) Standards
- **Multi-Resolution Container:** Must bundle three distinct uncompressed pixel-aligned mip levels:
  - `16x16 px` (standard browser tab)
  - `32x32 px` (retina / high-DPR tab)
  - `48x48 px` (Windows taskbar / shortcut)
- **Constraint:** **Strictly icon-only mark**. Never embed the full wordmark in an `.ico` container.

---

## 7. Master Asset Rule & Derivative Generation Protocol

### 7.1 Master Asset Hierarchy
All brand derivatives must originate from the highest-quality approved source available:

```
                      ┌────────────────────────────┐
                      │    OFFICIAL MASTER ASSET   │
                      │  (Supplied Master Vector / │
                      │   Lossless Master Raster)  │
                      └──────────────┬─────────────┘
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│   SVG Vectors    │       │ High-Res PNGs    │       │ Lossless WebPs   │
│ (Web UI, Nav)    │       │ (Docs, Decks)    │       │ (CDN, Fast Load) │
└────────┬─────────┘       └─────────┬────────┘       └──────────────────┘
         │                           │
         ▼                           ▼
┌──────────────────┐       ┌──────────────────┐
│   Favicon.ico    │       │  PWA / App Icons │
│ (16/32/48 Multi) │       │ (192 / 512 / OG) │
└──────────────────┘       └──────────────────┘
```

### 7.2 Safe Derivative Extraction Rules
When extracting or generating derivatives from the approved masters:
1. **Zero Geometry Modification:** Do not adjust the arrow tip angle, arm width, or squircle curvature.
2. **Zero Color Drift:** Sample colors directly from the master swatch palette (`#FF6B00`, `#FFFFFF`, `#000000`, `#09090B`).
3. **No Blind Auto-Tracing:** If a true vector master is not available, do **NOT** run noisy AI or algorithmic auto-trace tools that introduce wavy edges, asymmetrical curves, or distorted vertices.
4. **Transparency Integrity:** Extract icons onto pure transparent canvases; do not leave accidental background rectangles unless rendering the explicit squircle badge.
5. **Vector Missing Flag:** If a vector is required but cannot be derived losslessly, mark status as:
   `MISSING — HIGH-QUALITY VECTOR SOURCE REQUIRED`

---

## 8. Canonical Directory & File Naming Architecture

To prevent filename chaos and accidental regressions, OpportunityX enforces strict canonical naming rules:

### 8.1 Forbidden Naming Anti-Patterns
- `logo-final.svg` (FORBIDDEN)
- `logo-final-2.svg` (FORBIDDEN)
- `new-logo.svg` (FORBIDDEN)
- `new-logo-final.svg` (FORBIDDEN)
- `actual-final-logo.svg` (FORBIDDEN)
- `logo_dark_v3_fixed.png` (FORBIDDEN)

### 8.2 Canonical Directory Structure (`public/brand/`)

```
public/
└── brand/
    ├── README.md                          <- Brand assets quick-reference
    ├── logo/                              <- Full Logo Assets (Icon + Wordmark)
    │   ├── dark/
    │   │   ├── opportunityx-logo-dark.svg
    │   │   ├── opportunityx-logo-dark.png
    │   │   └── opportunityx-logo-dark.webp
    │   ├── light/
    │   │   ├── opportunityx-logo-light.svg
    │   │   ├── opportunityx-logo-light.png
    │   │   └── opportunityx-logo-light.webp
    │   └── monochrome/
    │       ├── opportunityx-logo-monochrome.svg
    │       ├── opportunityx-logo-monochrome.png
    │       └── opportunityx-logo-monochrome.webp
    │
    ├── icon/                              <- Icon-Only Assets (Standalone "X" Mark)
    │   ├── dark/
    │   │   ├── opportunityx-icon-dark.svg
    │   │   ├── opportunityx-icon-dark.png
    │   │   ├── opportunityx-icon-dark.webp
    │   │   └── opportunityx-icon-dark-squircle.png
    │   ├── light/
    │   │   ├── opportunityx-icon-light.svg
    │   │   ├── opportunityx-icon-light.png
    │   │   ├── opportunityx-icon-light.webp
    │   │   └── opportunityx-icon-light-squircle.png
    │   └── monochrome/
    │       ├── opportunityx-icon-monochrome.svg
    │       ├── opportunityx-icon-monochrome.png
    │       ├── opportunityx-icon-monochrome.webp
    │       └── opportunityx-icon-monochrome-squircle.png
    │
    ├── wordmark/                          <- Pure Typographic Lockups
    │   ├── dark/
    │   │   ├── opportunityx-wordmark-dark.svg
    │   │   └── opportunityx-wordmark-dark.png
    │   ├── light/
    │   │   ├── opportunityx-wordmark-light.svg
    │   │   └── opportunityx-wordmark-light.png
    │   └── monochrome/
    │       ├── opportunityx-wordmark-monochrome.svg
    │       └── opportunityx-wordmark-monochrome.png
    │
    ├── favicon/                           <- Browser Favicons & Touch Icons
    │   ├── favicon.ico                    <- Multi-size 16x16, 32x32, 48x48
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── favicon-48x48.png
    │   ├── favicon-dark.svg
    │   ├── favicon-light.svg
    │   └── favicon-monochrome.svg
    │
    ├── pwa/                               <- Mobile & Progressive Web App Icons
    │   ├── apple-touch-icon.png           <- 180x180 px
    │   ├── pwa-192x192.png                <- Standard 192x192 px
    │   ├── pwa-512x512.png                <- Standard 512x512 px
    │   ├── pwa-maskable-192x192.png       <- Android Adaptive / Maskable
    │   └── pwa-maskable-512x512.png       <- Android Adaptive / Maskable
    │
    └── social/                            <- Open Graph & Social Cards
        ├── og-image-dark.png              <- 1200x630 px Dark OG
        ├── og-image-light.png             <- 1200x630 px Light OG
        ├── og-image-monochrome.png        <- 1200x630 px Monochrome OG
        ├── twitter-card.png               <- 1200x600 px Summary Card
        └── discord-banner.png             <- 960x540 px Community Banner
```

---

## 9. Master Brand Asset Registry Table

The authoritative status table tracks every canonical asset across the OpportunityX ecosystem:

| Asset Item | Mode | Target Purpose | Format | Canonical Workspace Path | Source Authority | Current Status | Verification State |
|---|---|---|---|---|---|---|---|
| **Full Logo** | Dark | Website Header / Hero | SVG | `/brand/logo/dark/opportunityx-logo-dark.svg` | Supplied Master 1 | PENDING_VECTOR_SOURCE | Requires vector source |
| **Full Logo** | Light | Website Header / Hero | SVG | `/brand/logo/light/opportunityx-logo-light.svg` | Supplied Master 2 | PENDING_VECTOR_SOURCE | Requires vector source |
| **Full Logo** | Monochromatic | Documentation / Print | SVG | `/brand/logo/monochrome/opportunityx-logo-monochrome.svg` | Supplied Master 3 | PENDING_VECTOR_SOURCE | Requires vector source |
| **Full Logo** | Dark | Decks / Docs / Media | PNG | `/brand/logo/dark/opportunityx-logo-dark.png` | Supplied Master 1 | **APPROVED** | Verified tight squircle cutout, transparent alpha |
| **Full Logo** | Light | Decks / Docs / Media | PNG | `/brand/logo/light/opportunityx-logo-light.png` | Supplied Master 2 | **APPROVED** | Verified tight squircle cutout, transparent alpha |
| **Full Logo** | Monochromatic | Print / Black & White | PNG | `/brand/logo/monochrome/opportunityx-logo-monochrome.png` | Supplied Master 3 | **APPROVED** | Verified tight squircle cutout, transparent alpha |
| **Full Logo** | Dark | High-Perf Web | WebP | `/brand/logo/dark/opportunityx-logo-dark.webp` | Supplied Master 1 | **APPROVED** | Verified lossless WebP, transparent alpha |
| **Full Logo** | Light | High-Perf Web | WebP | `/brand/logo/light/opportunityx-logo-light.webp` | Supplied Master 2 | **APPROVED** | Verified lossless WebP, transparent alpha |
| **Full Logo** | Monochromatic | High-Perf Web | WebP | `/brand/logo/monochrome/opportunityx-logo-monochrome.webp` | Supplied Master 3 | **APPROVED** | Verified lossless WebP, transparent alpha |
| **Icon Mark** | Dark | Navbar / Mobile Header | SVG | `/brand/icon/dark/opportunityx-icon-dark.svg` | Supplied Master 1 | PENDING_VECTOR_SOURCE | Requires vector source |
| **Icon Mark** | Light | Navbar / Mobile Header | SVG | `/brand/icon/light/opportunityx-icon-light.svg` | Supplied Master 2 | PENDING_VECTOR_SOURCE | Requires vector source |
| **Icon Mark** | Monochromatic | High-Contrast UI | SVG | `/brand/icon/monochrome/opportunityx-icon-monochrome.svg` | Supplied Master 3 | PENDING_VECTOR_SOURCE | Requires vector source |
| **Icon Mark** | Dark | Square Avatar / Badges | PNG | `/brand/icon/dark/opportunityx-icon-dark.png` | Supplied Master 1 | **APPROVED** | Verified tight squircle cutout, transparent alpha |
| **Icon Mark** | Light | Square Avatar / Badges | PNG | `/brand/icon/light/opportunityx-icon-light.png` | Supplied Master 2 | **APPROVED** | Verified tight squircle cutout, transparent alpha |
| **Icon Mark** | Monochromatic | Square Avatar / Badges | PNG | `/brand/icon/monochrome/opportunityx-icon-monochrome.png` | Supplied Master 3 | **APPROVED** | Verified tight squircle cutout, transparent alpha |
| **Favicon** | Neutral / Auto | Browser Tabs | ICO | `/brand/favicon/favicon.ico` | Supplied Master 1 | **APPROVED** | Multi-res (16,32,48px) verified |
| **Favicon** | Dark | Modern Browser Tab | SVG | `/brand/favicon/favicon-dark.svg` | Supplied Master 1 | PENDING_VECTOR_SOURCE | Requires vector source |
| **Favicon** | Light | Modern Browser Tab | SVG | `/brand/favicon/favicon-light.svg` | Supplied Master 2 | PENDING_VECTOR_SOURCE | Requires vector source |
| **Favicon** | Monochromatic | High-Contrast Tab | SVG | `/brand/favicon/favicon-monochrome.svg` | Supplied Master 3 | PENDING_VECTOR_SOURCE | Requires vector source |
| **Favicon PNG**| Dark | Modern Browser Tab | PNG | `/brand/favicon/favicon-dark.png` | Supplied Master 1 | **APPROVED** | 48x48 px verified |
| **Favicon PNG**| Light | Modern Browser Tab | PNG | `/brand/favicon/favicon-light.png` | Supplied Master 2 | **APPROVED** | 48x48 px verified |
| **Favicon PNG**| Monochromatic | High-Contrast Tab | PNG | `/brand/favicon/favicon-monochrome.png`| Supplied Master 3 | **APPROVED** | 48x48 px verified |
| **Apple Touch Icon**| Universal | iOS Home Screen | PNG | `/brand/pwa/apple-touch-icon.png` | Supplied Master 1 | **APPROVED** | 180x180 px squircle verified |
| **PWA Icon 192** | Universal | Android Launcher | PNG | `/brand/pwa/pwa-192x192.png` | Supplied Master 1 | **APPROVED** | 192x192 px standard verified |
| **PWA Icon 512** | Universal | Android Splash / Store| PNG | `/brand/pwa/pwa-512x512.png` | Supplied Master 1 | **APPROVED** | 512x512 px standard verified |
| **OG Image** | Dark | Social Sharing Card | PNG | `/brand/social/og-image-dark.png` | Supplied Master 1 | PENDING_COMPOSITION | 1200x630 px preview |
| **OG Image** | Light | Social Sharing Card | PNG | `/brand/social/og-image-light.png` | Supplied Master 2 | PENDING_COMPOSITION | 1200x630 px preview |
| **Twitter Card** | Dark | X/Twitter Share Card | PNG | `/brand/social/twitter-card.png` | Supplied Master 1 | PENDING_COMPOSITION | 1200x600 px card |

> [!NOTE]
> **Status Lifecycle:** `PENDING_GENERATION` $\rightarrow$ `IN_REVIEW` $\rightarrow$ `APPROVED`. Raster PNG, WebP, Favicon ICO, and PWA assets have undergone tight squircle extraction, removal of excess outer background canvas (Alpha = 0 outside), and multi-background validation (Dark, Light, Transparent Checkerboard).

---

## 10. Ecosystem Asset Audit & Conflict Resolution

### 10.1 Workspace Asset Audit
An audit of existing files across the ecosystem reveals the following findings:
- **`OpportunityX Ecosystem/` (Root Project):** Zero conflicting brand assets exist. Clean canvas ready for canonical asset structure under `public/brand/`.
- **`OpportunityX-Radar/public/` (Adjacent Sub-Product):**
  - Contains legacy assets: `favicon.png` (20KB), `favicon.svg` (9.5KB), `og-image.png` (520KB).
  - **Classification:** **DERIVATIVE / SUB-PRODUCT ASSET**.
  - **Policy:** These files belong to the OpportunityX Radar specialized application. They must **NOT** be blindly overwritten or imported as parent ecosystem brand masters.
  - **Action:** OpportunityX Radar will be updated in a subsequent phase to consume the canonical parent brand assets from the shared design system.

### 10.2 Conflict Management & Decommissioning Protocol
Before any existing logo asset is replaced, renamed, or deleted in any repository:
1. **Search Usage:** Run global ripgrep search (`grep_search`) across all source code (`src/`, `public/`, `index.html`, `manifest.json`).
2. **Catalog References:** Map every component, tag, and CSS background referencing the old file path.
3. **Safe Substitution:** Update code references to point to the canonical `public/brand/...` path.
4. **Build Verification:** Run `npm run build` or Vite test pipeline to guarantee zero broken asset links.
5. **Archive / Remove:** Move legacy asset to `.archive/` or delete only after build and visual verification succeed.

---

## 11. Favicon & Web App / PWA Specifications

### 11.1 The Favicon Strict Rule
```
               ┌───────────────────────────────────────────────┐
               │              THE FAVICON RULE                 │
               ├───────────────────────────────────────────────┤
               │  ✅ USE: Approved Standalone "X" Icon Mark   │
               │  ❌ NEVER USE: Full "OpportunityX" Wordmark  │
               └───────────────────────────────────────────────┘
```
At tiny browser resolutions ($16 \times 16\text{ px}$ and $32 \times 32\text{ px}$), full text is completely illegible and degrades brand prestige. The favicon **MUST ALWAYS** use the icon-only geometric mark.

### 11.2 HTML `<head>` Favicon & PWA Integration Blueprint
When implementing in `index.html`, use the following standard tag structure:

```html
<!-- Canonical Favicon Suite -->
<link rel="icon" type="image/x-icon" href="/brand/favicon/favicon.ico" sizes="16x16 32x32 48x48" />
<link rel="icon" type="image/svg+xml" href="/brand/favicon/favicon-dark.svg" media="(prefers-color-scheme: dark)" />
<link rel="icon" type="image/svg+xml" href="/brand/favicon/favicon-light.svg" media="(prefers-color-scheme: light)" />
<link rel="icon" type="image/png" sizes="32x32" href="/brand/favicon/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/brand/favicon/favicon-16x16.png" />

<!-- Apple Touch Icon (iOS Home Screen) -->
<link rel="apple-touch-icon" sizes="180x180" href="/brand/pwa/apple-touch-icon.png" />

<!-- Web App Manifest (PWA) -->
<link rel="manifest" href="/manifest.json" />

<!-- Theme Color Meta Tags -->
<meta name="theme-color" content="#09090B" media="(prefers-color-scheme: dark)" />
<meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)" />
```

### 11.3 Web App Manifest (`public/manifest.json`)
```json
{
  "name": "OpportunityX Ecosystem",
  "short_name": "OpportunityX",
  "description": "The technology ecosystem for opportunities, career growth, and builders.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#09090B",
  "theme_color": "#09090B",
  "icons": [
    {
      "src": "/brand/pwa/pwa-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/brand/pwa/pwa-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/brand/pwa/pwa-maskable-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/brand/pwa/pwa-maskable-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}
```

---

## 12. Social & Open Graph (OG) Branding Specifications

When links from `opportunityx.co.in` are shared on LinkedIn, X (Twitter), Discord, Telegram, or WhatsApp, automated crawlers fetch the Open Graph meta tags.

### 12.1 Open Graph Image Dimensions & Layout
- **Dimensions:** $1200 \times 630\text{ px}$ (Standard 1.91:1 Landscape).
- **Safe Zone:** Center $1000 \times 530\text{ px}$ (avoids platform cropping).
- **Visual Composition:**
  - **Center Left:** Official Full OpportunityX Logo (Dark Mode styling).
  - **Sub-headline:** *"One ecosystem. Endless possibilities."*
  - **Bottom Left Badge:** Verified Ecosystem Gateway — `https://opportunityx.co.in`.
  - **Background:** Rich deep black (`#09090B`) with subtle radial ambient glow (`rgba(255, 107, 0, 0.08)`).
  - **Border:** Ultra-fine subtle border (`#27272A`).

### 12.2 HTML `<head>` Social Meta Tags Blueprint
```html
<!-- Open Graph / Facebook / LinkedIn -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://opportunityx.co.in/" />
<meta property="og:title" content="OpportunityX — The Technology Ecosystem for Builders & Careers" />
<meta property="og:description" content="Discover career-defining opportunities, hackathons, fellowships, internships, and builder tools across the OpportunityX ecosystem." />
<meta property="og:image" content="https://opportunityx.co.in/brand/social/og-image-dark.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="OpportunityX Ecosystem Official Logo" />

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://opportunityx.co.in/" />
<meta name="twitter:title" content="OpportunityX — The Technology Ecosystem for Builders & Careers" />
<meta name="twitter:description" content="One ecosystem. Endless possibilities. Hackathons, internships, developer tools, and community." />
<meta name="twitter:image" content="https://opportunityx.co.in/brand/social/twitter-card.png" />
```

---

## 13. Brand Usage Rules & Forbidden Violations

To preserve brand integrity and institutional prestige, all team members, automated agents, and designers must adhere to the following **STRICT RULES**:

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                            BRAND VIOLATION MATRIX                                │
├────────────────────────────────┬─────────────────────────────────────────────────┤
│ ❌ NEVER DO THIS               │ WHY IT IS FORBIDDEN                             │
├────────────────────────────────┼─────────────────────────────────────────────────┤
│ 1. Stretch or Compress Logo    │ Distorts 45° arrow angle and squircle curvature │
│ 2. Rotate or Skew Logo         │ Alters the upward career trajectory metaphor    │
│ 3. Change the Orange Accent    │ Breaks brand recognition and color consistency  │
│ 4. Add Heavy Drop Shadows      │ Creates cheap, dated skeuomorphic aesthetics    │
│ 5. Add Neon Glows / Halos      │ Introduces illegibility and visual noise        │
│ 6. Recreate Logo with Plain CSS│ Inevitably leads to cross-browser warping       │
│ 7. Use Generic System "X"      │ Dilutes trademark and legal protection          │
│ 8. Enclose in Arbitrary Circles│ Violates official squircle & clear space rules  │
│ 9. Put Orange in Monochrome    │ Violates pure black-and-white print standard    │
│ 10. Shrink Wordmark in Favicon │ Renders unreadable mush in 16px browser tabs    │
└────────────────────────────────┴─────────────────────────────────────────────────┘
```

### 13.1 Clear Space & Boundary Rules
The logo must always be surrounded by a minimum boundary of protected clear space free of text, icons, buttons, cards, or dividers.
- **Minimum Clear Space ($X_{\text{clear}}$):** Equal to $50\%$ of the height of the standalone geometric X mark.
- **Formula:**
  $$\text{Clear Space} \ge 0.5 \times H_{\text{logo}}$$
- **Rule:** Never allow adjacent navigation links or buttons to infringe upon this bounding box.

```
         ┌─────────────────────────────────────────────────┐
         │                  CLEAR SPACE                    │
         │     ┌─────────────────────────────────────┐     │
         │     │                                     │     │
         │     │   [X]  O P P O R T U N I T Y X      │     │
         │     │                                     │     │
         │     └─────────────────────────────────────┘     │
         │                  CLEAR SPACE                    │
         └─────────────────────────────────────────────────┘
```

### 13.2 Minimum Sizing & Breakpoint Rules
- **Full Logo on Desktop ($W \ge 1024\text{px}$):** Minimum height: $32\text{px}$ (Optimal: $36\text{px} - 40\text{px}$).
- **Full Logo on Tablet ($768\text{px} \le W < 1024\text{px}$):** Minimum height: $28\text{px}$.
- **Full Logo on Mobile ($W < 768\text{px}$):** Minimum height: $24\text{px}$. If horizontal space in header is under $140\text{px}$, swap dynamically to the **Icon-Only Mark** ($32 \times 32\text{px}$).
- **Icon-Only Minimum Size:** $16 \times 16\text{px}$ (Favicons), $24 \times 24\text{px}$ (UI toolbars), $36 \times 36\text{px}$ (Mobile drawer).

---

## 14. Responsive Frontend Implementation Reference

Frontend developers should use the following standard React/JSX patterns to ensure zero layout shift, theme synchronization, and accessibility:

### 14.1 Dynamic Theme-Aware Logo Component (`BrandLogo.tsx`)
```tsx
import React from 'react';

export interface BrandLogoProps {
  variant?: 'full' | 'icon' | 'wordmark';
  className?: string;
  height?: number | string;
  theme?: 'dark' | 'light' | 'monochromatic' | 'auto';
  priority?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  height = 36,
  theme = 'auto',
}) => {
  // In auto mode, CSS custom properties or theme context dictate the active asset
  return (
    <div className={`brand-logo-container inline-flex items-center select-none ${className}`}>
      {/* Dark Theme Logo (Active when data-theme="dark" or in dark container) */}
      <img
        src={`/brand/${variant}/dark/opportunityx-${variant}-dark.svg`}
        alt="OpportunityX Logo"
        height={height}
        className="brand-logo-dark hidden [html[data-theme='dark']_&]:block [html:not([data-theme])_&]:block h-auto"
        loading="eager"
        decoding="async"
      />

      {/* Light Theme Logo (Active when data-theme="light") */}
      <img
        src={`/brand/${variant}/light/opportunityx-${variant}-light.svg`}
        alt="OpportunityX Logo"
        height={height}
        className="brand-logo-light hidden [html[data-theme='light']_&]:block h-auto"
        loading="eager"
        decoding="async"
      />

      {/* Monochromatic Logo (Active when data-theme="monochromatic") */}
      <img
        src={`/brand/${variant}/monochrome/opportunityx-${variant}-monochrome.svg`}
        alt="OpportunityX Logo"
        height={height}
        className="brand-logo-monochrome hidden [html[data-theme='monochromatic']_&]:block h-auto"
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
```

---

## 15. Brand Governance & Automated Quality Guardrails

### 15.1 Brand Verification Checklists

#### Checklist A: Before Creating Any New Page
- [ ] Correct official logo component utilized (no ad-hoc `<img>` with hardcoded raw URLs).
- [ ] Theme switching verified across Dark, Light, and Monochromatic modes.
- [ ] Clear space rules maintained around header and footer brand marks.
- [ ] Page-specific Open Graph tags declare canonical social image `/brand/social/og-image-dark.png`.
- [ ] Page `<title>` adheres to standard: `[Page Name] — OpportunityX Ecosystem`.

#### Checklist B: Before Implementing Any New Feature
- [ ] Sub-product visual branding does not override parent OpportunityX header mark.
- [ ] No hardcoded SVGs or generic letter "X" icons introduced in place of the official logo.
- [ ] All new images or badges adhere to canonical color tokens (`#FF6B00`, `#09090B`, `#FFFFFF`).

#### Checklist C: Before Every Production Release
- [ ] `favicon.ico` resolves correctly on root URL with HTTP 200.
- [ ] All SVG assets pass XML/SVG linting (no broken tags, no external fonts).
- [ ] Responsive header correctly switches to Icon Mark on small viewports (<360px).
- [ ] Social crawler preview verified via Open Graph debugger (LinkedIn / Twitter cards).
- [ ] Monochromatic mode verified: zero orange chromatic bleed.

### 15.2 Automated Brand Linting & CI Verification
The continuous integration pipeline runs automated static analysis to catch brand violations:

```bash
# Automated Brand Asset Integrity Check Script (ci:brand-check)
# 1. Verify existence of all canonical assets in public/brand/
# 2. Check SVG files for prohibited <text> or <image> raster wrappers
# 3. Assert zero raw color string leaks (#FF6B00 hardcoded in components instead of tokens)
```

---

## 16. Implementation Safety & Execution Boundaries

This document sets the brand policy and asset taxonomy. Creating this document **DOES NOT** authorize:
- Unchecked modification of existing frontend application code.
- Silent deletion or overwriting of existing sub-product assets in adjacent workspaces (e.g., `OpportunityX-Radar`).
- Premature frontend package installations.
- Deviation from the 3 authoritative reference images provided by the project owner.

All future asset generation and derivative extractions must adhere directly to the standards established in this registry.

---

## 17. Cross-Document Alignment & Validation Matrix

This document has been cross-checked and harmonized with the entire OpportunityX documentation suite:

| Document | Cross-Validation Scope | Alignment Status |
|---|---|---|
| [`01-PRD.md`](./01-PRD.md) | Parent Brand Authority, Ecosystem Separation, Locked Logo directives | **FULLY ALIGNED** |
| [`02-TECHNICAL-ARCHITECTURE.md`](./02-TECHNICAL-ARCHITECTURE.md) | `public/brand/` directory structure, SEO metadata, Error recovery UI | **FULLY ALIGNED** |
| [`03-SECURITY-AND-ACCESS.md`](./03-SECURITY-AND-ACCESS.md) | CSP safety on SVG assets, Zero external script dependencies in graphics | **FULLY ALIGNED** |
| [`04-FRONTEND-SPECIFICATION.md`](./04-FRONTEND-SPECIFICATION.md) | Tri-Mode Theme System (Dark, Light, Monochromatic), Token variables | **FULLY ALIGNED** |
| [`05-FEATURE-TICKET-LIST.md`](./05-FEATURE-TICKET-LIST.md) | Brand asset tasks, Header & Footer logo implementations | **FULLY ALIGNED** |
| [`06-CONTINUOUS-SECURITY-AND-RELIABILITY-GUARDRAILS.md`](./06-CONTINUOUS-SECURITY-AND-RELIABILITY-GUARDRAILS.md) | CI verification, Asset load performance, 404 branded recovery | **FULLY ALIGNED** |
