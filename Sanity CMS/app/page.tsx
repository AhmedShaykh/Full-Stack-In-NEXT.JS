import React from 'react';
import { client } from '@/lib/sanityClient';

export const getProductData = async () => {

    const res = await client.fetch(`
    *[_type=="product" && _id=="469d9bab-a5db-4c4b-9369-82416e75232f"][0]
    `);

    return res;
};

async function Home() {

    const data = await getProductData();
    console.log(data);

    return (
        <div className="flex justify-center py-4">
            <h1 className="text-4xl font-bold">
                Sanity.io Headless CMS
            </h1>
        </div>
    )
};

export default Home;