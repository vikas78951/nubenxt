

export const servicesData = [
  {
    id: "01",
    title: "Web Development",
    description: "We design and develop modern websites and digital products that are fast, responsive and built around your requirements. From a simple landing page to a complete business website, online store or custom web application, we handle the design and development from start to finish.",
    tags: [
      "Website Development",
      "Landing Pages",
      "E-commerce",
      "SEO & Marketing",
      "HTML Emails",
      "Mobile Apps",
      "Software Development"
    ],
    ctaText: "EXPLORE WEB SERVICES",
    ctaLink: "#",
    img: '/images/browser-graphic.png'
  },
  {
    id: "02",
    title: "Computers & IT",
    description: "We supply, configure, upgrade, repair and maintain computers and related hardware. Whether you need a new system, a replacement, an upgrade or ongoing technical support, NabeNex can help with the setup and maintenance.",
    tags: [
      "Computer Sales",
      "Computer Setup",
      "Hardware & Software",
      "Upgrades",
      "Repairs",
      "Maintenance",
      "Technical Support"
    ],
    ctaText: "EXPLORE COMPUTER SERVICES",
    ctaLink: "#",
    img: '/images/hardware-graphic.png'

  },
  {
    id: "03",
    title: "Cameras & Security",
    description: "We supply and install camera and security systems for monitoring your premises. From selecting the right equipment to installation, configuration, maintenance and support, NabeNex provides the complete camera solution.",
    tags: [
      "CCTV Cameras",
      "Camera Sales",
      "Installation",
      "Configuration",
      "Security Systems",
      "Maintenance",
      "Support"
    ],
    ctaText: "EXPLORE CAMERA SERVICES",
    ctaLink: "#",
    img: '/images/browser-graphic.png'

  }
];









export type ServiceDataProps = (typeof servicesData)[number]