import { FC } from 'react';
import Link from 'next/link';

const Home: FC = () => {
    return (
        <main className='py-4 px-2 bg-black h-full'>
            <div className='flex justify-center text-white'>
                <h1 className='text-4xl font-semibold'>
                    Flex & Grid In Tailwind CSS
                </h1>
            </div>

            <div className="pt-8 pb-4 flex justify-around">
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
            </div>
        </main>
    )
};

export default Home;