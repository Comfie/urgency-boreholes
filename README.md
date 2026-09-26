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
| `npm run brand` | Export logo PNGs, OG image and touch icon from the SVGs in `public/brand` |

## Where things live

- `src/data/site.ts`: **all business details and copy** (phone, WhatsApp, services, areas, FAQs, reviews, gallery). Edit here first.
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

## Leads

No form backend. The quote form and every CTA open WhatsApp with a pre-filled message,
so leads land directly on the owner's phone and no personal data is stored on the site.

## Before launch checklist

- [x] Real phone and WhatsApp number in `src/data/site.ts`
- [x] Email address (urgencyboreholes@gmail.com)
- [x] Confirm working hours
- [ ] Replace placeholder testimonials with real customer reviews
- [ ] Star rating (`business.rating`) must match Paul's real Google profile; add the profile link
- [x] Drilling rig photos
- [ ] Paul happy to be named on the About page
- [ ] Register domain (urgencyboreholes.co.za) in the client's name, update `site` in `astro.config.mjs`
- [x] Deploy to Cloudflare Pages (project `urgency-boreholes`)
- [ ] Point urgencyboreholes.co.za at Cloudflare and add it as a Pages custom domain
- [ ] Google Business Profile with the same name, phone and address
- [ ] Submit sitemap in Google Search Console
