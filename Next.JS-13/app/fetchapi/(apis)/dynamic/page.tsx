import React from 'react';
import Link from 'next/link';

async function getData() {

    const res = await fetch(
        'https://api.quotable.io/random?tags=technology',
        { cache: "no-store" }
        // { cache: "no-cache" } // Create Page In Build In Time If Any Change In Data Then Change Content...
        // { next: { revalidate: 5 } } // Take Some Time To Store A Data In Seconds Then Store New Data...
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };

    return res.json();
};

const Dynamic = async () => {

    const quote = await getData();

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-4xl my-6 font-bold">Data Server Dynamic</h3>

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

export default Dynamic;