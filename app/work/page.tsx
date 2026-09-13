import Footer from "@/components/layout/footer"
import FeatureCaseStudy from "@/components/page-components/feature-case-study"
import Atf from "@/components/page-components/hero/work-hero"

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
