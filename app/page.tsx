import Atf from "@/components/page-components/home-hero"
import OurServices from "@/components/page-components/our-services"
import WhatWeDo from "@/components/page-components/what-we-do"
import WhyUs from "@/components/page-components/why-us"
import Techonology from "@/components/page-components/techonology"
import LatestInsight from "@/components/page-components/latest-insight"


export default function Page() {
  return (
    <div className="">
      <Atf/>
      <WhatWeDo/>
      <OurServices/>
      <WhyUs/>
      <Techonology />
      <LatestInsight/>
    </div>
  )
}
