// src/ProductDetails.js
import { Product } from "./product";

export class ProductDetails {
    products;

    constructor() {
        this.getApi().then((x) => (this.products = x));
    }

    async getApi() {
        const query = "fiction"; // Modifier la requête pour les livres
        const maxResults = 16; // Limiter à 16 livres
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}`
        );
        const data = await response.json();

        const products = data?.items?.map((item, index) => {
            const volumeInfo = item.volumeInfo;
            const priceInfo = item.saleInfo && item.saleInfo.listPrice;
            const price = priceInfo ? priceInfo.amount : "Out of stock";

            return new Product(
                index,
                volumeInfo?.title,
                price,
                volumeInfo.imageLinks
                    ? volumeInfo.imageLinks.thumbnail
                    : "Image not available",
                volumeInfo.description || "No description available",
                volumeInfo.authors || ["Author unknown"]
            );
        });
        this.products = products;
        return products;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products?.find((elem) => elem.id === id);
    }
}
