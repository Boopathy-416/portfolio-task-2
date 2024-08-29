import React, { useContext } from 'react';
import '../Location-section/Location.css';
import { NightModeContext } from '../../App';
import img from '/public/images//location.png';

const Location = () => {
  const { nightMode } = useContext(NightModeContext);

  const handleMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setError(null);
        },
        (error) => {
          setError('Unable to retrieve your location.');
    
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <section id="location" className={`education ${nightMode ? 'night' : ''}`}>
      <h2>My Location</h2>
      <div className="container1">
      <div className="map-container">
      <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9311.889195967295!2d77.31915781490737!3d11.100919403106024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9070d724df6f7%3A0x3b09a38bbe2c5094!2zVGlydXB1ciBLdW1hcmFuIENvbGxlZ2UgZm9yIFdvbWVuIOCupOCuv-CusOCvgeCuquCvjeCuquCvguCusOCvjSDgrpXgr4Hgrq7grrDgrqngr40g4K6u4K6V4K6z4K6_4K6w4K-NIOCuleCusuCvjeCusuCvguCusOCuvw!5e0!3m2!1sen!2sin!4v1719977795995!5m2!1sen!2sin"
          width="500"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="slow"
          title="Google Map"
        ></iframe>
      </div>
      <button className="location-button" onClick={handleMyLocation}>My Location</button>
      </div>
      <div className="container2">
      <div className="education-card">
        <h3>Contact Me</h3>
        <p>Address:Kumaran College ,Tirupur.TamilNadu-641687</p>
        <p>Email:boopathy1865@gmail.com.com</p>
        <p>Phone:+91 - 709 442 9166</p>
        <div className="card-image">
          <img src="/public/images/location.png" alt="Mobile" />
        <div className="card2"></div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Location;
