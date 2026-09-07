import Section from '../shared/section'
import Wrapper from '../shared/wrapper'
import { Marker } from '../markers/marker'
import { FeaturedDataProps, featuresData } from "@/lib/data/page.data"

import { FeatureCard } from '../card/feature-card'

const WhyUs = () => {
    return (
        <Section>
            <Wrapper>
                <div>
                    <Marker title='03' description='Why us' variant={'mix'} />
                    <h4 className='pt-3 md:pt-4 lg:pt-5 xl:pt-6 pb-2 lg:pb-3 xl:pb-4'>Technology should work for you.</h4>
                </div>
                <div className='grid-50by50 gap-4  xl:gap-6 mt-6 md:mt-10 lg:mt-14 xl:mt-16'>
                    {
                        featuresData.map((item: FeaturedDataProps) => {
                            return (
                                <FeatureCard key={`service-${item.id}`} feature={item} />
                            )
                        })

                    }
                </div>
            </Wrapper>
        </Section>
    )
}

export default WhyUs