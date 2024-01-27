import React from 'react'
import "../styles/Contact.css";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export function Contact() {
  return (
    <div className='contact-container'>
      <h1>Feel Free to Get in Touch!</h1>
      <div className='contact'>      
      <div>
        <EmailIcon />
        <p>ravindranath48854@gmail.com</p>
        <p>support48854@gmail.com</p>
      </div>
      <div>
        <PhoneIcon/>
        <p>+91-600-999-8883</p>
        <p>Toll free: 1800-998-883</p>
      </div>
      <div>
        <BusinessIcon/>
        <p>1-1/1, Nagar, Medchal, Hyderabad, India</p>
      </div>
      <div id='Social-media'>
        <p>
          <InstagramIcon/>
          <FacebookIcon/>
          <TwitterIcon/>
          <YouTubeIcon/>
        </p>        
    </div>
    </div>
    </div>
  )
}

export default Contact