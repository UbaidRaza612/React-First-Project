import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import About from "../Roots/About";
import Contact from "../Roots/Contact";
function Header() {
  return (
    <ul>
      <li>
      <Link className="link" to='/about'>About</Link>  
      </li>
      <li>
      <Link className="link" to='/contact'>Contact</Link>  

      </li>
    </ul>
  );
}

export default Header;
