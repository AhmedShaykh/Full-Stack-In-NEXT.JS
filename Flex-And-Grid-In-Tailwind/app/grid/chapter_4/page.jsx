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

            <div className="max-w-4xl my-12 mx-auto bg-white p-8 grid grid-cols-[repeat(4,auto)] gap-y-8 gap-x-4 justify-between">
                <img className="h-20 w-20 object-cover" src="https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100" alt="" />
                <div className="desc">
                    <h3 className='font-bold text-xl'>Stylish Tote Bag</h3>
                    <p>Brown Color Women's Tote Bag</p>
                    <span className='text-gray-500 text-sm'>#368798</span>
                </div>
                <div>
                    <label>Quantity :</label>
                    <input className='mt-1 py-1 px-2 border border-gray-500' type="text" value="1" size="1" />
                </div>
                <div className="text-lg font-bold text-right">$99.00</div>

                <img className="h-20 w-20 object-cover" src="https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100" alt="" />
                <div>
                    <h3 className='font-bold text-xl'>Sunglasses</h3>
                    <p>Glasses with wooden frame</p>
                    <span className='text-gray-500 text-sm'>#756328</span>
                </div>
                <div>
                    <label>Quantity :</label>
                    <input className='mt-1 py-1 px-2 border border-gray-500' type="text" value="1" size="1" />
                </div>
                <div className="text-lg font-bold text-right">$142.00</div>
            </div>
        </div>
    )
};

export default page;