// ShoppingCart.js

import React, { useState } from 'react';
import './cart.css'
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Hoody Magetan', price: 20.000, quantity: 2 },
    { id: 2, name: 'Jacket Parasut', price: 30.000, quantity: 1 },
    { id: 3, name: 'Hoody Murah', price: 20.000, quantity: 2 },
    { id: 4, name: 'Hoody Magetan', price: 20.000, quantity: 2 },
    { id: 5, name: 'Jacket Parasut', price: 30.000, quantity: 1 },
    { id: 6, name: 'Hoody Murah', price: 20.000, quantity: 2 },
    { id: 7, name: 'Hoody Magetan', price: 20.000, quantity: 2 },
    { id: 8, name: 'Jacket Parasut', price: 30.000, quantity: 1 },
    { id: 9, name: 'Hoody Murah', price: 20.000, quantity: 2 },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  return (
    <>
    <Header/>
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Rp.{item.price}</span>
            <span>Quantity: {item.quantity}</span>
            <button className='button-cart' onClick={() => removeFromCart(item.id)}>Remove</button>
            <Link to='/chat'>
            <button className='button-cart' >Chat</button>
            </Link>
          </li>
        ))}
      </ul>
      <div className="total">Total: ${calculateTotal()}</div>
    </div>
    <Footer/>
    </>
  );
};

export default ShoppingCart;
