import React from 'react';
import Products from '../components/Products';
import ProductDetails from '../components/ProductDetails';
import { Routes, Route } from 'react-router-dom';

const ProductPage = () => {
    return (
        <div>
            <h1>Products</h1>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/:id" element={<ProductDetails />} /> 
            </Routes>
        </div>
    );
};

export default ProductPage;
