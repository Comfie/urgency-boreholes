// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: confirm once the domain is registered
  site: 'https://urgencyboreholes.co.za',
  // Emit services.html etc. so Cloudflare Pages serves /services without a trailing-slash redirect
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
