import Image from 'next/image'
import { ArrowRight, ArrowRightIcon, Brackets, Carrot, ChevronRight, ClockAlert, PhoneCall, Pointer } from 'lucide-react'
import Wrapper from '../shared/wrapper'
import Section from '../shared/section'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { contactData } from '@/lib/data/contact.data'

const Contact = () => {
    return (
        <Section className='bg-black xl'>
            <Wrapper>
                <div className=''>
                    <div className='max-w-[800] text-center mx-auto'>
                        <Badge variant={'ghost'} className="text-xs p-0 mb-2 text-primary font-bold">WEB · COMPUTERS · CAMERAS</Badge>

                        <h1 className='text-background dark:text-foreground'>Need technology for your business?</h1>
                        <p className='mt-6 text-lg max-w-[600] mx-auto'>
                            Tell us what you need. We'll help you build, choose, set up or maintain the right technology.</p>
                        <div className='mt-10 flex flex-col justify-center sm:flex-row gap-4  '>
                            <Button variant={'default'} size='lg' className={'font-bold uppercase'}>
                                Start a Project <ArrowRight />
                            </Button>
                            <Button variant={'outline'} size='lg' className={'font-bold uppercase bg-transparent! border-background! text-background! dark:bg-transparent! hover:text-foreground! dark:border-foreground! dark:text-foreground! dark:hover:bg-foreground! dark:hover:text-background!'}>
                                <PhoneCall /> {contactData.number}
                            </Button>
                        </div>
                    </div>

                </div>
            </Wrapper>

        </Section>
    )
}

export default Contact