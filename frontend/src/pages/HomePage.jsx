// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard'; // ProductCard'ı import et

const HomePage = () => {
    // ... (useState ve useEffect kodları aynı kalacak)
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                console.log("Ürünler yüklenemedi. Lütfen daha sonra tekrar deneyin.", err);
            }
        };
        getProducts();
    }, []);


    return (
        <div style={{ padding: '20px' }}>
            <h1>Ürünlerimiz</h1>
            {/* Ürünleri listeleyeceğimiz alan */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {products.map(product => (

                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;