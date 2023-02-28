"use client";
import { FC, useState } from 'react';
import { Switch } from '@headlessui/react'

const Home: FC = () => {

    const [enabled, setEnabled] = useState<boolean>(true);

    return (
        <main className='py-4 px-2 bg-black h-screen'>
            <div className='flex justify-around text-white'>
                <h1 className='text-4xl font-semibold'>
                    Tailwind Headless UI
                </h1>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                    <span className="sr-only">Enable notifications</span>
                    <span
                        className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                </Switch>
            </div>
        </main>
    )
};

export default Home;