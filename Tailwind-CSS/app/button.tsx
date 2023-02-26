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
                className='py-2 px-4 bg-blue-700 font-bold hover:bg-white text-white hover:text-black rounded-xl mt-8'
            >
                {btn}
            </button>
        </div>
    )
}

export default Button;