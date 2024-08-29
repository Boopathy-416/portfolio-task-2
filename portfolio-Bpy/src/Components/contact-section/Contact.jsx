import React, { useContext, useRef } from "react";
import { NightModeContext } from "../../App";
import "./Contact.css";

const Contact = () => {
  const { nightMode } = useContext(NightModeContext);
  const downloadButtonRef = useRef(null);

  const handleMouseEnter = () => {
    downloadButtonRef.current.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = () => {
    downloadButtonRef.current.style.transform = "scale(1)";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

  const handleClear = () => {
    document.getElementById("career-form").reset();
  };

  return (
    <section id="contact" className={`career ${nightMode ? "night" : ""}`}>
      <div className="career-container">
        <h1>Get in touch</h1>
        </div>
        <p>Do you have a project in your mind, contact me here</p>
      <div class="row">
        
        <div class="col">
          <div class="contact-info">
            <h2>
              Find Me 
            </h2>
            <p>
              <i class="uil uil-envelope"></i> Email: boopathy1865@gmail.com
            </p>
            <p>
              <i class="uil uil-phone"></i> +91 7094429166
            </p>
          </div>
        </div>
        <div class="col career-form-container">
          <form id="career-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <h1>
                <b>Contact Me</b>
              </h1>
              
              <input
              placeholder="Name"
                className="input-item"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <input
                 placeholder=" Email Address"
                className="input-item"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                 placeholder="Message "
                className="input-item"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="form-buttons">
              <button type="submit">Send</button>
              <button type="button" onClick={handleClear}>
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="career-image">
        {/* here 3d */}
        <div class="car">
          <div class="top"></div>
          <div class="body"></div>
          <div class="shadow"></div>
        </div>
      </div>
      <div className="career-form-containers">
      <div
          className="download-button"
          ref={downloadButtonRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/assets/Boopathy Resume fs.pdf" download="Boopathy_CV.pdf">
          Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
