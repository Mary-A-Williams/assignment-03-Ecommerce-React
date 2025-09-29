import React from 'react';

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <button className="btn" onClick={() => addToCart(product)}>ADD TO CART</button>
      <p className="type">{product.type}</p>
      <h4>{product.name}</h4>
      <p className="price">${product.price}</p>
    </div>
  );
}
