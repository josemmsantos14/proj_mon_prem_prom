import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowUp from "../icons/arrow_up";
import "../styles/footer.css";

function Footer() {
  //   let navigate = useNavigate();

  return (
    <footer className="footer">
      <h2 className="footer-logo">JS</h2>
      <ul>
        <h4>Contacts:</h4>
        <li>Email</li>
        <li>Phone</li>
        <li>Twitter</li>
      </ul>
      <a href="#top" className="footer-arrow-up">
        <ArrowUp></ArrowUp>
      </a>
    </footer>
  );
}

export default Footer;
