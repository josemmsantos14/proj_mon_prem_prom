import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";

function Navbar() {
  let navigate = useNavigate();

  const handleLogin = async () => navigate("/login");

  return (
    <nav className="navbar">
      <h2 className="nav-title">Hospital JS</h2>
      <ul className="nav-list">
        <li className="nav-list-item">
          <a href="">Home</a>
        </li>
        <li className="nav-list-item">
          <a href="">About</a>
        </li>
        <li className="nav-list-item">
          <a href="">Help</a>
        </li>
      </ul>
      <div className="nav-log">
        <a onClick={handleLogin}>
          <FontAwesomeIcon icon={faUser} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
