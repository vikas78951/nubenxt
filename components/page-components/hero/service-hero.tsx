import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Wrapper from '../../shared/wrapper'
import Section from '../../shared/section'
import { Marker } from '../../markers/marker'
import { Button } from '../../ui/button'
import type { Hero } from '@/lib/data/service.data'
import { getWhatsAppUrl } from '@/lib/data/contact.data'
import { HeroEntrance } from "@/components/animation/hero-entrance"

const Atf = ({
    content
    , stack
}: {
    content: Hero
    stack?: string[]
}) => {
    return (
        <Section>
            <Wrapper>
                <HeroEntrance className='flex flex-col items-center text-center'>
                    <div className='max-w-4xl'>
                        <Marker title={content.tag} variant={'primary'} className='mb-6 mx-auto justify-center uppercase' />
                        <h1>{content.title}</h1>
                        <p className='mt-6 text-lg max-w-3xl mx-auto'>{content.description}</p>
                        <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
                            <a
                                href={getWhatsAppUrl(content.title)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <Button variant={'default'} size='lg' className={'w-full font-bold uppercase sm:w-auto'}>
                                    Start a Project <ArrowRight />
                                </Button>
                            </a>
                            <Link href="/services" className="w-full sm:w-auto">
                                <Button variant={'outline'} size='lg' className={'w-full font-bold uppercase sm:w-auto'}>
                                    View Our Services <ChevronRight />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    {content.photoUrl ? (
                        <div className='mt-12 w-full overflow-hidden rounded-2xl border border-border/40 shadow-xl'>
                            <Image
                                src={content.photoUrl}
                                alt={`${content.title} - Craftorus`}
                                width={1400}
                                height={788}
                                className='block aspect-7/4 w-full rounded-2xl object-cover'
                                priority
                            />
                        </div>
                    ) : (
                        <div className='mt-12 w-full overflow-hidden rounded-2xl border border-border/40 shadow-xl'>
                            <Image
                                src={content.imageMobileUrl}
                                alt={`${content.title} - Craftorus`}
                                width={390}
                                height={550}
                                className='block w-full rounded-2xl sm:hidden'
                                priority
                            />
                            <Image
                                src={content.imageDesktopUrl}
                                alt={`${content.title} - Craftorus`}
                                width={1400}
                                height={550}
                                className='hidden w-full rounded-2xl sm:block'
                                priority
                            />
                        </div>
                    )}

                    {stack && stack.length > 0 && (
                        <p className="mt-6 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                            Built with{" "}
                            {stack.map((tech, index) => (
                                <span key={tech}>
                                    {index > 0 && <span className="px-1.5 text-border">/</span>}
                                    {tech}
                                </span>
                            ))}
                        </p>
                    )}
                </HeroEntrance>
            </Wrapper>
        </Section>
    )
}

export default Atf