import Wrapper from "../shared/wrapper"
import Section from "../shared/section"
import { footerLink } from "@/lib/data/footer.data"
import Logo from "../shared/logo"
import FooterLinkList from "../list/footer-link-list"
import { contactData } from "@/lib/data/contact.data"
import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <Section className="bg-black pb-6 md:pb-8 lg:pb-10">
      <Wrapper>
        <div className="grid-60by40">
          <div className="">
            <Logo className="text-white" />
            <p className="mt-4 max-w-[410] text-sm md:mt-4 lg:mt-5 xl:mt-6">
              Architectural technology and digital infrastructure constructed
              with absolute precision for elite clinical, spatial, and luxury
              enterprises.
            </p>
          </div>

          <div className="mt-4 flex justify-between md:mt-6 lg:mt-0">
            {footerLink.map((item) => {
              return <FooterLinkList key={item.title} item={item} />
            })}
          </div>
        </div>
        <div className="block py-4 md:py-10 lg:py-16 xl:py-18">
          <hr className="border-muted" />
        </div>
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <p className="text-xs text-muted">
            © 2025 Craftorus. All engineered rights reserved.
          </p>
          <div>
            <a
              className="hover:text-primary!dark:hover:text-primary! flex items-center gap-4 text-xs font-bold text-background! dark:text-foreground!"
              href={`mailto:${contactData.mail}`}
            >
              {contactData.mail}
              <ArrowRight size={16} className="text-primary" />
            </a>
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default Footer