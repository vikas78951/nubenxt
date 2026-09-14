import Atf from "@/components/page-components/hero/about-hero"

import Footer from "@/components/layout/footer"
import Caliber from "@/components/page-components/the-caliber"
import Experience from "@/components/page-components/experience"
import Standard from "@/components/page-components/standard"
import Phylosophy from "@/components/page-components/philosophy"

const Aboutpage = async () => {
  return (
    <>
      <Atf />
      <Caliber />
      <Experience />
      <Standard />
      <Phylosophy />
      <Footer />
    </>
  )
}

export default Aboutpage
