import React from 'react';
import { PRODUCTS } from "../Components/products";
import FilterableProductTable from '../Components/FilterableProductTable';

const page = () => {
    return (
        <div className='my-4 flex justify-center'>
            <head>
                <title>
                    React.JS 18!
                </title>
            </head>

            <FilterableProductTable products={PRODUCTS} />
        </div>
    )
};

export default page;