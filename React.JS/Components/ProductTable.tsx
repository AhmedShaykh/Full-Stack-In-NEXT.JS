import React, { FC } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
};
interface Props {
    products: Product[];
    filterText: string;
    inStockOnly: boolean;
};

const ProductTable: FC<Props> = ({ products, filterText, inStockOnly }) => {

    const rows = [];

    let lastCategory: null | string = null;

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {/* {rows} */}
            </tbody>
        </table>
    )
};

export default ProductTable;