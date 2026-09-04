import Link from 'next/link'

const Logo = () => {
    return (
        <Link
            href={'/'}
            className='font-heading font-extrabold text-lg leading-normal tracking-wide '
        >NubeN<span className='text-primary'>x</span>t</Link>
    )
}

export default Logo