import React, { useContext } from 'react'

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
import tv from "../assets/tv.jpg";
import Mouse from "../assets/Mouse.jpg";
import { ShopContext } from '../context/ShopContextProvider';

export const TrendingItem = [
    {
        id: 1,
        name: "Shoe",
        image: Shoes,
        price: '1,599'
    },
    {
        id: 2,
        name: "Mouse",
        image: Mouse,
        price: '249'
    },
    {
        id: 3,
        name: "Monitors",
        image: Monitors,
        price: '24,949'
    },
    {
        id: 4,
        name: "TV",
        image: tv,
        price: '12,499'
    },
    {
        id: 5,
        name: "T-shirt",
        image: T_shirt,
        price: '449'
    },
    {
        id: 6,
        name: "Refrigirator",
        image: Refrigirator,
        price: '22,949'
    },
    {
        id: 7,
        name: "KeyBoard",
        image: Keyboard,
        price: '1,149'
    },
    {
        id: 8,
        name: "Printer",
        image: Printer,
        price: '20,520'
    },
    {
        id: 9,
        name: "Camera",
        image: Camera,
        price: '44,949'
    },
    {
        id: 10,
        name: "Watch",
        image: Watch,
        price: '2,499'
    },
    {
        id: 11,
        name: "Washing Machine",
        image: Washing_Machine,
        price: '26,549'
    },
    {
        id: 12,
        name: "Pant",
        image: Pant,
        price: '899'
    },
];

export function Trendings(props) {
    const {id, image, name, price} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
  return (
    <>
    <div className='trendings'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <p>{name}</p>
        <p>Price: &#x20B9; {price}</p>
    </div>
    <div className='btn'>
        <button className='buy'>Buy Now</button>
        <button onClick={() => addToCart(id)}>Add To Cart { cartItemAmount > 0 && <> ({cartItemAmount}) </>}</button>
  </div>
  </>
  )
}

export default Trendings