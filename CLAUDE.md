# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gulaal International marketing website for a UAE-based online retail and project management company. A 3-page static Next.js site with no backend, API routes, or database. Built to look professional and legitimate for business permit approvals.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint (next/core-web-vitals + typescript)
```

## Tech Stack

- **Next.js 16** (App Router) / **React 19** / **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`), but most components use **inline styles**, not Tailwind classes
- **motion** (Framer Motion) for scroll animations
- **swiper** for Hero image sliders (horizontal + vertical creative)
- **agentation** for dev-only visual feedback toolbar (conditionally rendered in layout)

## Architecture

3-page site with shared NavBar and Footer:

```
/           → NavBar → Hero → WhySection → Services → ContactCTA → Footer
/about      → NavBar → Hero → Mission → Values → CTA → Footer
/services   → NavBar → Hero → Online Retail → Project Management → CTA → Footer
```

- `app/layout.tsx` — Root layout with metadata, Google Fonts (Inter only), Agentation dev toolbar
- `app/page.tsx` — Landing page composing section components
- `app/about/page.tsx` — About page (self-contained, inline styles)
- `app/services/page.tsx` — Services page (self-contained, inline styles)
- `app/globals.css` — Tailwind v4 `@theme` tokens, custom utilities, Swiper overrides, scroll reveal classes
- `components/` — One file per landing page section, all `"use client"`
- `public/gulaal/` — Gulaal brand images (PNG)
- `public/isomeet/` — Legacy ISOMEET assets (some still referenced by Hero sliders)

Path alias: `@/*` maps to project root.

## Design System & Conventions

**Typography:** Inter font only throughout the entire site. No secondary fonts, no italic accent mixing.

**Logo:** Text-only "Gulaal International" in Inter semibold. No SVG icon.

**Layout constants:** All sections use `maxWidth: "83rem"`, `padding: "0 3.5rem"` (reduces to `1.25rem` on mobile), and `paddingBlock: "8.25rem"` (reduces to `4rem` on mobile).

**Color palette:** Minimalist black/white. Primary text `#000`, muted text `rgba(0,0,0,0.4)`, borders `rgba(0,0,0,0.08-0.1)`, backgrounds `#fff` or `#f5f5f5`.

**Styling approach:** Components use inline `style` objects, NOT Tailwind utility classes. Responsive breakpoints are handled via embedded `<style>` tags with media queries inside each component, using `!important` overrides on class names (e.g., `.bento-grid-4`, `.hero-grid`, `.section-container`).

**Section pill labels:** Bordered pill tags using: `border: 1px solid rgba(0,0,0,0.1)`, `borderRadius: 0.5rem`, `fontSize: 0.875rem`.

**Interactive hover states:** Inline `onMouseEnter`/`onMouseLeave` handlers for opacity/color changes, not CSS `:hover`.

**Corner plus icons:** Decorative `+` SVG icons at bento card corners in Services.

**Responsive breakpoints:** 900px (tablet), 767px (mobile), 600px (small mobile). Each component manages its own breakpoints via embedded `<style>` tags.

## Content Guidelines

**IMPORTANT:** This company is newly registered. All copy must be:
- Professional but vague. No specific claims about client count, revenue, years of operation
- No testimonials or social proof (no fake names, companies, or stats)
- No em dashes in visible text (they look AI-generated). Use commas, periods, or colons instead
- E-commerce means Gulaal SELLS products online in the UAE, NOT that it provides e-commerce services to others
- Project management is a service they offer to other businesses

## Key Patterns

- All components are client components (`"use client"`)
- Scroll-reveal animations: `IntersectionObserver` with opacity/transform transitions (WhySection)
- Contact form has `onSubmit={(e) => e.preventDefault()}` (non-functional, no backend)
- Multi-page routing uses Next.js `<Link>` components
- About and Services pages import shared `NavBar` and `Footer` components
