export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

export enum Service {
  WEB_DEVELOPMENT = "web-development",
  ECOMMERCE_WEBSITE = "ecommerce-website",
  SOFTWARE_DEVELOPMENT = "software-development",
  COMPUTERS_IT = "computers-it",
  CAMERA_SECURITY = "camera-security",
}

/**
 * An image plus its intrinsic dimensions.
 *
 * `width`/`height` must match the real pixel dimensions of the file at `src`.
 * `next/image` uses them to reserve space before the file loads, so a wrong
 * pair causes layout shift on every page that renders it. `npm run
 * images:audit` fails the build's pre-flight check if they drift.
 */
export interface ImageAsset {
  src: string
  alt: string
  width: number
  height: number
}

export interface CardContentProps {
  cardNumber?: number
  type?: "horizontal" | "vertical"
  title: string
  description: string
  image?: ImageAsset
  tags?: string[]
  category?: string
  href?: string
}
