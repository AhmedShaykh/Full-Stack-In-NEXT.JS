import React, { FC } from 'react';

const container = `max-w-none w-72 my-8 mx-auto`;

const btn = `mt-4 bg-cyan-600 text-white py-2 px-4 rounded-md text-sm`;

const page: FC = () => {
    return (
        <div className="bg-white h-screen py-12">
            <div className="pb-8">
                <div className={`${container} flex flex-col`}>
                    <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="" />
                    <span className="block mt-5 font-bold text-2xl text-cyan-800">$220</span>
                    <h3 className="mt-2 font-bold text-xl">Comfort Grey Sneakers</h3>
                    <p className="mt-2 text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum impedit veniam</p>
                    <button className={`self-end ${btn}`}>Add to Cart</button>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="flex items-center max-w-none w-96 m-8 p-4 bg-teal-700 text-white">
                    <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                        className="w-16 h-16 object-cover mr-3 rounded-md"
                    />
                    <div>
                        <p className="text-2xl font-bold">Richard Carl</p>
                        <span className="text-sm opacity-90">Graphic Designer</span>
                    </div>
                    <div className="rating ml-auto self-center">
                        <span>5.0</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default page;