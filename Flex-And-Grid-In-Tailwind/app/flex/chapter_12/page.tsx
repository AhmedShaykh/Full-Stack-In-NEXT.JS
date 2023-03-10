import React, { FC } from 'react';

const page: FC = () => {

    const container = `max-w-none w-auto min-h-screen bg-indigo-200 p-8`;

    return (
        <div className={`${container}`}>
            <h1 className="flex-full text-center mb-6 font-bold text-4xl">What people are saying about my eBook</h1>
            <div className={`flex flex-wrap justify-center content-center`}>
                <div className="testimonial max-w-sm m-4 p-7 bg-white rounded-xl">
                    <p>"Just ordered my copy! Shruti is awesome and I suck at grid.<br />No brainer."</p>
                    <span><strong>- Caleb Porzio</strong></span>
                </div>
                <div className="testimonial max-w-sm m-4 p-7 bg-white rounded-xl">
                    <p>"It's the best e-book experience I've had on this subject. Might even understand this Flex/Grid stuff myself after all."</p>
                    <span><strong>- Lucian Tartea</strong></span>
                </div>
                <div className="testimonial max-w-sm m-4 p-7 bg-white rounded-xl">
                    <p>"I think there is a 0 missing at the end of these prices. $8 for this much awesomeness? It should be 800!"</p>
                    <span><strong>- Jimi Wikman</strong></span>
                </div>
                <div className="testimonial max-w-sm m-4 p-7 bg-white rounded-xl">
                    <p>"I love that you have used real world examples to describe the concepts which is very helpful to understand."</p>
                    <span><strong>- Sumudu Siriwardana</strong></span>
                </div>
                <div className="testimonial max-w-sm m-4 p-7 bg-white rounded-xl">
                    <p>"My CSS Grid abilities aren’t quite where I want them to be so I’m excited to dive into the full release"</p>
                    <span><strong>- Jacob Foster</strong></span>
                </div>
            </div>
        </div>
    )
};

export default page;