"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {

    const [nav, setNav] = useState<boolean>(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="fixed left-0 top-0 w-full ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
                <Link href="/home">
                    <h1 className='text-4xl font-bold cursor-pointer'>
                        Navbar
                    </h1>
                </Link>

                <ul className='hidden sm:flex text-xl'>
                    <li className='p-4 cursor-pointer'>Home</li>
                    <li className='p-4 cursor-pointer'>About</li>
                    <li className='p-4 cursor-pointer'>Service</li>
                    <li className='p-4 cursor-pointer'>Contact</li>
                </ul>

                <div
                    onClick={handleNav}
                    className='block sm:hidden z-10'
                >
                    {nav ? (
                        <XMarkIcon className='h-8 w-8 text-white' />
                    ) : (
                        <Bars2Icon className='h-8 w-8' />
                    )}
                </div>

                <div
                    className={
                        nav
                            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center'
                            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center'
                    }
                >
                    <ul className='text-xl text-white'>
                        <li className='p-4 cursor-pointer'>Home</li>
                        <li className='p-4 cursor-pointer'>About</li>
                        <li className='p-4 cursor-pointer'>Service</li>
                        <li className='p-4 cursor-pointer'>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Navbar;