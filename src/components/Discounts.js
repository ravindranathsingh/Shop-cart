import React from 'react'

import Mobiles from "../assets/Mobiles.jpg";
import Laptop from "../assets/Laptop.jpg";
import Bed from "../assets/Bed.jpg";

export const Discount = [
    {
        image: Mobiles,
        product : "Mobiles",
        discount: "45%",
        price: 14999
    },
    {
        image: Laptop,
        product : "Laptops",
        discount: "20%",
        price: 44999
    },
    {
        image: Bed,
        product : "Beds",
        discount: "11%",
        price: 9499
    }
]

export function Discounts({image, product, discount, price}) {
  return (
    <div className='discounts'>
            <div style={{backgroundImage: `url(${image})`}}></div>
            <h1>{product}</h1>
            <p>{discount} off /-</p>
            <h3> Price: &#x20B9; {price} /-</h3>      
    </div>
  )
}

export default Discounts