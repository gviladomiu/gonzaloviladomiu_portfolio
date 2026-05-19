# Gonzalo Viladomiu — Portfolio

Personal portfolio. Next.js 14 (App Router), TypeScript, Tailwind CSS.

## Design

Monochrome system with a single cyan accent (`#2596BE`) reserved for interaction states.
No serif display fonts, no colored blocks, no italics — just clear typographic hierarchy
on an off-white surface. Geist Sans for text, Geist Mono for technical labels.

## Stack

| Layer       | Choice                |
| ----------- | --------------------- |
| Framework   | Next.js 14 (App Router) |
| Language    | TypeScript            |
| Styling     | Tailwind CSS          |
| Fonts       | Geist Sans + Geist Mono |
| Icons       | lucide-react          |
| Deployment  | Vercel                |

## Structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx            Composes all sections
  globals.css         Tokens, base styles, animations
components/
  nav.tsx             Minimal text-only nav
  hero.tsx            Factual headline + identifier grid
  experience.tsx      Sticky-meta record list of roles
  education.tsx       Academic record table
  stack.tsx           Tech grid + certifications
  contact.tsx         Dark contact block + footer
  reveal.tsx          Scroll-triggered fade-up
lib/
  data.ts             ← All CV content
  utils.ts            Tailwind merge helper
  use-in-view.ts      Intersection observer
public/
  cv-gonzalo-viladomiu.pdf
```

## Local

```bash
npm install
npm run dev   # http://localhost:3000
npm run build
```

## Color tokens

| Token              | Hex      | Used for                |
| ------------------ | -------- | ----------------------- |
| `surface`          | `#FAFAF9`| Page background         |
| `surface-alt`      | `#F2F2F0`| Education section bg    |
| `ink`              | `#0A0A0A`| Primary text & dark CTA |
| `ink-100/200`      |          | Hairlines, dividers     |
| `ink-500/700`      |          | Secondary text          |
| `accent`           | `#2596BE`| Hover, eyebrow accents, focus |

The accent is used sparingly — never as a fill, only on hover states, the status dot
in the hero, eyebrow labels in select positions, and stack categories.

## Content

All copy lives in `lib/data.ts`. Update there to keep experience, education,
stack and certifications in sync.

## Deploy

Push to GitHub. On Vercel, import the repo (Next.js auto-detected). Add a custom
domain under Project Settings → Domains.
