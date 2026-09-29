import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import Wrapper from "../../shared/wrapper"
import Section from "../../shared/section"
import { Marker } from "../../markers/marker"
import { Button } from "../../ui/button"
import { getWhatsAppUrl, contactData } from "@/lib/data/contact.data"
import { HeroEntrance } from "@/components/animation/hero-entrance"

const Atf = () => {
  return (
    <Section>
      <Wrapper>
        <div className="grid-60by40">
          <HeroEntrance className="max-w-2xl">
            <Marker
              title="TECHNOLOGY SERVICES"
              variant={"primary"}
              className="mb-6"
            />
            <h1>We build, install and maintain the technology your business runs on.</h1>
            <p className="mt-6 text-lg">
              Websites, computers, networks and camera security for growing
              businesses in Mumbai. One team handles the whole setup — supplied,
              installed, and maintained after we leave.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
                  Get a Quote <ArrowRight />
                </Button>
              </a>
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  variant={"outline"}
                  size="lg"
                  className={"w-full font-bold uppercase sm:w-auto"}
                >
                  See Our Services <ChevronRight />
                </Button>
              </Link>
            </div>
            <p className="mt-6 flex flex-col gap-1 text-sm font-medium text-muted-foreground sm:flex-row sm:gap-4">
              <span>{contactData.siteVisit}</span>
              <span>{contactData.responseTime}</span>
            </p>
          </HeroEntrance>
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-2xl border border-border/40 shadow-2xl">
              <Image
                src="/image_v2/home-hero.jpg"
                alt="Craftorus Business Technology and Web Development Solutions"
                height={520}
                width={560}
                className="h-auto w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default Atf
