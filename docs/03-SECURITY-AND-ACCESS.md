# Security & Access Control Architecture — 03
# OpportunityX Main Ecosystem Website

---

## Document Metadata
- **Product Name:** OpportunityX Main Ecosystem Website
- **Parent Brand:** OpportunityX
- **Primary Domain:** `https://opportunityx.co.in`
- **Flagship Subdomain:** `https://radar.opportunityx.co.in`
- **Sources of Truth:** [`docs/01-PRD.md`](./01-PRD.md) & [`docs/02-TECHNICAL-ARCHITECTURE.md`](./02-TECHNICAL-ARCHITECTURE.md)
- **Document Version:** 1.0.0
- **Document Status:** Approved Security Baseline
- **Target Audience:** Security Engineers, Frontend Engineers, DevOps/Platform Leads, System Architects & Compliance Officers

---

## 1. Executive Summary & Security Philosophy

The **OpportunityX Main Ecosystem Website** is the authoritative public gateway to the OpportunityX ecosystem. Trust, integrity, and safety are central to the brand's mission of empowering students, builders, and young technology professionals.

The security model for OpportunityX is founded on five uncompromising engineering principles:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       Core Security Principles                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. Least Privilege       │ Restrict access exclusively to required scopes. │
│ 2. Defense in Depth      │ Multiple overlapping layers of protection.      │
│ 3. Secure by Default     │ New features ship locked down by default.       │
│ 4. Public ≠ Trusted      │ Every public entry point assumes hostile input. │
│ 5. Never Trust Client    │ Server-side enforcement for all critical logic. │
└─────────────────────────────────────────────────────────────────────────────┘
```

This document establishes the security architecture, access control model, privacy frameworks, abuse prevention strategies, and trust guarantees across all phases of the website lifecycle.

---

## 2. Product Security Context & Trust Boundaries

The OpportunityX brand operates across distinct trust boundaries to ensure that specialized applications remain securely isolated:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       OpportunityX Trust Boundaries                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [ Primary Public Gateway ]                                                 │
│  https://opportunityx.co.in                                                 │
│  └── Scope: Ecosystem Directory, Blogs, Notifications, Downloads, Contact   │
│  └── Trust Level: Public Static SPA (Zero server-side session state in v1)  │
│                                                                             │
│  ───────────────────────── Isolated Trust Boundary ───────────────────────  │
│                                                                             │
│  [ Specialized Product Subdomain ]                                          │
│  https://radar.opportunityx.co.in                                           │
│  └── Scope: Real-time Opportunity Ingestion, Filter Feeds, Submissions      │
│  └── Trust Level: Independent Web App (Dedicated API & Auth scopes)         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Key Isolation Rule:
The main website (`opportunityx.co.in`) maintains an isolated origin boundary from OpportunityX Radar (`radar.opportunityx.co.in`). Compromise of a client-side state on one subdomain cannot cross-contaminate local storage or session boundaries of the parent domain.

---

## 3. Access & Authorization Model

### 3.1 Initial Access Model (Phase 1 Baseline)
For the initial release, the entire OpportunityX website is **100% public and unauthenticated**:
- **Public Routes:** Home (`/`), Blogs Hub (`/blogs`), Article Reader (`/blogs/:slug`), Notifications Feed (`/notifications`), Platform Downloads (`/downloads`), and Contact Portal (`/contact`).
- **No Login Required:** Visitors must never encounter forced authentication gates to discover products, read editorial content, view release notes, or inspect download availability.

### 3.2 Future Ecosystem Role-Based Access Control (RBAC Model)
When authenticated ecosystem services (e.g., user profiles, portfolio verification, community discussions) are introduced in future roadmap phases, the platform will enforce a strict, hierarchical RBAC model:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          Future Ecosystem RBAC Model                        │
├─────────────────┬───────────────────────────────────────────────────────────┤
│ Role            │ Assigned Permissions & Access Scope                       │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **Visitor**     │ Read public pages, search blogs/updates, submit contact   │
│ (Unauthenticated) inquiries, inspect download manifests.                   │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **User**        │ Manage personal profile, publish text posts, bookmark     │
│ (Authenticated) │ opportunities, submit feedback, participate in discussions│
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **Moderator**   │ Review flagged community content, hide/remove violating   │
│ (Elevated)      │ posts, issue temporary user suspensions, review reports.  │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **Admin**       │ Publish blogs/notifications, manage download manifests,   │
│ (Privileged)    │ update product registries, manage moderator assignments.  │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **Super Admin** │ System configuration, audit log inspection, critical API  │
│ (Root Authority)│ key rotation, emergency lockouts, security policy edits.  │
└─────────────────┴───────────────────────────────────────────────────────────┘
```

