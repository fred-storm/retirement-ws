import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Styles/footer.css';
import { IconButton } from '@mui/material';


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <IconButton href="https://instagram.com"><InstagramIcon /></IconButton><IconButton href="https://facebook.com"><FacebookIcon /></IconButton><IconButton href="https://www.linkedin.com/in/adam-frederick-b6a07472"><LinkedInIcon /></IconButton>
        <p> &copy; 2024 A4Fgadgets </p>
        </div>
    </div>
  )
}

export default Footer