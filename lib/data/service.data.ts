import { Service } from "../types/shared.type"

export type Hero = {
    tag: string
    title: string
    description: string
    imageDesktopUrl: string
    imageMobileUrl: string
}

export type Solution = {
    id: string,
    title: string
    description: string
}

export type SolutionSection = {
    tag: string
    title: string
    description: string
    items: Solution[]
}

export type Methodology = {
    id: string
    title: string
    description: string
}

export type MethodologySection = {
    tag: string
    title: string
    description: string
    items: Methodology[]
}

export type BenefitsSection = {
    tag: string
    title: string
    description: string
    items: string[]
}

export type Faq = {
    question: string
    answer: string
}

export type FaqSection = {
    tag: string
    title: string
    description: string
    items: Faq[]
}

export type ServicePageDataProps = {
    slug: Service
    title: string
    hero: Hero
    solutions: SolutionSection
    methodology: MethodologySection
    benefits: BenefitsSection
    faqs: FaqSection
}
export const servicePagesData: Record<Service, ServicePageDataProps> = {
    [Service.HTML_EMAILER]: {
        slug: Service.HTML_EMAILER,
        title: "HTML Emailers",
        hero: {
            tag: "Email Experiences",
            title: "Emails designed to look as good as your brand.",
            description:
                "Responsive HTML emails built to communicate promotions, announcements and campaigns with a polished experience across modern email clients.",
            imageDesktopUrl: "/images/services/html-emailer-desktop.png",
            imageMobileUrl: "/images/services/html-emailer-mobile.png",
        },
        solutions: {
            tag: "What We Build",
            title: "Email experiences built for your brand.",
            description:
                "From campaign templates to promotional emails, we create responsive email experiences that keep your communication consistent, clear and professional.",
            items: [
                {
                    id: "01",
                    title: "Responsive Email Design",
                    description:
                        "Emails designed to adapt across desktop, tablet and mobile screens without compromising the visual experience.",
                },
                {
                    id: "02",
                    title: "Campaign Templates",
                    description:
                        "Reusable email templates that make it easier to launch future campaigns while maintaining visual consistency.",
                },
                {
                    id: "03",
                    title: "Brand-Focused Layouts",
                    description:
                        "Typography, spacing, imagery and messaging carefully arranged around your existing brand identity.",
                },
                {
                    id: "04",
                    title: "Email-Ready Development",
                    description:
                        "Carefully coded HTML prepared for reliable rendering across modern email clients and devices.",
                },
            ],
        },
        methodology: {
            tag: "Our Process",
            title: "A clear process from idea to inbox.",
            description:
                "We combine visual design with practical email development to create campaigns that look polished and work reliably.",
            items: [
                {
                    id: "01",
                    title: "Understand",
                    description:
                        "We understand the campaign objective, audience, message, content and brand requirements.",
                },
                {
                    id: "02",
                    title: "Design",
                    description:
                        "We create a visual direction that balances your brand with the technical limitations of email.",
                },
                {
                    id: "03",
                    title: "Build",
                    description:
                        "The approved design is translated into responsive, email-ready HTML.",
                },
                {
                    id: "04",
                    title: "Test & Deliver",
                    description:
                        "We review responsiveness, links, content and rendering before delivering the final email.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "Everything you need for better email communication.",
            description:
                "A polished and reusable email experience designed around your brand, campaign goals and audience.",
            items: [
                "Responsive email layout",
                "Brand-aligned visual design",
                "Reusable email components",
                "Campaign-ready HTML",
                "Clear call-to-action sections",
                "Mobile-friendly experience",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Questions about HTML emailers?",
            description:
                "A few common questions about our HTML email development service.",
            items: [
                {
                    question: "Can you create emails based on our existing brand?",
                    answer:
                        "Yes. We can work from your existing brand guidelines, website, campaign designs or other visual references to create a consistent email experience.",
                },
                {
                    question: "Can you create reusable email templates?",
                    answer:
                        "Yes. We can create modular templates that can be reused and adapted for future campaigns.",
                },
                {
                    question: "Can you convert an existing design into HTML?",
                    answer:
                        "Yes. If you already have a design in Figma or another design tool, we can translate it into responsive HTML email code.",
                },
            ],
        },
    },

    [Service.LANDING_PAGE]: {
        slug: Service.LANDING_PAGE,
        title: "Landing Pages",
        hero: {
            tag: "Focused Experiences",
            title: "Landing pages built around one clear objective.",
            description:
                "Purpose-built landing pages that present your offer clearly, build trust quickly and guide visitors toward taking action.",
            imageDesktopUrl: "/images/services/landing-page-desktop.png",
            imageMobileUrl: "/images/services/landing-page-mobile.png",
        },
        solutions: {
            tag: "What We Build",
            title: "Focused pages designed to move visitors forward.",
            description:
                "Every landing page is structured around its audience, offer and conversion goal rather than simply filling a page with content.",
            items: [
                {
                    id: "01",
                    title: "Campaign Landing Pages",
                    description:
                        "Dedicated pages for advertising, promotions, launches and targeted marketing campaigns.",
                },
                {
                    id: "02",
                    title: "Lead Generation Pages",
                    description:
                        "Focused experiences designed to communicate value and make enquiries or sign-ups easier.",
                },
                {
                    id: "03",
                    title: "Service & Product Pages",
                    description:
                        "Clear presentations for individual services, products or business offerings.",
                },
                {
                    id: "04",
                    title: "Conversion-Focused Design",
                    description:
                        "Layouts that reduce distractions, establish trust and make the next action obvious.",
                },
            ],
        },
        methodology: {
            tag: "Our Process",
            title: "From business objective to focused experience.",
            description:
                "We keep the process deliberate so the final page has a clear purpose, strong hierarchy and a consistent visual language.",
            items: [
                {
                    id: "01",
                    title: "Define the Goal",
                    description:
                        "We identify the audience, offer, campaign objective and primary action the page needs to support.",
                },
                {
                    id: "02",
                    title: "Structure the Experience",
                    description:
                        "We organise the content into a logical flow that answers questions and builds confidence.",
                },
                {
                    id: "03",
                    title: "Design & Develop",
                    description:
                        "We create the visual experience and turn it into a responsive, production-ready page.",
                },
                {
                    id: "04",
                    title: "Refine",
                    description:
                        "We review the page across devices and refine spacing, hierarchy, interactions and calls to action.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "A landing page built around your objective.",
            description:
                "Everything is designed to give your campaign, offer or service a focused destination.",
            items: [
                "Purpose-driven page structure",
                "Responsive design",
                "Clear content hierarchy",
                "Strong call-to-action placement",
                "Fast, modern frontend implementation",
                "Analytics-ready structure",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Questions about landing pages?",
            description:
                "A few common questions about our landing page development service.",
            items: [
                {
                    question: "Can you build a landing page for an advertising campaign?",
                    answer:
                        "Yes. We can create dedicated landing pages for paid campaigns, promotions, product launches and other targeted marketing activities.",
                },
                {
                    question: "Can you work with our existing brand?",
                    answer:
                        "Yes. We can use your existing brand guidelines, website and marketing materials as the foundation for the landing page.",
                },
                {
                    question: "Can you connect the page to a form or CRM?",
                    answer:
                        "Yes. Depending on your requirements, we can integrate forms, APIs, CRM systems and other business tools.",
                },
            ],
        },
    },

    [Service.SEO_MARKETING]: {
        slug: Service.SEO_MARKETING,
        title: "SEO & Marketing",
        hero: {
            tag: "Digital Visibility",
            title: "Make your digital presence easier to discover.",
            description:
                "Practical SEO and digital marketing support designed to improve visibility, strengthen your online presence and connect your business with relevant audiences.",
            imageDesktopUrl: "/images/services/seo-markeing-desktop.png",
            imageMobileUrl: "/images/services/seo-marketing-mobile.png",
        },
        solutions: {
            tag: "What We Do",
            title: "A stronger foundation for digital visibility.",
            description:
                "We focus on the technical, content and marketing fundamentals that help your business build a more useful and discoverable online presence.",
            items: [
                {
                    id: "01",
                    title: "Technical SEO",
                    description:
                        "Site structure, crawlability, metadata, performance and other technical foundations that support search visibility.",
                },
                {
                    id: "02",
                    title: "On-Page SEO",
                    description:
                        "Clear page structures and useful content aligned with the services and topics your customers are searching for.",
                },
                {
                    id: "03",
                    title: "Local Visibility",
                    description:
                        "Digital foundations that help location-focused businesses present their services clearly to nearby customers.",
                },
                {
                    id: "04",
                    title: "Digital Marketing",
                    description:
                        "Supporting campaigns and digital activities designed around your business objectives and target audience.",
                },
            ],
        },
        methodology: {
            tag: "Our Process",
            title: "Build the foundation. Improve it continuously.",
            description:
                "Good SEO is not about repeating keywords. We look at the complete digital experience and improve the areas that matter to your business.",
            items: [
                {
                    id: "01",
                    title: "Audit",
                    description:
                        "We review your website, content, technical setup and existing digital presence to identify opportunities.",
                },
                {
                    id: "02",
                    title: "Plan",
                    description:
                        "We prioritise improvements around your services, audience, competition and business objectives.",
                },
                {
                    id: "03",
                    title: "Optimize",
                    description:
                        "We improve technical foundations, page structure, content and other relevant areas.",
                },
                {
                    id: "04",
                    title: "Measure",
                    description:
                        "We monitor meaningful performance indicators and use the findings to guide future improvements.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "A digital presence built for long-term visibility.",
            description:
                "A practical combination of technical improvements, useful content and marketing direction.",
            items: [
                "Technical SEO improvements",
                "Search-friendly page structure",
                "Metadata and content optimisation",
                "Local SEO foundations",
                "Performance recommendations",
                "Ongoing improvement opportunities",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Questions about SEO & marketing?",
            description:
                "A few common questions about our SEO and digital marketing service.",
            items: [
                {
                    question: "Can you guarantee first-page rankings?",
                    answer:
                        "No. Search rankings depend on many factors outside any agency's control. We focus on improving the technical quality, relevance and overall visibility of your website.",
                },
                {
                    question: "Do you work on existing websites?",
                    answer:
                        "Yes. We can audit and improve an existing website rather than requiring a complete rebuild.",
                },
                {
                    question: "Is SEO only about keywords?",
                    answer:
                        "No. Effective SEO also involves site structure, technical performance, content quality, search intent, internal linking and how clearly your website communicates what your business offers.",
                },
            ],
        },
    },

    [Service.CO_BRAND_IMAGES]: {
        slug: Service.CO_BRAND_IMAGES,
        title: "Co-Brand Images",
        hero: {
            tag: "Brand Collaboration",
            title: "Creative assets that bring brands together.",
            description:
                "Professionally designed co-branding creatives for partnerships, campaigns and collaborations that need both brands to feel represented.",
            imageDesktopUrl: "/images/services/co-brand-image-desktop.png",
            imageMobileUrl: "/images/services/co-brand-mobile.png",
        },
        solutions: {
            tag: "What We Create",
            title: "Campaign visuals made for collaboration.",
            description:
                "We create flexible visual assets that balance multiple brand identities without losing clarity or consistency.",
            items: [
                {
                    id: "01",
                    title: "Partner Campaigns",
                    description:
                        "Promotional creatives that bring two or more brands together in a clear visual hierarchy.",
                },
                {
                    id: "02",
                    title: "Promotional Creatives",
                    description:
                        "Social and digital campaign assets designed around a specific offer, announcement or collaboration.",
                },
                {
                    id: "03",
                    title: "Brand Integration",
                    description:
                        "Logos, colours, typography and visual elements combined carefully to respect each brand.",
                },
                {
                    id: "04",
                    title: "Multi-Platform Assets",
                    description:
                        "Adaptable creative formats prepared for the channels where your campaign needs to appear.",
                },
            ],
        },
        methodology: {
            tag: "Our Process",
            title: "Balance both brands without losing the message.",
            description:
                "We establish a clear visual hierarchy first, then build the creative around the campaign and partnership.",
            items: [
                {
                    id: "01",
                    title: "Collect",
                    description:
                        "We gather brand guidelines, logos, campaign information, imagery and required formats.",
                },
                {
                    id: "02",
                    title: "Concept",
                    description:
                        "We define the visual direction and decide how the participating brands should work together.",
                },
                {
                    id: "03",
                    title: "Design",
                    description:
                        "We create the final creative while maintaining consistency, hierarchy and readability.",
                },
                {
                    id: "04",
                    title: "Adapt",
                    description:
                        "We prepare the approved design for the required platforms, dimensions and campaign placements.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "Co-branded creatives that feel intentional.",
            description:
                "Campaign-ready visual assets designed to make partnerships look cohesive and professional.",
            items: [
                "Brand-aligned creative direction",
                "Balanced logo placement",
                "Campaign-ready designs",
                "Social media formats",
                "Multiple creative variations",
                "High-resolution final assets",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Questions about co-branding creatives?",
            description:
                "A few common questions about our co-brand image service.",
            items: [
                {
                    question: "Can you work with two different brand guidelines?",
                    answer:
                        "Yes. We can work with the guidelines of each participating brand and create a visual system that keeps the collaboration balanced.",
                },
                {
                    question: "Can you create different sizes for social media?",
                    answer:
                        "Yes. We can adapt the approved creative into the dimensions required for different platforms and campaign placements.",
                },
                {
                    question: "Can you work with an existing campaign design?",
                    answer:
                        "Yes. Existing campaign assets can be used as the starting point for new co-branded variations.",
                },
            ],
        },
    },

    [Service.AI_AGENTS]: {
        slug: Service.AI_AGENTS,
        title: "AI Agents",
        hero: {
            tag: "Intelligent Automation",
            title: "AI agents built around the way your business works.",
            description:
                "Practical AI agents and automation systems that help businesses handle repetitive tasks, assist customers and streamline everyday workflows.",
            imageDesktopUrl: "/images/services/ai-agent-desktop.png",
            imageMobileUrl: "/images/services/ai-agent-mobile.png",
        },
        solutions: {
            tag: "What We Build",
            title: "AI that fits into your existing workflow.",
            description:
                "We focus on useful AI applications rather than adding AI for the sake of it, connecting intelligent systems to real business processes.",
            items: [
                {
                    id: "01",
                    title: "Customer Support Agents",
                    description:
                        "AI-powered assistants that can answer common questions and guide customers through defined workflows.",
                },
                {
                    id: "02",
                    title: "Lead Qualification",
                    description:
                        "Agents that collect information, understand enquiries and help teams prioritise potential opportunities.",
                },
                {
                    id: "03",
                    title: "Business Automation",
                    description:
                        "AI-assisted workflows that reduce repetitive manual work across common business processes.",
                },
                {
                    id: "04",
                    title: "AI Integrations",
                    description:
                        "AI capabilities connected to your existing applications, APIs, databases and internal systems.",
                },
            ],
        },
        methodology: {
            tag: "Our Process",
            title: "Start with the workflow, not the AI.",
            description:
                "We first understand the business problem, then determine where AI can provide a practical and measurable improvement.",
            items: [
                {
                    id: "01",
                    title: "Identify",
                    description:
                        "We identify repetitive tasks, bottlenecks and workflows where intelligent automation could add value.",
                },
                {
                    id: "02",
                    title: "Design",
                    description:
                        "We define the agent's responsibilities, inputs, outputs, tools and boundaries.",
                },
                {
                    id: "03",
                    title: "Build",
                    description:
                        "We connect the AI model with the required interfaces, APIs, data sources and business logic.",
                },
                {
                    id: "04",
                    title: "Test & Improve",
                    description:
                        "We evaluate responses, edge cases and workflow behaviour before refining the system for real-world use.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "AI systems designed for useful work.",
            description:
                "A practical AI implementation focused on improving workflows rather than adding unnecessary complexity.",
            items: [
                "Business-specific AI workflows",
                "AI-powered assistants",
                "API and system integrations",
                "Automated repetitive tasks",
                "Defined agent behaviour",
                "Scalable architecture",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Questions about AI agents?",
            description:
                "A few common questions about our AI agent development service.",
            items: [
                {
                    question: "Can you integrate an AI agent with our existing software?",
                    answer:
                        "Yes. Where APIs or other suitable integration points are available, we can connect AI workflows with existing business systems.",
                },
                {
                    question: "Can an AI agent perform actions, not just answer questions?",
                    answer:
                        "Yes. Depending on the workflow and integrations, an agent can be designed to retrieve information, trigger approved actions and move tasks through defined processes.",
                },
                {
                    question: "Can you build an AI agent around our internal knowledge?",
                    answer:
                        "Yes. We can design systems that work with approved business information and knowledge sources, depending on the requirements and data architecture.",
                },
            ],
        },
    },

    [Service.MOBILE_APPS]: {
        slug: Service.MOBILE_APPS,
        title: "Mobile Apps",
        hero: {
            tag: "Mobile Experiences",
            title: "Mobile apps designed around your customers and business.",
            description:
                "Modern mobile applications that combine thoughtful user experiences with reliable technology, integrations and business functionality.",
            imageDesktopUrl: "/images/services/mobile-apps-desktop.png",
            imageMobileUrl: "/images/services/mobile-apps-mobile.png",
        },
        solutions: {
            tag: "What We Build",
            title: "Mobile products built for real-world use.",
            description:
                "From customer-facing applications to internal business tools, we create mobile experiences around the people who will actually use them.",
            items: [
                {
                    id: "01",
                    title: "Customer Apps",
                    description:
                        "Mobile experiences that help customers browse, interact, book, purchase or manage their relationship with your business.",
                },
                {
                    id: "02",
                    title: "Business Apps",
                    description:
                        "Purpose-built applications that help teams manage operations, information and everyday workflows.",
                },
                {
                    id: "03",
                    title: "Cross-Platform Apps",
                    description:
                        "Efficient mobile development approaches for delivering consistent experiences across supported platforms.",
                },
                {
                    id: "04",
                    title: "API Integrations",
                    description:
                        "Mobile applications connected to your existing backend systems, APIs and business services.",
                },
            ],
        },
        methodology: {
            tag: "Our Process",
            title: "From product idea to a usable mobile experience.",
            description:
                "We combine product thinking, interface design and engineering to create an app that is useful beyond the initial launch.",
            items: [
                {
                    id: "01",
                    title: "Discover",
                    description:
                        "We understand the users, business requirements, workflows and technical constraints.",
                },
                {
                    id: "02",
                    title: "Design",
                    description:
                        "We create the user flows and interface system that shape the mobile experience.",
                },
                {
                    id: "03",
                    title: "Develop",
                    description:
                        "We build the application and integrate the required APIs, services and business logic.",
                },
                {
                    id: "04",
                    title: "Test & Launch",
                    description:
                        "We test the application across relevant devices and prepare it for release and continued improvement.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "A mobile product built for your users.",
            description:
                "A complete mobile experience supported by thoughtful product design and reliable engineering.",
            items: [
                "User-focused mobile interface",
                "Responsive application architecture",
                "API and backend integration",
                "Authentication and user flows",
                "Cross-platform development options",
                "Launch-ready application",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Questions about mobile app development?",
            description:
                "A few common questions about our mobile application service.",
            items: [
                {
                    question: "Can you build both iOS and Android apps?",
                    answer:
                        "Yes. Depending on the project requirements, we can use a cross-platform approach or choose a platform-specific implementation.",
                },
                {
                    question: "Can you connect the app to our existing backend?",
                    answer:
                        "Yes. We can integrate mobile applications with existing APIs, authentication systems and backend services.",
                },
                {
                    question: "Can you help after the app is launched?",
                    answer:
                        "Yes. Ongoing improvements, maintenance, feature development and technical support can be planned as part of the engagement.",
                },
            ],
        },
    },

    [Service.WEB_DEVELOPMENT]: {
        slug: Service.WEB_DEVELOPMENT,
        title: "Website Development",
        hero: {
            tag: "Digital Presence",
            title: "Websites that make your business look as good as it operates.",
            description:
                "Modern business websites designed to communicate your value clearly, build trust and create a strong digital presence across every screen.",
            imageDesktopUrl: "/images/services/web-development-desktop-2.png",
            imageMobileUrl: "/images/services/web-development-mobile-2.png",
        },
        solutions: {
            tag: "What We Build",
            title: "Web experiences designed around your business.",
            description:
                "We build websites that combine premium visual design, clear messaging and solid frontend engineering.",
            items: [
                {
                    id: "01",
                    title: "Business Websites",
                    description:
                        "Professional websites that clearly communicate your services, expertise and business proposition.",
                },
                {
                    id: "02",
                    title: "Premium Brand Websites",
                    description:
                        "High-quality digital experiences designed for businesses where presentation and trust matter.",
                },
                {
                    id: "03",
                    title: "Service Websites",
                    description:
                        "Structured websites that give individual services the space and clarity they need.",
                },
                {
                    id: "04",
                    title: "Custom Web Experiences",
                    description:
                        "Tailored interfaces and functionality for businesses with requirements beyond a standard website.",
                },
            ],
        },
        methodology: {
            tag: "Our Process",
            title: "A website built with purpose from the first screen.",
            description:
                "We bring strategy, design and engineering together so your website feels considered rather than assembled from a template.",
            items: [
                {
                    id: "01",
                    title: "Understand",
                    description:
                        "We understand your business, audience, positioning, services and the role your website needs to play.",
                },
                {
                    id: "02",
                    title: "Structure",
                    description:
                        "We define the information architecture, content hierarchy and user journeys before development begins.",
                },
                {
                    id: "03",
                    title: "Design & Build",
                    description:
                        "We create the visual system and develop the responsive website with modern frontend technology.",
                },
                {
                    id: "04",
                    title: "Launch",
                    description:
                        "We test the experience across devices, refine the final details and prepare the website for production.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "A website built to represent your business properly.",
            description:
                "A complete digital presence designed around your brand, audience and business goals.",
            items: [
                "Premium responsive design",
                "Clear information architecture",
                "Mobile-first experience",
                "SEO-friendly page structure",
                "Modern frontend development",
                "Production-ready deployment",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Questions about website development?",
            description:
                "A few common questions about our website development service.",
            items: [
                {
                    question: "Can you build a completely custom website?",
                    answer:
                        "Yes. We can design and develop a website from the ground up around your brand, content, functionality and business requirements.",
                },
                {
                    question: "Can you redesign our existing website?",
                    answer:
                        "Yes. We can review the existing website, identify opportunities and create a new experience without unnecessarily rebuilding everything behind it.",
                },
                {
                    question: "Do you build websites with Next.js?",
                    answer:
                        "Yes. Next.js is one of the technologies we use for modern, performant websites where its capabilities are a good fit for the project.",
                },
            ],
        },
    },

    [Service.SOFTWARE_DEVELOPMENT]: {
        slug: Service.SOFTWARE_DEVELOPMENT,
        title: "Software Development",
        hero: {
            tag: "Business Software",
            title: "Software built around the way your business actually works.",
            description:
                "Custom software and SaaS platforms designed to solve specific business problems, connect workflows and provide a foundation for future growth.",
            imageDesktopUrl: "/images/services/software-development-desktop.png",
            imageMobileUrl: "/images/services/software-development-mobile.png",
        },
        solutions: {
            tag: "What We Build",
            title: "Software for complex business requirements.",
            description:
                "We design and develop custom digital products for businesses that have outgrown disconnected tools or need functionality that off-the-shelf software cannot provide.",
            items: [
                {
                    id: "01",
                    title: "Business Platforms",
                    description:
                        "Centralised applications that bring important business workflows, information and operations together.",
                },
                {
                    id: "02",
                    title: "SaaS Products",
                    description:
                        "Scalable software products designed around a clear product model, user experience and technical foundation.",
                },
                {
                    id: "03",
                    title: "Internal Tools",
                    description:
                        "Custom tools that simplify operational processes and help teams work more efficiently.",
                },
                {
                    id: "04",
                    title: "System Integrations",
                    description:
                        "APIs and integrations that connect your software with existing platforms, services and data sources.",
                },
            ],
        },
        methodology: {
            tag: "Our Process",
            title: "Good software starts with understanding the problem.",
            description:
                "We approach custom software as a product and engineering problem—not simply a collection of screens and features.",
            items: [
                {
                    id: "01",
                    title: "Discover",
                    description:
                        "We understand your workflows, users, business rules, technical constraints and desired outcomes.",
                },
                {
                    id: "02",
                    title: "Architect",
                    description:
                        "We define the application structure, data model, integrations and technical approach.",
                },
                {
                    id: "03",
                    title: "Develop",
                    description:
                        "We build the product iteratively, validating important workflows as the system takes shape.",
                },
                {
                    id: "04",
                    title: "Deploy & Scale",
                    description:
                        "We prepare the software for production and establish a foundation that can evolve with your business.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "Software designed around your business.",
            description:
                "A custom technical foundation that gives your team the functionality and flexibility standard software may not provide.",
            items: [
                "Custom business workflows",
                "Scalable application architecture",
                "API and third-party integrations",
                "Role-based user experiences",
                "Modern responsive interfaces",
                "Production-ready deployment",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Questions about software development?",
            description:
                "A few common questions about our custom software development service.",
            items: [
                {
                    question: "When should a business consider custom software?",
                    answer:
                        "Custom software can make sense when existing tools cannot support important workflows, require too many workarounds or prevent the business from operating the way it needs to.",
                },
                {
                    question: "Can you build an internal business application?",
                    answer:
                        "Yes. We can build internal platforms and tools for workflows such as operations, administration, reporting, customer management and other business processes.",
                },
                {
                    question: "Can you integrate existing systems?",
                    answer:
                        "Yes. We can design integrations with suitable APIs and services so your new application can work alongside systems you already use.",
                },
            ],
        },
    },

    [Service.ECOMMERCE_WEBSITE]: {
        slug: Service.ECOMMERCE_WEBSITE,
        title: "Ecommerce Website",
        hero: {
            tag: "Digital Commerce",
            title: "Online stores designed to make buying feel effortless.",
            description:
                "Thoughtful ecommerce experiences that combine strong product presentation, intuitive navigation and reliable technology to help your business sell online.",
            imageDesktopUrl: "/images/services/e-commerce-desktop.png",
            imageMobileUrl: "/images/services/e-commerce-mobile.png",
        },
        solutions: {
            tag: "What We Build",
            title: "Commerce experiences built around your products.",
            description:
                "From product discovery to checkout, we create ecommerce experiences that make it easier for customers to understand, trust and purchase your products.",
            items: [
                {
                    id: "01",
                    title: "Storefront Design",
                    description:
                        "A polished storefront that communicates your brand while keeping products easy to discover.",
                },
                {
                    id: "02",
                    title: "Product Experience",
                    description:
                        "Clear product pages with useful information, imagery, options and calls to action.",
                },
                {
                    id: "03",
                    title: "Checkout & Payments",
                    description:
                        "Streamlined purchasing experiences connected to the payment and commerce systems your business requires.",
                },
                {
                    id: "04",
                    title: "Commerce Integrations",
                    description:
                        "Connections with relevant APIs, inventory systems, payment providers and other business services.",
                },
            ],
        },
        methodology: {
            tag: "Our Process",
            title: "Design the store around how customers buy.",
            description:
                "We focus on the complete customer journey—from discovering a product to completing an order.",
            items: [
                {
                    id: "01",
                    title: "Plan",
                    description:
                        "We understand your catalogue, customers, business model, products and commerce requirements.",
                },
                {
                    id: "02",
                    title: "Design",
                    description:
                        "We create the storefront and product experience with a focus on clarity, trust and ease of navigation.",
                },
                {
                    id: "03",
                    title: "Build",
                    description:
                        "We develop the ecommerce experience and connect the required commerce, payment and business systems.",
                },
                {
                    id: "04",
                    title: "Test & Launch",
                    description:
                        "We test the purchasing journey, responsive behaviour and key integrations before launch.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "Everything needed for a modern online store.",
            description:
                "A commerce experience that brings your brand, products and purchasing journey together.",
            items: [
                "Premium storefront design",
                "Responsive product experience",
                "Product and category structure",
                "Payment integration",
                "Commerce system integrations",
                "Launch-ready ecommerce experience",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Questions about ecommerce websites?",
            description:
                "A few common questions about our ecommerce development service.",
            items: [
                {
                    question: "Can you build a custom ecommerce website?",
                    answer:
                        "Yes. We can create a custom ecommerce experience around your products, brand, customer journey and required integrations.",
                },
                {
                    question: "Can you integrate payment gateways?",
                    answer:
                        "Yes. We can integrate suitable payment providers based on your market, platform and business requirements.",
                },
                {
                    question: "Can you connect an ecommerce store to other systems?",
                    answer:
                        "Yes. Depending on the available integrations, we can connect ecommerce experiences with inventory, CRM, fulfilment, analytics and other business systems.",
                },
            ],
        },
    },
}