import Image from 'next/image'
import { ArrowRight, ArrowRightIcon, Brackets, Carrot, ChevronRight, Pointer } from 'lucide-react'
import Wrapper from '../../shared/wrapper'
import Section from '../../shared/section'
import { Marker } from '../../markers/marker'
import { Button } from '../../ui/button'
import type { Hero } from '@/lib/data/service.data'

const Atf = ({
    content
}: {
    content: Hero
}) => {
    return (
        <Section>
            <Wrapper>
                <div className='flex flex-col items-center text-center'>
                    <div className='max-w-4xl'>
                        <Marker title={content.tag} variant={'primary'} className='mb-6 mx-auto justify-center uppercase' />
                        <h1>{content.title}</h1>
                        <p className='mt-6 text-lg max-w-3xl mx-auto'>{content.description} </p>
                        <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center '>
                            <Button variant={'default'} size='lg' className={'font-bold uppercase'}>
                                Start a Project <ArrowRight />
                            </Button>
                            <Button variant={'outline'} size='lg' className={'font-bold uppercase'}>
                                View Our Services <ChevronRight />
                            </Button>
                        </div>
                    </div>
                    <div className='mt-12 w-full'>
                        <Image
                            src={content.imageMobileUrl}
                            alt={content.title}
                            width={328}
                            height={463}
                            className='block w-full rounded-lg sm:hidden'
                            priority
                        />
                        <Image
                            src={content.imageDesktopUrl}
                            alt={content.title}
                            width={1400}
                            height={550}
                            className='hidden w-full rounded-lg sm:block'
                            priority
                        />
                    </div>
                </div>
            </Wrapper>

        </Section>
    )
}

export default Atf