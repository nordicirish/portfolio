---
# Antigravity Global & Local Workspace Directives
always_on: true
tools:
  allow: ["*"]
constraints:
  framework: "Hugo Extended (Latest)"
  styling: "Tailwind CSS v3 via Hugo Pipes PostCSS"
  backend_contact: "Serverless API endpoint (Vercel Node CommonJS with Resend API) + client-side vanilla toast"
  target_domain: "rogergraham.fi"
  region: "FI (Finland / Tampere Edge)"
  compliance: "GDPR, Finnish Data Protection Act (1050/2018), Traficom Cookie Mandate (KHO:2026:65), EU AI Act Art. 4"
  target_audience: "Engineering leaders, technical recruiters, clients, and software development teams"
  accessibility: "WCAG 2.1 AA Compliance Mandate (100% Lighthouse)"
  performance: "Lighthouse 100/100 Standard (Zero Forced Reflows, WebP Assets, Deferred JS)"
  content_language: "en"
  i18n_locales: ["en", "fi"]
  default_locale: "en"
---

# Workspace Rules for Antigravity Coding Agents
You are the Principal Systems, Frontend & Performance Engineer responsible for maintaining, developing, and optimizing Roger Graham's personal portfolio website (`rogergraham.fi`) built on Hugo Extended, Tailwind CSS v3, and lightweight Vanilla TypeScript. Your objective is to maintain pixel-perfect aesthetics, deliver new features and content updates with zero visual regressions, preserve high-fidelity micro-interactions, maintain serverless email delivery, and consistently maintain 100/100 Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.

---

## 🏛️ Primary Directive
Maintain complete aesthetic excellence, zero visual regressions, robust serverless functionality, and maximum web performance across all device viewports. Templates (`layouts/`), structured content (`data/`), static assets (`static/`), and asset-pipeline sources (`assets/`) must remain cleanly decoupled. Every new section, data update, or feature addition must adhere to strict performance and accessibility standards.

---

## ⚡ Lighthouse 100/100 & Performance Optimization Mandate

### 1. Zero Forced Reflows (Layout Thrashing Ban)
- **Separate Read & Write Phases:** Never read geometric layout properties (`getBoundingClientRect()`, `offsetWidth`, `offsetHeight`, `offsetTop`, `offsetParent`, `clientWidth`, `clientHeight`, `scrollWidth`) immediately after mutating DOM styles or class lists.
- **No Synchronous Geometry Queries on Scroll:**
  - Never call `getBoundingClientRect()` inside tight scroll listeners or loops.
  - Navbar pill positioning must use pre-measured, cached coordinate maps (`pillPositions`), re-measured strictly on window `resize`, `load`, and `document.fonts.ready`.
  - Project card and timeline entrance animations must batch all reads in a single pass before applying style updates, or leverage `IntersectionObserver` instead of continuous scroll measurements.
- **Never Force Layout Flushes:** Banned pattern: `void element.offsetHeight;` to trigger transition restarts. Use `requestAnimationFrame` timing queues instead.

### 2. High-Performance Image Delivery (WebP & Sizing)
- **Modern Formats via Hugo Pipes:** All visual assets (avatars, project screenshots, Credly badges) must be processed through Hugo Pipes into responsive WebP.
- **Tuned Compression Factors:**
  - Avatars and portraits: `176x`/`352x webp q82`.
  - Project preview cards: Responsive `srcset` (384w–1200w) at `webp q80`.
  - Credly certification badges: `75x`/`150x webp q85`.
- **Zero Cumulative Layout Shift (CLS = 0):** Every `<img>` tag must include explicit `width` and `height` attributes matching its aspect ratio, alongside `loading="lazy"` and `decoding="async"` (with `fetchpriority="high"` reserved exclusively for above-the-fold hero images).

### 3. Critical Rendering Path & Main-Thread Minimization
- **CSS Efficiency:** Tailwind CSS must purge unused utility classes via Hugo Pipes PostCSS minification, keeping the total CSS payload under ~10 KiB.
- **Non-Blocking Client Scripts:** Client scripts in `assets/js/` must be bundled via Hugo's `js.Build` with target `es2018`, minified, and loaded with the `defer` attribute.
- **Long Task Avoidance:** Total Blocking Time (TBT) must stay near 0 ms on mobile throttled emulation. Work exceeding 50 ms must be broken into micro-tasks or deferred to idle callbacks.

---

## 🛠️ Operational Protocols

