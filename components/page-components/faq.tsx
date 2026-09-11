import Section from '../shared/section'
import Wrapper from '../shared/wrapper'
import { Marker } from '../markers/marker'
import type { Faq, FaqSection } from '@/lib/data/service.data'
import FaqList from '../list/faq-list'
import {
    Accordion,

} from '@/components/ui/accordion'

const Faq = ({
    content
}: {
    content: FaqSection
}) => {

    console.log('content.items', content.items)
    return (
        <Section>
            <Wrapper>
                <div>
                    <Marker
                        title={'04'}
                        variant='mix'
                        description={content.tag}
                    />

                </div>
                <div className='mt-4 lg:mt-6 xl:mt-8'>
                    <Accordion defaultValue={[content.items[0].question]}>
                        {
                            content.items.map((item: Faq, index) => {
                                return (
                                    <FaqList key={`faq-${index}`} item={item} />
                                )
                            })

                        }
                    </Accordion>

                </div>
            </Wrapper>
        </Section>
    )
}

export default Faq