### 3.3 Strict Authorization Enforcement
- **Server-Side Authority:** All permissions are validated cryptographically on the server/API layer. Client-side checks (e.g., `if (user.role === 'admin')`) exist solely for UI rendering and affordances, never for security enforcement.
- **Zero Client-Side Trust:** An unauthenticated or unauthorized user manipulating client state or tampering with API requests will always receive a `401 Unauthorized` or `403 Forbidden` response from the backend.

---

## 4. Future Authentication & Session Security Standards

When authentication is introduced in future platform phases, it will adhere to the following security specifications:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       Future Session Security Architecture                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [ Client Browser ]                                                         │
│         │                                                                   │
│         ├── 1. POST /api/auth/login ──────────────────────────────────┐      │
│         │                                                             ▼      │
│         │                                                 [ Auth Server ]   │
│         │                                                 - Rate Check      │
│         │                                                 - Argon2id Verify │
│         │                                                 - Issue Tokens    │
│         │                                                             │      │
│         ├── 2. Set-Cookie: __Host-ox_session=...; HttpOnly; Secure ◄──┘      │
│         │      SameSite=Strict; Path=/; Max-Age=3600                         │
│         ▼                                                                    │
│  [ Subsequent Requests automatically include Cookie ]                        │
│  [ Zero sensitive tokens stored in localStorage ]                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.1 Authentication Protocols & Safeguards
1. **Password Security:** If traditional passwords are supported, hashes must use **Argon2id** (or `bcrypt` with cost factor $\ge 12$). Passwords must enforce a minimum length of 12 characters and check against the *Have I Been Pwned* compromised password database.
2. **OAuth 2.0 / OIDC Integration:** Support federated identity (GitHub, Google) for developer and student convenience, utilizing state parameters and PKCE (Proof Key for Code Exchange) to prevent authorization code interception.
3. **Cookie Hygiene:**
   - Prefix: `__Host-` cookie prefix to guarantee origin binding.
   - Flags: `HttpOnly` (blocks JavaScript access, mitigating XSS token theft), `Secure` (HTTPS only), and `SameSite=Strict` (prevents CSRF).
4. **Token Expiration & Rotation:** Short-lived access tokens (15–30 minutes) paired with rolling, revocable refresh tokens stored in secure server-side session stores (e.g., Redis).
5. **Session Revocation:** Centralized session invalidation upon password reset, email change, or user logout across all active devices.

---

## 5. Web Application Attack Surface & Countermeasures

| Vulnerability Vector | Threat Scenario | OpportunityX Technical Countermeasure |
|---|---|---|
| **Cross-Site Scripting (XSS)** | Injection of malicious scripts via contact form or future blog markdown rendering. | React automatic JSX context escaping; `DOMPurify` sanitization on all rich markdown; Strict Content Security Policy (CSP) blocking unauthorized script execution. |
| **Cross-Site Request Forgery (CSRF)** | Unauthorized state modification via forged cross-origin requests. | `SameSite=Strict` session cookies; Anti-CSRF double-submit tokens on state-changing API endpoints; Origin & Referer header verification. |
| **Clickjacking & UI Redressing** | Embedding the website in hidden `<iframe>` to trick users into unintended actions. | `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'` HTTP response headers. |
| **MIME-Type Sniffing** | Browser executing non-executable assets (e.g. interpreting SVGs or JSON as HTML). | `X-Content-Type-Options: nosniff` header enforced on all static and dynamic responses. |
| **Tab-Nabbing / Reverse Tabnabbing** | Malicious external links hijacking the referring window object. | All external links (e.g. `radar.opportunityx.co.in`, social links) enforce `target="_blank" rel="noopener noreferrer"`. |
| **Open Redirects** | Manipulation of query parameters (e.g. `?redirect=evil.com`) to phish visitors. | Strict whitelist validation of internal redirect paths; immediate rejection of absolute cross-origin URLs. |
| **Dependency Supply-Chain Attacks**| Vulnerable or compromised npm packages in the client build. | Automated `npm audit` in CI/CD; lockfile integrity checking (`package-lock.json`); minimal dependency surface. |

