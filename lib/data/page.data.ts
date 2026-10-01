/**
 * Homepage content. Four service lines, four differentiators, a three-step
 * process and the maintenance offer — the things a services buyer needs to
 * decide before they enquire.
 *
 * The technology stack that used to live here has been removed. It belongs on
 * the Web & Mobile Apps page only (see `stack` in service.data.ts).
 */

export const servicesData = [
  {
    id: "01",
    title: "Software Development",
    description:
      "Websites, online stores and mobile apps, plus the search visibility that brings people to them. Designed, built and maintained by one team — so nothing falls between vendors when something needs changing.",
    tags: [
      "Business Websites",
      "Mobile Apps",
      "Online Stores",
      "Landing Pages",
      "SEO & Local Search",
      "Hosting & Care",
    ],
    ctaText: "EXPLORE SOFTWARE SERVICES",
    ctaLink: "/services/software-development",
    img: {
      src: "/images/cards/web-development-v2.webp",
      alt: "A silver desktop computer switched on in a darkened room",
      width: 800,
      height: 480,
    },
  },
  {
    id: "02",
    title: "Computers & IT",
    description:
      "Computers supplied, configured and networked for your office. We set up new systems, fix existing ones, migrate your data and wire up the network — then keep it running with a maintenance contract.",
    tags: [
      "Computer Supply",
      "Setup & Configuration",
      "Office Networking",
      "Data Migration",
      "Repairs & Upgrades",
      "Maintenance (AMC)",
    ],
    ctaText: "EXPLORE COMPUTER SERVICES",
    ctaLink: "/services/computers-it",
    img: {
      src: "/images/cards/computers-it-v2.webp",
      alt: "A person working at a computer in a dimly lit room",
      width: 800,
      height: 480,
    },
  },
  {
    id: "03",
    title: "Cameras & Security",
    description:
      "CCTV for shops, offices and warehouses. We survey your premises, plan camera positions for real coverage, supply and install, and show you how to retrieve footage. Available on an annual maintenance contract.",
    tags: [
      "Site Survey",
      "CCTV Supply",
      "Installation",
      "Remote Viewing",
      "Access Control",
      "Maintenance (AMC)",
    ],
    ctaText: "EXPLORE CAMERA SERVICES",
    ctaLink: "/services/camera-security",
    img: {
      src: "/images/cards/camera-security-v2.webp",
      alt: "A bullet-style CCTV camera mounted beneath the eaves of a building",
      width: 800,
      height: 480,
    },
  },
  {
    id: "04",
    title: "Ecommerce",
    description:
      "Online stores where the whole path from browsing to delivery works. Payments, checkout, inventory and order handling set up properly, so orders arrive the way you expect them to.",
    tags: [
      "Storefronts",
      "Payments",
      "Checkout",
      "Inventory",
      "Order Management",
      "Maintenance (AMC)",
    ],
    ctaText: "EXPLORE ECOMMERCE SERVICES",
    ctaLink: "/services/ecommerce-website",
    img: {
      src: "/images/cards/ecommerce-v2.webp",
      alt: "A person lying on a couch holding a cellphone",
      width: 800,
      height: 480,
    },
  },
]

export type ServiceDataProps = (typeof servicesData)[number]

export const featuresData = [
  {
    id: "01",
    title: "One team, not three vendors",
    description:
      "Websites, computers and cameras are handled by the same people. Nobody passes you between suppliers when something needs fixing.",
  },
  {
    id: "02",
    title: "Fixed price before we start",
    description:
      "You get a written quote and an agreed scope before any work begins. The price does not move unless you change what is being built.",
  },
  {
    id: "03",
    title: "We come to you",
    description:
      "Free site visits across the Mumbai Metropolitan Region. For on-site work we look at what is there before we quote, so the price holds.",
  },
  {
    id: "04",
    title: "We stay after we leave",
    description:
      "Annual maintenance contracts with committed response times, or a direct number for the person who did the work. Either way you are not starting over.",
  },
]

export type FeaturedDataProps = (typeof featuresData)[number]

export const howItWorksData = {
  tag: "How It Works",
  title: "Three steps, and you know the price before step two.",
  description:
    "The same process whether you need a website, four cameras or a floor of new workstations.",
  items: [
    {
      id: "01",
      title: "Tell us what you need",
      description:
        "A call, a WhatsApp message, or the form on this page. One service or a combination — if you only need one of them we will tell you that.",
    },
    {
      id: "02",
      title: "We assess, then quote a fixed price",
      description:
        "For computers and cameras we visit your premises, look at what is there and mark out what needs doing. For web work we scope the requirement. Either way you get a written quote before anything starts.",
    },
    {
      id: "03",
      title: "We install, test and hand over",
      description:
        "We do the work and test it with you before we leave. Ongoing maintenance is offered, not assumed — you decide whether you need it.",
    },
  ],
}

export type HowItWorksDataProps = (typeof howItWorksData)["items"][number]

export const amcData = {
  tag: "After The Install",
  title: "Maintenance, because hardware is only half the job.",
  description:
    "A system that is installed and then left alone is not a finished system. Annual maintenance contracts cover the parts that fail, the lenses that fog, the drives that fill and the passwords nobody remembers.",
  points: [
    {
      id: "01",
      title: "Committed response times",
      description:
        "Same-day remote diagnosis and priority on-site attendance for AMC clients across Mumbai. Written into the contract, not left vague.",
    },
    {
      id: "02",
      title: "Preventive checkups",
      description:
        "Scheduled visits covering camera cleaning and alignment, storage health, backups, patching and the checks that stop small faults becoming downtime.",
    },
    {
      id: "03",
      title: "One point of contact",
      description:
        "The person who did the install is the person you call. No ticket queue and no explaining your setup again.",
    },
  ],
  note: "Available on computers, networks and camera systems. Website care plans are offered separately.",
}
