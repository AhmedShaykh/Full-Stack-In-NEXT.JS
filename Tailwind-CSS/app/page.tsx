"use client";
import { FC, useEffect, useState } from 'react';
import Button from './button';
import Image from './image';
import { useTheme } from 'next-themes';
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';

const Home: FC = () => {

    const { systemTheme, theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <main className='py-4 px-2'>
            <div className='flex justify-around'>
                <h1 className='text-4xl font-semibold'>
                    Next.JS 13 With Tailwind CSS
                </h1>

                {currentTheme === 'dark' ? (
                    <button
                        className="bg-black-700 hover:bg-black rounded-md border-purple-400 border-2 p-4"
                        onClick={() => setTheme('light')}
                    >
                        <BsMoonFill />
                    </button>
                ) : (
                    <button
                        className="bg-gray-100 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
                        onClick={() => setTheme('dark')}
                    >
                        <BsFillSunFill />
                    </button>
                )}
            </div>

            <Button btn="Go To Next Page" />
            <Image />

            <div className="mt-8 flex justify-center">
                <button className="m-4 p-4 rounded-2xl border-8 border-cyan-500 ring-2">
                    Ring
                </button>
                <button
                    className="m-4 p-4 rounded-full ring-4 
                    ring-offset-8 ring-offset-black"
                >
                    Ring 2
                </button>
            </div>
        </main>
    )
};

export default Home;