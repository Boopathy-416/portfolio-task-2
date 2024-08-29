// src/Skills.js
import React, { useContext, useState, useEffect } from 'react';
import '../skill section/Skill.css';
import { NightModeContext } from '../../App';
import Skillslist from './Skillslist';

import {
  ab,
  bc,
  cd,
  ef,
  gh} from '../skill section/data';


const Skills = () => {
  const { nightMode } = useContext(NightModeContext);
  
  const [selected,setSelected] = useState("ab");
  const [data,setData] = useState([]);
  
  const list =[
    {
      id:"ab",
      title:"website",
    },
    {
      id:"bc",
      title:"web app",
    },
    {
      id:"cd",
      title:"Graphics ",
    },
    {
      id:"ef",
      title:"cell phone",
    },
    {
      id:"gh",
      title:"AI App",
    },
  ];

  useEffect(()=>{
switch(selected){
  case "ab":
    setData(ab);
    break;
    case "bc":
      setData(bc);
      break;
      case "cd":
        setData(cd);
        break;
        case "ef":
          setData(ef);
          break;
          case "gh":
            setData(gh);
            break;
          default:
            setData(ab)
}

  },[selected])



  return (
    <section id="skills" className={`skills ${nightMode ? 'night' : ''}`}>
     <h1>projects</h1>
     <ul>
     {list.map(item=>(
       <Skillslist
       title={item.title} 
       active={selected === item.id} 
       setSelected={setSelected} 
       id={item.id} />
      ))}
     </ul>

     <div className="container">
      {data.map((d) =>(
        <div className="item">
          <img className='crt'
          src={d.img} 
          alt="no image"
         />
        <h3></h3> 
      </div>
      ))}
      </div>
    </section>
  );
};

export default Skills;

