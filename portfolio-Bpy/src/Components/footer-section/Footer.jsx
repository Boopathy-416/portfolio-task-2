// src/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';



const Footer = () => {

  // const getColor = () => {
  //   const colors = ['#ff6b6b', '#ff9ff3', '#48dbfb', '#1dd1a1'];
  //   return colors[Math.floor(Math.random() * colors.length)];
  // style={{ backgroundColor: getColor() }}// };
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="public/images/react copy.png"  alt="Logo" className="footer-logo" />
        <div className="social-media">
          <a className='iconic svg' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
            <span className='iconic-title'>Meta</span>
          </a>
          <a className='iconic svg' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
            <span className='iconic-title'>X</span>
          </a>
          <a className='iconic svg' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            <span className='iconic-title'>Instagram</span>
          </a>
          <a className='iconic svg' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <span className='iconic-title'>Linkdin</span>
          </a>
        </div>
        <div className="content">
        <div className="contact-infos">
          <p>Contact: 91+ 7094429166</p>
          <p>Email: boopathy1865@gmail.com</p>
          <p>Address: Tiruppur District TamilNadu </p>
        </div>
        <div className="portfolio-info">
          <p>This is a portfolio website by Boopathy E.</p>
        </div>
        <div className="ratings">
          <p>Rate this website:</p>
          <div className="stars ityped-cursor">
            {[...Array(3)].map((_, index) => (
              <span key={index} className="star">&#9733;</span>
            ))}
          </div>
          </div>
        </div>
      </div>
      <p>&copy; 2024 BPY's Creation. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
