"use client";
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
        </div>
    )
};

export default FilterableProductTable;