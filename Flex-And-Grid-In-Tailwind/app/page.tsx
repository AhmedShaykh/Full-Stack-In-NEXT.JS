import { FC } from 'react';
import Link from 'next/link';

const Home: FC = () => {
    return (
        <main className='py-4 px-2 bg-black h-screen'>
            <div className='flex justify-center text-white'>
                <h1 className='text-4xl font-semibold'>
                    Flex & Grid In Tailwind CSS
                </h1>
            </div>

            <div className="pt-8 flex justify-around">
                <div className="text-white">
                    <h1 className='text-4xl font-semibold'>
                        Flexbox
                    </h1>

                    <div className="flex justify-center">
                        <h2 className="text-white py-4 text-xl">
                            <Link href="/flex/chapter_1">
                                1) Display Flex
                            </Link>
                        </h2>
                    </div>
                </div>

                <div className="text-white">
                    <h1 className='text-4xl font-semibold'>
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