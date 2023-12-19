import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recomended For U' subtitle='Dapatkan bahan bekas berkualitas dengan penawaran istimewa kami! Kami hadir dengan koleksi terbaik dari berbagai bahan bekas yang masih dalam kondisi sempurna.Jangan lewatkan kesempatan ini untuk berbelanja pintar dan berkelanjutan. Temukan bahan bekas berkualitas dengan harga yang terjangkau hanya di sini!' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
