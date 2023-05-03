import React from 'react';
import Logo from '../assets/skateboard-logo.png';
import {Link} from 'react-router-dom';
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="PicVal"/>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/ContactUs">Contact Us</Link> 
      </div>
    </div>
  )
}

export default NavBar;
