// Motion layer: scroll reveals, staggered groups, header state and count-up numbers.
// Everything is progressive enhancement; without JS the page renders fully visible.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 1. Staggered groups: children of [data-stagger] reveal one after another.
document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
  const step = Number(group.dataset.step ?? 110);
  Array.from(group.children).forEach((child, i) => {
    const el = child as HTMLElement;
    if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', group.dataset.stagger ?? '');
    el.style.setProperty('--d', `${i * step}ms`);
  });
});

// 2. Reveal when an element scrolls into view (once).
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealables.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.classList.add('is-in');
        io.unobserve(el);
        // Drop the stagger delay once revealed so hover effects respond instantly.
        const delay = parseInt(getComputedStyle(el).getPropertyValue('--d')) || 0;
        window.setTimeout(() => el.style.setProperty('--d', '0ms'), delay + 1300);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  revealables.forEach((el) => io.observe(el));
}

// 3. Header firms up once the page is scrolled.
const header = document.querySelector<HTMLElement>('[data-header]');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// 4. Count-up numbers: <span data-count="4">4</span>
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
if (!reduceMotion && 'IntersectionObserver' in window) {
  const co = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target as HTMLElement;
      const target = Number(el.dataset.count);
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      el.textContent = '0';
      requestAnimationFrame(tick);
      co.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach((el) => co.observe(el));
}
