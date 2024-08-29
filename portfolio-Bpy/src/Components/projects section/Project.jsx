// src/Projects.js
import React, { useContext } from 'react';
import '../projects section/Project.css';
import { NightModeContext } from '../../App';



const Projects = () => {
  const { nightMode } = useContext(NightModeContext);


  return (
    <section id="projects"className={`projects ${nightMode ? 'night' : ''}`}>
      <div className="projects-container">
       <div className="skills-header">
                                <h3>Frontend</h3>
                            </div>
                            <div className="skills-list">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Bootstrap</span>
                                <span>JavaScript</span>
                                <span>React Js</span>
                    
                            </div>
                        </div>
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Backend</h3>
                            </div>
                            <div className="skills-list">
                                <span>JAVA</span>
                            </div>
                        </div>
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Database</h3>
                            </div>
                            <div className="skills-list">
                                <span>MongoDB</span>
                            </div>
                            <section class="section" id="projects">
                <div class="top-header">
                    <h1>Projects</h1>
                </div>
                <div class="project-container">
                    <div class="project-box">
                        <i class="uil uil-briefcase-alt"></i>
                        <h3>Completed</h3>
                        <label>3+ Finished Projects</label>
                    </div>
                    <div class="project-box">
                        <i class="uil uil-users-alt"></i>
                        <h3>Clients</h3>
                        <label>2+ Happy Clients</label>
                    </div>
                    <div class="project-box">
                        <i class="uil uil-award"></i>
                        <h3>Fresher</h3>
                        <label>Free Lancer</label>
                    </div>
                </div>
            </section>

      </div>
    </section>
  );
};

export default Projects;
