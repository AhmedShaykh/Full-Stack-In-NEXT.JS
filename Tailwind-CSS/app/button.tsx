import React, { FC } from 'react';

interface ButtonProps {
    btn: string;
}

const Button: FC<ButtonProps> = ({ btn }) => {
    return (
        <>
            <button
                className='py-2 px-4 bg-blue-600 hover:bg-white text-white hover:text-black rounded-xl mt-4'
            >
                {btn}
            </button>
        </>
    )
}

export default Button;