import React, { useContext } from 'react'
import Watch from "../assets/Watch.jpg";
import Keyboard from "../assets/Keyboard.jpg";
import Printer from "../assets/Printer.jpg";
import Camera from "../assets/Camera.jpg";
import Monitors from "../assets/Monitors.jpg";
import Mouse from "../assets/Mouse.jpg";
import Desktops from "../assets/Desktops.webp";
import Trimmer from "../assets/Trimmer.webp";
import Lenovo_Laptop from "../assets/Lenovo_Laptop.webp";
import { ShopContext } from '../context/ShopContextProvider';

export const electronicList = [
    {
        id: 1,
        name : "ASUS Gaming & Editing Desktops Core i5 Core i5",
        image: Desktops,
        price: '35,590',
    },
    {
        id: 2,
        name : "PHILIPS BT3101/15 Trimmer",
        image: Trimmer,
        price: '1,049',
    },
    {
        id: 3,
        name : "Lenovo IdeaPad Slim 3 Intel Core i5",
        image: Lenovo_Laptop,
        price: '30,990',
    },
    {
        id: 4,
        name: "Noise Icon Buzz Smart Watch",
        image: Watch,
        price: "2,499"
    },
    {
        id: 5,
        name: "ZEBRONICS Zeb-K20 Wired USB Desktop Keyboard",
        image: Keyboard,
        price: "849"
    },
    {
        id: 6,
        name: "HP LaserJet M1005 MFP",
        image: Printer,
        price: "20,520"
    },
    {
        id: 7,
        name: "Canon EOS 300D DSLR Camera",
        image: Camera,
        price: '31,990'
    },
    {
        id: 8,
        name: "Intel Monitor (15 inch) HD",
        image: Monitors,
        price: '14,990'
    },
    {
        id: 9,
        name: "Logitech Mouse",
        image: Mouse,
        price: '249'
    }
];
function GetelectronicList(props) {
  const {id, image, name, price} = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
        return (
          <>
          <div className='productItems'>
            <div style={{backgroundImage: `url(${image})`}}></div>
            <p>{name}</p>
            <p>Price: &#x20B9; {price}</p>
          </div>
          <div className='btn'>
            <button className='buy'>Buy Now</button>
            <button onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount}) </>}</button>
          </div>
          </>
          );
    }
export function Electronics() {    
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Unleash the Future with Our Cutting-Edge Electronics!</h1> <hr/>
          <div>              
              {
                electronicList.map((electronicItem) => {
                  return (
                    <div><GetelectronicList data={electronicItem} image={electronicItem.image} name={electronicItem.name} price={electronicItem.price}/></div>
                  );
                })
              }
          </div>          
        </div>
    </div>
  )
}

export default Electronics