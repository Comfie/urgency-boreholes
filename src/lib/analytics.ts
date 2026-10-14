// Tiny analytics wrapper. Sends to GA4 when gtag is loaded (see Analytics.astro),
// otherwise queues on dataLayer so nothing breaks without an analytics ID.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type TrackParams = Record<string, string | number | undefined>;

export function track(event: string, params: TrackParams = {}): void {
  const payload = { page_path: location.pathname, ...params };
  try {
    if (typeof window.gtag === 'function') window.gtag('event', event, payload);
    else (window.dataLayer = window.dataLayer || []).push({ event, ...payload });
  } catch {
    /* analytics must never break the page */
  }
}

/** Where on the page a click happened: header, hero, mobile bar, footer or a section id. */
export function zoneOf(el: Element): string {
  const zone = el.closest<HTMLElement>('[data-track-zone]')?.dataset.trackZone;
  if (zone) return zone;
  return el.closest('section')?.id || 'content';
}
