import React from 'react';

const ProductCategoryRow = ({ category }) => {
    return (
        <div className='my-4'>
            <tr>
                <th className='text-xl'>
                    {category}
                </th>
            </tr>
        </div>
    )
};

export default ProductCategoryRow;