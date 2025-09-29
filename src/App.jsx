import React, { useState } from 'react';
import Header from './components/Header';
import MainProduct from './components/MainProduct';
import ProductList from './components/ProductList';
import AlsoBuy from './components/AlsoBuy';
import CartBox from './components/CartBox';
import Sidebar from './components/Sidebar';
import Pagination from './components/Pagination';
import './index.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: [],
    priceRange: []
  });
  

  const products = [
    { id: 1, name: 'Red Bench', type: 'People', price: '$3.89', img: '/assets/red bench.jpg' },
    { id: 2, name: 'Egg Balloon', type: 'Food', price: '$93.89', img: '/assets/big egg.jpg' },
     { id: 2, name: 'Egg Balloon', type: 'Food', price: '$93.89', img: '/assets/big egg.jpg' },
    { id: 3, name: 'Man', type: 'People', price: '$100', img: '/assets/man.jpg' },
    { id: 4, name: 'Architecture', type: 'Landmarks', price: '$101.00', img: '/assets/architecture.jpg' },
    { id: 5, name: 'Architecture', type: 'Landmarks', price: '$101.00', img: '/assets/architecture.jpg' },
  ];

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const clearCart = () => setCart([]);

  // Filtering logic
  const filteredProducts = products.filter(product => {
    const categoryMatch = filters.category.length === 0 || filters.category.includes(product.type);
    const priceMatch =
      filters.priceRange.length === 0 ||
      filters.priceRange.some(range => {
        if (range === '<20') return product.price < 20;
        if (range === '20-100') return product.price >= 20 && product.price <= 100;
        if (range === '100-200') return product.price > 100 && product.price <= 200;
        if (range === '>200') return product.price > 200;
        return false;
      });
    return categoryMatch && priceMatch;
  });

  return (
    <div>
      <Header cartCount={cart.length} onCartClick={() => setShowCart(!showCart)} />
      {showCart && <CartBox cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />}
      <MainProduct addToCart={addToCart} />
      <hr />
      <div className="gallery">
        <Sidebar filters={filters} setFilters={setFilters} />
        <div className='sort'>
          <img src='/assets/sort.jpg' alt='sort icon' />
          Sort By <span>Price <img src="/assets/Vector 16.jpg" alt="arrow" /></span>
        </div>
        <ProductList products={filteredProducts} addToCart={addToCart} />
      
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={3} />
    </div>
  );
}

export default App;
