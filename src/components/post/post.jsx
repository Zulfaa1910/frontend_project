import React, { useState } from 'react';
import './post.css';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Back from "../common/Back";
import img from "../images/HUT.png";

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
        <Back name='' title='PLN MOBILE' cover={img} />
        <center><h1 className="title">Form Transaksi</h1></center>
        <div className="form-container">
          <form className="">
            <div className="form-group">
              <label className="label-input" htmlFor="product-name">Nama</label>
              <input
                className="input-field"
                id="product-name"
                type="text"
                placeholder="Masukkan nama"
              />
            </div>
            <div className="form-group">
              <label className="label-input" htmlFor="product-section">Bagian</label>
              <select className="input-field" id="product-section">
                <option value="pegawai">Pegawai PLN</option>
                <option value="mitra">Mitra</option>
                <option value="tak">TAK</option>
              </select>
            </div>
            <div className="form-group">
              <label className="label-input" htmlFor="product-date">Tanggal</label>
              <input
                className="input-field"
                id="product-date"
                type="date"
              />
            </div>
            <div className="form-group">
              <label className="label-input" htmlFor="product-image">Gambar Bukti Transaksi</label>
              <input className="file-input" id="product-image" type="file" />
            </div>
            <div className="form-group">
              <button className="submit-button" type="button" onClick={handlePostProduct}>
                Post
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
