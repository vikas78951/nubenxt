import Section from "../shared/section"
import Wrapper from "../shared/wrapper"
import { Marker } from "../markers/marker"
import { FeaturedDataProps, featuresData } from "@/lib/data/page.data"

import { FeatureCard } from "../card/feature-card"
import { Reveal } from "@/components/animation/reveal"

const WhyUs = () => {
  return (
    <Section>
      <Wrapper>
        <Reveal>
            <div>
              <Marker title="06" description="Why us" variant={"mix"} />
            </div>
            <h4 className="pt-3 pb-2 md:pt-4 lg:pt-5 lg:pb-3 xl:pt-6 xl:pb-4">
              You deal with the person doing the work.
            </h4>
        </Reveal>
        <div className="grid-50by50 mt-6 gap-4 md:mt-10 lg:mt-14 xl:mt-16 xl:gap-6">
          {featuresData.map((item: FeaturedDataProps) => {
            return <FeatureCard key={`service-${item.id}`} feature={item} />
          })}
        </div>
      </Wrapper>
    </Section>
  )
}

export default WhyUs
