import { FC } from 'react';
import Button from './button';

const Home: FC = () => {
    return (
        <main className='py-4 px-2'>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold'>
                    Next.JS 13 With Tailwind CSS
                </h1>

                <Button btn="Click Me" />
            </div>
        </main>
    )
};

export default Home;