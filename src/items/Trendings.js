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
        image: TV,
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

function GettrendList(props) {
    const {image, name, price} =props.data;
          return (
            <>
            <div className='productItems'>
              <div style={{backgroundImage: `url(${image})`}}></div>
              <p>{name}</p>
              <p>Price: &#x20B9; {price}</p>
            </div>
            <div className='btn'>
              <button className='buy'>Buy Now</button>
              <button >Add To Cart</button>
            </div>
            </>
            );
      }

export function Trendings() {
    return (
        <div className='products'>
            <div className='product-list'>
              <h1>Trending Products</h1> <hr/>
                <div>              
                    {
                        TrendingItem.map((prodList) => {
                        return (
                            <div>
                                <GettrendList data={prodList} image={prodList.image} name={prodList.name} 
                                price={prodList.price}/>
                            </div>
                        );
                        })
                    }
                </div>           
            </div>
        </div>
      )
}

export default Trendings