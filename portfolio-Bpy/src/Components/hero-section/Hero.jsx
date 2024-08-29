// src/Hero.js
import React, { useContext} from 'react';
import '../hero-section/Hero.css';
import { NightModeContext } from '../../App';
import img from '/public/images/ic-html.png';

const Hero = () => {
  const { nightMode } = useContext(NightModeContext);

  return (
    <section className={`hero ${nightMode ? 'night' : ''}`} >
      <div className="hero-content">
        <img src="public/images/Untitled design.png" alt="Profile" className="profile-image" />
        <h1 className="hero-title">Hi, I'm E Boopathy</h1>
        <p>"I am a freelancer specializing in UI/UX design and web application development."</p>
        <p className="slogan">"Transforming ideas into reality with code and design."</p>
         <div className="logos">
        <img src="public/images/ic-html.png" />
        <img src="public/images/ic-js.png" />
        <img src="public/images/ic-git.png" />
        <img src="public/images/ic-react.png" />
    </div>
      </div>
    </section>
  );
};

export default Hero;

