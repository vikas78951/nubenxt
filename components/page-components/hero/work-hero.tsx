import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import Wrapper from "../../shared/wrapper"
import Section from "../../shared/section"
import { Marker } from "../../markers/marker"
import { Button } from "../../ui/button"
import { getWhatsAppUrl } from "@/lib/data/contact.data"
import { pageImages } from "@/lib/data/images.data"

const Atf = () => {
  return (
    <Section>
      <Wrapper>
        <div className="grid-60by40">
          <div className="max-w-2xl">
            <Marker
              title="Selected Work"
              variant={"primary"}
              className="mb-6"
            />
            <h1>Work built around real business needs.</h1>
            <p className="mt-6 text-lg">
              Explore selected digital experiences, technology projects and
              business solutions built by Craftorus. From websites and digital
              products to security and computer infrastructure, our work is
              focused on making businesses work better.
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
            <div className="overflow-hidden rounded-2xl border border-border/40 shadow-xl">
              <Image
                src={pageImages.workHero.src}
                alt={pageImages.workHero.alt}
                height={pageImages.workHero.height}
                width={pageImages.workHero.width}
                className="h-auto w-full rounded-2xl object-cover"
                loading="eager"
                sizes="(max-width: 1024px) 0px, 40vw"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default Atf
