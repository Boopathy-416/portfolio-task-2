
import React, { useState, useEffect, useContext } from 'react';
import '../navbar-section/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NightModeContext } from '../../App';


const Navbar = () => {
  const { nightMode, toggleNightMode } = useContext(NightModeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getColor = () => {
    const colors = ['#ff6b6b', '#feca57', '#ff9ff3', '#48dbfb', '#1dd1a1'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };


  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <div className="time-box" style={{ backgroundColor: getColor() }}>
        {time.toLocaleTimeString()}
      </div>
        <img src="public/images/react.png"  alt="Logo" className='nov'/>
          <li><a className="nav-item" href="#">Home</a></li>
          <li><a className="nav-item" href="#about">About</a></li>
          <li><a className="nav-item" href="#projects">Projects</a></li>
          <li><a className="nav-item" href="#location">Location</a></li>
          <li><a className="nav-item" href="#contact">Contact</a></li>
          {/* <li><a className="nav-item" href="#skills">Skills</a></li> */}
          <li><button onClick={toggleNightMode}></button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
