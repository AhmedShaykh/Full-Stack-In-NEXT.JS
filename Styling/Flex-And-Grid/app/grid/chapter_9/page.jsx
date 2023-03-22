import React from 'react';

const form = `max-w-lg my-8 mx-auto p-8 border border-gray-300 bg-slate-100`;

const page = () => {
    return (
        <div>
            <form className={`${form} grid grid-cols-[auto,1fr] items-center gap-y-6 gap-x-12`}>
                <label> Full Name </label>
                <input className="py-2 px-3 border border-gray-300 rounded" type="text" name="name" placeholder="Full Name" />
                <label> Email Address </label>
                <input className="py-2 px-3 border border-gray-300 rounded" type="email" name="email" placeholder="Email Address" />
                <button type="submit" className="col-start-2 inline-block mt-4 py-3 px-9 bg-red-500 text-white font-bold rounded-full">Create Account</button>
            </form>

            <div className="max-w-2xl mx-auto grid sm:grid-cols-2 my-8">
                <div className="bg-white text-gray-500 sm:col-start-1 sm:col-end-3 p-10">
                    <h2 className='font-bold text-3xl text-teal-600'>Join our community</h2>
                    <h3 className='font-bold text-xl text-[#c0df34] my-4'>30-day, hassle-free money back guarantee</h3>
                    <p className='mt-1'>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
                </div>
                <div className="bg-teal-500 text-white p-10">
                    <h3 className='font-bold text-xl'>Monthly Subscription</h3>
                    <span className="inline-block mt-2.5 align-middle font-bold text-4xl">$29</span><span className="inline-block mt-2.5 align-middle pl-3">
                        per month
                    </span>
                    <p className='mt-1'>Full access for less than $1 a day</p>
                    <a href="#" className="mt-6 block py-3 px-6 text-center bg-[#c0df34] rounded font-bold">Sign Up</a>
                </div>
                <div className="bg-teal-400 p-10">
                    <h3 className='font-bold text-xl'>Why Us</h3>
                    <ol className="mt-3 text-sm">
                        <li className='text-white'>Tutorials by industry experts</li>
                        <li className='text-white'>Peer & expert code review</li>
                        <li className='text-white'>Coding exercises</li>
                        <li className='text-white'>Access to our GitHub repos</li>
                        <li className='text-white'>Community forum</li>
                        <li className='text-white'>Flashcard decks</li>
                        <li className='text-white'>New videos every week</li>
                    </ol>
                </div>
            </div>

            <div className="max-w-none w-auto min-h-screen grid grid-cols-[22rem,1fr] grid-rows-[auto,1fr,auto]">
                <header className="col-span-full bg-gray-600 text-white py-6 px-10">
                    <h2 className="font-bold text-2xl">Header</h2>
                </header>
                <div className="bg-gray-300 p-10">
                    <h2 className="font-bold text-2xl">Sidebar</h2>
                    <ol>
                        <li className="h-1 my-10 bg-white bg-opacity-50"></li>
                        <li className="h-1 my-10 bg-white bg-opacity-50"></li>
                        <li className="h-1 my-10 bg-white bg-opacity-50"></li>
                        <li className="h-1 my-10 bg-white bg-opacity-50"></li>
                    </ol>
                </div>
                <div className="p-10">
                    <h2 className="font-bold text-2xl">Main Content</h2>
                    <p className="h-1 my-10 bg-black bg-opacity-10"></p>
                    <p className="h-1 my-10 bg-black bg-opacity-10"></p>
                    <p className="h-1 my-10 bg-black bg-opacity-10"></p>
                    <p className="h-1 my-10 bg-black bg-opacity-10"></p>
                    <p className="h-1 my-10 bg-black bg-opacity-10"></p>
                    <p className="h-1 my-10 bg-black bg-opacity-10"></p>
                </div>
                <footer className="col-span-full bg-gray-600 text-white py-6 px-10">
                    <h2 className="font-bold text-2xl">Footer</h2>
                </footer>
            </div>
        </div>
    )
};

export default page;