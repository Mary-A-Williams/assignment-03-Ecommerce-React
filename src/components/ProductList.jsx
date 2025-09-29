import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: 'Red Bench', type: 'People', price: '3.89', img: '/assets/red bench.jpg' },
    { id: 2, name: 'Egg Balloon', type: 'Food', price: '93.89', img: '/assets/big egg.jpg' },
     { id: 2, name: 'Egg Balloon', type: 'Food', price: '93.89', img: '/assets/big egg.jpg' },
    { id: 3, name: 'Man', type: 'People', price: '100', img: '/assets/man.jpg' },
    { id: 4, name: 'Architecture', type: 'Landmarks', price: '101.00', img: '/assets/architecture.jpg' },
    { id: 5, name: 'Architecture', type: 'Landmarks', price: '101.00', img: '/assets/architecture.jpg' },
];


function ProductList({ addToCart }) {
  return (
    <div className="products">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
