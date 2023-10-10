import React from "react";
import Navbar from "../components/navbar.js";

import "../styles/login.css";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="login-form">
        <h1>LOGIN</h1>
      </div>
    </div>
  );
}

export default Login;
