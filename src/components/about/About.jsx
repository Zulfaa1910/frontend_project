import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/footer.png"
import "./about.css"
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const About = () => {
  return (
    <>
    <Header/>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Selamat datang di Cloth Hanger - Tempatnya Pakaian Bekas Berkualitas!</p>
            <p>Kami adalah tim yang berdedikasi untuk menghadirkan pakaian bekas berkualitas kepada Anda. Dengan rasa hormat pada fashion berkelanjutan, kami mempersembahkan pilihan-pilihan mode yang memukau untuk Anda dengan harga yang terjangkau.</p>
            <p>Di Cloth Hanger, kami menjalani misi untuk mempromosikan gaya hidup ramah lingkungan dan hemat anggaran. Kami percaya bahwa pakaian bekas adalah cara cerdas untuk menjaga penampilan Anda tetap segar, berkontribusi pada upaya pelestarian lingkungan, dan tetap berada dalam anggaran.</p>
            <p>Terima kasih telah mengunjungi Cloth Hanger. Kami sangat bersemangat untuk berbagi gaya hidup berkelanjutan dan koleksi pakaian bekas berkualitas dengan Anda. Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau butuh bantuan. Bersama-sama, mari jaga gaya Anda, lingkungan, dan anggaran Anda.</p>
            <p>Terima kasih atas dukungan Anda!</p>
            <p>Salam hangat,</p>
            <p>Tim Cloth Hanger</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./about3.jpg' alt='' />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default About
