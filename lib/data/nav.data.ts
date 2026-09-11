
import { NavComponent, NavItem } from "../types/nav.type"
import { Service } from "../types/shared.type";
import {
  Smartphone,
  Code2,
  Search,
  Monitor,
  Link,
  Mail,
  Zap,
  Terminal,
  ShoppingCart,
  ImageIcon
} from "lucide-react"

 
export const service: NavComponent[] = [
  {
    title: "HTML Emailers",
    href: `/services/${Service.HTML_EMAILER}`,
    description:
      "Professional responsive emails designed for engaging email campaigns.",
    icon: Mail,
  },
  {
    title: "Landing Pages",
    href: `/services/${Service.LANDING_PAGE}`,
    description:
      "High-converting landing pages designed to turn visitors into customers.",
    icon: Monitor,
  },
  {
    title: "SEO & Marketing",
    href: `/services/${Service.SEO_MARKETING}`,
    description:
      "Boost visibility and traffic with effective SEO and digital marketing strategies.",
    icon: Search,
  },
  {
    title: "Co-Brand Images",
    href: `/services/${Service.CO_BRAND_IMAGES}`,
    description:
      "Custom campaign images designed to showcase your brand and partnerships.",
    icon: ImageIcon,
  },
  {
    title: "AI Agents",
    href: `/services/${Service.AI_AGENTS}`,
    description:
      "Intelligent AI automation solutions built to streamline tasks and workflows.",
    icon: Zap,
  },
  {
    title: "Mobile Apps",
    href: `/services/${Service.MOBILE_APPS}`,
    description:
      "Mobile applications built to deliver seamless experiences on iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "Website Development",
    href: `/services/${Service.WEB_DEVELOPMENT}`,
    description:
      "Modern custom websites designed to build trust and showcase your brand.",
    icon: Code2,
  },
  {
    title: "Software Development",
    href: `/services/${Service.SOFTWARE_DEVELOPMENT}`,
    description:
      "Enterprise SaaS platforms and custom software built around your business needs.",
    icon: Terminal,
  },
  {
    title: "Ecommerce Website",
    href: `/services/${Service.ECOMMERCE_WEBSITE}`,
    description:
      "Full-featured ecommerce stores designed to help your business sell online.",
    icon: ShoppingCart,
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
    isHyperlink: false,
    components: service,
  },
  {
    name: "work",
    href: "/work",
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
    href: `/services/${Service.LANDING_PAGE}`,
    isHyperlink: true,
    icon: Link,
  },
  {
    name: "work",
    href: "/work",
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
