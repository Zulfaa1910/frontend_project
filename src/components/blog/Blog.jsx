import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/bck.jpg"
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Blog = () => {
  return (
    <>
    <Header/>
      <section className='blog-out mb'>
        <Back name='Cloth Hanger' title='Recomended For U' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Blog
