import React from 'react';

const page = () => {
    return (
        <div>
            <div className='flex justify-center mb-8'>
                <div class="w-80 bg-white m-8 p-8 rounded-md h-96 grid content-between">
                    <img className="w-20 h-20 object-cover rounded-full" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80" alt="" />
                    <p><strong>Matt Cooper</strong> is a graphic designer at CircleAi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#" className="font-bold text-teal-700">View Profile</a>
                </div>
            </div>

            <div className="max-w-none w-auto mx-auto p-12 bg-gray-100 h-screen grid grid-cols-[repeat(4,auto)] gap-12 justify-between content-center">
                <img className='h-10' src="https://res.cloudinary.com/thirus/image/upload/v1634556259/logos/logoipsum-5_wqq52e.svg" alt="" />
                <img className='h-10' src="https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-8_euk84k.svg" alt="" />
                <img className='h-10' src="https://res.cloudinary.com/thirus/image/upload/v1634556260/logos/logoipsum-1_frjjk6.svg" alt="" />
                <img className='h-10' src="https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-9_hqrvx7.svg" alt="" />
                <img className='h-10' src="https://res.cloudinary.com/thirus/image/upload/v1634564578/logos/logoipsum-13_zvuric.svg" alt="" />
                <img className='h-10' src="https://res.cloudinary.com/thirus/image/upload/v1634556259/logos/logoipsum-2_gxwamm.svg" alt="" />
                <img className='h-10' src="https://res.cloudinary.com/thirus/image/upload/v1634564391/logos/logoipsum-11_bhrqq2.svg" alt="" />
                <img className='h-10' src="https://res.cloudinary.com/thirus/image/upload/v1634564391/logos/logoipsum-12_hskbxm.svg" alt="" />
            </div>
        </div>
    )
};

export default page;