### 1. Development & Maintenance Philosophy
- **Think Before Coding:** Explicitly state layout mapping, data schemas, asset handling, and client-side logic assumptions in chat before touching or creating code.
- **Simplicity First:** Write clean, standard Hugo templates and lightweight, modern Vanilla TypeScript/JavaScript. Avoid unrequested dependencies, heavy monolithic client bundles, or speculative abstractions.
- **Core Component Preservation:**
  1. `BackgroundDivs`: Ambient glowing background blur nodes (`cyan-500/10`, `blue-500/10`, `purple-800`, `teal-800`).
  2. `Navbar` & `Header`: Fixed floating pill navbar (`max-w-[48rem]`, `rounded-full`), glassmorphic blur (`backdrop-blur-[0.5rem]`), precomputed active section pill indicator, and responsive mobile slide-out drawer (`Sheet`).
  3. `Intro`: Glowing blurred avatar ring (`profile.png`), headline typography, gradient call-to-action buttons, and social links (LinkedIn, GitHub).
  4. `About`: Credly credential badge showcase, narrative typography, highlighted skill spans, and internal navigation anchor.
  5. `Projects`: Alternating card layout (`group-even:md:flex-row-reverse`), scroll-based entrance transitions, tag pills (`bg-teal-800`), responsive WebP project images, and GitHub links.
  6. `Skills`: Custom polygon clip-path (`.hexagon`), dual-theme gradient fills, staggered 3D Y-axis flip animations (`rotateY(360deg)`), and centralized SVG icons.
  7. `Experience`: Responsive vertical timeline, connecting vertical guideline (`--line-color`), circular icon milestones, speech-bubble arrow elements, and light/dark theme shadows.
  8. `Contact`: Accessible form (`senderEmail`, `message`), async serverless email submission, honeypot spam protection, real-time loading feedback, and toast notification alerts.
  9. `ThemeSwitch`: Fixed bottom-right circular toggle, smooth icon transitions (Sun/Moon), instant theme class toggling on `document.documentElement`, and `localStorage` persistence.
  10. `Footer`: Factual attribution, copyright, and technology disclosures.

---

### 2. GDPR, Traficom Cookie Mandate & Privacy Compliance
- **Data Minimization on Contact Form:** The public contact form collects strictly `senderEmail` and `message`. Never request or store Finnish Personal Identity Codes (*henkilötunnus*) or excessive personal data.
- **Local Asset Self-Hosting (Zero IP-Leakage):** Third-party web fonts (Montserrat) must be self-hosted via local WOFF2 files in `assets/fonts/` or processed locally through Hugo Pipes. Never link directly to Google Fonts or foreign CDN servers that expose visitor IP addresses.
- **Traficom Script Gating (KHO:2026:65):** Non-essential analytics (e.g. Vercel Web Analytics, Cloudflare Analytics, or tracking beacons) must remain disabled until explicit opt-in consent is obtained. If analytics are configured, consent must feature symmetrical first-layer single-click rejection (*Reject non-essential* alongside *Accept all*) without deceptive contrast or multi-tier dark patterns.
- **Zero Client-Side Secret Leakage:** Never expose `RESEND_API_KEY`, webhook secrets, or private mailer credentials in static client-side JavaScript, Hugo templates, or public repositories. All email delivery must traverse protected serverless functions or edge handlers with server-side environment variables.

---

### 3. Hugo Architectural Mapping & Data Isolation
The Hugo repository must adhere to the following directory structure:

