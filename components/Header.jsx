'use client';
import React,{useState,useEffect} from "react";
//components
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
    return (
        <header>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo/>
                    <div className="flex items-center gap-x-6">
                        {/*Nav */}
                        <Nav containerStyles="hidden xl:flex gap-x-8 items-center"/>
                        <ThemeToggler/>
                        {/*Mobile Nav */}
                        <div className="xl:hidden">
                            <MobileNav/>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </header>
    );
};
export default Header;