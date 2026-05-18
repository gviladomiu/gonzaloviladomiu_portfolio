# Gonzalo Viladomiu — Portfolio

Personal portfolio site. Next.js 14 (App Router), TypeScript, Tailwind CSS.

## Design direction

The aesthetic draws from four references:

- **PUIG.com** — warm whites, restrained typography, dark olive and cream blocks.
- **Apple.com** — declarative big-statement headlines, generous whitespace, single-product feature blocks with clean rounded cards.
- **Synthesis Capital** — confident sentence-as-statement hero ("We invest in the future of food."), portfolio of companies in alternating colored sections.
- **Perk.com** — modular color blocks per section (peach, sand, sky, ink), pill-shaped CTAs, light pastel surface palette.

The result is an **executive light-theme portfolio**: cream background, ink-black typography, modular pastel and dark blocks per section, and pill buttons. The display font is Instrument Serif (used only in italic, for accent words), the UI font is Geist, and JetBrains Mono is used for eyebrow labels.

## Stack

| Layer       | Choice                |
| ----------- | --------------------- |
| Framework   | Next.js 14 (App Router) |
| Language    | TypeScript            |
| Styling     | Tailwind CSS          |
| Icons       | lucide-react          |
| Fonts       | Geist Sans + Instrument Serif + JetBrains Mono |
| Deployment  | Vercel                |

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx            Composes all sections
  globals.css         Base styles, CSS vars, animations
components/
  nav.tsx             Minimal centered nav, shrinks on scroll
  hero.tsx            Declarative big-statement hero + stats + marquee
  work.tsx            Modular color-block timeline (olive/peach/sand/rose)
  thinking.tsx        Strategic focus areas, Apple-style feature grid
  story.tsx           Bio + education + skills + certifications
  contact.tsx         Dark ink CTA block + footer
  reveal.tsx          Scroll-triggered fade-up wrapper
lib/
  data.ts             ← All CV content lives here
  utils.ts            Tailwind merge helper
  use-in-view.ts      Intersection observer hook
public/
  cv-gonzalo-viladomiu.pdf
```

## Getting started

```bash
npm install
npm run dev   # http://localhost:3000
npm run build
```

## Deploy

Push to your `gonzaloviladomiu_portfolio` repo, import the project on Vercel,
leave the defaults, deploy. Add `gonzaloviladomiu.com` under Project Settings → Domains
when you're ready.

## Updating content

All copy lives in **`lib/data.ts`** — single source of truth. Edit that file
to change experience, focus areas, education, skills or certifications.
No need to touch component code unless you want to restructure layout.

## Color system

Six block colors, each with a clear semantic role:

| Token             | Hex      | Used for              |
| ----------------- | -------- | --------------------- |
| `cream-50`        | `#FBFAF7`| Page background       |
| `cream-100`       | `#F4F1EA`| Story section bg      |
| `ink`             | `#0E0E0C`| Primary text & CTAs   |
| `block-olive`     | `#3D4029`| PUIG (current role)   |
| `block-peach`     | `#F4D5C5`| Deloitte              |
| `block-sand`      | `#E9DDC2`| Unitronics            |
| `block-rose`      | `#EDD6D8`| Fira Barcelona        |
| `accent`          | `#C8462C`| Hover state on email CTA |

Each experience uses a distinct color block — strong visual rhythm without
relying on stock photography.

---

Crafted with intent in Barcelona.
