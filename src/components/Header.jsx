import React from 'react';

export default function Header({ cartCount, onCartClick }) {
  return (
    <header>
      <div className="logo">
        <img src="/assets/logo.j.jpg" alt="Logo" />
      </div>
      <div className="cart" onClick={onCartClick} style={{ cursor: 'pointer' }}>
        <img src="/assets/cart.png" alt="Cart" />
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}
