import React, { FC } from 'react';
import Link from 'next/link';

const Flex: FC = () => {
    return (
        <div className="text-white">
            <h1 className='text-4xl font-semibold py-4'>
                Flexbox
            </h1>

            <div className="flex justify-center flex-col">
                <h2 className="text-white py-4 text-xl">
                    <Link href="/flex/chapter_1">
                        1) Display Flex
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/flex/chapter_2">
                        2) Justify Content
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/flex/chapter_3">
                        3) Flex Wrap
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/flex/chapter_4">
                        4) Align Items
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/flex/chapter_5">
                        5) Flex Direction
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/flex/chapter_6">
                        6) Flex Grow
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/flex/chapter_7">
                        7) Flex Shrink
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/flex/chapter_8">
                        8) Flex Basis
                    </Link>
                </h2>
            </div>
        </div>
    )
};

export default Flex;