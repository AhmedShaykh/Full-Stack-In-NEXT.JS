import React from 'react';
import { client } from '@/lib/sanityClient';
import { urlForImage } from '@/sanity/lib/image';
import Image from "next/image";
import { Image as IImage } from 'sanity';

export const getProductData = async () => {

    const res = await client.fetch(`
    *[_type=="product"] {
        title,
        image, 
        _id,
        price,
        category -> {
          name
        }
      }
    `);

    return res;
};

interface IProduct {
    title: string;
    image: IImage;
    _id: string;
    price: number;
    category: {
        name: string;
    }
};

const Home = async () => {

    const data: IProduct[] = await getProductData();

    return (
        <div className="my-8 grid grid-cols-[repeat(2,auto)] justify-center gap-x-10">
            {data.map(item => (
                <div
                    key={item._id}
                    className="border border-gray-500 py-4 px-6 rounded-md"
                >
                    <Image
                        src={urlForImage(item.image).url()}
                        alt="product"
                        width={300}
                        height={300}
                        className="my-4 object-cover max-h-[300px]"
                    />

                    <h2 className="text-xl my-1 font-bold">
                        {item.title}
                    </h2>

                    <h3 className="text-lg my-1 font-bold">
                        $ {item.price}
                    </h3>

                    <button className="my-2 py-2 px-6 rounded bg-blue-700 text-white font-semibold">
                        Add To Cart
                    </button>
                </div>
            ))}
        </div>
    )
};

export default Home;