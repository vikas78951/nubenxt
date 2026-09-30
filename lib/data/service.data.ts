import { Service } from "../types/shared.type"
import type { ImageAsset } from "../types/shared.type"

export type Hero = {
    tag: string
    title: string
    description: string
    imageDesktop: ImageAsset
    imageMobile: ImageAsset
    /**
     * Optional single landscape photo. When set the service hero renders this
     * image instead of the paired desktop/mobile device mockups. Used by the
     * on-site service lines (Computers & IT, Cameras & Security) where a real
     * photograph is more honest than a UI mockup.
     */
    photoUrl?: ImageAsset
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
    id: string,
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

/**
 * Indicative commercial terms.
 *
 * Craftorus quotes per requirement — there is no fixed price list. What these
 * figures are for is stopping a visitor bouncing because they assume the work
 * is unaffordable, and setting expectations before the first call.
 *
 * `from` is deliberately optional: only the services with a real floor price
 * publish one. Anything without it renders "Quoted by requirement" rather than
 * a made-up number, because publishing a wrong price is worse than publishing
 * none.
 */
export type Pricing = {
    tag: string
    title: string
    description: string
    /** Indicative starting price, if there is a genuine floor for the work. */
    from?: string
    /** What that starting price covers, e.g. "per workstation". */
    fromUnit?: string
    /** Typical elapsed time from kickoff to handover. */
    timeline: string
    /** Recurring maintenance option, if offered. No figures here — quoted. */
    amc?: string
    included: string[]
    excluded: string[]
}

export type ServicePageDataProps = {
    slug: Service
    title: string
    hero: Hero
    /**
     * Optional credibility note. Deliberately only used on the web services —
     * a stack list is relevant when a buyer is choosing a website and actively
     * unhelpful on a CCTV or computer page.
     */
    stack?: string[]
    solutions: SolutionSection
    methodology: MethodologySection
    benefits: BenefitsSection
    pricing: Pricing
    faqs: FaqSection
}

export const servicePagesData: Record<Service, ServicePageDataProps> = {
    [Service.WEB_DEVELOPMENT]: {
        slug: Service.WEB_DEVELOPMENT,
        title: "Web & Mobile Apps",
        hero: {
            tag: "Websites & Online Presence",
            title: "A website that works as hard as you do.",
            description:
                "Business websites, landing pages, search visibility and email campaigns — designed, built and looked after by one team, not passed between three vendors.",
            imageDesktop: {
                src: "/images/services/web-development-desktop-2.png",
                alt: "A Craftorus website design shown inside a desktop browser window",
                width: 1400,
                height: 550,
            },
            imageMobile: {
                src: "/images/services/web-development-mobile-5.png",
                alt: "The same Craftorus website shown in a mobile browser",
                width: 390,
                height: 550,
            },
        },
        stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Vercel",
        ],
        solutions: {
            tag: "What We Build",
            title: "One team for everything your website needs.",
            description:
                "Most businesses end up hiring separately for the site, for search and for email. We do all three, so nothing falls between vendors.",
            items: [
                {
                    id: "01",
                    title: "Business Websites",
                    description:
                        "A website that explains what you do clearly enough that a visitor understands it in the first few seconds.",
                },
                {
                    id: "02",
                    title: "Landing & Campaign Pages",
                    description:
                        "Single-purpose pages built around one offer or campaign, wired to your enquiry form or CRM.",
                },
                {
                    id: "03",
                    title: "SEO & Local Visibility",
                    description:
                        "Technical foundations, page structure and local listings so customers searching your service can actually find you.",
                },
                {
                    id: "04",
                    title: "HTML Emailers",
                    description:
                        "Campaign and promotional emails that render properly in Outlook, Gmail and on phones — not just in a design tool.",
                },
                {
                    id: "05",
                    title: "Redesigns & Replatforms",
                    description:
                        "Modernise an existing site without the cost and disruption of starting again from nothing.",
                },
                {
                    id: "06",
                    title: "Hosting, Domains & Care",
                    description:
                        "We manage hosting, domains, SSL and backups, and keep the site patched and online after launch.",
                },
            ],
        },
        methodology: {
            tag: "How We Work",
            title: "A fixed process, agreed before we start.",
            description:
                "You know what happens at each stage and what it costs before any work begins.",
            items: [
                {
                    id: "01",
                    title: "Understand",
                    description:
                        "We learn your business, your customers and what you want the website to actually do for you.",
                },
                {
                    id: "02",
                    title: "Plan & Quote",
                    description:
                        "We agree the scope, the page structure and a fixed price. No work starts until you approve it.",
                },
                {
                    id: "03",
                    title: "Design & Build",
                    description:
                        "We design the site, build it responsive, and set up the forms, tracking and pages you need.",
                },
                {
                    id: "04",
                    title: "Launch & Maintain",
                    description:
                        "We go live, hand over training, and stay reachable for updates and improvements.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "A website you can hand to any customer.",
            description:
                "Clear, fast and maintained — the site reflects the business rather than the agency that built it.",
            items: [
                "Fixed price agreed upfront",
                "Mobile, tablet and desktop tested",
                "Contact forms wired to your inbox",
                "Search-friendly page structure",
                "Training so you can update it yourself",
                "Optional ongoing maintenance",
            ],
        },
        pricing: {
            tag: "Cost & Timing",
            title: "What a website costs.",
            description:
                "Websites start at ₹15,000, but every project is quoted against your own requirements. Tell us what the site needs to do and we will give you a fixed price for exactly that — agreed before work starts, and it does not move unless you change the scope.",
            from: "₹15,000",
            fromUnit: "starting price for a business website",
            timeline: "2–4 weeks from content handover",
            amc: "Website care and hosting plans available — quoted by page count and requirements",
            included: [
                "Custom design, no template",
                "Mobile and desktop layouts",
                "Contact and enquiry forms",
                "Basic on-page SEO setup",
                "Domain, hosting and SSL setup",
                "Launch and training",
            ],
            excluded: [
                "Paid advertising spend",
                "Product photography or copywriting",
                "Ongoing content entry",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Common questions about websites.",
            description:
                "If your question is not here, message us and we will answer it directly.",
            items: [
                {
                    question: "How much does a business website cost?",
                    answer:
                        "Websites start at ₹15,000. Online stores, custom functionality and larger sites are priced on what you actually need — tell us what the site has to do and we will quote that. You get a fixed price before work starts, and it does not change mid-project unless you change the scope.",
                },
                {
                    question: "How long will it take?",
                    answer:
                        "Most business websites take 2–4 weeks from the point you hand over your content and images. The long pole is usually getting text and photos from you, not our build — we send a content checklist up front so you know exactly what we need.",
                },
                {
                    question: "Do we own the website?",
                    answer:
                        "Yes. The domain, hosting and the code are yours. We build and hand over in your accounts, not ours, so you are never locked in.",
                },
                {
                    question: "Can you work with our existing website?",
                    answer:
                        "Yes. If the site is worth keeping we can improve it in place. If it is costing you business we will tell you so before quoting a rebuild.",
                },
                {
                    question: "Can you write the content and take photos?",
                    answer:
                        "We can. Professional photography and copywriting are quoted separately because the cost depends entirely on how much you need.",
                },
                {
                    question: "What happens after launch?",
                    answer:
                        "You get training and a handover document. After that, care plans are available if you want us to handle updates, backups and security — or you can run it yourself with our support if you prefer.",
                },
            ],
        },
    },

    [Service.ECOMMERCE_WEBSITE]: {
        slug: Service.ECOMMERCE_WEBSITE,
        title: "Ecommerce",
        hero: {
            tag: "Online Stores",
            title: "An online store your customers can actually order from.",
            description:
                "Storefronts, product pages, payments and checkout — built so the whole path from browsing to order works without friction.",
            imageDesktop: {
                src: "/images/services/e-commerce-desktop.png",
                alt: "A Craftorus online store shown inside a desktop browser window",
                width: 1400,
                height: 550,
            },
            imageMobile: {
                src: "/images/services/e-commerce-mobile.png",
                alt: "The same Craftorus online store shown in a mobile browser",
                width: 390,
                height: 550,
            },
        },
        solutions: {
            tag: "What We Build",
            title: "The parts that decide whether a sale happens.",
            description:
                "An online store fails in small ways — a slow product page, a confusing checkout, a payment option customers do not have. We fix those before launch.",
            items: [
                {
                    id: "01",
                    title: "Storefront & Catalogue",
                    description:
                        "Category structure, product pages and navigation built so people can find what they came for.",
                },
                {
                    id: "02",
                    title: "Payments & Checkout",
                    description:
                        "Payment gateways appropriate to your market, with a checkout that works on a phone.",
                },
                {
                    id: "03",
                    title: "Inventory & Order Handling",
                    description:
                        "Stock tracking, order notifications and a process for fulfilment that does not depend on someone checking email.",
                },
                {
                    id: "04",
                    title: "Shipping & Tax Setup",
                    description:
                        "Delivery rules, charges and tax handling configured for where you actually ship.",
                },
                {
                    id: "05",
                    title: "Integrations",
                    description:
                        "Connections to your accounting, inventory, CRM and marketing tools.",
                },
                {
                    id: "06",
                    title: "Post-Launch Support",
                    description:
                        "Monitoring, fixes and improvements after the store goes live.",
                },
            ],
        },
        methodology: {
            tag: "How We Work",
            title: "Catalogue first, design second.",
            description:
                "We start from what you sell and how it is stocked, because that is what determines whether the store can actually run.",
            items: [
                {
                    id: "01",
                    title: "Scope the Catalogue",
                    description:
                        "How many products, how many variants, how stock is tracked and who ships orders.",
                },
                {
                    id: "02",
                    title: "Design the Purchase Path",
                    description:
                        "We map how a customer finds a product and gets to checkout, and remove anything that gets in the way.",
                },
                {
                    id: "03",
                    title: "Build & Integrate",
                    description:
                        "We build the store and connect payments, shipping and your business systems.",
                },
                {
                    id: "04",
                    title: "Test Every Step",
                    description:
                        "We place real test orders across devices before launch, including refunds.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "A store you can take real orders on.",
            description:
                "Not a demo. A working store connected to your payments, stock and fulfilment.",
            items: [
                "Fixed price agreed upfront",
                "Payments configured for your market",
                "Mobile checkout tested",
                "Order and stock management",
                "Shipping and tax rules set up",
                "Training and handover",
            ],
        },
        pricing: {
            tag: "Cost & Timing",
            title: "What an online store costs.",
            description:
                "Online stores are quoted entirely on your requirements — the number of products, the payment providers you need, and which systems the store has to talk to. Tell us what you sell and how you ship, and we will price it for exactly that.",
            timeline: "3–6 weeks",
            amc: "Store support plans available — quoted by catalogue size",
            included: [
                "Custom storefront design",
                "Product and category pages",
                "Payment gateway setup",
                "Shipping and tax configuration",
                "Order management and emails",
                "Launch and training",
            ],
            excluded: [
                "Payment gateway transaction fees",
                "Product photography",
                "Product entry beyond the agreed count",
                "Paid advertising spend",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Common questions about online stores.",
            description:
                "Message us with your question and we will answer it directly.",
            items: [
                {
                    question: "How much does an online store cost?",
                    answer:
                        "Stores are quoted on your requirements — the number of products, the payment gateways you need, and the systems the store has to connect to. Tell us what you sell and how you ship, and we will give you a fixed price for that.",
                },
                {
                    question: "Which payment options can you set up?",
                    answer:
                        "We integrate the gateways appropriate to your market and customer base — UPI and cards for India, with international options where you sell outside the country. We advise on which to enable before building.",
                },
                {
                    question: "Who looks after orders and shipping?",
                    answer:
                        "That is your call. We can set up the store so orders, stock and customer emails are handled automatically, and we can advise on the simplest fulfilment setup that fits how you actually ship.",
                },
                {
                    question: "Can we add products ourselves later?",
                    answer:
                        "Yes. You get training on adding products, changing prices and managing stock, plus documentation to refer back to.",
                },
                {
                    question: "Do you maintain the store after launch?",
                    answer:
                        "Yes. Care plans cover monitoring, backups, security updates and improvements. You can also take it in-house at any point — the store is yours.",
                },
            ],
        },
    },

    [Service.SOFTWARE_DEVELOPMENT]: {
        slug: Service.SOFTWARE_DEVELOPMENT,
        title: "Software Development",
        hero: {
            tag: "Custom Software",
            title: "Software built around how your business actually works.",
            description:
                "Custom platforms, internal tools, mobile apps and practical AI automation — for businesses that have outgrown spreadsheets and disconnected software.",
            imageDesktop: {
                src: "/images/services/software-development-desktop.png",
                alt: "A Craftorus custom software dashboard shown in a desktop browser window",
                width: 1400,
                height: 550,
            },
            imageMobile: {
                src: "/images/services/software-development-mobile.png",
                alt: "The same Craftorus software shown in a mobile browser",
                width: 390,
                height: 550,
            },
        },
        solutions: {
            tag: "What We Build",
            title: "For problems off-the-shelf software cannot solve.",
            description:
                "We build when the requirement is genuinely specific. If a standard tool does the job for less, we will tell you that instead.",
            items: [
                {
                    id: "01",
                    title: "Business Platforms",
                    description:
                        "Applications that bring your workflows, information and operations into one place.",
                },
                {
                    id: "02",
                    title: "Internal Tools",
                    description:
                        "Purpose-built tools for operations, admin, reporting and the repetitive work that eats your team's week.",
                },
                {
                    id: "03",
                    title: "Mobile Apps",
                    description:
                        "Customer-facing and internal apps, built cross-platform where that suits the requirement.",
                },
                {
                    id: "04",
                    title: "AI Automation",
                    description:
                        "Practical AI for real bottlenecks — handling enquiries, qualifying leads, or clearing repetitive back-office work.",
                },
                {
                    id: "05",
                    title: "System Integrations",
                    description:
                        "APIs and connectors so your new system works with the software you already run.",
                },
                {
                    id: "06",
                    title: "Hosting & Support",
                    description:
                        "Deployment, monitoring and ongoing maintenance for software we have built.",
                },
            ],
        },
        methodology: {
            tag: "How We Work",
            title: "We start with the problem, not the feature list.",
            description:
                "Most custom software projects fail because nobody agreed what problem was being solved. We fix that before writing code.",
            items: [
                {
                    id: "01",
                    title: "Understand the Workflow",
                    description:
                        "We map how the work is actually done today, including the workarounds nobody mentions.",
                },
                {
                    id: "02",
                    title: "Agree Scope & Stages",
                    description:
                        "We define what is in the first release, what is later, and what each stage costs.",
                },
                {
                    id: "03",
                    title: "Build in Stages",
                    description:
                        "You see working software early and often, rather than waiting months for a first version.",
                },
                {
                    id: "04",
                    title: "Launch & Support",
                    description:
                        "We deploy it, train your team and stay on hand for the problems that appear after go-live.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "Software you can change as your business changes.",
            description:
                "Built to be extended and maintained by us or by whoever comes next — not held hostage.",
            items: [
                "Staged delivery with visible progress",
                "Code and infrastructure owned by you",
                "Documented and handed over",
                "Integrations with your existing systems",
                "Training for your team",
                "Ongoing support options",
            ],
        },
        pricing: {
            tag: "Cost & Timing",
            title: "What custom software costs.",
            description:
                "Custom software is scoped individually and quoted per stage, so you know the cost of each increment before you commit to it. Tell us the workflow that is not working and we will tell you what it takes to fix — including whether you need custom software at all.",
            timeline: "8–16 weeks for a first release",
            amc: "Support and enhancement plans quoted per system",
            included: [
                "Discovery workshop",
                "Agreed first-release scope",
                "Design and architecture",
                "Iterative development",
                "Deployment and handover",
                "Documentation and training",
            ],
            excluded: [
                "Third-party API and licensing fees",
                "Ongoing hosting and infrastructure costs",
                "Scopes added after the first release",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Common questions about custom software.",
            description:
                "Message us with your situation and we will tell you honestly whether custom software is the right answer.",
            items: [
                {
                    question: "How do we know if we actually need custom software?",
                    answer:
                        "Usually you need it when your team is maintaining workarounds — duplicated data entry, spreadsheets feeding each other, or software that almost fits. If a standard tool solves the problem, we will say so rather than sell you a build.",
                },
                {
                    question: "How much does it cost?",
                    answer:
                        "It depends entirely on what the system has to do. We quote fixed per stage after a short discovery conversation, so you know the cost of each increment before you commit to it — and you can stop after any stage.",
                },
                {
                    question: "Will we own the code?",
                    answer:
                        "Yes. The code, infrastructure and accounts are yours. We are not building something you cannot take elsewhere if you ever want to.",
                },
                {
                    question: "Is AI actually worth it for a business our size?",
                    answer:
                        "Sometimes, and we will tell you when it is not. AI is worth building where there is a high volume of repetitive, rule-bound work — qualifying enquiries, answering common questions, clearing repetitive data entry. It is not worth it to add to a process that already works.",
                },
                {
                    question: "How long before we see something working?",
                    answer:
                        "8–16 weeks for a first usable release. We build in stages so you see working software early rather than waiting for the whole thing, and you can stop after any stage.",
                },
            ],
        },
    },

    [Service.COMPUTERS_IT]: {
        slug: Service.COMPUTERS_IT,
        title: "Computers & IT",
        hero: {
            tag: "Computers, Networks & Support",
            title: "Computers set up properly the first time.",
            description:
                "We supply, configure, network and maintain the computers and systems your office runs on — and we keep them running afterwards.",
            photoUrl: {
                src: "/images/services/computers-it-photo.webp",
                alt: "Laptops and monitors being set up and configured on an office desk",
                width: 1400,
                height: 800,
            },
            // Never rendered: the photoUrl branch above short-circuits the hero.
            // Kept as the same asset so the two paths stay consistent.
            imageDesktop: {
                src: "/images/services/computers-it-photo.webp",
                alt: "Laptops and monitors being set up and configured on an office desk",
                width: 1400,
                height: 800,
            },
            imageMobile: {
                src: "/images/services/computers-it-photo.webp",
                alt: "Laptops and monitors being set up and configured on an office desk",
                width: 1400,
                height: 800,
            },
        },
        solutions: {
            tag: "What We Do",
            title: "Everything from a new machine to a whole office.",
            description:
                "Whether you need one replacement laptop or a floor of new workstations wired together, we handle the whole setup — not just the box.",
            items: [
                {
                    id: "01",
                    title: "Computer Supply",
                    description:
                        "New systems and replacements specified for your actual workload and budget, not for a spec sheet.",
                },
                {
                    id: "02",
                    title: "Setup & Configuration",
                    description:
                        "Operating system, software, drivers, security and updates configured so it is ready to work on day one.",
                },
                {
                    id: "03",
                    title: "Office Networking",
                    description:
                        "Wired and wireless networks, shared storage and printers set up so everyone can work without waiting.",
                },
                {
                    id: "04",
                    title: "Data & Backups",
                    description:
                        "Migration from your old machine, and backups set up so a failure is an inconvenience rather than an incident.",
                },
                {
                    id: "05",
                    title: "Repairs & Upgrades",
                    description:
                        "Diagnosis and repair in-house, or coordinated with the vendor when hardware replacement is the better call.",
                },
                {
                    id: "06",
                    title: "Ongoing Support (AMC)",
                    description:
                        "Scheduled maintenance, priority response and a single point of contact for anything that breaks.",
                },
            ],
        },
        methodology: {
            tag: "How We Work",
            title: "We come to you, look, then quote.",
            description:
                "For hardware and networking we do not quote blind. A visit is free and means the price you get is the price that holds.",
            items: [
                {
                    id: "01",
                    title: "Call or Visit",
                    description:
                        "Tell us what is wrong or what you are setting up. For on-site work we arrange a free assessment visit.",
                },
                {
                    id: "02",
                    title: "Fixed Quote",
                    description:
                        "We recommend the right option for your budget and confirm a fixed price before anything is ordered.",
                },
                {
                    id: "03",
                    title: "Supply & Setup",
                    description:
                        "We deliver, configure, connect and test everything on site, and remove the old equipment if needed.",
                },
                {
                    id: "04",
                    title: "Handover & Support",
                    description:
                        "We hand over with instructions, and set up ongoing maintenance if you want it.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "Set up once, properly.",
            description:
                "No callbacks about the same problem next week. That is the whole point.",
            items: [
                "On-site assessment before quoting",
                "Fixed price, agreed in advance",
                "Configured and tested before handover",
                "Data migrated from your old system",
                "Backups set up as standard",
                "Optional annual maintenance contract",
            ],
        },
        pricing: {
            tag: "Cost & Timing",
            title: "What IT work costs.",
            description:
                "Setting up or updating a workstation starts at ₹10,000, excluding hardware. Hardware costs vary widely with brand and specification, and larger jobs — networks, whole-office rollouts — are quoted on requirement. You always get a fixed total before you commit.",
            from: "₹10,000",
            fromUnit: "starting price to set up or update a workstation, excluding hardware",
            timeline: "1–3 days on site",
            amc: "Annual maintenance contracts available — quoted by system count and coverage",
            included: [
                "On-site assessment and recommendation",
                "Operating system and software setup",
                "Security, updates and user accounts",
                "Network and printer configuration",
                "Data transfer from your old machine",
                "Backup configuration",
            ],
            excluded: [
                "Hardware and software licences",
                "Third-party repair or replacement parts",
                "Consumables and peripherals",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Common questions about computer and IT support.",
            description:
                "Message us with your situation and we will tell you what we would do.",
            items: [
                {
                    question: "Do you supply the hardware, or work with what we have?",
                    answer:
                        "Both. We can supply systems matched to your workload and budget, or configure machines you have already bought. We are not tied to one brand, so we will tell you if a different machine suits you better.",
                },
                {
                    question: "Do you come to our office?",
                    answer:
                        "Yes. On-site setup, networking and maintenance are handled at your premises across Mumbai. The initial assessment visit is free and there is no obligation.",
                },
                {
                    question: "Can you take over a system another company set up?",
                    answer:
                        "Yes, and it is common. We will audit what is there first, tell you what is salvageable, and fix or replace only what needs it.",
                },
                {
                    question: "What is an AMC and do we need one?",
                    answer:
                        "An Annual Maintenance Contract is a fixed monthly fee covering scheduled checkups, priority response and a defined service level. It is worth it once you have more than two or three systems, or when downtime costs you money. For a single home-office machine it usually is not worth it.",
                },
                {
                    question: "How fast do you respond?",
                    answer:
                        "For AMC clients we commit to same-day response for anything stopping work, and next-day on-site attendance within Mumbai. Response times are written into the contract, not left vague.",
                },
                {
                    question: "Can you help with data recovery?",
                    answer:
                        "Often, yes — it depends on the failure. Bring or let us access the device as soon as possible, because continued use can reduce the chance of recovery.",
                },
            ],
        },
    },

    [Service.CAMERA_SECURITY]: {
        slug: Service.CAMERA_SECURITY,
        title: "Cameras & Security",
        hero: {
            tag: "CCTV & Access Security",
            title: "Cameras installed where they actually help.",
            description:
                "CCTV supply, installation, configuration and maintenance for shops, offices and warehouses — set up to cover the right areas, not just to tick a box.",
            photoUrl: {
                src: "/images/services/camera-security-photo.webp",
                alt: "A security camera mounted on the exterior wall of a commercial building",
                width: 1400,
                height: 800,
            },
            // Never rendered: the photoUrl branch above short-circuits the hero.
            // Kept as the same asset so the two paths stay consistent.
            imageDesktop: {
                src: "/images/services/camera-security-photo.webp",
                alt: "A security camera mounted on the exterior wall of a commercial building",
                width: 1400,
                height: 800,
            },
            imageMobile: {
                src: "/images/services/camera-security-photo.webp",
                alt: "A security camera mounted on the exterior wall of a commercial building",
                width: 1400,
                height: 800,
            },
        },
        solutions: {
            tag: "What We Do",
            title: "Coverage planned around your premises.",
            description:
                "Camera count is the least important decision. Where they point, what they can see in low light, and whether anyone can actually retrieve the footage matters far more.",
            items: [
                {
                    id: "01",
                    title: "Site Survey & Design",
                    description:
                        "We walk the premises and plan camera positions for real coverage — entrances, cash points, stock areas, blind spots.",
                },
                {
                    id: "02",
                    title: "Camera Supply",
                    description:
                        "IP and analogue cameras, DVR/NVR units and storage sized for how long you need to keep footage.",
                },
                {
                    id: "03",
                    title: "Professional Installation",
                    description:
                        "Neat cabling, mounting and terminations done properly, with cameras where they were planned rather than wherever was easiest.",
                },
                {
                    id: "04",
                    title: "Remote Viewing",
                    description:
                        "Watch your cameras from your phone, and control access from the same place, if you want to.",
                },
                {
                    id: "05",
                    title: "Access Control",
                    description:
                        "Biometric, RFID and keypad entry integrated with the same system, so access and video are in one record.",
                },
                {
                    id: "06",
                    title: "Maintenance (AMC)",
                    description:
                        "Camera cleaning, lens checks, storage health monitoring and priority fault response.",
                },
            ],
        },
        methodology: {
            tag: "How We Work",
            title: "Survey, install, verify — usually within two days.",
            description:
                "We do not install from a list of camera counts over the phone. The survey is what makes the result work.",
            items: [
                {
                    id: "01",
                    title: "Free Site Survey",
                    description:
                        "We visit, look at the layout and lighting, and mark where cameras should go and why.",
                },
                {
                    id: "02",
                    title: "System Design & Quote",
                    description:
                        "You get a plan showing camera positions, the equipment, and a fixed price.",
                },
                {
                    id: "03",
                    title: "Install & Configure",
                    description:
                        "We install, terminate, connect and configure recording, retention and remote access.",
                },
                {
                    id: "04",
                    title: "Test & Handover",
                    description:
                        "We verify every camera with you, hand over the credentials, and explain how to retrieve footage.",
                },
            ],
        },
        benefits: {
            tag: "What You Get",
            title: "Footage you can actually use.",
            description:
                "If a camera cannot identify a face in a dim corridor, it is not doing its job. We test for that, not just for power.",
            items: [
                "Free site survey before you commit",
                "Fixed price, agreed in advance",
                "Neat, concealed cabling",
                "Retention sized to your requirement",
                "Phone access, set up and shown to you",
                "Optional annual maintenance contract",
            ],
        },
        pricing: {
            tag: "Cost & Timing",
            title: "What a camera system costs.",
            description:
                "Installation starts at ₹10,000. The final figure depends on camera count, resolution, and how long you need to keep footage — which is why the site survey is free and comes before any quote. We will not price a system we have not looked at.",
            from: "₹10,000",
            fromUnit: "starting price for camera supply and installation",
            timeline: "1–2 days on site",
            amc: "Annual maintenance contracts available — quoted by camera count",
            included: [
                "Free site survey and camera plan",
                "4 cameras, DVR/NVR and storage",
                "Professional installation and cabling",
                "Configuration and retention setup",
                "Mobile viewing set up on your phone",
                "Testing and handover with you",
            ],
            excluded: [
                "Additional cameras beyond the quoted count",
                "Structural cabling or civil work",
                "Electrical work for new points",
            ],
        },
        faqs: {
            tag: "FAQ",
            title: "Common questions about cameras and security.",
            description:
                "Message us with your premises details and we will advise on the right coverage.",
            items: [
                {
                    question: "How long does an installation take?",
                    answer:
                        "A typical 4 to 8 camera system takes one to two days on site, including configuration and testing. Larger sites with access control and cabling take longer. You get a firm date before we start.",
                },
                {
                    question: "Do you cover areas outside Mumbai?",
                    answer:
                        "Yes, we travel across the Mumbai Metropolitan Region for installation and maintenance. For larger sites or projects further afield, tell us the location when you enquire and we will confirm travel and timing before quoting.",
                },
                {
                    question: "What happens if a camera fails?",
                    answer:
                        "AMC clients get same-day remote diagnosis and priority on-site attendance. Without an AMC, we respond on a best-effort basis — we will always tell you honestly which tier your situation falls into before you sign anything.",
                },
                {
                    question: "Can I watch the cameras on my phone?",
                    answer:
                        "Yes. We set up remote viewing on your phone and show you how it works before we leave. You get your own account credentials, not a shared login.",
                },
                {
                    question: "How long is the footage kept?",
                    answer:
                        "That is a storage question and it depends on camera count, resolution and how much you want to review. We size the drive for a retention period you specify — typically 15 to 30 days for a small site — and we will explain the trade-off before recommending a size.",
                },
                {
                    question: "Do you install access control too?",
                    answer:
                        "Yes. Biometric, RFID and keypad systems can be integrated with the same cameras so access events and video appear together in one record.",
                },
            ],
        },
    },
}
