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

export interface CardContentProps {
  cardNumber?: number
  type?: "horizontal" | "vertical"
  title: string
  description: string
  image?: {
    src: string
    alt: string
    height: number
    width: number
  }
  tags?: string[]
  category?: string
  href?: string
}
