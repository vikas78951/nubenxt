

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



export const featuresData = [
  {
    id: "1",
    title: "Built for Your Needs",
    description: "We take the time to understand what you need before recommending or building anything."
  },
  {
    id: "2",
    title: "Quality First",
    description: "We use reliable technology and proven methods to deliver work that lasts."
  },
  {
    id: "3",
    title: "From Setup to Support",
    description: "We handle the full process from initial setup through to ongoing maintenance and support."
  },
  {
    id: "4",
    title: "One Technology Partner",
    description: "Web, computers and cameras — one point of contact for all your technology needs."
  }
];


export type FeaturedDataProps = (typeof featuresData)[number]


export const technologiesData = [
  // Originally Extracted & Custom Requested Items
  { id: "1", name: "React", badge: "[PRO SYSTEM]" },
  { id: "2", name: "Next.js", badge: "[PRO SYSTEM]" },
  { id: "3", name: "TypeScript", badge: "[PRO SYSTEM]" },
  { id: "4", name: "Node.js", badge: "[PRO SYSTEM]" },
  { id: "5", name: "Fastify", badge: "[PRO SYSTEM]" },
  { id: "6", name: "PostgreSQL", badge: "[PRO SYSTEM]" },
  { id: "7", name: "Docker", badge: "[PRO SYSTEM]" },
  { id: "8", name: "AWS", badge: "[PRO SYSTEM]" },
  { id: "9", name: "Nginx", badge: "[PRO SYSTEM]" },
  { id: "10", name: "MongoDB", badge: "[PRO SYSTEM]" },
  { id: "11", name: "Express.js", badge: "[PRO SYSTEM]" },
  { id: "12", name: "Kubernetes (K8s)", badge: "[PRO SYSTEM]" },
  { id: "13", name: "React Native", badge: "[PRO SYSTEM]" },
  { id: "14", name: "Python", badge: "[PRO SYSTEM]" },
  { id: "15", name: "n8n", badge: "[PRO SYSTEM]" },
  { id: "16", name: "AI / Machine Learning", badge: "[PRO SYSTEM]" },

  // Added from the new image
  { id: "17", name: "HTML", badge: "[PRO SYSTEM]" },
  { id: "18", name: "CSS", badge: "[PRO SYSTEM]" },
  { id: "19", name: "JavaScript", badge: "[PRO SYSTEM]" },
  { id: "20", name: "Vue.js", badge: "[PRO SYSTEM]" },
  { id: "21", name: "Angular", badge: "[PRO SYSTEM]" },
  { id: "22", name: "PHP", badge: "[PRO SYSTEM]" },
  { id: "23", name: "Laravel", badge: "[PRO SYSTEM]" },
  { id: "24", name: "Tailwind CSS", badge: "[PRO SYSTEM]" },
  { id: "25", name: "Canva", badge: "[PRO SYSTEM]" },
  { id: "26", name: "Figma", badge: "[PRO SYSTEM]" },
  { id: "27", name: "Flutter", badge: "[PRO SYSTEM]" },
  { id: "28", name: "Swift", badge: "[PRO SYSTEM]" },
  { id: "29", name: "Kotlin", badge: "[PRO SYSTEM]" },
  { id: "30", name: "OpenAI", badge: "[PRO SYSTEM]" },
  { id: "31", name: "Firebase", badge: "[PRO SYSTEM]" },
  { id: "32", name: "MySQL", badge: "[PRO SYSTEM]" },
  { id: "33", name: "GraphQL", badge: "[PRO SYSTEM]" },
  { id: "34", name: "Redis", badge: "[PRO SYSTEM]" },
  { id: "35", name: "Git", badge: "[PRO SYSTEM]" }
];

export type TechonologyDataProps = (typeof technologiesData)[number]

export const insightsData = [
  {
    id: "1",
    category: "WEBSITE",
    title: "Website Checklist for a Premium Business",
    description: "A practical checklist to make sure your business website looks professional, builds trust, and turns visitors into enquiries.",
    readMoreLink: "#"
  },
  {
    id: "2",
    category: "BUYING GUIDE",
    title: "How to Choose CCTV for Your Business",
    description: "A practical guide to choosing the right security system for your business.",
    readMoreLink: "#"
  },
  {
    id: "3",
    category: "PROJECT INSIGHT",
    title: "How We Approach Building Business Websites",
    description: "A look at our process, from understanding your business to delivering the final product.",
    readMoreLink: "#"
  }
];

export type InsightsDataProps = (typeof insightsData)[number]