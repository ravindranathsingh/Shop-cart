import React from 'react'
import "../styles/Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import About from "../assets/about.jpg";

export function Footer() {
  return (
    <div className='footer'>
      <div className='about' style={{backgroundImage: `url(${About})`}}>
        <h1>About Us</h1>
        <p>Welcome to our online shopping haven, where style meets convenience! Dive into a world of endless possibilities as you explore our curated collection of fashion-forward apparel, accessories, and lifestyle essentials. Whether you're seeking the latest trends or timeless classics, our diverse range ensures there's something for every taste and occasion. Elevate your wardrobe with our carefully selected pieces, showcasing a perfect blend of comfort, quality, and chic aesthetics. Our user-friendly interface and secure checkout process make shopping a breeze, allowing you to focus on what you love most discovering new styles that express your unique personality. Join our fashion community and indulge in the joy of finding the perfect ensemble that reflects your individuality. With regular updates and exclusive deals, we strive to make your online shopping experience not just convenient, but truly delightful. <h4>Happy shopping!</h4></p>
      </div>
      
      <div className='contact'>
        <p>&copy; All Rights Reserved.</p>
        <div id='contact-media'>
          <InstagramIcon/>
          <FacebookIcon/>
          <TwitterIcon/>
          <YouTubeIcon/>
        </div>
      </div><hr/>
    </div>
  )
}

export default Footer