import { FC } from 'react';

const page: FC = () => {
    return (
        <div>
            <div className="m-5 bg-slate-400">
                <div className="mb-6 flex items-start py-4 px-6 justify-around">
                    <div>
                        <h2 className="font-bold text-2xl">Visit to the Eiffel Tower</h2>
                        <p className='mt-1'>
                            There's no better start to your Paris tour than visiting the iconic Eiffel Tower. This is a must visit tourist spot in the whole of France.
                        </p>
                    </div>
                    <span className="flex-shrink-0 span">10:00 AM</span>
                </div>
                <div className="mb-6 flex items-start py-4 px-6 justify-around">
                    <div>
                        <h2 className="font-bold text-2xl">Lunch at New Jawad</h2>
                        <p className='mt-1'>
                            It is an Indian restaurant close to the Eiffel Tower. Enjoy delicious Indian traditional food and South Asian food.
                        </p>
                    </div>
                    <span className="flex-shrink-0 span">1:00 PM</span>
                </div>
            </div>

            <div className="profile flex items-center">
                <img className="profile-img flex-shrink-0" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80" />
                <div>
                    <h3>Matt Cooper</h3>
                    <p>A front end web developer from New York, USA. Currently working as a freelancer. Drop a mail or say hello 👋</p>
                </div>
            </div>
        </div>
    )
};

export default page;