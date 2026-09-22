import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/work/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

/** Resolve a file name in src/assets/work to optimised image metadata. */
export function workImage(name: string): ImageMetadata {
  const match = images[`../assets/work/${name}`];
  if (!match) throw new Error(`Image not found in src/assets/work: ${name}`);
  return match.default;
}
