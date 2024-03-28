'use client'

import { useState } from "react";
import { Popover } from "@headlessui/react"
import { Bars3Icon } from "@heroicons/react/24/outline";
import useScroll from "@/lib/hook/use-scroll";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrolled = useScroll(50);
    return(
        <header className={`fixed top-0 w-full  ${
            scrolled ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white"
        }`}>
            <nav className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                {/** CI */}
                <div className="flex lg:flex-1">
                    <a href="#" className=" -m-1.5 p-1.5">
                        <span className=" sr-only">ItemKit</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button 
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden='true' />
                    </button>
                </div>
                {/** menu */}
                <Popover.Group >
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
                </Popover.Group>       
            </nav>            
        </header>
    )
}