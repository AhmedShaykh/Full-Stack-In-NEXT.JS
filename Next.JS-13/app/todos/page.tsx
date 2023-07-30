import React, { Suspense } from 'react';
import Link from 'next/link';
import TodosList from './TodosList';

const Todos = () => {
    return (
        <div className="text-center">
            <Link href="/">
                <p className="font-medium text-2xl my-6 text-blue-700 pointer">
                    Back To Home Page
                </p>
            </Link>

            <Suspense
                fallback={
                    <h2 className="text-xl">
                        Loading Todos...
                    </h2>
                }
            >
                {/* @ts-ignore*/}
                <TodosList />
            </Suspense>
        </div>
    )
};

export default Todos;