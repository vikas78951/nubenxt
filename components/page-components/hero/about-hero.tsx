import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import Wrapper from "../../shared/wrapper"
import Section from "../../shared/section"
import { Marker } from "../../markers/marker"
import { Button } from "../../ui/button"
import { getWhatsAppUrl } from "@/lib/data/contact.data"

const Atf = () => {
  return (
    <Section>
      <Wrapper>
        <div className="grid-60by40">
          <div className="max-w-2xl">
            <Marker title="ABOUT US" variant={"primary"} className="mb-6" />
            <h1>Technology is only useful when it makes something better.</h1>
            <p className="mt-6 text-lg">
              Craftorus is a technology studio built around 6+ years of hands-on
              professional experience in software, digital products and business
              technology. We build practical digital solutions that help
              businesses work better, communicate clearly and grow with
              confidence.
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
                  Start a Project <ArrowRight />
                </Button>
              </a>
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  variant={"outline"}
                  size="lg"
                  className={"w-full font-bold uppercase sm:w-auto"}
                >
                  View Our Services <ChevronRight />
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-2xl border border-border/40 shadow-2xl">
              <Image
                src="/images/hero-right-media.png"
                alt="Craftorus Experience and Caliber"
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
