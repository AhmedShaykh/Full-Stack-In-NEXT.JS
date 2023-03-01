import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

interface ButtonProps {
    btn: string;
}

const Button: FC<ButtonProps> = ({ btn }) => {

    const router = useRouter();

    return (
        <div className='flex justify-center'>
            <button
                onClick={() => router.push("/home")}
                className='py-2 px-4 bg-blue-800 font-bold hover:bg-white text-white hover:text-black rounded-xl mt-8 shadow-2xl'
            >
                {btn}
            </button>
        </div>
    )
}

export default Button;