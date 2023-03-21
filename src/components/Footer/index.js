// importing various folders/libraries to use here
import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"

//function that adds the footer element to the app using a fontAwesome icon
function Footer() {
  return (
    <footer className="footer">
      <h3>Made with Love by Rebecca  <FontAwesomeIcon icon={faHeart} /> </h3>
    </footer>
  );
}

//exports the file to be used elsewhere
export default Footer;
