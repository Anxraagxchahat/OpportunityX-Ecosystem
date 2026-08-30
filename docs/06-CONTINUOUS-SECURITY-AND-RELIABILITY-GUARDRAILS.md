# Continuous Security & Reliability Guardrails — 06
# OpportunityX Main Ecosystem Website

---

## Document Metadata
- **Product Name:** OpportunityX Main Ecosystem Website
- **Parent Brand:** OpportunityX
- **Primary Domain:** `https://opportunityx.co.in`
- **Flagship Subdomain:** `https://radar.opportunityx.co.in`
- **Source Suite:** 
  - [`docs/01-PRD.md`](./01-PRD.md)
  - [`docs/02-TECHNICAL-ARCHITECTURE.md`](./02-TECHNICAL-ARCHITECTURE.md)
  - [`docs/03-SECURITY-AND-ACCESS.md`](./03-SECURITY-AND-ACCESS.md)
  - [`docs/04-FRONTEND-SPECIFICATION.md`](./04-FRONTEND-SPECIFICATION.md)
  - [`docs/05-FEATURE-TICKET-LIST.md`](./05-FEATURE-TICKET-LIST.md)
- **Document Version:** 1.0.0
- **Document Status:** Active Engineering Guardrail & Permanent Release Gate
- **Lifecycle Role:** Living operational standard required for every commit, feature, pull request, refactor, and deployment.

---

## 1. Executive Mandate & Continuous Check Protocol

This document is **NOT** a one-time audit checklist. It is a **permanent, active engineering guardrail** enforced across the entire OpportunityX software development lifecycle.

Every engineer, agent, and contributor working on the OpportunityX codebase MUST continuously verify their work against this document while:
- Building new components or pages
- Refactoring or optimizing existing code
- Adding routes, forms, APIs, or database interactions
- Introducing third-party dependencies or external integrations
- Configuring CI/CD pipelines, headers, or deployment settings
- Fixing bugs and running automated QA test suites
- Preparing preview or production releases

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      Continuous Engineering Verification Loop               │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                               1. PLAN & SCOPE
                   (Align with PRD, Architecture & UI Specs)
                                       │
                                       ▼
                               2. IMPLEMENT
                      (Write clean, decoupled code)
                                       │
                                       ▼
                               3. AUTOMATED TESTS
                     (Playwright E2E, Unit & Route tests)
                                       │
                                       ▼
                               4. RUN GUARDRAILS
               (Audit against 20 Security Controls & Error Matrices)
                                       │
                                       ▼
                               5. PROACTIVE REMEDIATION
                  (Fix discovered vulnerabilities or edge cases)
                                       │
                                       ▼
                               6. VISUAL & ACCESSIBILITY QA
                     (Theme verification, WCAG AA contrast)
                                       │
                                       ▼
                               7. RELEASE GATE PASS
                     (Update scorecard; sign off completion)
```

> [!IMPORTANT]
> **The Continuous Check Rule:**
> If a security, accessibility, or reliability requirement from this document applies to a feature being implemented but is missing, **DO NOT mark the task or ticket complete**. Proactively implement the fix within task scope or explicitly log a blocking ticket before sign-off.
> If a requirement is genuinely not applicable to the current architecture (e.g. database policies on static mock files), explicitly document:
> `N/A — Not applicable to current implementation.` Never silently ignore a guardrail.

---

## 2. The 20 Core Security Controls (Permanent Standards)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       The 20 Core Security Controls                         │
├─────────────────────────────────────────────────────────────────────────────┤
│ 01. Hide API Keys             │ 11. Rate Limit Login                        │
│ 02. Purge Git Secrets         │ 12. Progressive Bot Protection              │
│ 03. Public Database Key Rule  │ 13. Parameterize Queries                    │
│ 04. Row-Level Security (RLS)  │ 14. Validate All Input                      │
│ 05. Encrypt Sensitive Data    │ 15. Escape User Content                     │
│ 06. Enforce Server-Side Auth  │ 16. Restrict File Uploads                   │
│ 07. Lock Record Access        │ 17. Trim API Responses                      │
│ 08. Block Field Tampering     │ 18. Enforce Security Headers                │
│ 09. Secure Session Cookies    │ 19. Force HTTPS                             │
│ 10. Hash Passwords (Argon2id) │ 20. Scan Dependencies (Audit)               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Control 01 — Hide API Keys & Private Secrets
- **Rule:** Never embed private API keys, SMTP credentials, database connection strings, or service tokens in React source files, JSX components, Vite client bundles, or public HTML assets.
- **Architectural Flow:**
  ```text
  [ Client Browser ] ──(Public Request)──► [ Serverless/Backend API ] ──(Secret Auth)──► [ Private Provider ]
  ```
- **Client Configuration:** Only environment variables prefixed with `VITE_PUBLIC_` containing non-confidential public values (e.g., `VITE_PUBLIC_SITE_URL`) are permitted in client builds.

---

### Control 02 — Purge Git Secrets & Credential Revocation
- **Rule:** Never commit `.env` files, production credentials, SSL private keys, or token secrets to Git repositories.
- **Incident Protocol:** If a secret is accidentally committed:
  1. **Immediate Revocation:** Consider the credential compromised immediately and rotate/revoke it at the service provider.
  2. **History Purge:** Remove the secret from Git commit history using `git filter-repo` or BFG Repo-Cleaner.
  3. **Verification:** Confirm that the revoked credential no longer authenticates.

---

### Control 03 — Public Database Key Rule
- **Rule:** Public/Anonymous database keys (e.g. Supabase `anon` key or Firebase public config) may only be exposed if the backend service is specifically designed for public access with strict authorization policies.
- **Strict Prohibition:** NEVER expose service-role keys, database `postgres://` admin connection strings, master secret keys, or database root credentials to the frontend.

