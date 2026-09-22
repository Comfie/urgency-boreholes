// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: confirm once the domain is registered
  site: 'https://urgency-boreholes.vercel.app', // TODO: switch to https://urgencyboreholes.co.za
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
