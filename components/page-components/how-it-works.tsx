import Section from "../shared/section"
import Wrapper from "../shared/wrapper"
import { Marker } from "../markers/marker"
import {
  HowItWorksDataProps,
  howItWorksData,
} from "@/lib/data/page.data"
import { contactData } from "@/lib/data/contact.data"
import { NumberFeatureCard } from "../card/number-feature-card"
import { StaggerCards } from "@/components/animation/stagger-cards"
import { MarkerReveal } from "@/components/animation/marker-reveal"

const HowItWorks = () => {
  return (
    <Section className="bg-secondary">
      <Wrapper>
        <div>
          <MarkerReveal>
            <Marker title="04" description={howItWorksData.tag} variant={"mix"} />
          </MarkerReveal>
          <h4 className="pt-3 pb-2 md:pt-4 lg:pt-5 xl:pt-6 lg:pb-3 xl:pb-4">
            {howItWorksData.title}
          </h4>
          <p className="max-w-2xl">{howItWorksData.description}</p>
        </div>

        <StaggerCards className="mt-6 flex flex-col gap-4 md:mt-10 lg:mt-14 xl:mt-16 xl:gap-6">
          {howItWorksData.items.map((item: HowItWorksDataProps) => (
            <NumberFeatureCard key={`step-${item.id}`} data={item} padded />
          ))}
        </StaggerCards>

        <p className="mt-6 text-sm font-medium text-muted-foreground md:mt-8 lg:mt-10">
          {contactData.siteVisit} · {contactData.responseTime}
        </p>
      </Wrapper>
    </Section>
  )
}

export default HowItWorks
