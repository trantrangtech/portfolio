import {Sheet, SheetContent, SheetTrigger,SheetTitle} from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';
import { useState } from 'react';
const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
   
    
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen} >
            <SheetTrigger asChild>
                <AlignJustify className='cursor-pointer'  onClick={() => setIsOpen(true)} />
            </SheetTrigger>
            <SheetContent>
                <SheetTitle className="sr-only">Menu</SheetTitle> {/* Thêm tiêu đề ẩn */}
                <div className="flex flex-col items-center justify-between h-full p-8">
                    <div className='flex flex-col items-center gap-y-32'>
                        <Logo/>
                        <Nav containerStyles='flex flex-col items-center gap-y-6' linkStyles='text-2xl'
                         onLinkClick={() => setIsOpen(false)}/>
                        
                    </div>
                    <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl' onIconClick={() => setIsOpen(false)}/>
                </div>
            </SheetContent>
               
        </Sheet>
    );
}
export default MobileNav;