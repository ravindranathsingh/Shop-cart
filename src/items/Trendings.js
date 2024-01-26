import React from 'react'

import Pant from "../assets/Pant.jpg";
import Watch from "../assets/Watch.jpg";
import Washing_Machine from "../assets/Washing_Machine.jpg";
import T_shirt from "../assets/T_shirt.jpg";
import Shoes from "../assets/Shoes.jpg";
import Refrigirator from "../assets/Refrigirator.jpg";

export const TrendingItem = [
    {
        name: "Pant",
        image: Pant,
        price: 899
    },
    {
        name: "Watch",
        image: Watch,
        price: 2499
    },
    {
        name: "Washing Machine",
        image: Washing_Machine,
        price: 26549
    },
    {
        name: "T-shirt",
        image: T_shirt,
        price: 449
    },
    {
        name: "Shoe",
        image: Shoes,
        price: 1599
    },
    {
        name: "Refrigirator",
        image: Refrigirator,
        price: 22949
    }
];

export function Trendings({image, name, price}) {
  return (
    <div className='trendings'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <p>{name}</p>
        <p>Price: &#x20B9; {price}</p>
    </div>
  )
}

export default Trendings