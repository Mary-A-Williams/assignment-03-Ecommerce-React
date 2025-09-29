import React from 'react';
import AlsoBuy from './AlsoBuy';

export default function MainProduct({ addToCart }) {
  const product = {
    name: 'Samurai King Resting',
    img: '/assets/dog p.o.t.d.png',
    price: '$10000',
  };

  

  return (
    <section className="main-product">
        <div className="product-info">
        <h1>{product.name}</h1>
        <button className="btn" onClick={() => addToCart(product)}>ADD TO CART</button>
        </div>
        <div className="product-image">
        <img src={product.img} alt={product.name} />
      </div>
      
      
        <div className="description">
          <h3>About the Samurai King Resting</h3>
          <p><strong>Pets</strong></p>
          <p className="long-text">
           So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder  text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.
          </p>
        </div>
      <div className="sidebar">
        <h4>People also buy</h4>
        <div className="also-buy img">
         <img src= '/assets/yellow.jpg' />
          <img src= '/assets/peach.jpg' />
          <img src= '/assets/small.egg.jpg' />
          </div>
          <div className="details">
            <p className="size">Size: 1020 x 1020 pixel</p>
            <p className="size">Size: 15mb</p>
          </div>
          </div>
    </section>
  );
}
