import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
//     console.log('NODE_ENV:', process.env.NODE_ENV);
    const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
    return (
        <Link href='/'>
            <Image src={`${basePath}/logo.svg`} width={54} height={54} priority alt=""/>
        
        </Link>
       
    );
}
export default Logo;