import type { Metadata } from "next"
import Atf from "@/components/page-components/hero/home-hero"
import OurServices from "@/components/page-components/our-services"
import WhatWeDo from "@/components/page-components/what-we-do"
import WhyUs from "@/components/page-components/why-us"
import Techonology from "@/components/page-components/techonology"
import LatestInsight from "@/components/page-components/latest-insight"
import Contact from "@/components/page-components/contact-cta"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Craftorus | Web Development, IT Infrastructure & Security Solutions",
  description:
    "Craftorus provides professional web development, computer & IT infrastructure, and commercial camera security systems to help your business build, operate, and scale.",
}

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
