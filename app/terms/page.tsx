import type { Metadata } from "next"
import Section from "@/components/shared/section"
import Wrapper from "@/components/shared/wrapper"
import { Marker } from "@/components/markers/marker"
import Footer from "@/components/layout/footer"
import { contactData } from "@/lib/data/contact.data"

export const metadata: Metadata = {
  title: "Terms & Conditions | Craftorus",
  description: "Terms and conditions governing the access and use of Craftorus services and website.",
}

export default function TermsPage() {
  return (
    <>
      <Section>
        <Wrapper>
          <Marker title="LEGAL" variant="primary" className="mb-4" />
          <h1>Terms &amp; Conditions</h1>
          <p className="mt-2 text-sm text-muted">Last updated: September 22, 2026</p>

          <div className="prose prose-invert mt-8 space-y-8 text-foreground/90">
            <p className="text-base leading-relaxed">
              Welcome to Craftorus. These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the Craftorus website and the information and services made available through it.
            </p>
            <p className="text-base leading-relaxed">
              By accessing or using this website, you agree to these Terms. If you do not agree with these Terms, please do not use the website.
            </p>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">1. About Craftorus</h3>
              <p className="text-base leading-relaxed">Craftorus provides technology and digital services including, but not limited to:</p>
              <ul className="list-inside list-disc space-y-1.5 pl-2 text-muted-foreground">
                <li>Website development</li>
                <li>Landing pages</li>
                <li>E-commerce development</li>
                <li>Software development</li>
                <li>Mobile application development</li>
                <li>SEO and marketing services</li>
                <li>HTML email development</li>
                <li>Computer solutions and services</li>
                <li>Camera and security services</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Specific services, deliverables, timelines, pricing, warranties, and responsibilities may be agreed separately with individual clients.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">2. Website Use</h3>
              <p className="text-base leading-relaxed">You may use this website for lawful purposes only. You agree not to:</p>
              <ul className="list-inside list-disc space-y-1.5 pl-2 text-muted-foreground">
                <li>Use the website for unlawful purposes</li>
                <li>Attempt to gain unauthorized access to the website or its systems</li>
                <li>Interfere with the website&apos;s operation or security</li>
                <li>Introduce malicious software or harmful code</li>
                <li>Copy, reproduce, or exploit website content without permission</li>
                <li>Misrepresent your identity or affiliation</li>
                <li>Use the website in a manner that could damage Craftorus or its users</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                We reserve the right to restrict or terminate access to the website where reasonably necessary to protect the website, our users, or our business.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">3. Information on the Website</h3>
              <p className="text-base leading-relaxed">
                We make reasonable efforts to keep the information on our website accurate and current. However, website content is provided for general informational purposes and may contain errors, omissions, or information that becomes outdated. Information about services, technologies, project examples, pricing, availability, or capabilities may change without notice.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">4. Projects and Prototypes</h3>
              <p className="text-base leading-relaxed">
                Projects, prototypes, designs, demonstrations, and other work displayed on the Craftorus website may be presented for portfolio and demonstration purposes. A prototype or demonstration does not necessarily represent the final functionality, performance, technology stack, or deliverables of a client project. Unless otherwise stated, examples shown on the website should not be interpreted as guarantees of a particular result.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">5. Service Enquiries</h3>
              <p className="text-base leading-relaxed">
                Submitting a contact form or making an enquiry does not constitute acceptance of an order or formation of a contract. A project will begin only after the relevant commercial terms, scope, deliverables, pricing, timelines, payment terms, and other applicable conditions have been agreed between Craftorus and the client. Where appropriate, these terms will be documented through a proposal, quotation, statement of work, service agreement, or other written agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">6. Pricing and Quotations</h3>
              <p className="text-base leading-relaxed">
                Any pricing displayed on the website is informational unless explicitly stated otherwise. Final pricing may depend on factors including: project scope, technical requirements, number of pages or features, integrations, third-party services, infrastructure requirements, design requirements, maintenance requirements, and client-specific requirements. A quotation provided by Craftorus may be subject to its stated validity period and conditions.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">7. Intellectual Property</h3>
              <p className="text-base leading-relaxed">
                Unless otherwise agreed in writing, the Craftorus website, including its design, branding, text, graphics, source code, layout, and other original materials, is owned by or licensed to Craftorus and is protected by applicable intellectual-property laws. You may not reproduce, modify, distribute, publish, sell, or commercially exploit such materials without prior written permission. Client ownership of project deliverables, source code, designs, content, or other materials will be determined by the applicable agreement between Craftorus and the client.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">8. Third-Party Services</h3>
              <p className="text-base leading-relaxed">
                Projects may require third-party services, software, hosting providers, APIs, plugins, libraries, payment providers, cloud infrastructure, domain providers, or other external technologies. Such third-party services may have their own terms, pricing, availability, limitations, and privacy policies. Craftorus is not responsible for changes, interruptions, failures, or policies imposed by independent third-party providers, except to the extent expressly agreed in writing.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">9. Availability and Changes</h3>
              <p className="text-base leading-relaxed">
                We may modify, suspend, replace, or discontinue any part of the website at any time. We do not guarantee that the website will always be available, uninterrupted, error-free, or compatible with every device, browser, or operating environment.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">10. External Links</h3>
              <p className="text-base leading-relaxed">
                The website may contain links to third-party websites. These links are provided for convenience or reference. Craftorus does not control and is not responsible for the content, availability, security, or practices of third-party websites.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">11. Disclaimer</h3>
              <p className="text-base leading-relaxed">
                To the extent permitted by applicable law, the Craftorus website and its general informational content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee that the website will always be available, complete, or error-free, or that any particular business, marketing, SEO, performance, security, or commercial outcome will be achieved solely through the use of our services. Specific service warranties or guarantees, where offered, will be governed by the applicable client agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">12. Limitation of Liability</h3>
              <p className="text-base leading-relaxed">
                To the maximum extent permitted by applicable law, Craftorus will not be liable for indirect, incidental, special, consequential, or business losses arising from your use of the website or reliance on general information provided through it. Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">13. Indemnification</h3>
              <p className="text-base leading-relaxed">
                To the extent permitted by applicable law, you agree to indemnify and hold Craftorus harmless from claims, losses, liabilities, damages, and expenses arising from your unlawful use of the website, violation of these Terms, infringement of third-party rights, or misuse of the website or its services.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">14. Privacy</h3>
              <p className="text-base leading-relaxed">
                Your use of the website is also subject to our Privacy Policy, which explains how we collect and process personal information.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">15. Governing Law</h3>
              <p className="text-base leading-relaxed">
                These Terms shall be governed by and interpreted in accordance with the laws of India. Subject to applicable law, disputes relating to these Terms shall be subject to the jurisdiction of the courts located in Mumbai, Maharashtra, India.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">16. Changes to These Terms</h3>
              <p className="text-base leading-relaxed">
                We may update these Terms from time to time. The updated version will be published on this page with a revised &quot;Last updated&quot; date. Your continued use of the website after changes are published constitutes acceptance of the updated Terms, to the extent permitted by applicable law.
              </p>
            </section>

            <section className="space-y-4 rounded-lg border border-border bg-card p-6">
              <h3 className="text-xl font-bold text-foreground">17. Contact Us</h3>
              <p className="text-base leading-relaxed">For questions regarding these Terms, contact:</p>
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
