import React from 'react'
import { Link } from "react-router-dom";

import Mobile from '../assets/Mobile.jpg';
import Fashion from '../assets/Fashion.jpg';
import Electronic from '../assets/Electronic.jpg';
import Appliance from '../assets/Appliance.jpg';
import Shoe from '../assets/Shoe.jpg';
import Toy from '../assets/Toy.jpg';
import Furniture from '../assets/Furniture.jpg';
import Bag from '../assets/Bag.jpg';

export const Category = [
    {
        name : "Appliances",
        image: Appliance,
    },
    {
        name : "Bags",
        image: Bag,
    },
    {
        name : "Electronics",
        image: Electronic,
    },
    {
        name : "Fashion",
        image: Fashion,
    },
    {
        name : "Furniture",
        image: Furniture,
    },
    {
        name : "Mobiles",
        image: Mobile,
    },    
    {
        name : "Shoes",
        image: Shoe,
    },
    {
        name : "Toys",
        image: Toy,
    }  
]

export function Categories({image, name}) {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // optional: smooth scrolling animation
        });
      };
  return (
    <>
    <div className='category'>
      <Link to={name} onClick={scrollToTop}>
        <img src={image} alt={name} />
        <h1>{name}</h1>
      </Link>           
    </div>
    </>
    
  )
}

export default Categories