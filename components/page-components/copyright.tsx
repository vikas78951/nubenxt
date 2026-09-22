import React from 'react'
import Section from '../shared/section'
import Wrapper from '../shared/wrapper'
import { contactData } from '@/lib/data/contact.data'

const CopyRight = () => {
    return (
        <Section className='bg-black  py-6 '>
            <Wrapper className=' '>
                <div className='grid-50by50'>
                    <p>
                        © 2026 Craftorus. All engineered rights reserved.
                    </p>
                    <div>
                        <a href={`mailto:${contactData.mail}`} className="hover:text-primary transition-colors">{contactData.mail}</a>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export default CopyRight