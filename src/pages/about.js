import React from 'react';
import Quit from '../assets/quit.jpeg';
import '../Styles/about.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${Quit})`}}>

        </div> 
        <div className='aboutBottom'>
            <h1> About this site </h1>
            <p> This site is soley dedicated to my resignation/retirement for the ALARNG.  
                See offical corespondance in other sections
            </p>
        </div>
    </div>
  )
}

export default About