// Postingan.js

import React from 'react';
import './post.css';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

export default function Postingan() {
  return (
    <>
    <Header/>
    <main className="postingan-container">
        <center><h1 className="title">Posting Product Anda</h1></center>
      <div className="form-container">
        <form className="form-input">
          <div className="form-group">
            <label className="label-input" htmlFor="product-name">Product Name</label>
            <input
              className="input-field"
              id="product-name"
              type="text"
              placeholder="Enter product name"
            />
          </div>
          <div className="form-group">
            <label className="label-input" htmlFor="product-image">Product Image</label>
            <input className="file-input" id="product-image" type="file" />
          </div>
          <div className="form-group">
            <label className="label-input" htmlFor="product-description">Product Description</label>
            <textarea
              className="textarea-field"
              id="product-description"
              rows="4"
              placeholder="Enter product description"
            />
          </div>
          <div className="form-group">
            <label className="label-input" htmlFor="product-price">Product Price</label>
            <input
              className="input-field"
              id="product-price"
              type="number"
              placeholder="Enter product price"
            />
          </div>
          <div className="form-group">
            <label className="label-input" htmlFor="product-quantity">Product Quantity</label>
            <input
              className="input-field"
              id="product-quantity"
              type="number"
              placeholder="Enter product quantity"
            />
          </div>
          <div className="form-group">
            <button className="submit-button">Post Product</button>
          </div>
        </form>
      </div>
    </main>
    <Footer/>
    </>
  );
}
