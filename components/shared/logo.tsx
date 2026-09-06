import Link from 'next/link'

const Logo = () => {
    return (
        <Link
            href={'/'}
            className='font-heading font-extrabold text-2xl leading-normal tracking-wide '
        >NubeN<span className='text-primary'>x</span>t</Link>
    )
}

export default Logo