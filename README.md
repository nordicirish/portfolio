# Roger Graham — Personal Portfolio Website

Personal portfolio website for Roger Graham ([rogergraham.fi](https://rogergraham.fi)), showcasing web development skills, certifications, projects, and career experience.

Migrated from Next.js to **Hugo Extended** with zero visual drift, identical micro-interactions, self-hosted typography, and serverless email delivery.

---

## 🚀 Technologies Used

- **Hugo Extended (v0.168+)**: Fast static site generator compiling modular HTML templates.
- **Tailwind CSS v3**: Utility-first styling via PostCSS and Hugo Pipes.
- **TypeScript**: Lightweight vanilla client scripts bundled via Hugo's built-in ESBuild pipeline (`assets/js/`).
- **Resend**: Serverless email dispatch for contact inquiries ([api/sendEmail.ts](api/sendEmail.ts) on Vercel Functions).
- **Self-Hosted Montserrat**: Variable WOFF2 font hosted locally in `assets/fonts/` (GDPR and Traficom privacy compliant).

---

## ✨ Features & Micro-Interactions

- **Floating Glassmorphic Navbar**: Fixed pill navigation with active section tracking via `IntersectionObserver` and responsive mobile slide-out drawer.
- **Hexagonal Skills Grid**: Custom `.hexagon` polygon clip paths with staggered 3D Y-axis flip animations upon entering the viewport.
- **Project Showcase**: Alternating card layout, tag badges, external GitHub links, and scroll-linked scale/opacity dynamics.
- **Vertical Experience Timeline**: Custom guideline connector (`--line-color`), circular icon milestones, and theme-aware speech bubble cards.
- **Theme Switcher**: Floating bottom-right circular toggle with `localStorage` persistence and system preference sync.
- **Accessible Contact Form**: Honeypot spam filtering, input validation, and toast notification alerts.
- **WCAG 2.1 AA Compliant**: Keyboard focus visible states, semantic landmarks, and skip-to-content navigation.

---

## 🤖 Coding Agent Protocols & Governance

This repository utilizes structured agent directives in [`AGENTS.md`](AGENTS.md) to govern automated development, performance optimization, and quality assurance. The coding agent operates under the following core protocols:

- **Lighthouse 100/100 & Zero Forced Reflow Mandate**:
  - Eliminates layout thrashing by strictly separating geometric read phases (`getBoundingClientRect`, `offsetWidth`, etc.) from style mutations.
  - Enforces precomputed coordinate caches (`pillPositions`) for navbar tracking recomputed only on window `resize`, `load`, and font readiness, rather than querying layout geometry on continuous scroll events.
  - Mandates explicit image aspect ratios (`width` and `height`), WebP conversion via Hugo Pipes PostCSS, and lazy loading to maintain CLS = 0.
- **Architectural Mapping & Data Decoupling**:
  - Decouples presentation templates (`layouts/`), structured YAML content (`data/`), static assets (`static/`), and asset-pipeline sources (`assets/`).
  - Serverless email submission via Node.js CommonJS (`api/sendEmail.js`) with Resend API, complete with honeypot spam protection and client-side toast notifications.
- **Privacy & Local Self-Hosting (Zero IP-Leakage)**:
  - Self-hosted typography (Montserrat WOFF2) in `assets/fonts/` with zero third-party CDN font dependencies, preventing external IP disclosures under GDPR and Finnish privacy laws.
  - Gating of non-essential analytics behind symmetrical single-click consent (Traficom KHO:2026:65).
  - Absolute prohibition of client-side secret leakage (`RESEND_API_KEY`).
- **Accessibility Standards (WCAG 2.1 AA)**:
  - Enforces accessible heading hierarchy (`<h1>` through `<h3>`), distinct `:focus-visible` focus indicators, screen-reader text on icon controls, and a minimum 4.5:1 color contrast ratio across both light and dark themes.
- **Verification Pipeline & Balanced Testing**:
  - Automated three-tier verification before turn completion: `npm run check` (Hugo compilation), `npm run typecheck` (TypeScript validation), and `npm test` (Node test runner for validation utilities).
- **Session Security & Vulnerability Auditing**:
  - Passive vulnerability scans (`npm audit`) executed on the first turn of each session.
  - Prohibits automated patch execution (`npm audit fix`) without prior presentation of severity ratings, upgrade paths, and explicit user authorization.
  - Enforces mandatory post-patch regression testing across Hugo compilation, TypeScript bundling, and test suites.
- **Strict Veto Conditions**:
  - Automated rejection of any code mutation that introduces forced reflows, regresses Lighthouse metrics below 95+, alters the established visual design, introduces heavy client frameworks, or leaks API credentials.

---

## 🛠️ Local Development

### Prerequisites

- **Node.js**: v22+
- **npm**: v10+

### Setup & Development

```bash
# Install dependencies (installs pinned Hugo Extended via npm)
npm install

# Start local Hugo development server with live reload
npm run dev
# -> Accessible at http://localhost:1313/
```

### Build & Verification

```bash
# Type check client scripts and serverless handlers
npm run typecheck

# Run unit tests (validation logic)
npm test

# Full Hugo production build and asset minification
npm run build

# Strict compilation check with i18n & path warnings
npm run check
```

---

## 🔐 Environment Variables

For contact form delivery via the Vercel Serverless Function, configure the following environment variables in your Vercel project dashboard:

| Variable | Description |
| :--- | :--- |
| `RESEND_API_KEY` | Resend API key (`re_...`) |
| `CONTACT_FORM_FROM_EMAIL` | Verified sending domain (e.g., `contact@rogergraham.fi` or `onboarding@resend.dev`) |
| `CONTACT_FORM_TO_EMAIL` | Destination mailbox receiving inquiries |

---

## 🚢 Deployment (Vercel)

The repository includes a custom [vercel.json](vercel.json) configured for static output:

- **Framework**: Other / None (`"framework": null`)
- **Build Command**: `npm run build`
- **Output Directory**: `public`
- **Serverless Functions**: [api/sendEmail.ts](api/sendEmail.ts) automatically deployed as an Edge/Node function
