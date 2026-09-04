
import React from 'react'
import { BaseProps } from '@/lib/types/shared.type'
import { cn } from 'cn'
const Wrapper = ({ className = '',children }: BaseProps) => {
    return (
        <div
            className={cn(
                className,
                'wrapper'
            )}
        >{children}</div>
    )
}

export default Wrapper