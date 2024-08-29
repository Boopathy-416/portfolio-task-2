
import React from 'react';
import '../3d components/Ds.css';

const AudiLogo = () => {
  return (
    <div className="logo-container">
      <div className="logo">
        <div >
            {/* <img src='' className="card2"></img> */}
            <div class="loader">
    <div class="cube">
      <div class="face front"></div>
      <div class="face back"></div>
      <div class="face left"></div>
      <div class="face right"></div>
      <div class="face top"></div>
      <div class="face bottom"></div>
    </div>
  </div>
  <div class="cube2">
      <div class="face2 front"></div>
      <div class="face2 back"></div>
      <div class="face2 left"></div>
      <div class="face2 right"></div>
      <div class="face2 top"></div>
      <div class="face2 bottom"></div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default AudiLogo;