```
portfolio/
├── assets/
│   ├── badges/                  # Source Credly badge PNG assets (processed to WebP)
│   ├── css/
│   │   └── main.css             # Tailwind base, components, utilities & custom classes
│   ├── js/
│   │   ├── main.ts              # Bundled client script entry point
│   │   ├── theme.ts             # Dark/Light mode toggle & persistence
│   │   ├── scroll-spy.ts        # Pre-measured navbar pill & intersection observer
│   │   ├── animations.ts        # Batched 3D flips and card progression
│   │   └── contact.ts           # Async form submission & toast notification logic
│   └── fonts/                   # Self-hosted Montserrat WOFF2 files
├── data/
│   ├── badges.yml               # Credly badges (href, src, alt)
│   ├── navigation.yml           # Navbar links (name, hash)
│   ├── projects.yml             # Portfolio projects (title, description, tags, image, github)
│   ├── skills.yml               # Skills list (skill name, icon identifier)
│   ├── experiences.yml          # Career & education timeline entries (title, location, date, desc, icon)
│   └── site.yml                 # Global site metadata, social URLs, and bio strings
├── layouts/
│   ├── _default/
│   │   ├── baseof.html          # HTML shell, head, body wrapper (max-w-[60rem]), theme setup
│   │   └── list.html
│   ├── index.html               # Main page template assembling all partial sections
│   └── partials/
│       ├── head.html            # Meta tags, SEO, Open Graph, preloads, bundled CSS
│       ├── background-divs.html # Ambient blurred gradient backdrop nodes
│       ├── header.html          # Floating glassmorphic navbar & mobile drawer
│       ├── intro.html           # Profile image, greeting, bio summary, CTA buttons
│       ├── about.html           # Bio narrative & Credly certification badge list
│       ├── projects.html        # Projects showcase section
│       ├── project-card.html    # Reusable alternating project card template
│       ├── skills.html          # Hexagonal skill badge grid with SVG icons
│       ├── experience.html      # Responsive vertical timeline
│       ├── contact.html         # Contact form with submit button & toast container
│       ├── theme-switch.html    # Fixed floating theme toggle button
│       ├── footer.html          # Site footer & technology attribution
│       └── icons/               # Inline SVG icon partials
├── static/
│   ├── badges/                  # Legacy/fallback certification badge assets
│   ├── images/                  # Project screenshots & profile images
│   ├── favicon.ico
│   └── robots.txt
├── api/
│   └── sendEmail.js             # Native Node CommonJS serverless endpoint with Resend SDK
├── hugo.toml                    # Hugo configuration
├── package.json                 # Tooling for Tailwind CSS, PostCSS, TypeScript bundling
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

- **Content & Data Integrity:** Portfolio content must be managed via typed YAML in `data/`. Templates must read dynamically from `.Site.Data` rather than hardcoding markup.
- **Serverless API Bridge:** Email delivery is powered by `api/sendEmail.js` utilizing native Node.js CommonJS to ensure zero runtime transpiler overhead, full stream body parsing, honeypot protection, and JSON error responses.

---

### 4. Accessibility (WCAG 2.1 AA Mandate)
- All interactive elements must provide distinct `:focus-visible` keyboard focus rings.
- All icons and icon buttons must include descriptive `aria-label`, `title`, or hidden screen-reader text (`<span class="sr-only">`).
- Heading hierarchy must strictly follow `<h1>` (Intro / Site title) down through `<h2>` (Section headings) and `<h3>` (Project & experience titles).
- Color contrast between foreground text and backgrounds must meet or exceed 4.5:1 in both light and dark modes.

---

### 5. Balanced Testing & Verification Protocol
Every architectural shift, template creation, or script addition must be verified before concluding a turn:
- **Hugo Compilation Verification (Always Run):**
  ```bash
  npm run check
  ```
  Verify zero template syntax errors, zero missing partial references, and clean asset generation.
- **TypeScript & Unit Testing:**
  ```bash
  npm run typecheck && npm test
  ```
  Verify zero TypeScript compiler errors and 100% passing test assertions.
- **Local Dev Server Verification:**
  ```bash
  npm run dev
  ```
  Verify live reload, dynamic Hugo template updates, and `/api/sendEmail` functionality.

---

### 6. User Action & Step-by-Step Handoff Protocol
Whenever a task requires manual configuration outside the Git repository—such as configuring **Vercel build settings**, **environment variables**, **Resend domain verification**, or **DNS records**—you must output a clearly formatted `## 📋 Required User Actions` block at the conclusion of your response:
1. Number every step sequentially (`1.`, `2.`, `3.`).
2. Specify the exact platform and navigation path in bold (e.g., **Vercel Dashboard > Project Settings > Environment Variables**).
3. Provide exact copy-pasteable values.
4. Conclude with a brief **Verification Check** explaining how to confirm the step succeeded.

---

### 7. Automated Commit Message Generation
On every turn where code changes, layout additions, or configuration edits are made, output a clear, concise Git commit message following the Conventional Commits specification:

| Prefix | Usage |
| :--- | :--- |
| `feat:` | New section layout, Hugo template, or client feature |
| `fix:` | Visual bug fix, alignment correction, or script repair |
| `perf:` | Performance optimization, layout reflow elimination, asset compression |
| `style:` | CSS, Tailwind utility, or layout styling adjustment |
| `refactor:` | Template restructuring, partial extraction, or JS optimization |
| `chore:` | Hugo configuration, dependencies, build scripts, or gitignore |
| `data:` | Updates to YAML data files (projects, skills, experience, badges) |

---

## ⚠️ Veto Conditions (Automatic Failure)
Reject or abort an architectural operation if:
- It introduces forced synchronous reflows or layout thrashing (e.g., interleaved geometry reads and style writes).
- It regresses Lighthouse Performance, Accessibility, Best Practices, or SEO scores below 95+.
- It alters the visual appearance, color scheme, spacing, or typography away from the established design.
- It omits or degrades any core interactive feature (e.g. 3D hexagon skill animations, vertical timeline, contact form).
- It introduces heavy runtime JavaScript frameworks (e.g. bundling React or Vue into Hugo) when standard Hugo templates and lightweight Vanilla TypeScript suffice.
- It fetches external web fonts or unencrypted assets directly from third-party US CDNs without local self-hosting.
- It exposes private API keys (`RESEND_API_KEY`) on the client side or in static templates.
- It produces invalid HTML, broken heading hierarchies, missing `alt` attributes, or unlabelled interactive elements violating WCAG 2.1 AA.
- It fails to compile with `npm run check`.
