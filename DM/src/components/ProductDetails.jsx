
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

            <div className='box-product-image'>
                <img src={product.image} alt={`Image du livre${product.title}`} />
            </div>

            <div className='box-product-description'>
                <p>{product.description}</p>
            </div>

            <div className='box-product-price'>
                <h5>{product.price}</h5>
            </div>

            <div className='box-product-author'>
                <p>Auteur: {product.author.join(", ")}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
