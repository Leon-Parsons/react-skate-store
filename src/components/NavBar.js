import React, {useState} from 'react';
import Logo from '../assets/skateboard-logo.png';
import {Link} from 'react-router-dom';
import "../styles/NavBar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);
  
  const toggleNavMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="navbar">
      <div className="logo" id={showMenu ? "open" : "close"}>
        <img src={Logo} alt="PicVal"/>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/AboutUs">About</Link>
          <Link to="/ContactUs">Contact</Link>  
        </div>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/AboutUs">About</Link>
        <Link to="/ContactUs">Contact</Link> 
        <button onClick={toggleNavMenu}>
          <ReorderIcon/>
        </button>
      </div>
    </div>
  )
}

export default NavBar;
