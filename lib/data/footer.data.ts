


export const footerLink = [
  {
    title: "SERVICES",
    links: [
      { label: "Website", href: "#" },
      { label: "Computers", href: "#" },
      { label: "Cameras", href: "#" }
    ]
  },
  {
    title: "COMPANY",
    links: [
      { label: "Work", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" }
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