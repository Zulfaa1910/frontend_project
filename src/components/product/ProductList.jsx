import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';
import { Link } from "react-router-dom";
// import Header from "../common/header/Header";
// import Footer from "../common/footer/Footer"; // Import CSS file

const ProductList = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getDataProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/products/');
      setDataProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getDataProducts();
  }, []);

  const deleteProducts = async (id) => {
    // Display confirmation before deleting
    const shouldDelete = window.confirm('Are you sure you want to delete this product?');

    if (shouldDelete) {
      try {
        await axios.delete(`http://localhost:8080/delete-products/${id}`);
        getDataProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter products based on search term
  const filteredProducts = dataProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="user-table-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul className="menu">
          <li>
            <Link to="/admin">Data User</Link> {/* Changed to lowercase */}
          </li>
          <li>
            <Link to="/product">Data Produk</Link>
          </li>
          <li>
            <Link to="#">Statistik</Link>
          </li>
          <li>
            <Link to="#">Logout</Link>
          </li>
        </ul>
      </div>
      <div>
      </div>
      
        <table className="list-product">
        <caption className="table-caption">Search <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        /></caption>
          <caption className="table-caption">List Product Tersedia </caption>
          <caption>
            <a className="button-list" href="/Formproduct">
              Tambahkan item
            </a>
          </caption>
          
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.prince}</td>
                <td>
                  <a className="button-list" href={`/edit-product/${product.id}`}>
                    Edit
                  </a>
                    <button onClick={() => deleteProducts(product.id)} className="custom-button">
                      Delete
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </>
  );
};

export default ProductList;
