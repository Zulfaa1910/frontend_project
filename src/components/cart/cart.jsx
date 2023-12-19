// ShoppingCart.js

import React, { useState } from 'react';
import './cart.css'

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <span>Quantity: {item.quantity}</span>
            <button className='button-cart' onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="total">Total: ${calculateTotal()}</div>
    </div>
  );
};

export default ShoppingCart;
