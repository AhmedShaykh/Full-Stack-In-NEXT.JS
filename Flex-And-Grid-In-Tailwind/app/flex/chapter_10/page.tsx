import React, { FC } from 'react';

const header = `bg-white py-5 px-2`;

const ul = `text-center -mx-2 md:mx-0`;

const list = `inline-block mx-5`;

const btn = `bg-blue-500 text-white py-2 px-5 rounded-full`;

const page: FC = () => {
    return (
        <div>
            <header className={`${header} flex flex-wrap justify-between items-center`}>
                <div className='flex-1'>
                    <img className="inline h-7" src="https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png" alt="" />
                </div>
                <ul className={`${ul} order-last flex-[100%] mt-4 md:order-none md:flex-auto md:mt-0`}>
                    <li className={`${list}`}>
                        <a href="#">Home</a>
                    </li>
                    <li className={`${list}`}>
                        <a href="#">About Us</a>
                    </li>
                    <li className={`${list}`}>
                        <a href="#">Pricing</a>
                    </li>
                </ul>
                <span className="flex-1 text-right">
                    <a href="#" className={`${btn}`}>Join us</a>
                </span>
            </header>
        </div>
    )
}

export default page;