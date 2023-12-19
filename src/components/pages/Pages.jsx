import React from "react"
// import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
// import Footer from "../common/footer/Footer"
import About from "../about/About"
import Login from "../login/Login"
import Register from "../register/Register"
import Blog from "../blog/Blog"
import ProductList from "../product/ProductList"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import AddProduct from "../product/AddProduct"
import EditProduct from "../product/EditProduct"
import ProductPage from "../ProductPage/ProductPage"
import ShoppingCart from "../cart/cart"
import CustomerChat from "../chat/chat"
import HomeAdmin from "../admin/HomeAdmin"
import Postingan from "../post/post"
import LoginAdmin from "../admin/loginadmin/LoginAdmin"

const Pages = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/add" component={AddProduct} /> 
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/product' component={ProductList} />
          <Route exact path='/Formproduct' component={AddProduct} />
          <Route exact path='/edit-product/:id' component={EditProduct} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/productpage' component={ProductPage} />
          <Route exact path='/cart' component={ShoppingCart} />
          <Route exact path='/chat' component={CustomerChat} />
          <Route exact path='/post' component={Postingan} />
          <Route exact path='/admin' component={HomeAdmin} />
          <Route exact path='/login-admin' component={LoginAdmin} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default Pages
