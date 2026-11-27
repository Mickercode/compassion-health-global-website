# Compassion Health Global website

Next.js 16 (App Router, React 19), TypeScript and Tailwind CSS 4. Every page is statically generated.
Copy comes from the supplied website copy (Nov 2026); the brand is in `../Compassion Health Global Brand/`.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development at http://localhost:3000. Placeholders are highlighted. |
| `npm run build` | Production build. **Fails** while any `[placeholder]` remains or `SITE_URL` is unset. |
| `npm run build:preview` | Build without the placeholder check, for previews. |
| `npm run check` | Lists the remaining placeholders. |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript. |

Set `SITE_URL` (e.g. `https://example.org`) for production; it feeds canonical URLs, the sitemap and Open Graph data.

## Where things live

```
src/
  app/                    one folder per page (route)
    page.tsx              /            Home
    about/page.tsx        /about
    our-work/page.tsx     /our-work
    the-plan/page.tsx     /the-plan
    serve/page.tsx        /serve       volunteer registration via Jotform
    partner/page.tsx      /partner
    contact/page.tsx      /contact     (+ contact/sent: confirmation when JavaScript is off)
    api/submit/route.ts   the Contact form handler
    globals.css           design tokens, type and component classes
    opengraph-image.tsx, sitemap.ts, robots.ts, icon.svg, apple-icon.png
  content/                one copy file per page, plus shared.ts, forms.ts and images.ts
  assets/photos/          photographs (stand-ins for now)
  components/             Header, Footer, Logo, Arcs, Photo, content blocks, forms
  lib/                    validation, delivery (TODO), phone links, metadata
scripts/check-placeholders.mjs
```

## Editing copy

All words live in `src/content/`. Replace a `[placeholder]` there and it updates everywhere.
Phone numbers go in `src/content/shared.ts`; tel: and WhatsApp links are generated from them.

## Forms

- **Volunteer registration (/serve)** is a Jotform. Its ID is in `src/content/serve.ts`; it is embedded
  as an iframe by `src/components/forms/JotformEmbed.tsx`, which resizes it to fit. Submissions
  arrive in your Jotform account.
- **Contact (/contact)** posts to `src/app/api/submit/route.ts`. `src/lib/deliver.ts` →
  `deliverSubmission()` is the single place to connect email, a spreadsheet or a form service.
  Until then, submissions are logged to the server console.

## Photography

Every photo is listed in `src/content/images.ts`, with alt text, its licence source and a brief for
the shot the slot was designed for. The current photos are free-licence **stand-ins** from Pexels and
Unsplash, not photos of Compassion Health Global's own work. Replace them with your own consented
photos: put the file in `src/assets/photos/` and update the entry.

## Design system

Tokens, type and component classes live in `src/app/globals.css`. Colours are the brand kit's blues
plus a deep navy for emphasis bands; `.tone-navy` re-points the tokens so every component adapts.
Headlines use Source Serif 4, labels Montserrat, text Inter, and scripture Cormorant (About only).
Scroll reveals switch off for visitors who prefer reduced motion, and all content shows without JavaScript.
