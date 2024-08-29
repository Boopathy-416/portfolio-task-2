
import React from 'react';
import '../loadsection/Loading.css';

const Loading = ({ nightMode }) => {
  return (
    <div className={`loading-container ${nightMode ? 'night' : ''}`}>
     <div class="loop cubes">
    <div class="itom cubes"></div>
    <div class="itom cubes"></div>
    <div class="itom cubes"></div>
    <div class="itom cubes"></div>
    <div class="itom cubes"></div>
    <div class="itom cubes"></div>
</div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Loading;
