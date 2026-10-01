/**
 * Page-level hero imagery.
 *
 * These four were previously hardcoded into their hero components, which meant
 * copy changes required a component edit. They live here now, alongside every
 * other piece of page content.
 *
 * `width`/`height` are the real pixel dimensions of the file at `src` — not the
 * CSS display size. All four render inside a `hidden lg:block` column roughly
 * 490px wide, so the sources are 1120x1040 and serve down to that size.
 *
 * The files are ordinary committed assets; replacing one means replacing the
 * file at the same path. Delete `.next/cache/images` afterwards — Next's image
 * optimizer caches by URL, not by file contents, so the old photo will
 * otherwise keep serving.
 */

import type { ImageAsset } from "../types/shared.type"

export const pageImages: Record<string, ImageAsset> = {
  homeHero: {
    src: "/images/hero/home-v2.webp",
    alt: "A desktop computer with a keyboard and mouse on a dark desk",
    width: 1120,
    height: 1040,
  },
  servicesHero: {
    src: "/images/hero/services-v2.webp",
    alt: "A person holding a ceramic mug at a table",
    width: 1120,
    height: 1040,
  },
  aboutHero: {
    src: "/images/hero/about-v2.webp",
    alt: "Two engineers working together at a desk in a low-lit office",
    width: 1120,
    height: 1040,
  },
  workHero: {
    src: "/images/hero/work-v2.webp",
    alt: "A dark desk with a keyboard and a screen glowing in low light",
    width: 1120,
    height: 1040,
  },
}

export type PageImageKey = keyof typeof pageImages
