import React from 'react';
import AboutPic from '../assets/aboutUs2.jpg';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className='about'>
      <div className="aboutTop" style={{backgroundImage: `url(${AboutPic})`}}>

      </div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>For 15 years Legaaly Gray Skate has been leading the way in Skate Culture and Skate Fashion.
            We were there at the beginning of this modern era of Skateboarding and Streetwear. Powell Peralta, 
            Santa Cruz and Vision Streetwear. Whether you’re wanting to try something new, or have 
            been shredding it for years, Legally Gray Skate is your destination for the authentic skate vibe.
        </p>

      </div>
    </div>
  )
}

export default AboutUs
