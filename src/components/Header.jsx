import React from 'react'
import { Link } from "react-router-dom";
import "../index.css"; 
const Header = () => {
  return (
    <div>
       <header>
      <h2>Nathan</h2>
      <ul className="menu" id="menu">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/Contact"}>Contact</Link></li>
        <li><Link to={"/About"}>About</Link></li>
       
      </ul>

    </header>
    </div>
  )
}

export default Header
