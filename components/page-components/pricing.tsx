import Link from "next/link"
import { ArrowRight, Check, ChevronRight, Clock, Minus } from "lucide-react"

import Section from "../shared/section"
import Wrapper from "../shared/wrapper"
import { Marker } from "../markers/marker"
import { Button } from "../ui/button"
import type { Pricing } from "@/lib/data/service.data"
import { contactData, getWhatsAppUrl } from "@/lib/data/contact.data"
import { MarkerReveal } from "@/components/animation/marker-reveal"

const PricingSection = ({ content }: { content: Pricing }) => {
  return (
    <Section>
      <Wrapper>
        <div>
          <MarkerReveal>
            <Marker title="04" description={content.tag} variant={"mix"} />
          </MarkerReveal>
          <h4 className="pt-3 md:pt-4 lg:pt-5 xl:pt-6 pb-2 lg:pb-3 xl:pb-4">
            {content.title}
          </h4>
          <p className="max-w-2xl">{content.description}</p>
        </div>

        <div className="mt-6 md:mt-10 lg:mt-14 xl:mt-16 grid-50by50 gap-4 xl:gap-6">
          {/* Headline figures */}
          <div className="rounded-2xl border border-border bg-secondary p-6 sm:p-8">
            {content.from ? (
              <>
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Starting from
                </p>
                <p className="font-heading mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                  {content.from}
                </p>
                {content.fromUnit && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {content.fromUnit}
                  </p>
                )}
              </>
            ) : (
              <>
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Pricing
                </p>
                <p className="font-heading mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  Quoted by requirement
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  No fixed price list. We quote against your specific
                  requirement, in writing, before any work starts.
                </p>
              </>
            )}

            <div className="mt-6 flex items-start gap-3 border-t border-border pt-6">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Typical timeline
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {content.timeline}
                </p>
              </div>
            </div>

            {content.amc && (
              <div className="mt-4 flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Ongoing support
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {content.amc}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Included / not included */}
          <div className="grid gap-4 sm:grid-cols-2 xl:gap-6">
            <div className="rounded-2xl border border-border p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Included
              </p>
              <ul className="mt-4 space-y-3">
                {content.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Quoted separately
              </p>
              <ul className="mt-4 space-y-3">
                {content.excluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Minus className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 md:mt-14 lg:mt-16 xl:mt-20">
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant={"default"}
                size="lg"
                className={"w-full font-bold uppercase sm:w-auto"}
              >
                Start a Project <ArrowRight />
              </Button>
            </a>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant={"outline"}
                size="lg"
                className={"w-full font-bold uppercase sm:w-auto"}
              >
                Send us the details <ChevronRight />
              </Button>
            </Link>
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            {contactData.siteVisit} · {contactData.responseTime}
          </p>
        </div>
      </Wrapper>
    </Section>
  )
}

export default PricingSection
