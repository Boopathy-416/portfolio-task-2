import './App.css'
import React, { createContext, useState, useEffect} from 'react';
import Navbar from './Components/navbar-section/Navbar'
import Footer from './Components/footer-section/Footer'
import Hero from './Components/hero-section/Hero'
import About from './Components/about section/About';
import Projects from './Components/projects section/Project'; 
import Skills from './Components/skill section/Skill';
import Contact from './Components/contact-section/Contact';
import Location from './Components/Location-section/Location';
import Loading from './loadsection/Loading';
import CustomCursor from './Cursor-modify/Cursor';
import AudiLogo from './3d components/Ds';
import Bg from './Bg section/Bg';


export const NightModeContext = createContext()

function App(){

  const [nightMode, setNightMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
    document.body.classList.toggle('night-mode');
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <NightModeContext.Provider value={{ nightMode, toggleNightMode }}>
      {loading ? (
        <Loading nightMode={nightMode} />
      ) : (
   <div >
    <Bg nightMode={nightMode} />
      <CustomCursor />
       <Navbar />
       <Hero />
       <AudiLogo />
       <About />
       <Projects />
       <Location />
       <Contact />
      <Footer />
      </div>
      )}
   </NightModeContext.Provider>
  )
}

export default App;