import Section from '../shared/section'
import Wrapper from '../shared/wrapper'
import { Marker } from '../markers/marker'
import { ServiceDataProps, servicesData } from '@/lib/data/page.data'
import { ServiceCard } from '../card/service-card'
import { StaggerCards } from "@/components/animation/stagger-cards"
import { MarkerReveal } from "@/components/animation/marker-reveal"

const OurServices = () => {
    return (
        <Section>
            <Wrapper>
                <div>
                    <MarkerReveal>
                      <Marker title='02' description='Services' variant={'mix'} />
                    </MarkerReveal>
                    <h4 className='pt-3 md:pt-4 lg:pt-5 xl:pt-6 pb-2 lg:pb-3 xl:pb-4'>What we do</h4>
                    <p>
                        Three service lines, one team. Most businesses need more than one of them eventually, and keeping all three with the same people is what stops problems getting passed between suppliers.
                    </p>
                </div>
                <StaggerCards className='flex flex-col gap-10 md:gap-14 lg:gap-16 xl:gap-20 mt-6 md:mt-10 lg:mt-14 xl:mt-16'>
                    {
                        servicesData.map((item: ServiceDataProps) => {
                            return (
                                <ServiceCard key={`service-${item.id}`} service={item} />
                            )
                        })

                    }
                </StaggerCards>
            </Wrapper>
        </Section>
    )
}

export default OurServices