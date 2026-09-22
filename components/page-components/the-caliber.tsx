import Section from "../shared/section"
import Wrapper from "../shared/wrapper"
import { Marker } from "../markers/marker"

const Caliber = () => {
  return (
    <Section className="bg-secondary">
      <Wrapper>
        <div>
          <Marker title={"01"} variant="mix" description={"THE STORY"} />
          <h4 className="pt-3 pb-2 md:pt-4 lg:pt-5 lg:pb-3 xl:pt-6 xl:pb-4">
            Built from experience, not from a business plan.
          </h4>
          <p className="max-w-2xl">
            Craftorus started with a simple observation businesses often don't
            need more technology. They need the right technology, implemented
            properly.
          </p>
        </div>

        <div className="mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          Before Craftorus, the work was about building software, solving
          engineering problems and working with real products in real business
          environments. Over the years, that experience shaped a practical
          approach to technology — understand the problem first, choose the
          right solution, and build it properly. Craftorus brings that experience
          into an independent technology studio focused on helping businesses
          improve their digital presence, software and everyday technology. The
          business may be new. The experience behind the work is not.
        </div>
      </Wrapper>
    </Section>
  )
}

export default Caliber
