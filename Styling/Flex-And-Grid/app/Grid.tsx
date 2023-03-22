import React, { FC } from 'react';
import Link from 'next/link';

const Grid: FC = () => {
    return (
        <div className="text-white">
            <h1 className='text-4xl font-semibold py-4'>
                Grid System
            </h1>
            <div className="flex justify-center flex-col">
                <h2 className="text-white py-4 text-xl">
                    <Link href="/grid/chapter_1">
                        1) Display Grid & Grid Template Columns
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/grid/chapter_2">
                        2) Grid Template Rows
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/grid/chapter_3">
                        3) Grid Gap
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/grid/chapter_4">
                        4) Grid Justify Content
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/grid/chapter_5">
                        5) Grid Align Content
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/grid/chapter_6">
                        6) Grid Justify Items
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/grid/chapter_7">
                        7) Grid Align Items
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/grid/chapter_8">
                        8) Grid Place Items
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/grid/chapter_9">
                        9) Grid Column Start, End & Span
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/grid/chapter_10">
                        10) Grid Row
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/grid/chapter_11">
                        11) Grid Auto Flow
                    </Link>
                </h2>
                <h2 className="text-white py-4 text-xl">
                    <Link href="/grid/chapter_12">
                        12) Grid Justify Self & Align Self
                    </Link>
                </h2>
            </div>
        </div>
    )
};

export default Grid;