export const workData = {
  approach: {
    tag: "How We Work",
    title: "We start with what the business actually needs.",
    description:
      "Whether we're building a website or setting up technology on-site, we focus on understanding the requirement first and choosing a practical solution around it.",
    items: [
      {
        id: "01",
        title: "Understand",
        description:
          "We learn about your business, requirements, environment and the problem you need to solve.",
      },
      {
        id: "02",
        title: "Plan",
        description:
          "We define the right approach, scope and technology before work begins.",
      },
      {
        id: "03",
        title: "Build & Install",
        description:
          "We develop, configure or install the required solution with attention to the details that matter.",
      },
      {
        id: "04",
        title: "Test & Handover",
        description:
          "We verify the final setup and make sure the solution is ready for everyday use.",
      },
    ],
  },
}

export const projectsData = [
  {
    id: "01",
    status: "Concept",
    category: "Software Development",
    title: "Custom Business Software",
    description:
      "A custom software concept designed to bring business workflows, information and day-to-day operations into one focused digital platform.",
    imageUrl: "/images/services/web-development-mobile-4.png",
    services: ["Web Sites", "Web Apps", "Mobile Apps"],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    id: "02",
    status: "Service Work",
    category: "Camera Security",
    title: "Business CCTV Installation",
    description:
      "A professionally planned CCTV setup designed around the layout of a business premises, with practical camera placement, recording and network configuration.",
    imageUrl: "/images/camera-graphic.png",
    services: ["CCTV Installation", "Camera Configuration", "Security Setup"],
    technologies: ["IP Cameras", "NVR", "Network Configuration"],
    link: "#",
  },

  {
    id: "03",
    status: "Service Work",
    category: "Computer Solutions",
    title: "Business Computer Setup",
    description:
      "Computer and workstation setup for businesses that need reliable systems configured for everyday operations, software, networking and team workflows.",
    imageUrl: "/images/services/web-development-mobile-4.png",
    services: [
      "Computer Setup",
      "System Configuration",
      "Software Installation",
    ],
    technologies: ["Windows", "Business Software", "Network Setup"],
    link: "#",
  },
]

export type ProjectDataProps = (typeof projectsData)[number]
