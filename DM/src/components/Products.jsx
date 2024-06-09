// src/components/Products.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductDetails } from '../ProductDetails.jsx';

const productService = new ProductDetails();

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getApi().then(setProducts);
    }, []);

    return (
        <div className="container">
            <div className="row" id="productsList">
                {products.map((product) => (
                    <div key={product.id} className="image card col-md-2 m-4">
                        <img className="card-img-top" src={product.image} alt={`Image of the book ${product.title}`} />
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">{product.title}</h6>
                            <h5 className="card-title">{product.price}</h5>
                        </div>
                        <div className="card-footer">
                            <Link className="btn btn-primary" to={`/products/${product.id}`}>View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
