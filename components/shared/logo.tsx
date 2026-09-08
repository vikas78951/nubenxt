import { cn } from 'cn'
import Link from 'next/link'

const Logo = ({
    className
}:{
    className?:string
}) => {
    return (
        <Link
            href={'/'}
            className={cn('font-heading font-extrabold text-2xl leading-normal tracking-wide ',className)}
        >NubeN<span className='text-primary'>x</span>t</Link>
    )
}

export default Logo