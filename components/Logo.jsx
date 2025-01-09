import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
    return (
        <Link href='/'>
            <Image src={`/portfolio/logo.svg`} width={54} height={54} priority alt=""/>
        </Link>
    );
}
export default Logo;