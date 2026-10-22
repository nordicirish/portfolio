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
