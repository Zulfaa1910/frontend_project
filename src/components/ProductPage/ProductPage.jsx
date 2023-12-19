import React, { useState } from 'react';
import './ProductPage.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import img from "../images/bck.jpg"
import Back from "../common/Back"
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
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

  // State for handling reviews
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    username: '',
    comment: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handlePostProduct = () => {
    // Your logic for posting the product goes here

    // Show the pop-up
    setShowPopup(true);

    // You may want to reset the form or do other actions after posting
  };

  // Function to handle form submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ username: '', comment: '' });
  };

  return (
    <div className='product-page'>
      <Header />
      <Back name='Detail Produk' title='Detail Produk Berkualitas' cover={img} />
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

      <div className='review-section'>
        <h2>Ulasan Pembeli</h2>
        <div className='review-form'>
          {/* ... (previous form code) */}
        </div>
        <div className='reviews-list'>
          {reviews.length === 0 ? (
            <p>
            "Saya sangat senang dengan pembelian jaket ini! Kualitasnya luar biasa, sangat nyaman dipakai, dan desainnya sangat keren. Layanan pelanggan juga sangat membantu. Terima kasih banyak!"<br></br>
            
            "Jaket yang saya beli di sini benar-benar memenuhi ekspektasi saya. Bahan yang digunakan sangat berkualitas tinggi dan tahan lama. Desainnya juga sangat modis, membuat saya merasa percaya diri setiap kali mengenakannya."<br></br>
            
            "Proses pemesanan sangat mudah dan pengiriman sangat cepat. Jaket yang saya dapatkan persis seperti yang ditampilkan di situs web. Rasanya begitu lembut dan hangat. Pasti akan merekomendasikan toko ini kepada teman-teman saya!"<br></br>
            
            "Jaket ini adalah investasi terbaik saya tahun ini! Kualitasnya tidak tertandingi dan desainnya sangat stylish. Saya sering mendapat pujian setiap kali mengenakannya. Pelayanan pelanggan juga sangat responsif dan membantu."<br></br>
            
            "Barang sampai lebih cepat dari perkiraan dan kondisinya sangat baik. Jaket ini benar-benar membuat saya merasa cozy dan stylish. Harganya juga sangat terjangkau dibandingkan dengan kualitas yang diberikan. Puas sekali dengan pembelian ini!"<br></br>
            
            "Pengalaman berbelanja di sini sungguh menyenangkan. Jaket yang saya beli sangat sesuai dengan deskripsi di situs. Bahan berkualitas tinggi dan desain yang unik. Pasti akan menjadi langganan saya untuk kebutuhan fashion saya ke depannya."<br></br>
            
            "Jaket yang saya beli memberikan nilai tambah yang besar untuk koleksi pakaian saya. Desainnya sangat up-to-date, dan kualitasnya terasa begitu mewah. Saya sangat puas dengan pilihan saya untuk membeli jaket ini."</p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className='review'>
                <strong>{review.username}:</strong> {review.comment}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Review Section */}
      <div className='review-section'>
        <h2>Berikan Ulasan Anda</h2>
        <div className='review-form'>
          <form onSubmit={handleReviewSubmit}>
            <label>
              Username:
              <input
                type='text'
                value={newReview.username}
                onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
              />
            </label>
            <label>
              Comment:
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              />
            </label>
            <button onClick={handlePostProduct} type='submit'>Submit Review</button>
          </form>
        </div>
        <div className='reviews-list'>
          {reviews.map((review, index) => (
            <div key={index} className='review'>
              <strong>{review.username}:</strong> {review.comment}
            </div>
          ))}
        </div>
      </div>

      <div className='container recent'>
        <RecentCard />
      </div>

      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <p>Ulasan Berhasil Dikirm</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductPage;
