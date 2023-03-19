import React from 'react';

const container = `max-w-none w-auto min-w-[38rem]`;

const page = () => {
    return (
        <div>
            <div className={`${container} min-h-screen grid grid-cols-2`}>
                <div className="item">
                    <a href="#">Comfort Stay</a>
                </div>
                <div className="item">
                    <a href="#">Outdoor Activities</a>
                </div>
                <div className="item">
                    <a href="#">Luxury Dining</a>
                </div>
                <div className="item">
                    <a href="#">Children Friendly</a>
                </div>
            </div>

            <div className="max-w-none w-auto min-h-screen grid grid-cols-[30rem,1fr]">
                <div className="bg-pink-600 text-white p-10">
                    <h1 className="font-bold text-4xl">Sidebar</h1>
                    <ol>
                        <li className="h-1 my-10 bg-white bg-opacity-50"></li>
                        <li className="h-1 my-10 bg-white bg-opacity-50"></li>
                        <li className="h-1 my-10 bg-white bg-opacity-50"></li>
                        <li className="h-1 my-10 bg-white bg-opacity-50"></li>
                    </ol>
                </div>
                <div className="p-10">
                    <h1 className="font-bold text-4xl">Main Content</h1>
                    <p className="h-1 my-10 bg-black bg-opacity-10"></p>
                    <p className="h-1 my-10 bg-black bg-opacity-10"></p>
                    <p className="h-1 my-10 bg-black bg-opacity-10"></p>
                    <p className="h-1 my-10 bg-black bg-opacity-10"></p>
                    <p className="h-1 my-10 bg-black bg-opacity-10"></p>
                    <p className="h-1 my-10 bg-black bg-opacity-10"></p>
                </div>
            </div>

            <div className="w-[70%] m-16 p-8 bg-white grid grid-cols-[1fr,auto]">
                <div className="pb-5">
                    <h3 className="font-bold text-xl">Veg Burger</h3>
                    <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque hic eligendi</p>
                </div>
                <span className="text-5xl pl-4"> 🍔 </span>
                <div className="pb-5">
                    <h3 className="font-bold text-xl">Tacos</h3>
                    <p className="mt-1">Quos sunt non labore ab dicta ea sequi error, sapiente asperiores quas.</p>
                </div>
                <span className="text-5xl pl-4"> 🌮 </span>
                <div className="pb-5">
                    <h3 className="font-bold text-xl">ClassNameic Waffles</h3>
                    <p className="mt-1">Dolorem nesciunt minima reprehenderit natus nam ipsum ipsa, laudantium.</p>
                </div>
                <span className="text-5xl pl-4"> 🧇 </span>
            </div>
        </div>
    )
};

export default page;