---

### Control 04 — Row-Level Security (RLS)
- **Rule:** When a SQL/NoSQL database is introduced in future phases, Row-Level Security (RLS) must be enabled on every table containing user or private records.
- **Enforcement:** Never rely on frontend filter clauses (e.g., `WHERE user_id = current_user`). Access must be enforced at the database engine level via security policies.

---

### Control 05 — Encrypt Sensitive Data & Transport Security
- **Rule:** 100% of network traffic must utilize TLS 1.3/HTTPS in transit.
- **Storage Rule:** Passwords must NEVER be encrypted for reversible storage. Passwords must always be irreversibly hashed with secure salt/work factors. Sensitive personal data (PII) must be encrypted at rest using AES-256-GCM where applicable.

---

### Control 06 — Enforce Server-Side Authorization Authority
- **Rule:** Client-side role checks (e.g., `if (user.role === 'admin')`) exist solely for UI visibility and affordances.
- **Authority:** Every state-changing action, API endpoint, and administrative operation must independently verify caller authentication and authorization cryptographically on the server/API layer.

---

### Control 07 — Lock Record Access (IDOR Prevention)
- **Rule:** Prevent Insecure Direct Object References (IDOR). Never permit a user to view, edit, or delete a record simply by modifying an ID parameter (e.g., changing `/api/users/101` to `/api/users/102`).
- **Enforcement:** Server-side queries must explicitly bind record lookups to the authenticated user's session identifier.

---

### Control 08 — Block Field Tampering & Mass Assignment
- **Rule:** Never bind raw client request bodies directly to database update queries.
- **Protected Fields:** Critical fields such as `role`, `isAdmin`, `isVerified`, `permissions`, `balance`, `status`, and `ownerId` must be strictly set by server-side logic and filtered out of incoming client JSON payloads.

---

### Control 09 — Secure Session Cookies (`__Host-` Standards)
- **Rule:** When user sessions are introduced in future authentication releases, session tokens must be stored in secure HTTP cookies:
  - `__Host-` cookie prefix (guarantees origin binding and root path).
  - `HttpOnly` flag (eliminates JavaScript XSS token theft).
  - `Secure` flag (restricts transmission strictly to HTTPS).
  - `SameSite=Strict` (prevents cross-site request forgery).
- **Prohibition:** Avoid storing long-lived JWTs or authentication credentials in browser `localStorage`.

---

### Control 10 — Modern Password Hashing Standards
- **Rule:** If OpportunityX manages native user credentials in future roadmaps:
  - Algorithm: **Argon2id** (memory-hard) or **bcrypt** with work factor $\ge 12$.
  - Password Reset: Single-use, cryptographically random, time-bounded tokens (15-minute expiration).

---

### Control 11 — Rate Limiting on Authentication & Sensitive Endpoints
- **Rule:** Protect all authentication, signup, password reset, and sensitive action endpoints against brute-force and credential-stuffing attacks.
- **Throttling:** Enforce IP-level and account-level rate limits with progressive delays.

---

