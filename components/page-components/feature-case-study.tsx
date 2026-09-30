import Section from "../shared/section"
import Wrapper from "../shared/wrapper"
import { Marker } from "../markers/marker"
import { ProjectDataProps, projectsData } from "@/lib/data/work.data"
import CustomCard from "../card/card"
import { StaggerCards } from "@/components/animation/stagger-cards"
import { MarkerReveal } from "@/components/animation/marker-reveal"

const FeatureCaseStudy = () => {
  return (
    <Section className="bg-secondary">
      <Wrapper>
        <div>
          <MarkerReveal>
            <Marker title="01" description="Feature case study" variant={"mix"} />
          </MarkerReveal>
        </div>
        <StaggerCards className="mt-6 flex flex-col gap-6 md:gap-8 lg:mt-6 lg:gap-10 xl:mt-8 xl:gap-12">
          {projectsData.map((item: ProjectDataProps, index) => {
            return (
              <CustomCard
                content={{
                  category: item.category,
                  cardNumber: index + 1,
                  type: "horizontal",
                  title: item.title,
                  description: item.description,
                  image: item.image,
                  tags: item.services,
                }}
                key={`feature-case-${index}`}
              />
            )
          })}
        </StaggerCards>
      </Wrapper>
    </Section>
  )
}

export default FeatureCaseStudy
