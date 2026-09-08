import Section from '../shared/section'
import Wrapper from '../shared/wrapper'
import { Marker } from '../markers/marker'
import { InsightsDataProps, insightsData } from '@/lib/data/page.data'
import InsightList from '../list/insight-list'
const LatestInsight = () => {
    return (
        <Section className='lg'>
            <Wrapper>
                <div>
                    <Marker title='05' description='Insight' variant={'mix'} />
                   
                </div>
                <div className='mt-4 lg:mt-6 xl:mt-8'>
                    {
                        insightsData.map((item: InsightsDataProps) => {
                            return (
                                <InsightList key={`insight-${item.id}`} insight={item} />
                            )
                        })

                    }
                </div>
            </Wrapper>
        </Section>
    )
}

export default LatestInsight