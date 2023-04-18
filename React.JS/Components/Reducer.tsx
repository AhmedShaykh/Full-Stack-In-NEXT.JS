"use client";
import { useReducer } from 'react';

function reducer(state: { age: number; }, action: { type: string; }) {

    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1
        };
    }

    else if (action.type === 'decremented_age') {
        return {
            age: state.age - 1
        };
    }

    throw Error('Unknown action.');
};

function CounterReducer() {

    const [state, dispatch] = useReducer(reducer, { age: 42 });

    return (
        <div className='my-4 flex items-center flex-col space-y-4'>
            <button
                className='bg-white text-black p-3 text-xl rounded-md font-semibold'
                onClick={() => {
                    dispatch({ type: 'incremented_age' })
                }}
            >
                Increment age
            </button>

            <p className='text-lg'>Hello! You are {state.age}.</p>

            <button
                className='bg-white text-black p-3 text-xl rounded-md font-semibold'
                onClick={() => {
                    dispatch({ type: 'decremented_age' })
                }}
            >
                Decrement age
            </button>
        </div>
    );
};

export default CounterReducer;