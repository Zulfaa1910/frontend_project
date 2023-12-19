import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "./CH2.png";
import axios from "axios";
import "./login.css";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Email dan password tidak boleh kosong");
    } else {
      try {
        const response = await axios.post("http://localhost:8080/user/login", {
          email: email,
          password: password,
        });

        if (response.status === 200) {
          alert("Login berhasil");
          history.push("/");
        } else {
          alert("Login gagal");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("Login gagal, terjadi kesalahan");
      }
    }
  };

  return (
    <>
    <Header/>
    <section className="contact mb">
      <div className="container">
        <form
          className="shadow"
          style={{ width: "500px", margin: "auto" }}
          onSubmit={handleFormSubmit}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "400px", height: "150px" }}
            />
          </div>

          <center>
            <h4>Login With Email</h4> <br />
          </center>
          <h4>Email</h4>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4>Password</h4>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5>Forgot Password?</h5>
          <center>
            <button type="submit">Sign IN</button>
          </center>
          <center>
            <a href="/register">New to CLOTH HANGER? Sign Up</a>
          </center>
          <center>
            <label>Terms and conditions</label>
          </center>
        </form>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Login;
