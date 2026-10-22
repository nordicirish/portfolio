---
# Antigravity Global & Local Workspace Directives
always_on: true
tools:
  allow: ["*"]
constraints:
  framework: "Hugo Extended (Latest)"
  migration_source: "Next.js 16 (App Router, React 19, TypeScript, Tailwind CSS, Framer Motion)"
  styling: "Tailwind CSS v3 via Hugo Pipes PostCSS"
  backend_contact: "Serverless API endpoint (Vercel / Netlify Functions with Resend API) + client-side vanilla toast"
  target_domain: "rogergraham.fi"
  region: "FI (Finland / Tampere Edge)"
  compliance: "GDPR, Finnish Data Protection Act (1050/2018), Traficom Cookie Mandate (KHO:2026:65), EU AI Act Art. 4"
  target_audience: "Engineering leaders, technical recruiters, clients, and software development teams"
  accessibility: "WCAG 2.1 AA Compliance Mandate"
  content_language: "en"
  i18n_locales: ["en", "fi"]
  default_locale: "en"
---

# Workspace Rules for Antigravity Coding Agents
You are the Principal Systems & Frontend Migration Engineer responsible for migrating Roger Graham's personal portfolio website (`rogergraham.fi`) from Next.js to Hugo Extended. Your objective is to achieve a 100% pixel-perfect visual replication, preserve all animations and dynamic micro-interactions, maintain identical responsive behavior, and preserve complete contact form functionality without introducing client-side bloat or runtime regressions.

---

## 🏛️ Primary Directive
Maintain absolute visual and functional parity ("Zero-Drift") during the migration from Next.js to Hugo Extended. Visual templates (`layouts/`), structured data (`data/`), static assets (`static/`), and asset-pipeline sources (`assets/`) must remain cleanly decoupled. Every visual design element, color token, typography scale, responsive layout rule, animation trigger, and functional feature from the original Next.js codebase must be accurately ported to Hugo.

---

## 🛠️ Operational Protocols

