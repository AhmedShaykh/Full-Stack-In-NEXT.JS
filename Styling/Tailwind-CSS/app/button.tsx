import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

interface ButtonProps {
    btn: string;
}

const Button: FC<ButtonProps> = ({ btn }) => {

    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;

    const router = useRouter();

    return (
        <div className='flex justify-center'>
            {currentTheme === 'dark' ? (
                <button
                    onClick={() => router.push("/home")}
                    className='py-2 px-4 bg-blue-800 font-bold hover:bg-white text-white hover:text-black rounded-xl mt-8 shadow-2xl'
                >
                    {btn}
                </button>
            ) : (
                <button
                    onClick={() => router.push("/home")}
                    className='py-2 px-4 bg-blue-800 font-bold hover:bg-black text-white hover:text-white rounded-xl mt-8 shadow-2xl'
                >
                    {btn}
                </button>
            )}
        </div>
    )
}

export default Button;