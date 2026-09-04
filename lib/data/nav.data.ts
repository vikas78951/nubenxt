
import { NavComponent, NavItem } from "../types/nav.type"

import {
  Globe,
  Smartphone,
  Code2,
  Search,
  Monitor,
  Cctv,
  Link
} from "lucide-react"

export const service: NavComponent[] = [
  {
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Premium, responsive web designed to build trust, showcase your brand, and generate enquiries.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    href: "/services/mobile-apps",
    description:
      "User-friendly mobile applications built for iOS and Android with modern, scalable technology.",
    icon: Smartphone,
  },
  {
    title: "Software Development",
    href: "/services/software-development",
    description:
      "Custom software and business applications built around your unique workflows and requirements.",
    icon: Code2,
  },
  {
    title: "SEO & Marketing",
    href: "/services/seo-marketing",
    description:
      "Search and digital marketing strategies designed to improve visibility, traffic, and qualified enquiries.",
    icon: Search,
  },
  {
    title: "Computer Solutions",
    href: "/services/computers",
    description:
      "Reliable computer hardware, setup, maintenance, networking, and IT support for your business.",
    icon: Monitor,
  },
  {
    title: "Camera Security",
    href: "/services/cameras",
    description:
      "Professional CCTV and surveillance solutions designed to keep your business, property, and people secure.",
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
    href: "/service",
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
