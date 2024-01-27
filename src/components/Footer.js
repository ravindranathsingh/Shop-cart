import React from 'react'
import "../styles/Footer.css"
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <div className='footer'>
      <p>All Rights Reserved. &copy; | Ravi</p> 
      <div>
        <Link to={'/about'}>About</Link> | 
        <Link to={'/contact'}>Contacts</Link> | 
        <Link to={'/privacy'}>Terms & Conditions</Link>
      </div>    
      
    </div>
  )
}

export default Footer