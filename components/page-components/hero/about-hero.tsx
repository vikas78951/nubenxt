import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"
import Wrapper from "../../shared/wrapper"
import Section from "../../shared/section"
import { Marker } from "../../markers/marker"
import { Button } from "../../ui/button"

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
              <Button
                variant={"default"}
                size="lg"
                className={"font-bold uppercase"}
              >
                Start a Project <ArrowRight />
              </Button>
              <Button
                variant={"outline"}
                size="lg"
                className={"font-bold uppercase"}
              >
                View Our Services <ChevronRight />
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/images/hero-right-media.png"
              alt="atf-abstract-render"
              height={"520"}
              width={"560"}
              className="rounded-lg"
              loading="eager"
            />
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}

export default Atf
