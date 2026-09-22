import type { Metadata } from "next"
import Section from "@/components/shared/section"
import Wrapper from "@/components/shared/wrapper"
import { Marker } from "@/components/markers/marker"
import Footer from "@/components/layout/footer"
import { contactData } from "@/lib/data/contact.data"

export const metadata: Metadata = {
  title: "Privacy Policy | Craftorus",
  description: "Privacy Policy and data protection practices for Craftorus.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section>
        <Wrapper>
          <Marker title="LEGAL" variant="primary" className="mb-4" />
          <h1>Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted">Last updated: September 22, 2026</p>

          <div className="prose prose-invert mt-8 space-y-8 text-foreground/90">
            <p className="text-base leading-relaxed">
              Craftorus (&quot;Craftorus&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting the personal information you share with us.
              This Privacy Policy explains how we collect, use, store, and protect information when you visit our website or contact us through our services.
            </p>
            <p className="text-base leading-relaxed">
              By using the Craftorus website, you acknowledge the practices described in this Privacy Policy.
            </p>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">1. Information We Collect</h3>
              <p className="text-base leading-relaxed">We may collect information that you voluntarily provide to us, including:</p>
              <ul className="list-inside list-disc space-y-1.5 pl-2 text-muted-foreground">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company or business name</li>
                <li>Website or project details</li>
                <li>Service requirements</li>
                <li>Any other information you include in your enquiry or communication with us</li>
              </ul>
              <p className="text-base leading-relaxed">We may also automatically collect limited technical information when you visit our website, such as:</p>
              <ul className="list-inside list-disc space-y-1.5 pl-2 text-muted-foreground">
                <li>IP address</li>
                <li>Browser and device information</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Approximate usage information</li>
                <li>Referring website or source</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                This information may be collected through standard website technologies such as cookies, analytics tools, or similar technologies.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">2. How We Use Your Information</h3>
              <p className="text-base leading-relaxed">We may use the information we collect to:</p>
              <ul className="list-inside list-disc space-y-1.5 pl-2 text-muted-foreground">
                <li>Respond to enquiries and requests</li>
                <li>Understand your project requirements</li>
                <li>Provide quotations or proposals</li>
                <li>Communicate with you about our services</li>
                <li>Provide and improve our website and services</li>
                <li>Maintain website security</li>
                <li>Understand website usage and performance</li>
                <li>Prevent misuse, fraud, or unauthorized activity</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                We will use personal information only for lawful purposes and, where consent is the applicable basis for processing, in accordance with applicable data-protection requirements. The Digital Personal Data Protection Act, 2023 provides for lawful processing based on consent or certain legitimate uses and requires appropriate notice regarding the personal data and purpose of processing.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">3. Contact Form Information</h3>
              <p className="text-base leading-relaxed">
                When you submit an enquiry through our contact form, the information you provide may be used to contact you regarding your enquiry, project, or requested service. Submitting an enquiry does not create a contractual relationship between you and Craftorus.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">4. Cookies and Analytics</h3>
              <p className="text-base leading-relaxed">
                Craftorus may use cookies and similar technologies to operate, secure, and understand the performance of the website. Analytics services may collect information about how visitors interact with the website. You may be able to control or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">5. Sharing of Information</h3>
              <p className="text-base leading-relaxed">
                We do not sell your personal information. We may share information with trusted third-party service providers where reasonably necessary to operate our website or provide our services. Examples may include:
              </p>
              <ul className="list-inside list-disc space-y-1.5 pl-2 text-muted-foreground">
                <li>Website hosting providers</li>
                <li>Email and communication providers</li>
                <li>Analytics providers</li>
                <li>Security and infrastructure providers</li>
                <li>Other technology providers supporting our operations</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Such providers may process information only as necessary to provide their services or as otherwise permitted by applicable law. We may also disclose information where required by law, regulation, legal process, or a valid request from a competent authority.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">6. Data Security</h3>
              <p className="text-base leading-relaxed">
                We take reasonable technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, loss, or misuse. However, no method of transmitting or storing information over the internet can be guaranteed to be completely secure.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">7. Data Retention</h3>
              <p className="text-base leading-relaxed">
                We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including responding to enquiries, providing services, maintaining business records, resolving disputes, and complying with legal obligations. When information is no longer required, we may delete or anonymize it, subject to applicable legal or operational requirements.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">8. Your Rights</h3>
              <p className="text-base leading-relaxed">
                Depending on applicable law and the circumstances of processing, you may have rights relating to your personal information, including rights to:
              </p>
              <ul className="list-inside list-disc space-y-1.5 pl-2 text-muted-foreground">
                <li>Request information about the personal data we process</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of personal information where applicable</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Raise a grievance regarding the processing of your personal information</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Where consent is the basis for processing, applicable law provides for withdrawal of consent and requires processing to cease within the applicable framework, subject to circumstances where continued processing is legally authorized or required. To exercise an applicable right or raise a privacy-related concern, contact us using the details below.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">9. Third-Party Websites</h3>
              <p className="text-base leading-relaxed">
                Our website may contain links to third-party websites or services. Craftorus is not responsible for the privacy practices, content, security, or policies of third-party websites. We recommend reviewing their respective privacy policies before providing personal information.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">10. Children&apos;s Privacy</h3>
              <p className="text-base leading-relaxed">
                Our website and services are intended for businesses and general audiences and are not specifically directed toward children. We do not knowingly seek to collect personal information from children in circumstances where such collection is prohibited by applicable law.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">11. Changes to This Privacy Policy</h3>
              <p className="text-base leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or business practices. Any updated version will be published on this page with a revised &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="space-y-4 rounded-lg border border-border bg-card p-6">
              <h3 className="text-xl font-bold text-foreground">12. Contact Us</h3>
              <p className="text-base leading-relaxed">
                If you have questions, requests, or concerns regarding this Privacy Policy or the handling of your personal information, contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-foreground">Craftorus</p>
                <p>
                  <span className="text-muted-foreground">Email: </span>
                  <a href={`mailto:${contactData.mail}`} className="text-primary hover:underline">
                    {contactData.mail}
                  </a>
                </p>
                <p>
                  <span className="text-muted-foreground">Phone: </span>
                  <a href={`tel:${contactData.telNumber || contactData.number}`} className="text-primary hover:underline">
                    {contactData.displayNumber || contactData.number}
                  </a>
                </p>
                <p>
                  <span className="text-muted-foreground">Address: </span>
                  <span className="text-foreground">{contactData.address}</span>
                </p>
              </div>
            </section>
          </div>
        </Wrapper>
      </Section>
      <Footer />
    </>
  )
}
