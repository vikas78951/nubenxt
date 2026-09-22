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
            <Marker
              title="TECHNOLOGY SERVICES"
              variant={"primary"}
              className="mb-6"
            />
            <h1>Technology that makes your business look the part</h1>
            <p className="mt-6 text-lg">
              Craftorus provides professional web development, computer solutions,
              and camera security services. We build, supply, install and
              maintain the technology your business relies on.
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
                src="/image_v2/home-hero.jpg"
                alt="Craftorus Business Technology Solutions"
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