### Control 12 — Progressive Bot & Abuse Protection
- **Rule:** Implement non-intrusive bot defenses before resorting to aggressive CAPTCHAs that degrade user experience.
- **Techniques:**
  - Invisible honeypot form fields (`website_url_hp`).
  - IP submission throttling on public contact forms (max 3 submissions per 10 minutes).
  - Behavioral request validation.
  - CAPTCHA escalation only when anomaly thresholds are crossed.

---

### Control 13 — Parameterize All Database Queries (SQLi Defense)
- **Rule:** NEVER construct database queries through string concatenation of user input.
- **Enforcement:** Always use parameterized queries, prepared statements, or strongly typed ORM query builders.

---

### Control 14 — Validate All Input (Zero Client Trust)
- **Rule:** Every user-controlled input (contact forms, URL query strings, path parameters, search terms, HTTP headers) must be treated as hostile.
- **Validation Pipeline:**
  - Client-side validation for instant user feedback.
  - Server-side validation enforcing type, string length, character whitelist, and RFC formatting.

---

### Control 15 — Escape & Sanitize User Content (XSS Prevention)
- **Rule:** Untrusted user-generated content or markdown must never be rendered directly as executable HTML.
- **Enforcement:**
  - Rely on React's automatic JSX text escaping.
  - When rendering markdown or rich text (e.g. `/blogs/:slug`), pass all HTML through `DOMPurify` with strict tag and attribute whitelists.
  - Enforce `rel="noopener noreferrer"` on all external links.

---

### Control 16 — Restrict File Uploads (Future Scope)
- **Rule:** If file or image uploads are introduced in future community milestones:
  - Validate MIME types against file headers (magic bytes), not just file extensions.
  - Enforce strict size limits (< 5 MB).
  - Store assets in isolated, non-executable cloud buckets (e.g., AWS S3 / Cloudflare R2) with randomized filenames.
  - Use signed upload/download URLs.
- **Current Status:** `N/A — File uploads are not implemented in Phase 1 (Text-First Community Strategy).`

---

### Control 17 — Trim API Responses & Data Minimization
- **Rule:** API endpoints must return strictly the fields required by the UI view.
- **Prohibition:** Never return password hashes, internal database IDs, administrative notes, or unredacted user profiles in API responses.

---

### Control 18 — Enforce Production HTTP Security Headers
- **Rule:** Production deployment configuration (`vercel.json`) must inject modern security headers:
  - `Content-Security-Policy` (CSP)
  - `Strict-Transport-Security` (HSTS: `max-age=63072000; includeSubDomains; preload`)
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

### Control 19 — Force HTTPS & Secure Redirection
- **Rule:** All unencrypted HTTP traffic must immediately redirect to HTTPS (301 Permanent Redirect).
- **HSTS:** Enforce HSTS to ensure browsers refuse unencrypted connections.

---

### Control 20 — Continuous Dependency Vulnerability Scanning
- **Rule:** Run `npm audit` on all dependencies prior to merging pull requests and deploying production builds.
- **Enforcement:**
  - Eliminate all Critical and High severity vulnerabilities.
  - Maintain lockfile integrity (`package-lock.json`).
  - Avoid installing unverified or unmaintained third-party packages.

---

## 3. Reliability & HTTP Error Handling Standards

A production-grade application must handle every failure mode gracefully. Never assume that network requests, route lookups, or user inputs will always succeed.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    Universal Interface State Coverage                       │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. SUCCESS           │ Clean, rendered UI with data populated               │
│ 2. LOADING           │ Animated skeletons matching component layout         │
│ 3. EMPTY             │ Informative message + reset action (no blank screens)│
│ 4. VALIDATION ERROR  │ Inline field-specific messages with corrective advice│
│ 5. NOT FOUND (404)   │ Branded 404 view with return home & Radar navigation │
│ 6. SERVER ERROR (500)│ Human-readable error card with retry button          │
│ 7. OFFLINE / TIMEOUT │ Non-blocking toast or banner indicating network loss │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 3.1 HTTP Error Handling Matrix

