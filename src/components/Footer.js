import React from 'react'
import "../styles/Footer.css"
import { Link } from 'react-router-dom';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // optional: smooth scrolling animation
    });
  };  
  return (
    <div className='footer'>
      <p>&copy; All Rights Reserved. | Ravi</p> 
      <div>
        <Link to={'/about'} onClick={scrollToTop}>About</Link> | 
        <Link to={'/contact'} onClick={scrollToTop}>Contacts</Link> | 
        <Link to={'/privacy'} onClick={scrollToTop}>Terms & Conditions</Link>
      </div>    
      
    </div>
  )
}

export default Footer