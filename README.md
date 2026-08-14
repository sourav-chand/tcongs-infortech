# Tcongs Infotech — Corporate Website

A premium, dark-first marketing website for **Tcongs Infotech**, a Mumbai-based web & app development company. Built with Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion and lucide-react.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack, static prerender)
- **UI**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 (`@theme` design tokens)
- **Motion**: Framer Motion 13 (`MotionConfig` with `reducedMotion="user"`)
- **Icons**: lucide-react (brand icons self-hosted as inline SVG)
- **Fonts**: self-hosted variable fonts via `next/font/local` — no external requests

## Requirements

- **Node.js 20.9+** (developed and verified on Node 24)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the development server (Turbopack) |
| `npm run build`   | Create an optimized production build     |
| `npm run start`   | Serve the production build               |
| `npm run lint`    | Run ESLint (Next core-web-vitals + TS)   |

## Project Structure

```
app/
  globals.css          # Tailwind v4 @theme tokens, utilities, custom scrollbar
  layout.tsx           # Metadata, self-hosted fonts, SmoothScroll + CursorBubble
  page.tsx             # Section assembly + JSON-LD (Organization, FAQPage)
  fonts/               # Self-hosted variable fonts (woff2)
components/
  ui/                  # Primitives: Button, Container, Reveal, AnimatedCounter, Marquee, BackgroundFX, SectionHeading, SocialIcons, Eyebrow
  Navbar, Hero, TrustBar, ServicesSection, ServiceCard, TechnologySection,
  ProcessSection, MetricsSection, AboutSection, FAQSection, CTASection, Footer,
  ConsultationForm, MotionProvider, SmoothScroll, CursorBubble, Logo
lib/
  site.ts, services.ts, technologies.ts, process.ts, faqs.ts, metrics.ts, motion.ts
```

## Design System

Defined in `app/globals.css` via Tailwind v4 `@theme`:

- **Colors**: base `#07080a`, surfaces `#0c0e12`/`#11141a`/`#161a22`, text `#f1f3f7`/`#a7adb8`/`#6f7582`, accent `#5b7cfa`/`#8fa6ff`/`#a78bfa`
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (code/labels)
- **Motion**: staggered reveals, scroll progress line, animated counters, marquee; all respect `prefers-reduced-motion`
- **Extras**: hash-free smooth scrolling (`SmoothScroll`), cursor glow (`CursorBubble`), custom gradient scrollbar

## Notable Implementation Details

- **Self-hosted fonts** — `next/font/google` was replaced with `next/font/local` to eliminate the `fonts.gstatic.com` fetch that intermittently broke Turbopack dev builds.
- **Hash-free navigation** — a global click interceptor (`SmoothScroll`) smooth-scrolls to section anchors without adding `#section` to the URL.
- **Hydration safety** — server-rendered HTML is stable: reduced-motion toggles are CSS-only, and the one-shot service prefill in `ConsultationForm` uses `useSyncExternalStore` instead of reading `sessionStorage` during render.
- **SEO** — full metadata (Open Graph, Twitter, canonical) plus JSON-LD for `Organization` and `FAQPage`; content strictly sourced from the real business site (8+ years, 150+ projects, Mumbai/global clients, contact details).

## Deployment

Static prerender — deploy the `next build` output to any Node host (e.g. Vercel):

```bash
npm run build
npm run start
```
