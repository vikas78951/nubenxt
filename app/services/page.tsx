import type { Metadata } from "next"
import ServicesOverviewHero from "@/components/page-components/hero/services-overview-hero"
import OurServices from "@/components/page-components/our-services"
import ServiceDirectory from "@/components/page-components/service-directory"
import HowItWorks from "@/components/page-components/how-it-works"
import WhyUs from "@/components/page-components/why-us"
import Amc from "@/components/page-components/amc"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Services | Craftorus",
  description:
    "Websites and online stores, computers and IT support, and camera security systems for businesses across Mumbai. Fixed quotes, on-site installation, ongoing maintenance.",
}

const ServicesPage = async () => {
  return (
    <>
      <ServicesOverviewHero />
      <OurServices />
      <ServiceDirectory />
      <HowItWorks />
      <WhyUs />
      <Amc />
      <Footer />
    </>
  )
}

export default ServicesPage
