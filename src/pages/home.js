import React from 'react';
import {Link} from 'react-router-dom';
import t_Crier from '../assets/t_Crier.jpeg';
import '../Styles/home.css';


function home() {
  return (
    <div className='home'style={{backgroundImage: `url(${t_Crier})`}}> 
      <div className='headerContainer'>
      <h1>Hear Ye, Hear Ye!</h1>
      <p>Announcements to be heard</p>
      <Link to="/docs">
        <button> BLUF </button>
      </Link>
      </div>
      </div>
  );
}

export default home