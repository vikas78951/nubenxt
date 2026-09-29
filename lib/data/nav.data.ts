
import { NavComponent, NavItem } from "../types/nav.type"
import { Service } from "../types/shared.type";
import {
  Cctv,
  Code2,
  Link,
  ShoppingCart,
  Terminal,
  Wrench
} from "lucide-react"

 
export const service: NavComponent[] = [
  {
    title: "Website Development",
    href: `/services/${Service.WEB_DEVELOPMENT}`,
    description:
      "Business websites, landing pages, SEO and email campaigns — designed, built and maintained.",
    icon: Code2,
  },
  {
    title: "Ecommerce",
    href: `/services/${Service.ECOMMERCE_WEBSITE}`,
    description:
      "Online stores with payments, checkout and fulfilment working end to end.",
    icon: ShoppingCart,
  },
  {
    title: "Software & Mobile",
    href: `/services/${Service.SOFTWARE_DEVELOPMENT}`,
    description:
      "Custom platforms, internal tools, mobile apps and practical AI automation.",
    icon: Terminal,
  },
  {
    title: "Computers & IT",
    href: `/services/${Service.COMPUTERS_IT}`,
    description:
      "Computers supplied, configured and networked. On-site setup and ongoing support.",
    icon: Wrench,
  },
  {
    title: "Cameras & Security",
    href: `/services/${Service.CAMERA_SECURITY}`,
    description:
      "CCTV survey, supply, installation and maintenance for offices and shops.",
    icon: Cctv,
  },
]


export const NAV_DATA: NavItem[] = [
  {
    name: "home",
    href: "/",
    isHyperlink: true,
  },
  {
    name: "services",
    href: "/services",
    isHyperlink: true,
  },
  {
    name: "about",
    href: "/about",
    isHyperlink: true,
  },
  {
    name: "contact",
    href: "/contact",
    isHyperlink: true,
  },
]

export const NAV_MOBILE_DATA: NavItem[] = [
  {
    name: "home",
    href: "/",
    isHyperlink: true,
    icon: Link,
  },
  {
    name: "services",
    href: "/services",
    isHyperlink: true,
    icon: Link,
  },
  {
    name: "about",
    href: "/about",
    isHyperlink: true,
    icon: Link,
  },
  {
    name: "contact",
    href: "/contact",
    isHyperlink: true,
    icon: Link,
  },
]
