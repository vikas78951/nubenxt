import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Service slugs folded into their parent services in v2. The individual
  // landing pages, SEO, HTML emailers and co-brand images are now offerings
  // inside Website Development; AI agents and mobile apps moved into Software &
  // Mobile. See plan.md, Phase 1.1.
  async redirects() {
    return [
      { source: "/services/landing-pages", destination: "/services/web-development", permanent: true },
      { source: "/services/html-emailers", destination: "/services/web-development", permanent: true },
      { source: "/services/seo-marketing", destination: "/services/web-development", permanent: true },
      { source: "/services/co-brand-images", destination: "/services/web-development", permanent: true },
      { source: "/services/ai-agents", destination: "/services/software-development", permanent: true },
      { source: "/services/mobile-apps", destination: "/services/software-development", permanent: true },
    ]
  },
}

export default nextConfig