---

## 6. Input Validation & Contact Form Security

The `/contact` route represents a public attack surface prone to automated spam, injection, and email relay abuse.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    Contact Form Security Defense Pipeline                   │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                         1. User Submits Inquiry
                                       │
                                       ▼
                         2. Client-Side UX Validation
                      (Field types, length, format regex)
                                       │
                                       ▼
                         3. Honeypot Field Check
              (Hidden field filled by bot? ──► Silently drop)
                                       │
                                       ▼
                         4. IP / Rate Limit Check
               (>3 requests / 10 mins? ──► Return HTTP 429)
                                       │
                                       ▼
                         5. Server-Side Strict Validation
                      (Sanitize input, strip control chars)
                                       │
                                       ▼
                         6. Dispatch to Secure Service
                 (API keys kept on server; Zero secrets in UI)
```

### 6.1 Defense Layers:
1. **Honeypot Traps:** Invisible CSS-hidden form field (`website_url_hp`). Legitimate users leave it empty; automated bot scrapers populate it. If populated, the request is silently dropped with a simulated success response.
2. **Rate Limiting:** Maximum **3 submissions per 10-minute window per IP address** to eliminate email flooding.
3. **Payload Constraints:** Strict length validation on all inputs (`Name`: max 80 chars, `Email`: valid RFC 5322 format, `Subject`: max 150 chars, `Message`: max 2,000 chars).
4. **Zero Secret Exposure:** Frontend code contains zero SMTP credentials, SendGrid keys, or email tokens. In Phase 1, contact interaction is frontend-ready; in Phase 2, submissions route to an isolated backend endpoint.

---

## 7. Centralized Community Security Architecture (Future Scope)

Following the **Unified Global Community Rule**, OpportunityX will host a single central community platform.

### 7.1 Text-First Community Strategy: Security & Architectural Advantages
The initial community roadmap prioritizes **Text-First Content** (project updates, technical questions, discussions, markdown snippets):

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    Text-First Community Security Benefits                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. Zero Binary File Storage Attack Surface (No executable upload exploits) │
│ 2. Elimination of Malicious EXIF & Image Steganography Vectors              │
│ 3. Dramatically Reduced Storage, CDN Bandwidth & Cloud Infrastructure Costs │
│ 4. Deterministic Content Moderation via Lightweight NLP & Regex Matchers    │
│ 5. High Performance, Sub-Millisecond Database Reads on Text Payloads        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Community Content Safety & Moderation Pipeline
When community posting is introduced:
- **Rate Throttling:** New accounts limited to 1 post per 5 minutes and 10 comments per hour.
- **Link Verification:** User-submitted hyperlinks pass through a domain reputation checker. Raw IP addresses, known URL shorteners, and suspicious TLDs are automatically quarantined.
- **Community Reporting Mechanism:** Users can flag content for spam, harassment, malicious code, or academic dishonesty.
- **Progressive Account Sanctions:** Automated quarantine upon crossing report thresholds, escalating to human moderator review.

---

## 8. Download Center Integrity & Software Distribution Security

The `/downloads` portal is a core component of the OpportunityX trust model. Distributing desktop, mobile, or CLI binaries requires absolute provenance and tamper-resistance.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                   Binary Integrity Verification Model                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Official Build Pipeline (GitHub Actions CI)                               │
│           │                                                                 │
│           ├── Compile & Code-Sign Binary (Authenticode / Apple Developer)   │
│           ├── Generate Cryptographic Hash (SHA-256)                         │
│           └── Upload to Immutable, Non-Executable Release Storage           │
│                                                                             │
│   Download Center UI (/downloads)                                           │
│           │                                                                 │
│           ├── Display Official Version, File Size & Release Date            │
│           ├── Display Verifiable SHA-256 Checksum Badge                     │
│           └── Provide Direct HTTPS Link to Verified Origin                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 8.1 Download Safety Rules:
- **No Third-Party Hosting:** Binaries must be hosted exclusively on official OpportunityX infrastructure or signed GitHub Releases.
- **Checksum Transparency:** Every executable package (Windows `.exe`, macOS `.dmg`, Linux `.AppImage`, Android `.apk`) must publish its SHA-256 checksum in the UI for user verification.
- **Honest Status Display:** If a platform binary is not yet compiled, the status is explicitly locked to `Coming Soon` or `Private Beta`. **Never display placeholder or simulated download URLs.**

---

## 9. Secret Management & Environment Security

### 9.1 The Zero Client Secrets Rule
The public React Single Page Application bundle is completely public. Therefore:
- **NEVER** place database connection strings, JWT signing keys, payment secrets, SMTP passwords, or admin credentials inside client-side `.env` files or source code.
- Only variables prefixed with `VITE_PUBLIC_` (which contain purely public information such as `VITE_PUBLIC_SITE_URL` or `VITE_PUBLIC_RADAR_URL`) may exist in the frontend build.

### 9.2 Environment Segregation
```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ Development  │     │   Preview    │     │  Production  │
│ (Local Mock) │     │(Vercel Branch│     │(Live Edge CDN│
│ Zero Secrets │     │  Isolated)   │     │  Production) │
└──────────────┘     └──────────────┘     └──────────────┘
```
- `.env` files are strictly added to `.gitignore`.
- `.env.example` provides self-documenting templates with dummy placeholders only.

---

## 10. HTTP Security Headers & Production Hardening

When deployed to Vercel, the application enforces modern HTTP security headers via `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://radar.opportunityx.co.in; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
        }
      ]
    }
  ]
}
```

---

## 11. Privacy, Data Minimization & Analytics Standards

OpportunityX is designed with a **Privacy-by-Design** mindset, adhering to data minimization principles:

### 11.1 Data Minimization
- The public site collects **zero personal information** during standard browsing.
- Contact form collects only operational necessities (`Name`, `Email`, `Reason`, `Message`).
- Contact inquiry records are purged after resolution or after a maximum retention period of 90 days.

### 11.2 Privacy-Preserving Analytics
- Analytics track high-level aggregation events (e.g., `ecosystem_product_click`, `radar_outbound_click`, `theme_toggle`, `blog_article_view`).
- **No Personally Identifiable Information (PII)** is ever attached to analytics payloads.
- IP addresses are anonymized before analytical aggregation.

---

## 12. Logging, Monitoring & Incident Response

### 12.1 Security Event Logging (Future Backend Services)
Security-relevant events will be ingested into append-only structured logs:
- Authentication failures and anomalous spikes.
- Contact form rate-limit breaches.
- Admin and moderation operations.
- Content Security Policy (CSP) violation reports (`report-to` / `report-uri`).

*Logging Rule: Passwords, authorization tokens, credit card data, and full PII payloads must NEVER appear in logs.*

### 12.2 Incident Response Lifecycle
```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Detect   │ ──► │  2. Contain  │ ──► │3. Eradicate  │ ──► │ 4. Recover & │
│ Monitoring / │     │ Revoke keys /│     │ Patch bug /  │     │ Post-Mortem  │
│ User Reports │     │ Rate limit IP│     │ Deploy fix   │     │ Root Cause   │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

