# Gonzalo Viladomiu — Portfolio

Personal portfolio site. Built with Next.js 14 (App Router), TypeScript and Tailwind CSS.
Designed as an editorial, refined experience — closer to a luxury magazine than a developer template.

## Design philosophy

- **Aesthetic**: editorial luxury — dark, monochromatic, gold accents, generous whitespace.
- **Typography**: Fraunces (display, italic-friendly), Inter Tight (UI), JetBrains Mono (technical labels).
- **Tone**: confident, calm, ten-year senior — not bootcamp-junior.
- **Narrative**: networks → consulting → luxury tech. Each section is a chapter.

## Stack

| Layer       | Choice                |
| ----------- | --------------------- |
| Framework   | Next.js 14 (App Router) |
| Language    | TypeScript            |
| Styling     | Tailwind CSS          |
| Icons       | lucide-react          |
| Fonts       | Google Fonts (next/font) |
| Deployment  | Vercel                |

## Getting started

```bash
# Install
npm install

# Dev
npm run dev

# Build
npm run build
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx            Composes all sections
  globals.css         Base styles, CSS vars, animations
components/
  nav.tsx             Fixed top nav with scroll progress
  hero.tsx            Editorial hero with live local time
  work.tsx            Experience timeline (interactive)
  focus.tsx           Strategic focus areas
  background.tsx      Bio + education + skills + certs
  contact.tsx         Contact + footer
  reveal.tsx          Scroll-triggered fade-up wrapper
lib/
  data.ts             ← Edit your CV content here
  utils.ts            Tailwind merge helper
  use-in-view.ts      Intersection observer hook
public/
  cv-gonzalo-viladomiu.pdf   Add your CV here
```

## Updating content

All copy lives in **`lib/data.ts`** — a single source of truth.
Edit that file, no need to touch component code unless you want to restructure layout.

## Deploying to Vercel

1. Push to your GitHub repo (`gviladomiu/gonzaloviladomiu_portfolio`).
2. On [vercel.com](https://vercel.com), import the repository.
3. Framework preset will auto-detect as Next.js — leave defaults.
4. Deploy.

For a custom domain (e.g. `gonzaloviladomiu.com`), add it under Project Settings → Domains.

## Notes

- The CV PDF should be placed at `public/cv-gonzalo-viladomiu.pdf` so the
  "Download CV" link in the contact section works.
- Update the OpenGraph image and favicon under `app/` and `public/` for full polish.
- The grain texture and gold-accent glow are intentional and on-brand —
  remove them and the design loses its character.

---

Crafted with intent in Barcelona.
