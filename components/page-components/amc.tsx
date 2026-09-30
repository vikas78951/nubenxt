import Section from "../shared/section"
import Wrapper from "../shared/wrapper"
import { Marker } from "../markers/marker"
import { amcData } from "@/lib/data/page.data"
import { FeatureCard } from "../card/feature-card"
import { Reveal } from "@/components/animation/reveal"

const Amc = () => {
  return (
    <Section>
      <Wrapper>
        <Reveal>
            <div>
              <Marker title="05" description={amcData.tag} variant={"mix"} />
            </div>
            <h4 className="pt-3 pb-2 md:pt-4 lg:pt-5 xl:pt-6 lg:pb-3 xl:pb-4">
              {amcData.title}
            </h4>
            <p className="max-w-3xl">{amcData.description}</p>
        </Reveal>

        <div className="grid-25by25 mt-6 gap-4 md:mt-10 lg:mt-14 xl:mt-16 xl:gap-6">
          {amcData.points.map((item) => (
            <FeatureCard key={`amc-${item.id}`} feature={item} />
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground md:mt-8 lg:mt-10">
          {amcData.note}
        </p>
      </Wrapper>
    </Section>
  )
}

export default Amc
