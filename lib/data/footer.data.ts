


import { Service } from "../types/shared.type"

export const footerLink = [
  {
    title: "SERVICES",
    links: [
      { label: "Web & Mobile", href: `/services/${Service.WEB_DEVELOPMENT}` },
      { label: "Ecommerce", href: `/services/${Service.ECOMMERCE_WEBSITE}` },
      {
        label: "Software Development",
        href: `/services/${Service.SOFTWARE_DEVELOPMENT}`,
      },
      { label: "Computers", href: `/services/${Service.COMPUTERS_IT}` },
      { label: "Cameras", href: `/services/${Service.CAMERA_SECURITY}` },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" }
    ]
  }
]


export type FooterLinkProps = (typeof footerLink)[number]