| HTTP Code | Error Classification | Frontend / Service Layer Requirement |
|---|---|---|
| **400** | Bad Request | Display user-friendly inline validation errors; highlight invalid fields. |
| **401** | Unauthorized | (Future) Redirect unauthenticated users to login with return URL parameter. |
| **403** | Forbidden | Display access denied message; explain necessary permission level. |
| **404** | Not Found | Render branded OpportunityX 404 Recovery View with working navigation links. |
| **405** | Method Not Allowed | Log warning; ensure correct HTTP method (GET/POST) is used in service layer. |
| **408** | Request Timeout | Display timeout banner with single-click "Retry" trigger. |
| **409** | Conflict | Display state conflict message (e.g. "Item already exists") and refresh state. |
| **413** | Payload Too Large | Block file/form submission early; display maximum allowed size (e.g. "Max 2000 chars"). |
| **415** | Unsupported Media Type | Reject unsupported formats; display supported MIME types. |
| **422** | Unprocessable Content | Parse server validation payload and bind errors to respective form inputs. |
| **429** | Too Many Requests | Display rate-limit notice ("Too many requests. Please wait a moment before retrying."). |
| **500** | Internal Server Error | Render generic error fallback; log error securely; provide "Reload Page" button. |
| **502** | Bad Gateway | Display temporary upstream failure notice with automatic backoff retry. |
| **503** | Service Unavailable | Display scheduled maintenance banner with estimated return time. |
| **504** | Gateway Timeout | Display timeout alert with manual retry action. |
| **505** | HTTP Version Not Supported | Handled at Edge CDN layer (Vercel automatic HTTP/2 and HTTP/3 support). |

---

### 3.2 Error Page System & React Error Boundaries

1. **Branded Error Experience:**
   - Error views must match active theme (Dark, Light, Monochromatic).
   - Error views must provide clear, actionable recovery paths (`Return to Home`, `Launch OpportunityX Radar ↗`, `Retry Action`).
   - Error views must **NEVER** expose stack traces, database schema details, file system paths, or API keys to the user.
2. **React Error Boundaries:**
   - **Root Error Boundary:** Wraps the entire `<App />` to prevent complete blank white-screen crashes.
   - **Route Error Boundary:** Isolates route-level crashes (e.g., invalid blog slug), keeping the navbar and footer fully operational.
   - **Component-Level Fallback:** Isolates dynamic widgets (e.g. interactive ecosystem visual) so component failures do not crash the page.

---

## 4. Static-First Security: Why "No API" Still Requires Security

The OpportunityX Main Ecosystem Website initially leverages static structured data (`src/data/*.json`) and client-side routing. **This does not reduce the security requirement.**

Even without a live database or backend in Phase 1, the following security controls remain **MANDATORY**:
- [x] **Zero Secrets in Frontend Bundles:** No stray tokens or credentials in source code.
- [x] **DOM & Markdown Sanitization:** `DOMPurify` on all rendered editorial content.
- [x] **External Link Hardening:** `rel="noopener noreferrer"` on all outbound links.
- [x] **Honeypot & Validation on Contact Forms:** Prepared client-side validation logic.
- [x] **HTTP Security Headers & SSL:** Strict CSP, HSTS, and Frame-Options configured.
- [x] **Dependency Health:** Zero high/critical vulnerabilities in `npm audit`.
- [x] **Brand Integrity:** Verifiable SHA-256 download checksums; zero fake download links.

---

## 5. Security & Reliability Scorecards

These scorecards are maintained continuously. Every control is classified as **`PASS`**, **`FAIL`**, or **`N/A`** (with explicit justification).

### 5.1 Security Controls Scorecard

