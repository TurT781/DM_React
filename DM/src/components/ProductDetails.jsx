// src/components/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetails } from '../ProductDetails.jsx';

const productService = new ProductDetails();

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchedProduct = productService.getProductById(parseInt(id));
        setProduct(fetchedProduct);
    }, [id]);

    if (!product) {
        return <div>Il n'y a pas de données correspondantes pour le produit avec l'ID {id}</div>;
    }

    return (
        <div className='product-details'>
            <h1>{product.title}</h1>
            <img src={product.image} alt={`Image of the book ${product.title}`} />
            <p>{product.description}</p>
            <h5>{product.price}</h5>
            <p>Author: {product.author.join(", ")}</p>
        </div>
    );
};

export default ProductDetail;
