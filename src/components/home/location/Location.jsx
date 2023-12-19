import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Location' subtitle='Kami, Cloth Hanger, adalah pemimpin dalam industri pakaian bekas berkualitas dengan kehadiran di enam kota pilihan, yaitu Madiun, Magetan, Solo (Surakarta), Malang, dan Surabaya. Dengan toko-toko kami yang tersebar di seluruh wilayah ini, kami siap melayani Anda dengan koleksi pakaian bekas terbaik yang memadukan gaya, kualitas, dan harga terjangkau. Di setiap sudut kota kami, kami berkomitmen untuk memberikan pengalaman berbelanja yang luar biasa serta berbagi misi fashion berkelanjutan dengan Anda. Jelajahi koleksi kami dan temukan pilihan-pilihan mode terbaik di dekat Anda.' />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