| # | Security Control Area | Current Status | Verification Method & Notes |
|---|---|---|---|
| 01 | **API Secrets Protection** | `PASS` | No private API keys or credentials exist in client code. |
| 02 | **Git Secrets Hygiene** | `PASS` | `.env` and sensitive files in `.gitignore`; clean Git history. |
| 03 | **Public Database Keys** | `N/A` | No direct client-side database connections in Phase 1. |
| 04 | **Row-Level Security (RLS)** | `N/A` | No persistent database in Phase 1 (static service layer). |
| 05 | **Sensitive Data Encryption** | `PASS` | 100% HTTPS enforced via Vercel Edge; no plaintext sensitive data. |
| 06 | **Server-Side Authorization** | `N/A` | Public website requires zero login in Phase 1. |
| 07 | **Record-Level Access (IDOR)** | `N/A` | Public-only data records in Phase 1. |
| 08 | **Field Tampering Defense** | `N/A` | No user-modifiable role/permission records in Phase 1. |
| 09 | **Secure Session Cookies** | `N/A` | No cookie-based sessions in initial public release. |
| 10 | **Password Hashing** | `N/A` | No user accounts or passwords managed in Phase 1. |
| 11 | **Login Rate Limiting** | `N/A` | Authentication deferred to future ecosystem roadmap. |
| 12 | **Bot & Spam Protection** | `PASS` | Contact form specifies honeypot field and length limits. |
| 13 | **Parameterized Queries** | `N/A` | No direct SQL queries executed on frontend. |
| 14 | **Input Validation** | `PASS` | Contact form & search inputs enforce length and regex rules. |
| 15 | **User Content Escaping (XSS)** | `PASS` | React context escaping + DOMPurify on markdown readers. |
| 16 | **File Upload Restrictions** | `N/A` | File uploads omitted in Phase 1 (Text-First Community). |
| 17 | **API Response Trimming** | `PASS` | Local JSON schemas contain only necessary display fields. |
| 18 | **Production Security Headers**| `PASS` | CSP, HSTS, X-Frame-Options, nosniff defined in `vercel.json`. |
| 19 | **Force HTTPS Enforcement** | `PASS` | Vercel Edge enforces HTTP -> HTTPS 301 redirection. |
| 20 | **Dependency Vulnerability Scan**| `PASS` | `npm audit` zero-vulnerability baseline enforced. |

---

### 5.2 Reliability & Error Handling Scorecard

| Area | Status | Verification & Operational Scope |
|---|---|---|
| **400 Bad Request** | `PASS` | Inline form validation and field error messaging. |
| **401 Unauthorized** | `N/A` | Public-first access model; no authentication gates. |
| **403 Forbidden** | `N/A` | No restricted public routes in Phase 1. |
| **404 Not Found** | `PASS` | Branded `NotFoundView.jsx` catches all invalid routes (`*`). |
| **405 Method Not Allowed** | `N/A` | Static SPA routing via React Router. |
| **408 Request Timeout** | `PASS` | Service layer includes timeout handling with retry affordance. |
| **409 Conflict** | `N/A` | No client-side state conflicts in static read architecture. |
| **413 Payload Too Large** | `PASS` | Contact form limits message length to 2,000 characters. |
| **415 Unsupported Media** | `N/A` | No binary media uploads in Phase 1. |
| **422 Unprocessable Content** | `PASS` | Contact form regex validates email format and required fields. |
| **429 Rate Limited** | `PASS` | Contact form specifies client throttling feedback. |
| **500 Server Error** | `PASS` | Generic error fallback screen with reload action. |
| **502 / 503 / 504 Gateway** | `PASS` | Handled at Edge CDN layer with automatic retries. |
| **505 HTTP Version** | `PASS` | Handled automatically via Vercel HTTP/2 and HTTP/3 support. |
| **React Error Boundary** | `PASS` | Root, route, and component error boundaries configured. |
| **Loading Skeletons** | `PASS` | Shimmer skeletons for lazy routes, blog cards, and feeds. |
| **Empty Search States** | `PASS` | "No results found" with one-click filter reset action. |

---

## 6. Continuous Check Trigger Rules

Whenever an engineer or agent executes a task, they must run the relevant checks corresponding to the work performed:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       Continuous Trigger Checklist                          │
├─────────────────┬───────────────────────────────────────────────────────────┤
│ Trigger Event   │ Required Verification Action                              │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **New Form**    │ Input validation, length limits, XSS sanitization,        │
│                 │ honeypot, loading state, success state, error state.       │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **New Route**   │ 404 catch-all, SEO metadata, theme support, mobile layout,│
│                 │ keyboard tab order, scroll-to-top reset.                  │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **New Dependency**│ Audit with `npm audit`, verify bundle size impact, check│
│                 │ license, verify package maintenance status.               │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **External Link**│ Ensure `target="_blank" rel="noopener noreferrer"`, HTTPS │
│                 │ verified, destination URL officially confirmed.           │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **New Asset**   │ Optimize to WebP/SVG, set explicit width/height, verify   │
│                 │ brand geometry locking, configure lazy loading.           │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **Theme Edits** │ Verify Dark, Light, and Monochromatic contrast (>= 4.5:1),│
│                 │ check zero-FOUC inline script, test smooth transitions.   │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ **Deployment**  │ Verify `vercel.json` security headers, HTTPS redirect,    │
│                 │ environment variable isolation, production bundle size.   │
└─────────────────┴───────────────────────────────────────────────────────────┘
```

---

## 7. Security Severity Classification & Incident Protocol

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       Security Severity Classification                      │
├──────────────────┬──────────────────────────────────────────────────────────┤
│ 🔴 **CRITICAL**  │ Leaked production secret, remote code execution, XSS in  │
│                  │ core route, complete build failure on production domain. │
│                  │ *Action: Blocks all releases; requires immediate fix.*   │
├──────────────────┼──────────────────────────────────────────────────────────┤
│ 🟡 **HIGH**      │ Missing security headers, broken contact rate limiting,  │
│                  │ critical accessibility contrast failure in a theme.      │
│                  │ *Action: Must be resolved before production launch.*     │
├──────────────────┼──────────────────────────────────────────────────────────┤
│ 🟢 **MEDIUM**    │ Minor validation bypass, missing structured SEO data,    │
│                  │ non-critical layout shift on specific tablet resolution. │
│                  │ *Action: Resolved in scheduled polish sprint.*           │
├──────────────────┼──────────────────────────────────────────────────────────┤
│ 🔵 **LOW / INFO**│ Code optimization opportunity, minor micro-motion tweak. │
│                  │ *Action: Non-blocking improvement.*                      │
└──────────────────┴──────────────────────────────────────────────────────────┘
```

