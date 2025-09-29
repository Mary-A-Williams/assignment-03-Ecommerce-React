import React from 'react';

export default function AlsoBuy({ items }) {
  return (
    <div className="also-buy">
      <h4>People also buy</h4>
      <div className="also-buy img">
        {items.map((item, i) => (
          <div key={i} >
          <img src={item.img} alt={item.name} />
          <p>{item.name}</p>
          <p className="size">{item.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

