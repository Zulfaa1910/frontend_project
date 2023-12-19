import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import cartIcon from "./cart.svg";




const Header = () => {
  const [navList, setNavList] = useState(false)

  // const handleButtonClick = () => {
  //   // Ganti 'halaman-selanjutnya' dengan URL tujuan Anda
  //   window.location.href = '/Login.jsx';
  // };

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='../images/CH2.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
          <Link to="/cart">
        <img src={cartIcon} alt="cart" />
      </Link>
          
          
            {/* <button className='btn1' onClick={handleButtonClick}>
              <i className='fa fa-sign-out'></i> Sign In
            </button> */}
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
