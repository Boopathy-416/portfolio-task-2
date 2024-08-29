// src/About.js
import React, { useContext, useEffect, useRef } from 'react';
import '../about section/About.css';
import { NightModeContext } from '../../App';

const About = () => {
  const { nightMode } = useContext(NightModeContext);
  const descriptionRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (descriptionRef.current) {
        const descriptionPos = descriptionRef.current.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > descriptionPos) {
          descriptionRef.current.classList.add('fadeIn');
        }
      }
      if (educationRef.current) {
        const educationPos = educationRef.current.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > educationPos) {
          educationRef.current.classList.add('fadeIn');
        }
      }
      if (experienceRef.current) {
        const experiencePos = experienceRef.current.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > experiencePos) {
          experienceRef.current.classList.add('fadeIn');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <section id='about' className={`about ${nightMode ? 'night' : ''}`}>
      <div className="about-container">
<div className="card mb-3 d-flex flex-column flex-md-row justify-content-between box card4" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4 mini">
      <img src="/images/mern-stack-icon-1.png" className="img-fluid don rounded-start" alt="..." />
    </div> 
    <div className="col-md-8 ">
      <div className="card-body" ref={descriptionRef} >
        <h5 className="card-title">COURSE</h5>
        <h3 className="mb-0">Full Mern Stack Developer</h3>
        <div className="subheading mb-3">KGISL Micro College Coimbatore.</div>
        <div>
           In Mern Stack Programmes with 7 Month Internship in Web Developer
        </div>
        <p>Percentage: Above 80% in all Tasks</p>
        <div className="flex-shrink-0">
              <span className="text-primary">Dec 2023 - June 2024</span>
            </div>
        
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
      <div className="card mb-3 box card4" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4 mini">
      <img src="/images/Anna_University_Logo.svg.png" className="img-fluid don rounded-start" alt="..." />
    </div> 
    <div className="col-md-8 ">
      <div className="card-body">
        <h5 className="card-title">Education</h5>
        <h3 className="mb-0">Anna University Chennai</h3>
        <div className="subheading mb-3">Bachelor of Mechanical Engineering</div>
        <div>
          RVS Engineering College of Insititution Coimbatore.
        </div>
        <p>Percentage: Above 6.5 CGPA in all semesters</p>
        <div className="flex-shrink-0">
              <span className="text-primary">Aug 2019 - June 2023</span>
            </div>
        
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
{/* ------------------3box */}
<div className="card mb-3 d-flex flex-column flex-md-row justify-content-between box card4 " style={{ maxWidth: 540 }}>
  <div className="row g-0 ">
    <div className="col-md-4 mini">
      <img src="/images/TNlogo-removebg-preview.png" className="img-fluid don rounded-start" alt="..." />
    </div> 
    <div className="col-md-8  ">
      <div className="card-body ">
        <h5 className="card-title">Education</h5>
        <h3 className="mb-0 ">TN-State Board of Examination</h3>
        <div className="subheading mb-3">Higher Education (Biology-Grp)</div>
        <div>
           Subash Matric Hr. sec school Murugampalayam Tiruppur-641687
        </div>
        <p>Percentage: Above 60% in 12TH Std</p>
        <div className="flex-shrink-0" ref={descriptionRef}>
              <span className="text-primary">June 2018 - June 2019</span>
            </div>
        
        <p className="card-text">
          <small className="text-body-secondary ">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
<div className="card3 fadeIn"></div>
      </div>
    </section>
    
  );
};

export default About;
