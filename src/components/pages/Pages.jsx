import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import AddProduct from "../product/AddProduct";
import Profile from "../profile/profile"; // Perhatikan perubahan nama komponen menjadi Profile
import CustomerChat from "../chat/chat";
import HomeAdmin from "../admin/HomeAdmin";
import Postingan from "../post/post";
import LoginAdmin from "../admin/loginadmin/LoginAdmin";
import AdminHeader from "../admin/header/AdminHeader";// Import AdminHeader

const Pages = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/add" component={AddProduct} />
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/chat" component={CustomerChat} />
          <Route exact path="/post" component={Postingan} />
          <Route exact path="/admin">
            <AdminHeader />
            <HomeAdmin />
          </Route>
          <Route exact path="/login-admin" component={LoginAdmin} />
          {/* Tambahkan route untuk halaman profil */}
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </>
  );
};

export default Pages;
