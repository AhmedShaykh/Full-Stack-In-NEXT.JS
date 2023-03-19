import React from 'react';

const page = () => {
    return (
        <div>
            <form className="max-w-2xl my-8 mx-auto p-8 border border-gray-300 grid grid-cols-2 gap-6 bg-slate-100">
                <div>
                    <label className="block"> Full Name </label>
                    <input className="mt-1 py-2 px-3 border border-gray-300 rounded-md w-full resize-none" type="text" name="name" placeholder="Full Name" />
                </div>
                <div >
                    <label className="block"> Email Address </label>
                    <input className="mt-1 py-2 px-3 border border-gray-300 rounded-md w-full resize-none" type="email" name="email" placeholder="Email Address" />
                </div>
                <div className="col-start-2 row-start-1 row-end-3">
                    <label className="block"> Message </label>
                    <textarea className="mt-1 py-2 px-3 border border-gray-300 rounded-md w-full resize-none" name="message" placeholder="Your Message" rowsName="5"></textarea>
                </div>
                <button className="col-span-full inline-block py-3 px-9 bg-red-500 text-white font-bold rounded-full">Send a Message</button>
            </form>

            <section className=" max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 my-4 p-8 bg-white">
                <img
                    className="w-full max-w-md m-auto sm:row-start-1 sm:row-end-3 md:row-end-2 md:col-start-2"
                    src="https://res.cloudinary.com/thirus/image/upload/v1635003545/images/mobile-ux_yc0c3w.png"
                />
                <div className="md:col-start-1 md:text-right">
                    <h3 className="font-bold text-xl mt-4 text-blue-800">List Building</h3>
                    <p className="mt-1">It's very easy to start creating email lists for your marketing actions, give it a try</p>
                    <h3 className="font-bold text-xl mt-4 text-blue-800">Campaign Tracker</h3>
                    <p className="mt-1">Campaigns is a feature we've created since the beginning and it's at the core of Lomar</p>
                    <h3 className="font-bold text-xl mt-4 text-blue-800">Analytics Tool</h3>
                    <p className="mt-1">Lomar collects all the necessary data to help you analyse different situations</p>
                </div>
                <div className="sm:col-start-2 md:col-start-3">
                    <h3 className="font-bold text-xl mt-4 text-blue-800">Admin Control</h3>
                    <p className="mt-1">Rights of users and admins can easily be managed through the control panel</p>
                    <h3 className="font-bold text-xl mt-4 text-blue-800">Integration Setup</h3>
                    <p className="mt-1">We're providing a step-by-step integration session to implement automation</p>
                    <h3 className="font-bold text-xl mt-4 text-blue-800">Help Line Support</h3>
                    <p className="mt-1">Quality support is our top priority so please contact us for any problem you encounter</p>
                </div>
            </section>
        </div>
    )
};

export default page;