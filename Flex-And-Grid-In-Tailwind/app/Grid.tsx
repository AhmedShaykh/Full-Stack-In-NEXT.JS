import React, { FC } from 'react';
import Link from 'next/link';

const Grid: FC = () => {
    return (
        <div className="text-white">
            <h1 className='text-4xl font-semibold py-4'>
                Grid System
            </h1>

            <div className="flex justify-center">
                <h2 className="text-white py-4 text-xl">
                    <Link href="/grid/chapter_1">
                        1) Display Grid
                    </Link>
                </h2>
            </div>
        </div>
    )
};

export default Grid;