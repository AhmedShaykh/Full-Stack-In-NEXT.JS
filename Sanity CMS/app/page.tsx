import React from 'react';
import { client } from '@/lib/sanityClient';

export const getProductData = async () => {

    const res = await client.fetch(`
    *[_type=="product"]{ title, description }
    `);

    return res;
};

interface IProduct {
    title: string;
    description: string;
};

const Home = async () => {

    const data: IProduct[] = await getProductData();

    return (
        <div className="py-4">
            {data.map((item, i) => (
                <div key={i} className="my-8 flex flex-col items-center">
                    <h1 className="text-4xl font-bold">
                        {item.title}
                    </h1>
                    <p className="mt-3 text-xl">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    )
};

export default Home;