import React from 'react'
import Section from '../shared/section'
import Wrapper from '../shared/wrapper'
import { Marker } from '../markers/marker'
import { Reveal } from "@/components/animation/reveal"

const WhatWeDo = () => {
    return (
        <Section className='bg-secondary'>
            <Wrapper>
                <Reveal className="max-w-3xl">
                      <div>
                        <Marker title='01' description='What We Do' variant={'mix'} />
                      </div>
                      <h3 className='py-3 md:py-4 lg:py-5 xl:py-6'>Your website, your computers, and the cameras watching both.</h3>
                      <p>
                          Most businesses buy these three things from three different suppliers, and end up with three phone numbers and three invoices. We do all three, so the person who built your website is the person who fixes the network it runs on.
                      </p>
                </Reveal>
            </Wrapper>
        </Section>
    )
}

export default WhatWeDo