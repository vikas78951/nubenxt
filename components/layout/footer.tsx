import Image from 'next/image'
import Wrapper from '../shared/wrapper'
import Section from '../shared/section'
import Contact from '../page-components/contact-cta'
import { footerLink } from '@/lib/data/footer.data'
import Logo from '../shared/logo'
import FooterLinkList from '../list/footer-link-list'
import { contactData } from '@/lib/data/contact.data'
import { ArrowRight } from 'lucide-react'

const Footer = () => {
    return (
        <>
            <Contact />
            <Section className='bg-black  pb-6 md:pb-8 lg:pb-10 '>
                <Wrapper >
                    <div className='grid-60by40'>
                        <div className=''>
                            <Logo className='text-background dark:text-foreground' />
                            <p className='mt-4 md:mt-4 lg:mt-5 xl:mt-6 text-sm max-w-[410]'>
                                Architectural technology and digital infrastructure constructed with absolute precision for elite clinical, spatial, and luxury enterprises.
                            </p>
                        </div>


                        <div className='flex justify-between mt-4 md:mt-6 lg:mt-0  '>

                            {
                                footerLink.map(item => {
                                    return (<FooterLinkList key={item.title} item={item} />)
                                })
                            }


                        </div>

                    </div>
                    <div className='block py-4 md:py-10 lg:py-16 xl:py-18' >
                        <hr className='border-muted ' />
                    </div>
                    <div className='flex flex-col md:flex-row gap-6 justify-between'>
                        <p className='text-muted text-xs'>
                            © 2025 NubeNxt. All engineered rights reserved.
                        </p>
                        <div>
                            <a className='font-bold flex gap-4 items-center hover:text-primary text-xs text-background! dark:text-foreground'  href={`mailto:${contactData.mail} `} target='_blank'>
                                {contactData.mail}
                                <ArrowRight size={16} className='text-primary' />

                            </a>
                        </div>
                    </div>
                </Wrapper>


            </Section>
        </>
    )
}

export default Footer