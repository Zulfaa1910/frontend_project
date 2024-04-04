import React, { useState, useEffect } from 'react';
import './HomAdmin.css';
import axios from 'axios';
import { Link } from "react-router-dom";

const HomeAdmin = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getDataUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users');
      setDataUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getDataUsers();
  }, []);

  const deleteUser = async (id) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this product?');
    if (shouldDelete) {
      try {
        await axios.delete(`http://localhost:8080/delete/user/${id}`);
        getDataUsers();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = dataUsers.filter((product) =>
    product.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-table-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul className="menu">
          <li>
            <Link to="/admin">Data User</Link>
          </li>
          <li>
            <Link to="/product">Transaksi</Link>
          </li>
          <li>
            <Link to="#">Statistik</Link>
          </li>
          <li>
            <Link to="#">Chat</Link>
          </li>
          <li>
            <Link to="/Login">Logout</Link>
          </li>
        </ul>
        <div className="admin-profile">
          {/* Tambahkan informasi atau link menuju halaman profil admin di sini */}
        </div>
      </div>
      <div>
        <table className="user-table">
          <caption><h2 className="user-table-heading">Data User PLN Mobile</h2></caption>
          <caption className="table-caption">Search User <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={handleSearch}
          /></caption>
          <thead className="table-header">
            <tr>
              <th className="table-header-cell">No</th>
              <th className="table-header-cell">Email</th>
              <th className="table-header-cell">Password</th>
              <th className="table-header-cell">Re-Password</th>
              <th className="table-header-cell">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((user, index) => (
              <tr key={index}>
                <td className="table-cell">{index + 1}</td>
                <td className="table-cell">{user.email}</td>
                <td className="table-cell">{user.password}</td>
                <td className="table-cell">{user.re_password}</td>
                <td className="table-cell">
                  <button>Edit</button>
                  <button onClick={() => deleteUser(user.id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeAdmin;
