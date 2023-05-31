import React from 'react';
import { client } from '@/lib/sanityClient';
// import urlFor from "@/lib/urlFor";
// import Image from "next/image";

export const getProductData = async () => {

    const res = await client.fetch(`
    *[_type=="product"]
    `);

    return res;
};

interface IProduct {
    title: string;
    description: string;
    image: string[];
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
                    {/* {item.image.map((img: any) => (
                        <>
                            <Image
                                src={urlFor(img.asset).url()}
                                alt="..."
                                fill
                            />
                        </>
                    ))} */}
                </div>
            ))}
        </div>
    )
};

export default Home;