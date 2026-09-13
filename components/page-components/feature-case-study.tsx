import Section from "../shared/section"
import Wrapper from "../shared/wrapper"
import { Marker } from "../markers/marker"
import { ProjectDataProps, projectsData } from "@/lib/data/work.data"
import CustomCard from "../card/card"

const FeatureCaseStudy = () => {
  return (
    <Section className="bg-secondary">
      <Wrapper>
        <div>
          <Marker title="01" description="Feature case study" variant={"mix"} />
        </div>
        <div className="mt-6 flex flex-col gap-6 md:gap-8 lg:mt-6 lg:gap-10 xl:mt-8 xl:gap-12">
          {projectsData.map((item: ProjectDataProps, index) => {
            return (
              <CustomCard
                content={{
                  category: item.category,
                  cardNumber: index + 1,
                  type: "horizontal",
                  title: item.title,
                  description: item.description,
                  image: {
                    src: item.imageUrl,
                    alt: item.title,
                    height: 400,
                    width: 400,
                  },
                  tags: item.services,
                }}
                key={`feature-case-${index}`}
              />
            )
          })}
        </div>
      </Wrapper>
    </Section>
  )
}

export default FeatureCaseStudy
