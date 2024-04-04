import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='footer-content'>
              <h2>PLN Mobile</h2>
              <p>Stay connected with the latest news, promotions, tips, and more delivered directly to your inbox every month</p>
            </div>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <span>&copy; Copyright © 2024 PT PLN (Persero) All Rights Reserved.</span>
      </div>
    </>
  );
};

export default Footer;
