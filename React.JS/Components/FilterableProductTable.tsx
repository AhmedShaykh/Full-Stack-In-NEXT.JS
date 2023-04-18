"use client";
import Link from 'next/link';
import React, { FC, useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
};

export interface Props {
    products: Product[];
};

const FilterableProductTable: FC<Props> = ({ products }) => {

    const [filterText, setFilterText] = useState<string>("");

    const [inStockOnly, setInStockOnly] = useState<boolean>(false);

    const handleFilterTextChange = (value: string) => {
        setFilterText(value);
    };

    const handleInStockOnlyChange = (value: boolean) => {
        setInStockOnly(value);
    };

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={handleFilterTextChange}
                onInStockOnlyChange={handleInStockOnlyChange}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />

            <div className='flex justify-center'>
                <Link href='/reducer' className='text-[#29f3e7] text-2xl my-8'>
                    Reducer
                </Link>
            </div>
        </div>
    )
};

export default FilterableProductTable;