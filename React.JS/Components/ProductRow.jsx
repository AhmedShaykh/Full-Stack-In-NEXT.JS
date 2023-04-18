import React from 'react';

const ProductRow = ({ product }) => {

    const name = product.stocked ? product.name :
        <span className="text-red-600">
            {product.name}
        </span>;

    return (
        <tr className='flex justify-between space-x-16 space-y-2 text-lg'>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
};

export default ProductRow;