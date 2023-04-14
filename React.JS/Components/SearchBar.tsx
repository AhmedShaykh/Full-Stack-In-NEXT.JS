import React, { FC } from 'react';

interface Props {
    filterText: string;
    inStockOnly: boolean;
};

const SearchBar: FC<Props> = ({ filterText, inStockOnly }) => {
    return (
        <form className='flex justify-center flex-col space-y-2'>
            <input
                type="text"
                value={filterText}
                placeholder="Search..." />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly} />
                {' '}
                Only show products in stock
            </label>
        </form>
    )
};

export default SearchBar;