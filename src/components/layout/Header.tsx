'use client'

import { useState, Fragment } from "react";
import useScroll from "@/lib/hook/use-scroll";

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { products, menuItems } from "@/data/menu";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

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
                    <a href="/" className=" -m-1.5 p-1.5">
                        <span className=" sr-only">ItemKit</span>
                        <img className="h-10 w-auto rounded-full" src="/itemkit-ci.png" alt="" />
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
                <Popover.Group className={"hidden lg:flex lg:gap-x-12"}>
                    <Popover className="relative">
                        <Popover.Button className={"flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"}>
                            Product
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidde="true" />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className={"absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"}>
                                <div className="p-4">
                                    {
                                        products.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"/>
                                                </div>
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-semibold text-gray-900">
                                                        {item.name}
                                                        <span className="absolute inset-0"/>
                                                    </a>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    {
                        menuItems.map((data) => (
                            <a href={data.href} className="text-sm font-semibold leading-6 text-gray-900">{data.name}</a>
                        ))
                    }
                    
                </Popover.Group>     
            </nav>        

            {/** Mobile */}    
            <Dialog as="div" className={"lg:hidden"} open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10">
                <Dialog.Panel className={"fixed inset-y-0 right-0 z-10 w-full overflow-auto bg-white px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"}>
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Item kit</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />                            
                        </a>
                        <button 
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className={"-mx-3"}>
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button
                                                className={"flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"}
                                                aria-hidden="true"
                                            >
                                                Product
                                                <ChevronDownIcon 
                                                    className={classNames(open? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className={"mt-2 space-y-2"}>
                                                {
                                                    products.map((item) => (
                                                        <Disclosure.Button
                                                            key={item.name}
                                                            as="a"
                                                            href={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                        >
                                                            {item.name}
                                                        </Disclosure.Button>
                                                    ))
                                                }
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                {
                                    menuItems.map((data) => (
                                        <a
                                            href={data.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7
                                             text-gray-900 hover:bg-gray-50"
                                        >
                                            {data.name}
                                        </a>                                                                       
                                    ))
                                }                                
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
                </div>                                    
            </Dialog>
        </header>
    )
}