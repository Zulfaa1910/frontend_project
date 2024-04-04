import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ProfileIcon from "./profile.svg";
import "./header.css";
import { nav } from "../../data/Data"; // Import data navigasi dari file data

const Header = () => {
  const [navList, setNavList] = useState(false);
  const history = useHistory();

  const handleLogout = () => {
    // Logika untuk logout
    console.log("User logged out!");
    // Redirect ke halaman login
    history.push("/login");
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="../images/CH2.png" alt="" />
        </div>
        <div className="menu">
          <div className="menu-items">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="toggle" onClick={() => setNavList(!navList)}>
            <div className={navList ? "hamburger open" : "hamburger"}></div>
          </div>
        </div>
        <div className="profile">
          <div className="profile-icon" onClick={() => setNavList(!navList)}>
            <img src={ProfileIcon} alt="profile" />
          </div>
          {navList && (
            <div className="dropdown">
              <div className="dropdown-content">
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
