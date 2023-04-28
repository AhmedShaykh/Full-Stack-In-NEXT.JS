import { FC } from 'react';
import Link from 'next/link';

const Home: FC = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl py-3 font-semibold">
                Learning Next.JS 13!
            </h1>

            <Link href="/todos">
                <h2 className="text-2xl pt-6 font-semibold underline text-cyan-300 hover:text-blue-600">
                    Todos
                </h2>
            </Link>

            <Link href="/search">
                <h2 className="text-2xl pt-6 font-semibold underline text-cyan-300 hover:text-blue-600">
                    Search
                </h2>
            </Link>
        </div>
    )
};

export default Home;