import { FC } from 'react';
import Link from 'next/link';

const Home: FC = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl py-3 font-semibold">
                Learning Next.JS 13!
            </h1>

            <div className="pt-6 flex justify-between max-w-3xl">
                <Link href="/todos">
                    <h2 className="text-2xl font-semibold underline text-cyan-300 hover:text-blue-600">
                        Todos
                    </h2>
                </Link>

                <Link href="/fetchapi">
                    <h2 className="text-2xl font-semibold underline text-cyan-300 hover:text-blue-600">
                        Fetch API
                    </h2>
                </Link>
            </div>
        </div>
    )
};

export default Home;