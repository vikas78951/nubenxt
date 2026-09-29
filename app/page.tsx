import type { Metadata } from "next"
import Atf from "@/components/page-components/hero/home-hero"
import OurServices from "@/components/page-components/our-services"
import WhatWeDo from "@/components/page-components/what-we-do"
import HowItWorks from "@/components/page-components/how-it-works"
import WhyUs from "@/components/page-components/why-us"
import Amc from "@/components/page-components/amc"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Craftorus | Websites, Computers & Camera Security in Mumbai",
  description:
    "Websites, computers, networking and camera security for growing businesses in Mumbai. Supplied, installed and maintained by one team.",
}

export default function Page() {
  return (
    <>
      <Atf />
      <WhatWeDo />
      <OurServices />
      <HowItWorks />
      <WhyUs />
      <Amc />
      <Footer />
    </>
  )
}
