import type { Metadata } from "next"
import Atf from "@/components/page-components/hero/about-hero"

import Footer from "@/components/layout/footer"
import Caliber from "@/components/page-components/the-caliber"
import Experience from "@/components/page-components/experience"
import Standard from "@/components/page-components/standard"
import Phylosophy from "@/components/page-components/philosophy"

export const metadata: Metadata = {
  title: "About Us | Craftorus",
  description:
    "Learn about Craftorus, our 6+ years of engineering experience, and our mission to provide reliable web development, IT solutions, and security systems for businesses.",
}

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
