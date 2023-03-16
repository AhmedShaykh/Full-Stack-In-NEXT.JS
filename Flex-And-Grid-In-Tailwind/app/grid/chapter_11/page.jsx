import React from 'react';

const page = () => {
    return (
        <div className="p-8 my-12 mx-auto max-w-4xl">
            <div className="max-w-none w-auto grid sm:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="font-bold text-2xl">Standard</h2>
                    <span className="text-sm opacity-80">Monthly bg-white p-8 rounded-lg shadow-md</span>
                    <p className="font-bold text-4xl mt-5">$25</p>
                </div>
                <div className="p-8 rounded-lg shadow-md bg-pink-600 text-white order-first sm:order-none">
                    <h2 className="font-bold text-2xl">Popular</h2>
                    <span className="text-sm opacity-80">Monthly Plan</span>
                    <p className="font-bold text-4xl mt-5">$40</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="font-bold text-2xl">Premium</h2>
                    <span className="text-sm opacity-80">Monthly Plan</span>
                    <p className="font-bold text-4xl mt-5">$55</p>
                </div>
            </div>
        </div>
    )
};

export default page;