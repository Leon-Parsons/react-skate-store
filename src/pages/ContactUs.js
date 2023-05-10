import React from 'react';
import '../styles/ContactUs.css';
import ContactUsPic from '../assets/contactUs.jpg';
import '../styles/ContactUs.css';

function ContactUs() {
  return (
    <div className='contact'>
      <div className="leftSide" style={{backgroundImage: `url(${ContactUsPic})`}}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name"></label>
          <input id="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email"></label>
          <input id="email" placeholder="Enter email..." type="text"></input>
          <label htmlFor="message"></label>
          <textarea rows="6" placeholder='Your message...' name="message" required ></textarea>
          <button type="submit"></button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