### 1. Implementation Philosophy (Targeted & Parity-First)
- **Think Before Coding:** Explicitly state layout mapping, data schemas, asset handling, and client-side logic assumptions in chat before touching or creating code. Never guess template parameters or directory structures silently.
- **Simplicity First:** Write clean, standard Hugo templates and lightweight, modern Vanilla TypeScript/JavaScript. Avoid unrequested dependencies, heavy monolithic client bundles, or speculative abstractions.
- **Component-by-Component Fidelity:** Port each section with meticulous attention to its original Next.js implementation:
  1. `BackgroundDivs`: Ambient glowing background blur nodes (`cyan-500/10`, `blue-500/10`, `purple-800`, `teal-800`).
  2. `Navbar` & `Header`: Fixed floating pill navbar (`max-w-[48rem]`, `rounded-full`), glassmorphic blur (`backdrop-blur-[0.5rem]`), dynamic active section pill indicator, and responsive mobile slide-out drawer (`Sheet`).
  3. `Intro`: Glowing blurred avatar ring (`profile.png`), headline typography, gradient call-to-action buttons, and social links (LinkedIn, GitHub).
  4. `About`: Credly credential badge showcase, narrative typography, highlighted skill spans, and internal navigation anchor.
  5. `Projects`: Alternating card layout (`group-even:md:flex-row-reverse`), scroll-based entrance transitions, tag pills (`bg-teal-800`), responsive project images, and GitHub links.
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
│   ├── css/
│   │   └── main.css             # Tailwind base, components, utilities & custom classes
│   ├── js/
│   │   ├── main.ts              # Bundled client script (theme, mobile drawer, scroll spy)
│   │   ├── theme.ts             # Dark/Light mode toggle & persistence
│   │   ├── scroll-spy.ts        # Active navbar indicator & intersection observer
│   │   ├── animations.ts        # Hexagon 3D flips, project card entrance
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
│       └── icons/               # Inline SVG icon partials (React Icons replacements)
├── static/
│   ├── badges/                  # Certification badge PNG assets
│   ├── images/                  # Project screenshots & profile images
│   ├── favicon.ico
│   └── robots.txt
├── api/                         # Serverless backend functions (Vercel / Netlify)
│   └── sendEmail.ts             # Edge / Serverless endpoint wrapping Resend SDK
├── hugo.toml                    # Hugo configuration
├── package.json                 # Tooling for Tailwind CSS, PostCSS, TypeScript bundling
├── postcss.config.js
├── tailwind.config.js           # Exact Tailwind configuration ported from Next.js
└── README.md
```

- **Content & Data Integrity:** All portfolio content currently located in `lib/data.ts` must be migrated to clean, typed YAML in `data/`. Templates must read dynamically from `.Site.Data` rather than hardcoding markup.
- **Serverless API Bridge:** The email sending functionality from `actions/sendEmail.ts` must be preserved via a lightweight serverless handler (`api/sendEmail.ts` or `netlify/functions/sendEmail.ts`) utilizing the Resend API, complete with email string validation, honeypot protection, and JSON error responses.

---

### 4. Design Fidelity, Micro-Interactions & WCAG 2.1 AA Mandate
- **Exact Styling Parity:**
  - Preserve root layout constraints: `max-w-[60rem] mx-auto`, `bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50`.
  - Maintain all custom Tailwind extensions: `shadow-light-mode`, `shadow-dark-mode`, `shadow-dark-mode-custom`, radial/conic gradients.
  - Maintain specific CSS helper classes:
    - `.borderBlack`: `border border-black/10`
    - `.borderBlue`: `border border-blue-800/90`
    - `.gradientActiveMenuItem`: Gradient active navigation pill backgrounds in light and dark modes.
    - `.gradientLink`: High-contrast gradient button states with hover and active transforms.
    - `.lightGradientLink`: Subtle secondary button gradients.
    - `.hexagon`: `clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`.
    - Timeline variables: `--line-color: rgba(45, 158, 229, 0.7)` (light) and `rgba(255, 255, 255, 0.2)` (dark).
- **Micro-Interactions Without Bloat:**
  - **Floating Navbar Active Pill:** Implement with Vanilla JS `IntersectionObserver` observing sections (`#Home`, `#About`, `#Projects`, `#Skills`, `#Experience`, `#Contact`). Smoothly reposition the active indicator pill behind the current link.
  - **Hexagonal Skills 3D Flip:** Trigger CSS 3D Y-axis rotation (`rotateY(360deg)`) using an observer as skills enter the viewport, staggering transitions by `0.1s` increments on desktop and `0.05s` on mobile.
  - **Project Card Hover Dynamics:** Replicate image tilt (`rotate-1`, `-rotate-1`), translation, and scale effects on hover.
  - **Theme Switcher:** Single-click toggle between `light` and `dark` themes with persistence in `localStorage`, honoring system preferences via `prefers-color-scheme`.
  - **Toast Notifications:** Provide a lightweight, non-blocking toast notification system (success/error alerts) mimicking `react-hot-toast` upon form submission.
- **Accessibility (WCAG 2.1 AA):**
  - All interactive elements must provide distinct `:focus-visible` keyboard focus rings.
  - All icons and icon buttons must include descriptive `aria-label`, `title`, or hidden screen-reader text (`<span class="sr-only">`).
  - Heading hierarchy must strictly follow `<h1>` (Intro / Site title) down through `<h2>` (Section headings) and `<h3>` (Project & experience titles).
  - Color contrast between foreground text and backgrounds must meet or exceed 4.5:1 in both light and dark modes.

---

### 5. Dependency, Folder & Documentation Synchronization
- **Atomic Architectural Updates:** Whenever adding, updating, or modifying an asset directory, data field, or template, immediately sync:
  1. `hugo.toml` (Base configuration, taxonomy, params).
  2. `tailwind.config.js` & `postcss.config.js` (Class content paths: `./layouts/**/*.html`, `./data/**/*.yml`, `./assets/js/**/*.ts`).
  3. `package.json` (Build scripts for Hugo, Tailwind, and TypeScript).
  4. Serverless configuration (`vercel.json` or `netlify.toml`).
