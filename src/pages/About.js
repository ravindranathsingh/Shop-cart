import React from 'react'
import "../styles/About.css";
import AboutUs from "../assets/about.png";

export function About() {
  return (
    <div className='about'>
      <h1>About Us</h1>
      <div className='about-us' style={{backgroundImage: `url(${AboutUs})`}}>        
        <p>Welcome to our online shopping haven, where style meets convenience! Dive into a world of endless possibilities as 
            you explore our curated collection of fashion-forward apparel, accessories, and lifestyle essentials. Whether you're 
            seeking the latest trends or timeless classics, our diverse range ensures there's something for every taste and 
            occasion. Elevate your wardrobe with our carefully selected pieces, showcasing a perfect blend of comfort, quality,
            and chic aesthetics. Our user-friendly interface and secure checkout process make shopping a breeze, allowing you 
            to focus on what you love most discovering new styles that express your unique personality. Join our fashion 
            community and indulge in the joy of finding the perfect ensemble that reflects your individuality. With regular
            updates and exclusive deals, we strive to make your online shopping experience not just convenient, but truly 
            delightful. 
            <h4>Happy shopping!</h4>
        </p>
      </div>
      <div className='brand-strip'>
        <ul class="about-list">
          <li>
            <span>Numbers Speak For Themselves!</span>
          </li>
          <li class="about-li">
            <span>5000+</span><span>Curated Products</span>
          </li>
          <li class="about-li">
            <span>800+</span>
            <span>Rated Products</span>
          </li>
          <li class="about-li">
            <span>40+</span>
            <span>Product Categories</span>
          </li>
        </ul>
      </div>      
    </div>    
  );
}

export default About