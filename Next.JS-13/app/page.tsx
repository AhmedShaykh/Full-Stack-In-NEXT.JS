import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-5xl my-8 font-semibold">
                Learning Next.JS 13!
            </h1>

            <div className="pt-8 flex justify-evenly max-w-3xl">
                <Link href="/todos">
                    <h2 className="text-2xl font-semibold underline text-cyan-600 hover:text-blue-600">
                        {`Todo's`}
                    </h2>
                </Link>

                <Link href="/fetchapi">
                    <h2 className="text-2xl font-semibold underline text-cyan-600 hover:text-blue-600">
                        Fetch API
                    </h2>
                </Link>
            </div>
        </div>
    )
};

export default Home;