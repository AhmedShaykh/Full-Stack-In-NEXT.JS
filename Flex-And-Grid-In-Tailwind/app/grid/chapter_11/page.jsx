import React from 'react';

const page = () => {
    return (
        <div>
            <section class="max-w-xl my-16 mx-auto bg-white p-8 grid grid-rows-[auto,auto] grid-flow-col justify-between">
                <span className="text-3xl font-bold">11.5k</span>
                <p>Tweets</p>
                <span className="text-3xl font-bold">9.3k</span>
                <p>Followers</p>
                <span className="text-3xl font-bold">776</span>
                <p>Following</p>
            </section>
        </div>
    )
};

export default page;