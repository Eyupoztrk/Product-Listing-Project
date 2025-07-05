// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard'; 

const HomePage = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                console.log("Products could not be loaded. Please try again later.", err);
            }
        };
        getProducts();
    }, []);


    return (
        <div style={{ padding: '20px' }}>
            <h1>Products</h1>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {products.map(product => (

                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;