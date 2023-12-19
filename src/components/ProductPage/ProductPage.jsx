import React, { useState } from 'react';
import './ProductPage.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

// Import local images
import img1 from "../list/p-1.jpg";
import img2 from "../list/p-2.jpg";
import img3 from "../list/p-5.jpg"; 
import img4 from "../list/p-4.jpg";

const ProductPage = () => {
  const [images] = useState({
    img1,
    img2,
    img3,
    img4,
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  return (
    <div className='product-page'>
      <Header />

      <div className='content-container'>
        <div className='image-section'>
          <img src={activeImg} alt="" className='main-image' />
          <div className='thumbnail-container'>
            {Object.values(images).map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className='thumbnail'
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        <div className='product-details'>
          <div>
            <span className='product-category'>Outdoor Apparel / Winter Gear</span>
            <h1 className='product-title'>ArcticShield</h1>
          </div>
          <p className='product-description'>
          Jacket tebal dari merk "ArcticShield" merupakan pilihan sempurna untuk melindungi diri Anda dari cuaca ekstrem, terutama saat musim dingin atau kegiatan outdoor di lingkungan yang dingin. Dengan desain yang stylish dan teknologi inovatif, jacket ini memberikan kombinasi optimal antara kehangatan, kenyamanan, dan fungsionalitas.
Isolasi Termal Tinggi: Jacket ini dilengkapi dengan teknologi isolasi termal tinggi yang efektif menahan panas tubuh Anda, menjaga suhu tubuh tetap hangat dalam kondisi cuaca yang dingin.

Material Berkualitas: Terbuat dari bahan berkualitas tinggi yang tahan terhadap angin dan air, memberikan perlindungan tambahan dari elemen-elemen cuaca ekstrem.
          </p>
          <h6 className='product-price'>Harga : Rp. 199.00</h6>
          <div className='quantity-section'>
            <Link to='/chat'>
              <button className='add-to-cart-button'>Chat Now</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
