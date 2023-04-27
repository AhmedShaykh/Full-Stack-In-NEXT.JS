import { FC } from 'react';
import Flex from './Flex';
import Grid from './Grid';

const Home: FC = () => {
    return (
        <main className='py-4 px-2 bg-black h-full'>
            <div className='flex justify-center text-white'>
                <h1 className='text-5xl font-semibold'>
                    FlexBox & Grid System In Tailwind CSS
                </h1>
            </div>

            <div className="pt-8 pb-4 flex justify-around">
                <Flex />
                <Grid />
            </div>
        </main>
    )
};

export default Home;