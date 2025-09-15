import Image from 'next/image';
import Logo from '../assets/images/Logo.svg';
import Link from 'next/link';

const footer = [
    {href : '#' , label: 'Contact'},
    {href : '#' , label: 'Privacy Policy'},
    {href : '#' , label: 'Terms & Conditions'}
]

export default function Footer () {
    return (
        <section className='mt-16 bg-neutral-900'>
            <div className="container py-3 mx-autonpm ">
                <div className='flex flex-col md:flex-row md:justify-between  gap-6 items-center '>
                    <Link href='/'>
                        <Image src={Logo} alt='Logo' />
                    </Link>
                    <div>
                        <nav className='flex gap-6  text-white/50 '>
                            {footer.map((link, i) => (
                                <a href={link.href} key={i} className='text-sm '>{link.label}</a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}