---

## 13. Security Priority Matrix

| Priority | Security Control Area | Focus & Implementation Requirement |
|---|---|---|
| 🔴 **CRITICAL** | **Secrets & Credential Hygiene** | Zero API keys or secrets in client bundle; strict `.gitignore` enforcement. |
| 🔴 **CRITICAL** | **Origin & Subdomain Isolation** | Clear boundary between `opportunityx.co.in` and `radar.opportunityx.co.in`. |
| 🔴 **CRITICAL** | **XSS & Injection Defense** | React context escaping; HTML sanitization; strict Content Security Policy. |
| 🟡 **HIGH** | **Contact Form Protection** | Honeypot traps, client/server input validation, IP rate throttling. |
| 🟡 **HIGH** | **Download Binary Integrity** | SHA-256 checksums, official storage origins, verified status labels. |
| 🟡 **HIGH** | **HTTP Security Headers** | HSTS, CSP, X-Frame-Options, nosniff, Permissions-Policy via Vercel Edge. |
| 🟢 **MEDIUM** | **Privacy & Analytics** | Data minimization, zero PII in event tracking, anonymized telemetry. |
| 🔵 **FUTURE** | **Authenticated RBAC & Auth** | Argon2id password hashing, `__Host-` secure session cookies, token rotation. |
| 🔵 **FUTURE** | **Community Moderation System** | Automated spam heuristics, user reporting, progressive account throttling. |

