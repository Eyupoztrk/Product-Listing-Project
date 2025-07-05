import React, { useState } from 'react';
import Rating from './Rating';
import ColorPicker from './ColorPicker';
import '../styles/ProductCard.css'; 

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('yellow');

  const currentImage = product.images[selectedColor];

  return (
    <div className="product-card">
      <img src={currentImage} alt={product.name} className="product-image" />
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">${product.price} USD</p>
      
      <ColorPicker
        availableColors={product.images}
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
      />
      
      <Rating score={product.popularityScore} />
    </div>
  );
};

export default ProductCard;