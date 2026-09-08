import Atf from "@/components/page-components/home-hero"
import OurServices from "@/components/page-components/our-services"
import WhatWeDo from "@/components/page-components/what-we-do"
import WhyUs from "@/components/page-components/why-us"
import Techonology from "@/components/page-components/techonology"
import LatestInsight from "@/components/page-components/latest-insight"
import Contact from "@/components/page-components/contact-cta"
import Footer from "@/components/layout/footer"

export default function Page() {
  return (
    <div className="">
      <Atf />
      <WhatWeDo />
      <OurServices />
      <WhyUs />
      <Techonology />
      <LatestInsight />
      <Footer />
    </div>
  )
}
