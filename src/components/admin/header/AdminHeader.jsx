import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "./search.svg"; // Import SVG ikon pencarian
import "./headeradmin.css"; // Gaya CSS untuk header admin

const AdminHeader = () => {
  return (
    <header className="admin-header">
      <div className="container">
        <div className="admin-header-left">
          <Link to="/admin">Home</Link>
          <Link to="/admin/contact">Contact</Link>
        </div>
        <div className="admin-header-right">
          <input type="text" placeholder="Search..." />
          <img src={SearchIcon} alt="search" />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
