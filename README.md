# Fulaniturto

One-page marketing site for Fulaniturto — Fulfulde language classes.

## Stack

React + Vite + Tailwind CSS. No backend; all CTAs deep-link to WhatsApp or email.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Output goes to `dist/`.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist` (both auto-filled).
4. Deploy.

`vercel.json` is included so client-side anchor routing (`/#about`, etc.) resolves correctly.

## Editing contact details

All WhatsApp numbers and the contact email live in one place:

```
src/siteConfig.js
```

Change `WHATSAPP_NUMBER`, `WHATSAPP_DISPLAY`, or `CONTACT_EMAIL` there and every button/link across the site updates.

## Project structure

```
src/
  components/   One component per section (Hero, About, WhatYoullLearn, Support,
                AnyQuestion, FinalCta, Footer, Header) plus shared Button and
                StickerBadge.
  hooks/        useReveal — scroll-triggered fade-up animation, IntersectionObserver-based.
  assets/       Uploaded photos.
  siteConfig.js Central contact info + link builders.
  index.css     Tailwind layers + custom reveal/sticker-badge utilities.
```

## Accessibility & motion

- Visible focus rings on all interactive elements.
- Skip-to-content link.
- All animations respect `prefers-reduced-motion`.
- Images have descriptive alt text; decorative shapes are `aria-hidden`.

## Image credits

- Hero portrait, small circle photos, and basket photo: supplied by the client.
- "Any question?" portrait: free-to-use stock photo via Pexels (Sgabas Photos).
