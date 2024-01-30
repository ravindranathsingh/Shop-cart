import React from 'react'

import Pant from "../assets/Pant.jpg";
import Watch from "../assets/Watch.jpg";
import Washing_Machine from "../assets/Washing_Machine.jpg";
import T_shirt from "../assets/T_shirt.jpg";
import Shoes from "../assets/Shoes.jpg";
import Refrigirator from "../assets/Refrigirator.jpg";

import Keyboard from "../assets/Keyboard.jpg";
import Printer from "../assets/Printer.jpg";
import Camera from "../assets/Camera.jpg";
import Monitors from "../assets/Monitors.jpg";
import TV from "../assets/TV.jpg";
import Mouse from "../assets/Mouse.jpg";

export const TrendingItem = [
    {
        name: "Shoe",
        image: Shoes,
        price: 1599
    },
    {
        name: "Mouse",
        image: Mouse,
        price: 249
    },
    {
        name: "Monitors",
        image: Monitors,
        price: 24949
    },
    {
        name: "TV",
        image: TV,
        price: 12499
    },
    {
        name: "T-shirt",
        image: T_shirt,
        price: 449
    },
    {
        name: "Refrigirator",
        image: Refrigirator,
        price: 22949
    },
    {
        name: "KeyBoard",
        image: Keyboard,
        price: 1149
    },
    {
        name: "Printer",
        image: Printer,
        price: 20520
    },
    {
        name: "Camera",
        image: Camera,
        price: 44949
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
        name: "Pant",
        image: Pant,
        price: 899
    },
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