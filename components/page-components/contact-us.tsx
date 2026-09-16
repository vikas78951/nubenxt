import Wrapper from "@/components/shared/wrapper"
import Section from "@/components/shared/section"
import { Marker } from "@/components/markers/marker"
import ContactForm from "./contact-form"

export function ContactUs() {
  return (
    <Section>
      <Wrapper className="mb-10 md:mb-12">
        <div>
          <Marker title="CONTACT" variant="primary" className="mb-4" />
          <h1>Get in Touch.</h1>
          <p className="mt-4 max-w-2xl md:text-lg">
            Tell us about your business and what you are looking for. Our team
            of principal engineers will analyze your requirements and get back
            to you within 24 hours.
          </p>
        </div>
        <div className="grid-60by40 mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          <ContactForm />
        </div>
      </Wrapper>
    </Section>
  )
}
