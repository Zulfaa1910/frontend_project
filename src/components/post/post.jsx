import React, { useState } from 'react';
import './post.css';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Back from "../common/Back";
import img from "../images/footer.png";

export default function Postingan() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePostProduct = () => {
    // Your logic for posting the product goes here

    // Show the pop-up
    setShowPopup(true);

    // You may want to reset the form or do other actions after posting
  };

  return (
    <>
      <Header />
      <main className="postingan-container">
        <Back name='Tambahkan' title='Posting Produk Terbaik Anda' cover={img} />
        <center><h1 className="title">Posting Product Anda</h1></center>
        <div className="form-container">
          <form className="">
            <div className="form-group">
              <label className="label-input" htmlFor="product-name">Nama Produk</label>
              <input
                className="input-field"
                id="product-name"
                type="text"
                placeholder="Enter product name"
              />
            </div>
            <div className="form-group">
              <label className="label-input" htmlFor="product-image">Gambar Produk</label>
              <input className="file-input" id="product-image" type="file" />
            </div>
            <div className="form-group">
              <label className="label-input" htmlFor="product-description">Deskripsi produk</label>
              <textarea
                className="textarea-field"
                id="product-description"
                rows="4"
                placeholder="Enter product description"
              />
            </div>
            <div className="form-group">
              <label className="label-input" htmlFor="product-price">Harga Produk</label>
              <input
                className="input-field"
                id="product-price"
                type="number"
                placeholder="Enter product price"
              />
            </div>
            <div className="form-group">
              <button className="submit-button" type="button" onClick={handlePostProduct}>
                Post Product
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Pop-up */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <p>Produk berhasil diposting!</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
