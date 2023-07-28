import React from 'react';

const page = () => {
    return (
        <div className='bg-blue-300 h-full'>
            <div className="max-w-none w-auto mx-auto p-12 bg-gray-100 grid grid-cols-[repeat(4,auto)] gap-12 justify-between justify-items-center">
                <img className="h-10" src="https://res.cloudinary.com/thirus/image/upload/v1634556259/logos/logoipsum-5_wqq52e.svg" alt="" />
                <img className="h-10" src="https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-8_euk84k.svg" alt="" />
                <img className="h-10" src="https://res.cloudinary.com/thirus/image/upload/v1634556259/logos/logoipsum-6_jie3be.svg" alt="" />
                <img className="h-10" src="https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-9_hqrvx7.svg" alt="" />
                <img className="h-10" src="https://res.cloudinary.com/thirus/image/upload/v1634564578/logos/logoipsum-13_zvuric.svg" alt="" />
                <img className="h-10" src="https://res.cloudinary.com/thirus/image/upload/v1634556261/logos/logoipsum-7_vuiq6n.svg" alt="" />
                <img className="h-10" src="https://res.cloudinary.com/thirus/image/upload/v1634564391/logos/logoipsum-11_bhrqq2.svg" alt="" />
                <img className="h-10" src="https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-10_pbu8et.svg" alt="" />
            </div>

            <div className='py-8 flex justify-center'>
                <div className="w-80 bg-white m-8 p-8 rounded-md h-96 grid content-between justify-items-end text-center">
                    <img className="w-20 h-20 object-cover rounded-full" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80" alt="" />
                    <p><strong>Matt Cooper</strong> is a graphic designer at CircleAi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#" className="font-bold text-teal-700">View Profile</a>
                </div>
            </div>
        </div>
    )
};

export default page;