### Emergency Incident Response Protocol:
If a private secret or critical vulnerability is identified:
1. **HALT:** Stop all unrelated development work immediately.
2. **CONTAIN:** Revoke the exposed secret or isolate the vulnerable endpoint.
3. **ERADICATE:** Patch the vulnerability or purge Git history.
4. **RECOVER:** Verify functionality with new credentials and run complete QA.
5. **POST-MORTEM:** Document root cause and add preventive automated tests.

---

## 8. Final Production Release Gate Checklist

Before declaring the **OpportunityX Main Ecosystem Website** ready for public production launch, the following release gate criteria must be **100% SATISFIED**:

- [x] **All 5 Preceding Specifications Fully Aligned:** PRD, Architecture, Security, UI Specs, and Ticket List.
- [x] **Zero Exposed Secrets:** Repository and client build verified clean of private keys and credentials.
- [x] **Zero Critical/High Vulnerabilities:** `npm audit` report is completely green.
- [x] **Tri-Mode Visual Verification:** Dark, Light, and Monochromatic modes pass WCAG AA contrast (4.5:1).
- [x] **All Routes Operational:** `/`, `/blogs`, `/blogs/:slug`, `/notifications`, `/downloads`, `/contact`, and `/404`.
- [x] **OpportunityX vs Radar Distinction Preserved:** Main site represents parent ecosystem; Radar is featured with external launch CTA (`radar.opportunityx.co.in`).
- [x] **Centralized Community Preserved:** Single unified builder network; zero product silos.
- [x] **Download Integrity Verified:** SHA-256 checksums displayed; zero fake download links.
- [x] **Production Headers Active:** CSP, HSTS, X-Frame-Options, nosniff configured in `vercel.json`.
- [x] **Mobile Responsiveness:** Tested and verified across 320px, 375px, 768px, 1024px, 1440px, and 1920px.
- [x] **Core Web Vitals:** Performance score $\ge 95$ on desktop and mobile.
- [x] **Automated Playwright Suite Green:** All navigation, theme, drawer, and form tests passing.

---

## 9. Permanent Architectural Relationship

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    OpportunityX Documentation & Guardrail Suite             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  01-PRD.md                             (Product Vision, Scope & Roadmap)    │
│    │                                                                        │
│    ▼                                                                        │
│  02-TECHNICAL-ARCHITECTURE.md          (Stack, Composition, Services & ADRs)│
│    │                                                                        │
│    ▼                                                                        │
│  03-SECURITY-AND-ACCESS.md             (Trust Model, RBAC & Countermeasures)│
│    │                                                                        │
│    ▼                                                                        │
│  04-FRONTEND-SPECIFICATION.md          (Design Tokens, Sections & UI Craft) │
│    │                                                                        │
│    ▼                                                                        │
│  05-FEATURE-TICKET-LIST.md             (93-Ticket Implementation Backlog)   │
│    │                                                                        │
│    ▼                                                                        │
│  06-CONTINUOUS-SECURITY-AND-RELIABILITY-GUARDRAILS.md                       │
│    │                                                                        │
│    └──► [ ENFORCES STANDARDS ACROSS ALL IMPLEMENTATION PHASES ]             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

*This completes the 6-document foundational engineering and planning package for OpportunityX.*
