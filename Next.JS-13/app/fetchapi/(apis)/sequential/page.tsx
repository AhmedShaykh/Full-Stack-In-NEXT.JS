import React from 'react';
import Link from 'next/link';

type Book = {
    id: number;
    name: string;
    type: string;
    available: boolean;
};

async function getFiction() {

    const res = await fetch(
        'https://simple-books-api.glitch.me/books?type=fiction',
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };

    return res.json();
};

async function getNonFiction() {

    const res = await fetch(
        'https://simple-books-api.glitch.me/books?type=non-fiction',
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };

    return res.json();
};

const Sequential = async () => {

    const fictionBooks = await getFiction();

    const nonFictionBooks = await getNonFiction();

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-4xl my-6 font-bold">Data Sequential Pattern</h3>

            <div className="my-6 flex flex-col items-center">
                <h3 className="text-[2rem] font-bold py-1">Fiction Books:</h3>
                {fictionBooks.map((book: Book) => (
                    <p key={book.id} className="text-2xl py-2">
                        {book.name}
                    </p>
                ))}

                <br />

                <h3 className="text-[2rem] font-bold py-1">Non Fiction Books:</h3>
                <ul>
                    {nonFictionBooks.map((book: Book) => (
                        <p key={book.id} className="text-2xl py-2">
                            {book.name}
                        </p>
                    ))}
                </ul>
            </div>

            <Link href="/fetchapi">
                <p
                    className="text-2xl font-semibold text-blue-700 my-4"
                >
                    Back To Home
                </p>
            </Link>
        </div >
    )
};

export default Sequential;