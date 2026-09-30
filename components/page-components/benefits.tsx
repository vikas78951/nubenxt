import Section from '../shared/section'
import Wrapper from '../shared/wrapper'
import { Marker } from '../markers/marker'
import BenefitList from '../list/benefits-list'

import type { BenefitsSection } from '@/lib/data/service.data'
const Benefits = ({
    content
}: {
    content: BenefitsSection
}) => {
    return (
        <Section className='bg-secondary'>
            <Wrapper>
                <div>
                    <div>
                      <Marker title='03' description='What You Get' variant={'mix'} />
                    </div>
                </div>
                <div className='mt-4 lg:mt-6 xl:mt-8'>
                    {
                        content.items.map((item: string, index) => {
                            return (
                                <BenefitList key={`benrfits-${index}`} data={item} />
                            )
                        })
                    }
                </div>
            </Wrapper>
        </Section>
    )
}

export default Benefits
