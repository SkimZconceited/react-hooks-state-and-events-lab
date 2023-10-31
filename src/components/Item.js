import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, setInCart] = useState(false);

  function handleClick() {
    setInCart(!cart)
  };
  
  return (
    <li className={cart ? 'in-cart' : '' }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {cart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
