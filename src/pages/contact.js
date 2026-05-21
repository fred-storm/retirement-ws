import React from 'react';
import Letter from '../assets/letter.jpeg';
import '../Styles/contact.css';

function Contact() {
  return (
    <div className='contact'>
       <div className='leftSide' style={{backgroundImage: `url(${Letter})`}}>
       </div>
       <div className='rightSide'>
       <h1> Contact Us </h1>
       <form id="contact-form" method='PUT'>
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Enter Full Name' type='text' />
          <label htmlFor='email'>email</label>
          <input name='email' placeholder='Enter Email Address' type='email' />
          <label htmlFor='phone'>phone</label>
          <input name='phone' placeholder='Phone number' type='text' />
          <label htmlFor='body'>Body</label>
          <textarea rows="6" placeholder='Tell us what we can do.' name='body' required></textarea>
          <button type='submit'>Submit</button>

       </form>
       </div>
    </div>
  )
}

export default Contact