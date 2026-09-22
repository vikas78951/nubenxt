import type { Metadata } from "next"
import Footer from "@/components/layout/footer"
import FeatureCaseStudy from "@/components/page-components/feature-case-study"
import Atf from "@/components/page-components/hero/work-hero"

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | Craftorus",
  description:
    "Explore selected digital experiences, web development projects, and technology infrastructure solutions delivered by Craftorus.",
}

const WorkPage = async () => {
  return (
    <>
      <Atf />
      <FeatureCaseStudy />
      <Footer />
    </>
  )
}

export default WorkPage
