import { FC } from 'react';

const page: FC = () => {
    return (
        <div className="container h-[500px] flex flex-col md:flex-row justify-center">
            <div id="learn" className="split h-1/2 md:h-full rounded-2xl basis-1/2">
                <div>
                    <h1>Learn</h1>
                    <p className="px-6 py-4">Build your skillset with the hottest courses</p>
                    <a href="#">Start Learning</a>
                </div>
            </div>
            <div id="teach" className="split h-1/2 md:h-full rounded-2xl basis-1/2">
                <div>
                    <h1>Teach</h1>
                    <p className="px-6 py-4">Share your knowledge and earn some income</p>
                    <a href="#">Start Teaching</a>
                </div>
            </div>
        </div>
    )
};

export default page;