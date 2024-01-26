import React from 'react'

import Keyboard from "../assets/Keyboard.jpg";
import Printer from "../assets/Printer.jpg";
import Camera from "../assets/Camera.jpg";
import Monitors from "../assets/Monitors.jpg";
import TV from "../assets/TV.jpg";
import Mouse from "../assets/Mouse.jpg";

export const Electronic = [
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
        name: "Mouse",
        image: Mouse,
        price: 249
    },
];

export function Electronics({image, name, price}) {
  return (
    <div className='electronic'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <p>{name}</p>
        <p>Price: &#x20B9; {price}</p>
    </div>
  )
}

export default Electronics