import Section from "../shared/section"
import Wrapper from "../shared/wrapper"
import { Marker } from "../markers/marker"
import { FeaturedDataProps, featuresData } from "@/lib/data/page.data"

import { FeatureCard } from "../card/feature-card"
import { StaggerCards } from "@/components/animation/stagger-cards"
import { MarkerReveal } from "@/components/animation/marker-reveal"

const WhyUs = () => {
  return (
    <Section>
      <Wrapper>
        <div>
          <MarkerReveal>
            <Marker title="06" description="Why us" variant={"mix"} />
          </MarkerReveal>
          <h4 className="pt-3 pb-2 md:pt-4 lg:pt-5 lg:pb-3 xl:pt-6 xl:pb-4">
            You deal with the person doing the work.
          </h4>
        </div>
        <StaggerCards className="grid-50by50 mt-6 gap-4 md:mt-10 lg:mt-14 xl:mt-16 xl:gap-6">
          {featuresData.map((item: FeaturedDataProps) => {
            return <FeatureCard key={`service-${item.id}`} feature={item} />
          })}
        </StaggerCards>
      </Wrapper>
    </Section>
  )
}

export default WhyUs
