// Enquiry intent tracking. One delegated listener covers every CTA on every page,
// so new buttons are tracked automatically.
//
// Event names (mark the first three as Key events in GA4):
//   whatsapp_click     any wa.me link (opens WhatsApp; NOT a confirmed enquiry)
//   phone_click        any tel: link (starts a call; NOT a confirmed enquiry)
//   quote_form_submit  quote form validated and WhatsApp opened with the details
//   quote_form_start   first interaction with the quote form
//   email_click        any mailto: link
// Confirmed enquiries are the WhatsApp chats and calls Paul actually receives;
// see the tracking plan in SEO-REPORT.md for how to reconcile the two.
import { track, zoneOf } from '../lib/analytics';

document.addEventListener(
  'click',
  (e) => {
    const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
    if (!link) return;
    const href = link.getAttribute('href') ?? '';
    const params = {
      link_location: zoneOf(link),
      link_text: (link.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 80),
    };
    if (href.startsWith('https://wa.me/')) track('whatsapp_click', params);
    else if (href.startsWith('tel:')) track('phone_click', { ...params, phone_line: href.slice(4) });
    else if (href.startsWith('mailto:')) track('email_click', params);
  },
  { capture: true },
);
