import { NavComponent, NavItem } from "../types/nav.type"
export const service: NavComponent[] = [
  {
    title: "Website Development",
    href: "/services/website-development",
    description:
      "Premium, responsive websites designed to build trust, showcase your brand, and generate enquiries.",
  },
  {
    title: "Landing Pages",
    href: "/services/landing-pages",
    description:
      "High-converting landing pages built for campaigns, promotions, services, and lead generation.",
  },
  {
    title: "E-commerce Websites",
    href: "/services/ecommerce",
    description:
      "Modern online stores with seamless shopping experiences, secure payments, and scalable technology.",
  },
  {
    title: "Mobile Apps",
    href: "/services/mobile-apps",
    description:
      "User-friendly mobile applications built for iOS and Android with modern, scalable technology.",
  },
  {
    title: "Software Development",
    href: "/services/software-development",
    description:
      "Custom software and business applications built around your unique workflows and requirements.",
  },
  {
    title: "SEO & Marketing",
    href: "/services/seo-marketing",
    description:
      "Search and digital marketing strategies designed to improve visibility, traffic, and qualified enquiries.",
  },
  {
    title: "HTML Emailers",
    href: "/services/html-emailers",
    description:
      "Professional responsive email designs for campaigns, announcements, promotions, and customer communication.",
  },
  {
    title: "Computer Solutions",
    href: "/services/computers",
    description:
      "Reliable computer hardware, setup, maintenance, networking, and IT support for your business.",
  },
  {
    title: "Camera Security",
    href: "/services/cameras",
    description:
      "Professional CCTV and surveillance solutions designed to keep your business, property, and people secure.",
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
  },
  {
    name: "services",
    href: "/service",
    isHyperlink: true,
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
