import { ArrowRight, PhoneCall } from 'lucide-react'
import Wrapper from '../shared/wrapper'
import Section from '../shared/section'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { contactData, getWhatsAppUrl } from '@/lib/data/contact.data'

const Contact = () => {
    return (
        <Section className='bg-black xl'>
            <Wrapper>
                <div className=''>
                    <div className='max-w-[800] text-center mx-auto'>
                        <Badge variant={'ghost'} className="text-xs p-0 mb-2 text-primary font-bold">WEB · COMPUTERS · CAMERAS</Badge>

                        <h1 className='text-background dark:text-foreground'>Need technology for your business?</h1>
                        <p className='mt-6 text-lg max-w-[600] mx-auto'>
                            Tell us what you need. We&apos;ll help you build, choose, set up or maintain the right technology.</p>
                        <div className='mt-10 flex flex-col justify-center sm:flex-row gap-4'>
                            <a
                                href={getWhatsAppUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <Button variant={'default'} size='lg' className={'w-full font-bold uppercase sm:w-auto'}>
                                    Start a Project <ArrowRight />
                                </Button>
                            </a>
                            <a
                                href={`tel:${contactData.telNumber || contactData.number}`}
                                className="w-full sm:w-auto"
                            >
                                <Button variant={'outline'} size='lg' className={'w-full font-bold uppercase bg-transparent! border-background! text-background! dark:bg-transparent! hover:text-foreground! dark:border-foreground! dark:text-foreground! dark:hover:bg-foreground! dark:hover:text-background! sm:w-auto'}>
                                    <PhoneCall /> {contactData.displayNumber || contactData.number}
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export default Contact