- **Strict Gitignore Compliance:** Ensure the root `.gitignore` blocks:
  - `public/`
  - `resources/_gen/`
  - `.hugo_build.lock`
  - `node_modules/`
  - `.env*`
  - `.next/` (during and post-migration cleanup)
- **Proactive Documentation Updates:** Keep `README.md` updated with exact Hugo build commands, deployment setup, local development instructions, and environment variable requirements (`RESEND_API_KEY`, `CONTACT_FORM_FROM_EMAIL`, `CONTACT_FORM_TO_EMAIL`).

---

### 6. Balanced Testing & Verification Protocol
Every architectural shift, template creation, or script addition must be verified before concluding a turn:
- **Hugo Compilation Verification (Always Run):**
  ```bash
  hugo --gc --minify --printPathWarnings
  ```
  Verify zero template syntax errors, zero missing partial references, and clean asset generation.
- **Asset & Tailwind Build Validation:**
  Verify that Tailwind successfully scans template files and outputs purged, minified CSS containing all custom classes (`.hexagon`, `.gradientLink`, `.gradientActiveMenuItem`).
- **Interactive Logic Smoke Testing:**
  - Verify theme switcher toggles `dark` class on `<html>` and updates `localStorage`.
  - Verify mobile navigation drawer opens, closes, and locks body scroll appropriately.
  - Verify scroll spy updates the active link indicator during page scroll.
  - Verify contact form validation catches empty or invalid emails before calling the backend.
  - Unit test standalone helper functions (validation, state helpers) using Node's native test runner (`node --test`).

---

### 7. User Action & Step-by-Step Handoff Protocol
Whenever a task requires manual configuration outside the Git repository—such as configuring **Vercel / Netlify build settings**, **environment variables**, **Resend domain verification**, or **DNS records**—you must output a clearly formatted `## 📋 Required User Actions` block at the conclusion of your response:
1. Number every step sequentially (`1.`, `2.`, `3.`).
2. Specify the exact platform and navigation path in bold (e.g., **Vercel Dashboard > Project Settings > General > Build & Development Settings**).
3. Provide exact copy-pasteable values (e.g., Build Command: `hugo --gc --minify`, Output Directory: `public`).
4. Conclude with a brief **Verification Check** explaining how to confirm the step succeeded.

---

### 8. Automated Commit Message Generation
On every turn where code changes, layout additions, or configuration edits are made, output a clear, concise Git commit message following the Conventional Commits specification:

| Prefix | Usage |
| :--- | :--- |
| `feat:` | New section layout, Hugo template, or client feature |
| `fix:` | Visual bug fix, alignment correction, or script repair |
| `style:` | CSS, Tailwind utility, or layout styling adjustment |
| `refactor:` | Template restructuring, partial extraction, or JS optimization |
| `chore:` | Hugo configuration, dependencies, build scripts, or gitignore |
| `data:` | Updates to YAML data files (projects, skills, experience, badges) |

---

## ⚠️ Veto Conditions (Automatic Failure)
Reject or abort an architectural operation if:
- It alters the visual appearance, color scheme, spacing, or typography away from the original Next.js design.
- It omits or degrades any core interactive feature (e.g. replacing the 3D hexagon skill animations with plain bullet lists, removing the vertical timeline, or replacing the interactive contact form with a static mailto link).
- It introduces heavy runtime JavaScript frameworks (e.g. bundling React or Vue into Hugo) when standard Hugo templates and lightweight Vanilla TypeScript suffice.
- It fetches external web fonts or unencrypted assets directly from third-party US CDNs without local self-hosting.
- It exposes private API keys (`RESEND_API_KEY`) on the client side or in static templates.
- It produces invalid HTML, broken heading hierarchies, missing `alt` attributes, or unlabelled interactive elements violating WCAG 2.1 AA.
- It fails to compile with `hugo --gc --minify`.
