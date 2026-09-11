import Section from '../shared/section'
import Wrapper from '../shared/wrapper'
import { Marker } from '../markers/marker'
import type { SolutionSection } from '@/lib/data/service.data'
import { FeatureCard } from '../card/feature-card'

const Solution = ({
    content
}: {
    content: SolutionSection
}) => {
    return (
        <Section className='bg-secondary'>
            <Wrapper>
                <div>
                    <Marker
                        title={'01'}
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

                <div className='grid-50by50 gap-4 xl:gap-6 mt-6 md:mt-10 lg:mt-14 xl:mt-16'>
                    {content.items.map((item, index) => (
                        <FeatureCard
                            key={`solution-${item.id}-${index}`}
                            feature={item}
                        />
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}

export default Solution