import React from 'react';
import Link from 'next/link';

const FetchApi = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl py-8 font-bold mb-4">
                Fetch API In Next.JS
            </h1>

            <Link href="fetchapi/static">
                <h2 className="text-2xl font-medium my-5 hover:text-blue-600">
                    1) Fetching Data Server Static
                </h2>
            </Link>

            <Link href="fetchapi/dynamic">
                <h5 className="text-2xl font-medium my-5 hover:text-blue-600">
                    2) Fetching Data Server Dynamic
                </h5>
            </Link>

            <Link href="fetchapi/client">
                <h5 className="text-2xl font-medium my-5 hover:text-blue-600">
                    3) Fetching Data Client
                </h5>
            </Link>

            <Link href="fetchapi/parallel">
                <h2 className="text-2xl font-medium my-5 hover:text-blue-600">
                    4) Fetching Data Parallel Pattern
                </h2>
            </Link>

            <Link href="fetchapi/sequential ">
                <h2 className="text-2xl font-medium my-5 hover:text-blue-600">
                    5) Fetching Data Sequential Pattern
                </h2>
            </Link>

            <Link href="/">
                <p className="font-semibold text-2xl py-4 text-blue-700 pointer">
                    Back To Home Page
                </p>
            </Link>
        </div>
    )
};

export default FetchApi;