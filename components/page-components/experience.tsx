import Section from "../shared/section"
import Wrapper from "../shared/wrapper"
import { Marker } from "../markers/marker"
import { NumberFeatureCard } from "../card/number-feature-card"
import { experienceData } from "@/lib/data/about.data"

const Experience = () => {
  return (
    <Section>
      <Wrapper>
        <div>
          <Marker
            title={"02"}
            variant="mix"
            description={experienceData.tag}
          />
          <h4 className="pt-3 pb-2 md:pt-4 lg:pt-5 lg:pb-3 xl:pt-6 xl:pb-4">
            {experienceData.title}
          </h4>
          <p className="max-w-2xl">{experienceData.description}</p>
        </div>

        <div className="grid-30byb3 mt-6 gap-4 md:mt-10 lg:mt-14 xl:mt-16 xl:gap-6">
          {experienceData.items.map((item) => (
            <NumberFeatureCard key={`experience-${item.id}`} data={item} />
          ))}
        </div>
      </Wrapper>
    </Section>
  )
}

export default Experience
