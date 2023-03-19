import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <footer className="footer">
      <h3>Made with Love by Rebecca  <FontAwesomeIcon icon={faHeart} /> </h3>
    </footer>
  );
}

export default Footer;
