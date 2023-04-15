import React, { FC } from 'react';

interface Props {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: (value: string) => void;
    onInStockOnlyChange: (value: boolean) => void;
};

const SearchBar: FC<Props> = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
    return (
        <form className='flex justify-center flex-col space-y-4 mb-2'>
            <input
                type="text"
                value={filterText}
                placeholder="Search..."
                className='p-2 text-md text-black'
                onChange={(e) => onFilterTextChange(e.target.value)}
            />

            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />
                {' '}
                Only show products in stock
            </label>
        </form>
    )
};

export default SearchBar;