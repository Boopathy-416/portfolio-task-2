import React from 'react';
import '../Bg section/Bg.css';

const Bg = ({ nightMode }) => {
  return (
    <div className={`background  playing ${nightMode ? 'night' : ''}`}></div>
    
  );
};

export default Bg;
