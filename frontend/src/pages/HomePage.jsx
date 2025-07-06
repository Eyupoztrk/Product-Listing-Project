import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import '../styles/main.css';

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
            <h1 style={{ textAlign: 'center', fontFamily: "Avenir" }}>Products</h1>
            <h1 style={{ textAlign: 'center', fontFamily: "Avenir", fontSize: 15 }}>
                Backend deploy için https://render.com/ sitesini kullandım bu yüzden 15 dk boyunca istekler gelmez ise inaktif oluyor.
                Lütfen 1-2 dk bekleyip sonra tekrar dener misiniz?<br />
                Ayrıca Goldapi için goldapi.io sitesini kullandım ve bu da aylık 100 isteğe izin veriyor. Normalde çalışmaz ise sorun bundan kaynaklıdır.
            </h1>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {products.map(product => (

                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;