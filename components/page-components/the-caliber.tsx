import Section from "../shared/section"
import Wrapper from "../shared/wrapper"
import { Marker } from "../markers/marker"

const Caliber = () => {
  return (
    <Section className="bg-secondary">
      <Wrapper>
        <div>
          <div>
            <Marker title={"01"} variant="mix" description={"THE STORY"} />
          </div>
          <h4 className="pt-3 pb-2 md:pt-4 lg:pt-5 lg:pb-3 xl:pt-6 xl:pb-4">
            Most businesses don&apos;t need more technology.
          </h4>
          <p className="max-w-2xl">
            They need the right technology, implemented properly, and someone who
            picks up the phone when it stops working.
          </p>
        </div>

        <div className="mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          Craftorus is run by an engineer rather than an agency. That means the
          person scoping your website is the same person who will set up the
          network it runs on and mount the cameras above it. There is no layer of
          account management in between, and no incentive to sell you something
          that does not need buying. The business is new; the experience behind
          the work is not.
        </div>
      </Wrapper>
    </Section>
  )
}

export default Caliber
