import React, { useState } from 'react';
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePostProduct = () => {
    // Your logic for posting the product goes here

    // Show the pop-up
    setShowPopup(true);

    // You may want to reset the form or do other actions after posting
  };
  return (
    <>
    <Header/>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button onClick={handlePostProduct}>Submit Request</button>
          </form>
        </div>
      </section>

      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <p>Pesan Berhasil Dikirm</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
      <Footer/>
    </>
  )
}

export default Contact
