import React from 'react'
import { BaseProps } from '@/lib/types/shared.type'
import { cn } from 'cn'


interface SectionProps extends BaseProps {

    header?: boolean,
    title?: string,
    description?: string,

}

const Section = ({

    header = false,
    title,
    description,
    className = '',
    children


}: SectionProps) => {
    return (
        <section className={cn(
            'section',
            className,
        )}>{children}</section>
    )
}

export default Section