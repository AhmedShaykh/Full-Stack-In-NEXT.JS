import React from 'react';

const page = () => {
    return (
        <div className='bg-blue-400 h-screen'>
            <section className="max-w-none w-auto p-12 min-h-screen grid grid-cols-2 gap-16 items-center">
                <img src="https://res.cloudinary.com/thirus/image/upload/v1634585194/images/details-1_e7ojp9.svg" alt="" />
                <div>
                    <h1 className='text-4xl leading-tight'>
                        Perfect solution<br />
                        <strong>for your small business</strong>
                    </h1>
                    <p className='mt-4'>Maecenas fringilla quam posuere, pellentesque est nec, gravida turpis. Integer vitae mollis felis. Integer id quam id tellus hendrerit laciniad binfer</p>
                    <p className='mt-4'>Sed id dui rutrum, dictum urna eu, accumsan turpis. Fusce id auctor velit, sed viverra dui rem dina</p>
                    <button className='inline-block mt-4 py-3 px-9 bg-red-500 text-white font-bold rounded-full'>
                        Modal
                    </button>
                </div>
            </section>

            <div className="max-w-none w-auto mx-auto p-12 bg-gray-100 grid grid-cols-[repeat(4,auto)] gap-12 justify-between justify-items-center items-stretch">
                <img className="max-w-[10rem]" src="https://res.cloudinary.com/thirus/image/upload/v1634556259/logos/logoipsum-5_wqq52e.svg" alt="" />
                <img className="max-w-[10rem]" src="https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-8_euk84k.svg" alt="" />
                <img className="max-w-[10rem]" src="https://res.cloudinary.com/thirus/image/upload/v1634556259/logos/logoipsum-6_jie3be.svg" alt="" />
                <img className="max-w-[10rem]" src="https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-9_hqrvx7.svg" alt="" />
                <img className="max-w-[10rem]" src="https://res.cloudinary.com/thirus/image/upload/v1634564578/logos/logoipsum-13_zvuric.svg" alt="" />
                <img className="max-w-[10rem]" src="https://res.cloudinary.com/thirus/image/upload/v1634556261/logos/logoipsum-7_vuiq6n.svg" alt="" />
                <img className="max-w-[10rem]" src="https://res.cloudinary.com/thirus/image/upload/v1634564391/logos/logoipsum-11_bhrqq2.svg" alt="" />
                <img className="max-w-[10rem]" src="https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-10_pbu8et.svg" alt="" />
            </div>
        </div>
    )
};

export default page;