---

## 14. Security Non-Goals (Explicit Exclusions for Phase 1)

To prevent scope creep and over-engineering, the following are **strictly out of scope for v1**:
- ❌ **No Complex Auth Infrastructure:** No JWT servers, OAuth providers, or user login systems in Phase 1.
- ❌ **No Live Chat / WebSocket Security:** No end-to-end encryption or socket rate-limit engines.
- ❌ **No Media Upload Defense Pipelines:** No binary virus scanning (ClamAV) or EXIF stripping pipelines in Phase 1 (text-first community).
- ❌ **No Enterprise SSO / SAML:** No enterprise federation engines.
- ❌ **No Invasive CAPTCHAs:** No disruptive CAPTCHA puzzles on standard browsing pages.

---

## 15. Security Architecture Decision Records (Security ADRs)

### Security ADR-001: Public-First Frictionless Architecture
- **Decision:** The initial OpportunityX ecosystem site requires zero authentication to browse, read, or discover products.
- **Rationale:** Maximizes discovery velocity, lowers onboarding friction, and keeps the attack surface minimal.

### Security ADR-002: Future Authentication & RBAC Deferred to Phase 2+
- **Decision:** Authenticated user sessions are strictly architected for future roadmap phases and excluded from initial release.
- **Rationale:** Keeps the initial release laser-focused on public ecosystem authority and performance.

### Security ADR-003: Centralized Community Identity Boundary
- **Decision:** Security and user identity belong to the unified parent OpportunityX Community, not individual product sub-silos.
- **Rationale:** Prevents credential fragmentation and unifies trust across all future ecosystem sub-services.

### Security ADR-004: Text-First Community Strategy
- **Decision:** The initial community scope will support rich text and markdown discussions, omitting general image/video uploads.
- **Rationale:** Drastically reduces media abuse, eliminates file upload vulnerabilities, and minimizes infrastructure costs.

### Security ADR-005: Zero Client Secrets in Frontend Bundle
- **Decision:** The React frontend bundle will contain strictly zero private API tokens, database URIs, or SMTP passwords.
- **Rationale:** Public JavaScript bundles are fully transparent; all sensitive operations must execute on isolated backends.

### Security ADR-006: Server-Side Authorization Authority
- **Decision:** All future role checks (User, Moderator, Admin) must be cryptographically enforced by the server/database.
- **Rationale:** Client-side state can be arbitrarily manipulated; the server remains the sole source of truth.

### Security ADR-007: Progressive Abuse Protection
- **Decision:** Use honeypot fields and rate throttling before resorting to disruptive CAPTCHAs on public forms.
- **Rationale:** Preserves seamless UX for genuine students and builders while blocking automated spam scrapers.

### Security ADR-008: Download Verification & Trust Guarantee
- **Decision:** Every published binary must provide an authentic SHA-256 checksum, and missing builds must display `Coming Soon`.
- **Rationale:** Protects developer trust and ensures users are never exposed to unverified or corrupted installers.

---

## 16. Security Definition of Done (DoD)

The Security & Access Control Document `docs/03-SECURITY-AND-ACCESS.md` is approved when:
- [x] Full alignment with [`docs/01-PRD.md`](./01-PRD.md) and [`docs/02-TECHNICAL-ARCHITECTURE.md`](./02-TECHNICAL-ARCHITECTURE.md) is verified.
- [x] OpportunityX parent vs OpportunityX Radar trust boundaries are enforced.
- [x] Public-first access model and future RBAC hierarchy are documented.
- [x] Zero-client-secrets policy is strictly articulated.
- [x] Web attack countermeasures (XSS, CSRF, Clickjacking, MIME sniffing) are detailed.
- [x] Contact form anti-spam defense (honeypot, rate limiting, length checks) is specified.
- [x] Text-first community security advantages and moderation roadmap are outlined.
- [x] Download binary verification with SHA-256 checksums is established.
- [x] HTTP security headers (CSP, HSTS, Permissions-Policy) are configured for production.
- [x] Privacy, data retention, and analytics minimization standards are defined.
- [x] Security priority matrix and v1 non-goals are established.
- [x] Eight Security Architecture Decision Records (Security ADR-001 through ADR-008) are locked.
