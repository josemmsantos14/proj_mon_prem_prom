import React from "react";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

import "../styles/login.css";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="login-form">
        <h1>LOGIN</h1>
        <form>
          <input type="text" name="user"></input>
          <input type="password" name="password"></input>
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
