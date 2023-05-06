import React from 'react';
import {Link} from 'react-router-dom';
import HomeBackground from '../assets/home-background.jpg';
import "../styles/Home.css";

function Home() {
  return (
      <div className="home">
        <div className="headerContainer" style={{backgroundImage: `url(${HomeBackground})`}}>
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
