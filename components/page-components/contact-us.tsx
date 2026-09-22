import Wrapper from "@/components/shared/wrapper"
import Section from "@/components/shared/section"
import { Marker } from "@/components/markers/marker"
import { contactData } from "@/lib/data/contact.data"
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
        <div className="mt-8 grid grid-cols-1 gap-12 md:mt-10 lg:mt-12 lg:grid-cols-[58%_42%] xl:grid-cols-[60%_40%] lg:gap-12 xl:gap-16">
          <div>
            <ContactForm />
          </div>
          <div className="flex flex-col gap-8 lg:pl-2">
            {/* Direct Communications Card */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary">
                Craftorus Communications
              </h3>

              <div className="space-y-1.5">
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  HEADQUARTERS
                </p>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  Mumbai, Maharashtra<br />
                  India
                </p>
              </div>

              <div className="space-y-1.5">
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  EMAIL INQUIRIES
                </p>
                <a
                  href={`mailto:${contactData.mail}`}
                  className="text-sm font-semibold text-primary hover:underline transition-colors block"
                >
                  {contactData.mail}
                </a>
              </div>

              <div className="space-y-1.5">
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  BUSINESS HOURS
                </p>
                <p className="text-sm font-medium text-foreground">
                  Monday – Sunday: 9 AM – 6 PM IST
                </p>
                <p className="text-xs text-muted-foreground">
                  Archived support monitored 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}
