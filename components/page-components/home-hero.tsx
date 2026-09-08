import Image from 'next/image'
import { ArrowRight, ArrowRightIcon, Brackets, Carrot, ChevronRight, Pointer } from 'lucide-react'
import Wrapper from '../shared/wrapper'
import Section from '../shared/section'
import { Marker } from '../markers/marker'
import { Button } from '../ui/button'

const Atf = () => {
    return (
        <Section>
            <Wrapper>
                <div className='grid-60by40'>
                    <div className='max-w-2xl'>
                        <Marker title='TECHNOLOGY SERVICES' variant={'primary'} className='mb-6' />
                        <h1>Technology that makes your business look the part</h1>
                        <p className='mt-6 text-lg'>
                            NubeNxt provides professional web development, computer solutions, and camera security services. We build, supply, install and maintain the technology your business relies on.
                        </p>
                        <div className='mt-10 flex flex-col sm:flex-row gap-4 '>
                            <Button variant={'default'} size='lg' className={'font-bold uppercase'}>
                                Start a Project <ArrowRight />
                            </Button>
                            <Button variant={'outline'} size='lg' className={'font-bold uppercase'}>
                                View Our Services <ChevronRight />
                            </Button>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <Image
                            src='/images/abstract-render.png'
                            alt='atf-abstract-render'
                            height={'520'}
                            width={'560'}
                            className='rounded-lg'
                            loading='eager'
                        />
                    </div>
                </div>
            </Wrapper>

        </Section>
    )
}

export default Atf