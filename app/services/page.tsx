import type { Metadata } from "next"
import ServicesOverviewHero from "@/components/page-components/hero/services-overview-hero"
import OurServices from "@/components/page-components/our-services"
import ServiceDirectory from "@/components/page-components/service-directory"
import WhyUs from "@/components/page-components/why-us"
import Techonology from "@/components/page-components/techonology"
import Contact from "@/components/page-components/contact-cta"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Services | Craftorus",
  description:
    "Explore Craftorus's technology services: web development, computer & IT solutions, security systems, custom software, mobile apps, and AI agents.",
}

const ServicesPage = async () => {
  return (
    <>
      <ServicesOverviewHero />
      <OurServices />
      <ServiceDirectory />
      <WhyUs />
      <Techonology />
      <Contact />
      <Footer />
    </>
  )
}

export default ServicesPage
