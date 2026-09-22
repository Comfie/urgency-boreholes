// Exports PNG versions of the logo for social media, WhatsApp Business and favicons.
// Run: npm run brand
import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';

const src = 'public/brand';
const out = 'brand-exports';
await mkdir(out, { recursive: true });
const NAVY = { r: 10, g: 61, b: 122, alpha: 1 };

const svg = (name) => readFile(`${src}/${name}`);

// Transparent PNGs for Paul to use anywhere (letterheads, quotes, vehicle signage mock-ups)
await sharp(await svg('logo-horizontal.svg'), { density: 300 }).resize({ width: 2000 }).png().toFile(`${out}/logo-horizontal.png`);
await sharp(await svg('logo-horizontal-white.svg'), { density: 300 }).resize({ width: 2000 }).png().toFile(`${out}/logo-horizontal-white.png`);
await sharp(await svg('logo-mark.svg'), { density: 300 }).resize({ width: 1000 }).png().toFile(`${out}/logo-mark.png`);

// Square profile picture for WhatsApp Business / Facebook / Google Business Profile
await sharp(await svg('logo-social.svg'), { density: 300 }).resize(1080, 1080).png().toFile(`${out}/profile-1080.png`);
await sharp(await svg('logo-social.svg'), { density: 300 }).resize(512, 512).png().toFile(`${src}/logo-social.png`);

// Favicons
await sharp(await svg('../favicon.svg'), { density: 300 }).resize(180, 180).png().toFile(`${src}/apple-touch-icon.png`);

// Open Graph share image (link previews on WhatsApp, Facebook, etc.)
const logo = await sharp(await svg('logo-horizontal-white.svg'), { density: 300 }).resize({ width: 820 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: NAVY } })
  .composite([{ input: logo, gravity: 'center' }])
  .png()
  .toFile(`${src}/og-image.png`);

console.log('Brand assets exported to public/brand and brand-exports/');
