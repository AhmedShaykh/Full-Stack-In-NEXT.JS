import { FC } from 'react'
import Image from 'next/image';

const image: FC = () => {
    return (
        <div className='mt-20 flex justify-center'>
            <Image
                src="/SOL.svg"
                alt="SOLANA"
                width="200"
                height="200"
            />
        </div>

    )
};

export default image;