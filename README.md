# Urgency Boreholes website

Lead-generation site for Urgency Boreholes (borehole drilling, pumps, water purification, plumbing).
Astro + Tailwind CSS v4, fully static, no backend.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Build and deploy to Cloudflare Pages (production) |
| `npx astro check` | Type-check (needs `npm i -D @astrojs/check typescript`) |
| `npm run brand` | Export logo PNGs, OG image and touch icon from the SVGs in `public/brand` |

## Where things live

- `src/data/site.ts`: **all business details and copy** (phone, WhatsApp, services, areas, FAQs, reviews, gallery). Edit here first.
- `src/data/servicePages.ts`: content for the five `/services/<slug>` pages.
- `src/data/areaPages.ts`: content for the four `/areas/<slug>` pages, incl. verified municipal rules and sources. Re-check the rules every 6 months; add real local jobs to `projects`.
- `src/lib/seo.ts`: clean canonical URLs (the build emits `.html` files, Cloudflare serves them without the extension), breadcrumb schema.
- `src/scripts/track.ts` + `src/lib/analytics.ts`: WhatsApp / call / email / quote-form event tracking.
- `src/assets/work/`: project photos (optimised to WebP automatically at build).
- `src/components/PhotoPlaceholder.astro`: branded stand-in for photos not supplied yet.
- `public/brand/`: logo SVGs. `brand-exports/` has PNGs for WhatsApp Business, Facebook and Google Business Profile.
- `scripts/generate-logo.py`: source for the logo (text outlined from Barlow Condensed, SIL OFL).
- `public/videos/`: job clips shown on Home and Services (web-ready MP4 + poster JPG).
- `raw-media/`: original client videos, not deployed.

## Adding the drilling and team photos

1. Drop the photo into `src/assets/work/` (e.g. `drilling-rig.jpg`).
2. In `src/data/site.ts`, add `image: 'drilling-rig.jpg'` to the matching gallery item marked `TODO`.
3. About page: replace the `PhotoPlaceholder` in `src/pages/about.astro` with an `<Image>`.

## SEO and analytics

- **Canonicals** always use the clean URL (`/services`, never `/services.html`). Don't build canonicals from `Astro.url` directly; use `cleanPath()`.
- **Reviews**: placeholder testimonials and the star badge are hidden. Set `testimonialsVerified = true` only after replacing them with real reviews; the badge appears once `business.rating.url` links to the real Google profile.
- **Google Analytics 4**: create `.env` with `PUBLIC_GA4_ID=G-XXXXXXXXXX`, then `npm run deploy` (the build runs locally, so the ID must be in your local `.env`). In GA4, mark `whatsapp_click`, `phone_click` and `quote_form_submit` as Key events.
- **Search Console**: add a *Domain* property for `urgencyboreholes.co.za` and verify with the DNS TXT record in Cloudflare DNS, then submit `https://urgencyboreholes.co.za/sitemap-index.xml`.
- **www → apex redirect**: Cloudflare Pages `_redirects` can't redirect by hostname. In the Cloudflare dashboard add a Redirect Rule: hostname equals `www.urgencyboreholes.co.za` → 301 to `https://urgencyboreholes.co.za${path}` (preserve query string).
- `*.pages.dev` copies are sent `X-Robots-Tag: noindex` via `public/_headers`.

## Leads

No form backend. The quote form and every CTA open WhatsApp with a pre-filled message,
so leads land directly on the owner's phone and no personal data is stored on the site.

## Before launch checklist

- [x] Real phone and WhatsApp number in `src/data/site.ts`
- [x] Email address (urgencyboreholes@gmail.com)
- [x] Confirm working hours
- [ ] Replace placeholder testimonials with real customer reviews, then set `testimonialsVerified = true`
- [ ] Star rating (`business.rating`) must match Paul's real Google profile; add the profile link (badge is hidden until then)
- [ ] GA4 property + `PUBLIC_GA4_ID` in `.env`; mark key events
- [ ] Cloudflare Redirect Rule: www → apex (301)
- [ ] Paul to review service and area page wording for accuracy
- [x] Drilling rig photos
- [ ] Paul happy to be named on the About page
- [ ] Register domain (urgencyboreholes.co.za) in the client's name, update `site` in `astro.config.mjs`
- [x] Deploy to Cloudflare Pages (project `urgency-boreholes`)
- [ ] Point urgencyboreholes.co.za at Cloudflare and add it as a Pages custom domain
- [ ] Google Business Profile with the same name, phone and address
- [ ] Search Console Domain property (DNS TXT) and submit sitemap
