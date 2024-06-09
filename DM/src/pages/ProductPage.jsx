import React from 'react';
import Products from '../components/Products';


const ProductPage = () => {
    return (
        <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
            <h1>Livres Disponibles </h1>
            <Products />
        </div>
    );
};

export default ProductPage;
