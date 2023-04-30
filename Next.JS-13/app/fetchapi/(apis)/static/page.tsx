import React from 'react';
import Link from 'next/link';

async function getData() {

    const res = await fetch('https://api.quotable.io/random?tags=technology');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };

    return res.json();
};

const Static = async () => {

    const quote = await getData();

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-4xl my-6 font-bold">Data Server Static</h3>

            <div className="flex flex-col items-center py-6 mt-4 max-w-4xl">
                <h2 className="text-3xl font-semibold py-2">Content:</h2>

                <p className="text-2xl text-center">
                    {quote.content}
                </p>
            </div>

            <Link href="/fetchapi">
                <p
                    className="text-2xl font-semibold text-blue-700 mt-6"
                >
                    Back To Home
                </p>
            </Link>
        </div>
    )
};

export default Static;