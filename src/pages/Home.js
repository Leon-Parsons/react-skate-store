import React from 'react';
import {Link} from 'react-router-dom';
import HomeBackground from '../assets/home-background2.jpg';
import "../styles/Home.css";

function Home() {
  return (
      <div className="home" style={{backgroundImage: `url(${HomeBackground})`}}>
        <div className="headerContainer" >
          <h1>Legally Gray Skateboards</h1>
          <p>Custom Decks</p>
          <Link to="/Products">
            <button> Explore </button>
          </Link>
        </div>
      </div>
  )
}

export default Home
