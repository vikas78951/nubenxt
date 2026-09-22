import type { Metadata } from "next"
import Footer from "@/components/page-components/footer"
import { ContactUs } from "@/components/page-components/contact-us"

export const metadata: Metadata = {
  title: "Contact Us | Craftorus",
  description:
    "Get in touch with Craftorus to discuss your next web development project, computer IT setup, or security system installation.",
}

const ContactPage = async () => {
  return (
    <main>
      <ContactUs />
      <Footer />
    </main>
  )
}

export default ContactPage
