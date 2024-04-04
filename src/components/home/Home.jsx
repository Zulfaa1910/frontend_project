import React from "react"
import Hero from "./hero/Hero"
import Team from "./team/Team"
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Home = () => {
  return (
    <>
    <Header/>
      <Hero />
      <Team />
      <Footer/>
    </>
  )
}

export default Home
