// EditProduct.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom'; // Import useHistory
import './EditProduct.css'; 
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";// Import the CSS file

const EditProduct = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    prince: '', 
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const history = useHistory(); // Get the history object

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/products/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching data for edit:', error);
      }
    };
  
    fetchData();
  }, [id]);
  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsUpdating(true);
      await axios.put(`http://localhost:8080/update-products/${id}`, formData);
      setIsUpdating(false);
      alert("Data Berhasil Diedit");

      // Redirect to the data list page after successful update
      history.push('/product'); // Replace '/user' with the actual route for the user table
    } catch (error) {
      console.error('Error updating data:', error);
      setIsUpdating(false);
    }
  };

  return (
    <>
    <Header/>
    <div className='App'> 
      <div className='edit-product'>
        <h2>Edit Product</h2>
        <form onSubmit={handleFormSubmit}>
        <label className='label-input'>Nama Barang : </label>
            <input
              type='text'
              className='input-form'
              name='title' 
              value={formData.title}
              onChange={handleInputChange}
            />
        <label className='label-input'>Harga Barang : </label>
            <input
              type='text'
              className='input-form'
              name='prince' 
              value={formData.prince} 
              onChange={handleInputChange}
            />
          <button type='submit' disabled={isUpdating}>
            {isUpdating ? 'Updating...' : 'Update'}
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default EditProduct;
