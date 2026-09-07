import Section from '../shared/section'
import Wrapper from '../shared/wrapper'
import { Marker } from '../markers/marker'
import { TechonologyDataProps, technologiesData } from "@/lib/data/page.data"

import { TechCard } from '../card/tech-card'


const Techonology = () => {
    return (
        <Section className='bg-secondary'>
            <Wrapper>
                <div>
                    <Marker title='04' description='Technology' variant={'mix'} />
                    <h4 className='pt-3 md:pt-4 lg:pt-5 xl:pt-6 pb-2 lg:pb-3 xl:pb-4'>Technology should work for you.</h4>
                </div>
                <div className='flex flex-wrap gap-4 xl:gap-6 mt-6 md:mt-10 lg:mt-14 xl:mt-16'>
                    {
                        technologiesData.map((item: TechonologyDataProps) => {
                            return (
                                <TechCard key={`tech-${item.id}`} tech={item} />
                            )
                        })

                    }
                </div>
            </Wrapper>
        </Section>
    )
}

export default Techonology