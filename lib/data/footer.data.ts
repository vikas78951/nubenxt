


export const footerLink = [
  {
    title: "SERVICES",
    links: [
      { label: "Website", href: "/services/web-development" },
      { label: "Computers", href: "/services" },
      { label: "Cameras", href: "/services" }
    ]
  },
  {
    title: "COMPANY",
    links: [
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" }
    ]
  }
]


export type FooterLinkProps = (typeof footerLink)[number]