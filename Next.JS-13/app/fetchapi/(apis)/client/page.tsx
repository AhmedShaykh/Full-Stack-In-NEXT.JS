"use client";
import useSWR from 'swr';
import Link from 'next/link';;

const url = 'https://api.quotable.io/random?tags=technology';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Client = () => {

    const { data, error, isLoading } = useSWR(url, fetcher);

    if (error) return <div className="text-4xl my-6 font-bold">Failed to Load</div>

    if (isLoading) return <div className="text-4xl my-6 font-bold">Loading...</div>

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-4xl my-6 font-bold">Fetching In Client</h3>

            <div className="flex flex-col items-center py-6 mt-4 max-w-4xl">
                <h2 className="text-3xl font-semibold py-2">Content:</h2>

                <p className="text-2xl text-center">
                    {data.content}
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

export default Client;