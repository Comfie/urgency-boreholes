import { business } from '../data/site';

/**
 * Clean public path for a page.
 *
 * The site builds with `build.format: 'file'`, so Astro.url.pathname is the
 * emitted file (`/services.html`, `/index.html`). Cloudflare Pages 308-redirects
 * those to `/services` and `/`, so canonicals and og:url must use the clean form.
 * Otherwise every canonical points at a redirect, which tells Google the preferred
 * URL is one it can't index.
 */
export function cleanPath(pathname: string): string {
  let p = pathname.replace(/\.html$/, '');
  p = p.replace(/\/index$/, '/');
  if (p.length > 1) p = p.replace(/\/$/, '');
  return p || '/';
}

export function absoluteUrl(path: string): string {
  return new URL(path, business.url).toString();
}

export type Crumb = { name: string; href: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.href),
    })),
  };
}

export const businessId = `${business.url}/#business`;
export const websiteId = `${business.url}/#website`;
