import React from 'react';

export default function CartBox({ cart, removeFromCart, clearCart }) {
  return (
    <div className="cart-box">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} />
              <span>{item.name} - ${item.price}</span>
              <button className="remove-item" onClick={() => removeFromCart(index)}>
                &times;
              </button>
            </div>
          ))}
          <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
