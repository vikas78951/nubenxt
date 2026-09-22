import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import Wrapper from "../../shared/wrapper"
import Section from "../../shared/section"
import { Marker } from "../../markers/marker"
import { Button } from "../../ui/button"
import { getWhatsAppUrl } from "@/lib/data/contact.data"

const ServicesOverviewHero = () => {
  return (
    <Section>
      <Wrapper>
        <div className="grid-60by40">
          <div className="max-w-2xl">
            <Marker
              title="OUR SERVICES & EXPERTISE"
              variant={"primary"}
              className="mb-6"
            />
            <h1>Engineered digital solutions and business technology.</h1>
            <p className="mt-6 text-lg">
              Craftorus provides end-to-end technology services across your
              entire operational footprint. From modern websites, custom software,
              and AI automation to business computer infrastructure and commercial
              camera security systems — we engineer solutions that work seamlessly.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={getWhatsAppUrl("Services")}
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
                  Contact Us <ChevronRight />
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/image_v2/services-hero.jpg"
              alt="Services and Capabilities"
              height={520}
              width={560}
              className="rounded-lg object-cover shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default ServicesOverviewHero
