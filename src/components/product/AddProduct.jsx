import React, { useState } from 'react';
import axios from 'axios';
import './AddProdutsList.css'; 
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";// Import CSS file

function AddProduct() {
  const [title, setTitle] = useState("");
  const [prince, setPrince] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (title === "" || prince === "") {
      alert("Data Gagal ditambahkan, field tidak boleh ada yang kosong");
    } else {
      try {
        await axios.post('http://localhost:8080/insert-products', {
          title: title,
          prince: prince,
        });

        alert("Data berhasil ditambahkan");
        // Redirect atau navigasi ke halaman lain jika diperlukan
        window.location.href = '/product';
      } catch (error) {
        console.error('Error adding product:', error);
        alert("Data Gagal ditambahkan, terjadi kesalahan");
      }
    }
  };


  return (
    <div>
      <Header/>
      <form className="App" onSubmit={handleFormSubmit}>
        <label className="table-caption">Form Input data</label>
        <div>
          <label className='label-input'>Nama Barang : </label>
          <input 
            type='text'
            className='input-form'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Masukkan Nama Barang'
          />
        </div>
        <div>
          <label className='label-input'>Harga Barang : </label>
          <input 
            type='text'
            className='input-form'
            value={prince}
            onChange={(e) => setPrince(e.target.value)}
            placeholder='Masukkan Harga Barang'
          />
        </div>
        <div>
          <button type='submit'>Tambahkan</button>
        </div>
      </form>
      <Footer/>
    </div>
  );

}
export default AddProduct;
