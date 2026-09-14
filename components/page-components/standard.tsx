import Section from "../shared/section"
import Wrapper from "../shared/wrapper"
import { Marker } from "../markers/marker"
import { FeatureCard } from "../card/feature-card"
import { principleData } from "@/lib/data/about.data"

const Standard = () => {
  return (
    <Section className="bg-secondary">
      <Wrapper>
        <div>
          <Marker title={"02"} variant="mix" description={principleData.tag} />
          <h4 className="pt-3 pb-2 md:pt-4 lg:pt-5 lg:pb-3 xl:pt-6 xl:pb-4">
            {principleData.title}
          </h4>
          <p className="max-w-2xl">{principleData.description}</p>
        </div>

        <div className="grid-50by50 mt-6 gap-4 md:mt-10 lg:mt-14 xl:mt-16 xl:gap-6">
          {principleData.items.map((item) => (
            <FeatureCard key={`principle-${item.id}`} feature={item} />
          ))}
        </div>
      </Wrapper>
    </Section>
  )
}

export default Standard
