import { FC } from 'react';

const icon = `mx-1 w-12 h-12 bg-gray-700 text-white rounded-full`;

const page: FC = () => {
    return (
        <div className="flex flex-col bg-white py-20">
            <div className="flex flex-row">
                <div className="quote">
                    <p>“The success combination in business is: Do what you do better... and: do more of what you do.”</p>
                    <span>- David J. Schwartz</span>
                </div>
                <div className="quote">
                    <p>“Give out what you most want to come back.”</p>
                    <span>- Robin Sharma</span>
                </div>
                <div className="quote">
                    <p>“You don't have to be great at something to start, but you have to start to be great at something.”</p>
                    <span>- Zig Ziglar</span>
                </div>
            </div>

            <div className="py-8 flex justify-center">
                <a className={`${icon} inline-flex justify-center items-center`} href="#">
                    <h2 className='text-xl'>Text</h2>
                </a>
                <a className={`${icon} inline-flex justify-center items-center`} href="#">
                    <h2 className='text-xl'>Text</h2>
                </a>
                <a className={`${icon} inline-flex justify-center items-center`} href="#">
                    <h2 className='text-xl'>Text</h2>
                </a>
            </div>
        </div>
    )
};

export default page;