import React from 'react'
import Section from '../shared/section'
import Wrapper from '../shared/wrapper'
import { Marker } from '../markers/marker'

const WhatWeDo = () => {
    return (
        <Section className='bg-secondary'>
            <Wrapper>
                <div>
                    <Marker title='01' description='What We Do' variant={'mix'} />
                    <h3 className='py-3 md:py-4 lg:py-5 xl:py-6'>Technology for the way you do business.</h3>
                    <p>
                        NubeNxt provides practical technology services across your digital and physical setup. We design and develop websites and digital products, supply and maintain computers, and provide camera and security solutions — helping you get the right technology, set it up properly, and keep it working.
                    </p>
                </div>
            </Wrapper>
        </Section>
    )
}

export default WhatWeDo