import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import logo from './CH2.png';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Register = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState(""); // Corrected camelCase naming

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "" || rePassword.trim() === "") {
      alert("Email dan password tidak boleh kosong");
    } else {
      try {
        const response = await axios.post("http://localhost:8080/user/register", {
          email: email,
          password: password,
          re_password: rePassword, // Corrected variable name
        });

        if (response.status === 200) {
          alert("Register berhasil");
          history.push("/login");
        } else {
          alert("Register gagal");
        }
      } catch (error) {
        console.error("Error during registration:", error); // Corrected console log message
        alert("Register gagal, terjadi kesalahan");
      }
    }
  };

  return (
    <>
      <section className="">
        <Header />
        <div className="container">
          <form className="shadow" style={{ width: "500px", margin: "auto" }} onSubmit={handleFormSubmit}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={logo} alt="Logo" style={{ width: "400px", height: "150px" }} />
            </div>
    
            <center>
              <h4>Sign Up With your Email</h4> <br />
            </center>
            <h4>Email</h4>
            <input type="text" placeholder="youremail@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <h4>Password</h4>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <h4>Re-Password</h4>
            <input type="password" placeholder="Re-Password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
            
            <center><button type="submit">Sign Up</button></center>
            <center><a href="/login">Already have an account? Login</a></center>
            <center><label>Terms and conditions</label></center>
          </form>
        </div>
        <Footer/>
      </section>
    </>
  );
}

export default Register;
