import React from 'react';

const page = () => {
    return (
        <div>
            <div className="max-w-2xl my-8 bg-white rounded-md grid grid-cols-[auto,auto,1fr]">
                <div className="p-8 pr-4">
                    <h3 className="font-bold text-2xl">Cheese & Grill Restaurant</h3>
                    <span className="mt-1">St. Marks Street</span>
                </div>
                <span className="inline-block mt-8 py-1 px-2 rounded-full bg-gray-200 text-gray-500 text-sm self-start">Kid Friendly</span>
                <img
                    className="block w-32 h-32 object-cover rounded-r-md justify-self-end"
                    src="https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200"
                />
            </div>
            <div className="max-w-2xl my-8 bg-white rounded-md grid grid-cols-[auto,auto,1fr]">
                <div className="p-8 pr-4">
                    <h3 className="font-bold text-2xl">The Bowl Place</h3>
                    <span className="mt-1">Rover Lane</span>
                </div>
                <span className="inline-block mt-8 py-1 px-2 rounded-full bg-gray-200 text-gray-500 text-sm self-start">Family Restaurant</span>
                <img
                    className="block w-32 h-32 object-cover rounded-r-md justify-self-end"
                    src="https://images.pexels.com/photos/2781537/pexels-photo-2781537.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200"
                />
            </div>

            <div className="my-4">
                <figure className="grid m-4 max-w-[24rem] max-h-[18rem]">
                    <img
                        className="w-full h-full col-start-1 col-end-2 row-start-1 row-end-2"
                        src="https://picsum.photos/600/400"
                    />
                    <figcaption className="col-start-1 col-end-2 row-start-1 row-end-2 self-center bg-gray-800 bg-opacity-60 text-white p-4">This is a long caption flowing into two lines or more.</figcaption>
                </figure>
            </div>
        </div>
    )
};

export default page;