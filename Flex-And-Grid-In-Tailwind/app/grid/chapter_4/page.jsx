import React from 'react';

const container = `max-w-none w-auto mx-auto p-12 bg-gray-100`;

const img = `h-10`;

const page = () => {
    return (
        <div>
            <div className={`${container} grid grid-cols-[repeat(4,auto)] gap-12 justify-between`}>
                <img className={`${img}`} src="https://res.cloudinary.com/thirus/image/upload/v1634556259/logos/logoipsum-5_wqq52e.svg" alt="" />
                <img className={`${img}`} src="https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-8_euk84k.svg" alt="" />
                <img className={`${img}`} src="https://res.cloudinary.com/thirus/image/upload/v1634556260/logos/logoipsum-1_frjjk6.svg" alt="" />
                <img className={`${img}`} src="https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-9_hqrvx7.svg" alt="" />
                <img className={`${img}`} src="https://res.cloudinary.com/thirus/image/upload/v1634564578/logos/logoipsum-13_zvuric.svg" alt="" />
                <img className={`${img}`} src="https://res.cloudinary.com/thirus/image/upload/v1634556259/logos/logoipsum-2_gxwamm.svg" alt="" />
                <img className={`${img}`} src="https://res.cloudinary.com/thirus/image/upload/v1634564391/logos/logoipsum-11_bhrqq2.svg" alt="" />
                <img className={`${img}`} src="https://res.cloudinary.com/thirus/image/upload/v1634564391/logos/logoipsum-12_hskbxm.svg" alt="" />
            </div>
        </div>
    )
};

export default page;