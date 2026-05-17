# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev          # dev server at http://localhost:3000
npm run build        # production build (also runs TypeScript check)
npm run lint         # ESLint (Next.js core web vitals + TypeScript rules)
npx tsc --noEmit     # type-check only, no emit
```

No test suite exists. `npm run build` is the definitive check — it runs TypeScript and catches all page/metadata errors before deploy.

## Stack

- **Next.js 16.2.4** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — config is in `postcss.config.mjs`, not `tailwind.config.js`
- **Framer Motion** for all animations
- **Lucide React** for icons
- Deployed on **Vercel** at `https://www.gv-techs.com`

## Architecture

### Route structure

```
app/
  layout.tsx                    ← root layout: Navbar, Footer, global JSON-LD
  page.tsx                      ← homepage (server component)
  contact/
    layout.tsx                  ← metadata only
    page.tsx                    ← "use client" (form + animations)
  services/
    layout.tsx                  ← metadata only
    page.tsx                    ← "use client" (animations)
    web-design/page.tsx         ← server component, own metadata
    seo-management/page.tsx     ← server component, own metadata
    website-maintenance/page.tsx
    digital-marketing/page.tsx
  work/
    layout.tsx                  ← metadata only
    page.tsx                    ← "use client" (animations)
  terms/page.tsx
  sitemap.ts                    ← auto-generates /sitemap.xml
  robots.ts                     ← auto-generates /robots.txt
components/
  Navbar.tsx   Footer.tsx   Hero.tsx
  ServicesSection.tsx   About.tsx   Testimonials.tsx   CTA.tsx
```

### Metadata pattern

Pages that use `"use client"` cannot export `metadata`. The pattern used throughout:
- `page.tsx` — `"use client"`, handles animations and interactivity
- `layout.tsx` (sibling) — server component, exports `metadata`

Server component pages (homepage, individual service pages) export `metadata` directly from `page.tsx`.

The root layout sets a title template: `"%s | G.V. TECHS"`. Page-level titles must **not** include `| G.V. TECHS` — the template appends it automatically.

### JSON-LD schema

Structured data is injected via `<script type="application/ld+json">`. Always sanitize with `.replace(/</g, '\\u003c')`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
/>
```

Root layout (`app/layout.tsx`) injects `LocalBusiness` + `WebSite` schemas on every page. The `/services` page additionally injects a `Service` schema inline in its component body.

### Animation pattern

All scroll-triggered animations use `framer-motion` + `useInView`:

```tsx
const ref = useRef(null);
const inView = useInView(ref, { once: true, margin: "-60px" });
// animate={inView ? { opacity: 1, y: 0 } : {}}
```

### Contact form

`app/contact/page.tsx` submits to the Web3Forms API. Requires `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local`.

### Design tokens

- Dark background: `bg-[#040D21]`
- Primary blue: `blue-600` (interactive), `blue-400` (accent on dark)
- Light sections: `bg-slate-50`, borders `border-slate-100`/`border-slate-200`
- Body font: Inter (variable `--font-inter`)

## Sitemap

When adding new pages, add them to `app/sitemap.ts` manually — it is not auto-discovered.
