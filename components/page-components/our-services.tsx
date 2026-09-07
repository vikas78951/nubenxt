import Section from '../shared/section'
import Wrapper from '../shared/wrapper'
import { Marker } from '../markers/marker'
import { ServiceDataProps, servicesData } from '@/lib/data/page.data'
import { ServiceCard } from '../card/service-card'

const OurServices = () => {
    return (
        <Section>
            <Wrapper>
                <div>
                    <Marker title='02' description='Services' variant={'mix'} />
                    <h4 className='pt-3 md:pt-4 lg:pt-5 xl:pt-6 pb-2 lg:pb-3 xl:pb-4'>Our Services</h4>
                    <p>
                        From your website to the technology around your business, NubeNxt provides the services you need to build, operate and maintain it.
                    </p>
                </div>
                <div className='flex flex-col gap-10 md:gap-14 lg:gap-16 xl:gap-20 mt-6 md:mt-10 lg:mt-14 xl:mt-16'>
                    {
                        servicesData.map((item: ServiceDataProps) => {
                            return (
                                <ServiceCard key={`service-${item.id}`} service={item} />
                            )
                        })

                    }
                </div>
            </Wrapper>
        </Section>
    )
}

export default OurServices