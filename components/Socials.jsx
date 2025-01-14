
'use client';
import {RiYoutubeFill, RiFacebookFill, RiLinkedinFill, RiGithubFill} from 'react-icons/ri';
import Link from 'next/link';
const icons=[
    {
        path:'/',
        name:<RiLinkedinFill/>
    },
    {
        path:'/',
        name:<RiGithubFill/>
    },
    {
        path:'/',
        name:<RiFacebookFill/>
    }
];
const Socials =({containerStyles,iconsStyles,onLinkClick})=>{
    return (
        <div className={`${containerStyles}`}>
            {
                icons.map((icon,index)=>{
                    console.log(icon);
                    return (
                        <Link href={icon.path} key={index} onClick={onLinkClick} >
                            <div className={`${iconsStyles}`}>{icon.name}</div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default Socials;