import Section from '../shared/section'
import Wrapper from '../shared/wrapper'
import { Marker } from '../markers/marker'
import type { MethodologySection } from '@/lib/data/service.data'
import { NumberFeatureCard } from '../card/number-feature-card'

const Methodology = ({
    content
}: {
    content: MethodologySection
}) => {
    return (
        <Section>
            <Wrapper>
                <div>
                    <Marker
                        title={'02'}
                        variant='mix'
                        description={content.tag}
                    />
                    <h4 className='pt-3 md:pt-4 lg:pt-5 xl:pt-6 pb-2 lg:pb-3 xl:pb-4'>
                        {content.title}
                    </h4>
                    <p className='max-w-2xl'>
                        {content.description}
                    </p>
                </div>

                <div className='grid-25by25 gap-4 xl:gap-6 mt-6 md:mt-10 lg:mt-14 xl:mt-16'>
                    {content.items.map((item) => (
                        <NumberFeatureCard
                            key={`service-${item.id}`}
                            data={item}
                        />
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}

export default Methodology