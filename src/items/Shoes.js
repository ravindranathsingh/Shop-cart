import React from 'react'
import Sneaker1 from "../assets/Sneaker1.webp";
import Sneaker2 from "../assets/Sneaker2.webp";
import Sneaker3 from "../assets/Sneaker3.webp";
import Sneaker4 from "../assets/Sneaker4.webp";
import Sneaker5 from "../assets/Sneaker5.webp";
import Sneaker6 from "../assets/Sneaker6.webp";
import Sneaker7 from "../assets/Sneaker7.webp";
import Sneaker8 from "../assets/Sneaker8.webp";
import Sneaker9 from "../assets/Sneaker9.webp";

export const shoesList = [
    {
        name : "ATOM Gansta1 Sneaker",
        image: Sneaker1,
        price: '1,339',
    },
    {
        name : "CAMPUS NORTH PLUS",
        image: Sneaker2,
        price: '1,215',
    },
    {
        name : "RebelBe Outdoor Casual",
        image: Sneaker3,
        price: '599',
    },
    {
        name : "Aadi Synthetic",
        image: Sneaker4,
        price: '434',
    },
    {
        name : "BRUTON Lite Sports Shoe",
        image: Sneaker5,
        price: '514',
    },
    {
        name : "asian Newton-09 White",
        image: Sneaker6,
        price: '648',
    },
    {
        name : "action Action Athleo",
        image: Sneaker7,
        price: '1,119',
    },
    {
        name : "JQR Signature Sports",
        image: Sneaker8,
        price: '1,270',
    },
    {
        name : "Proase All Rounder Cricket Sports Shoe",
        image: Sneaker9,
        price: '999',
    }
];
function GetshoesList({image, name, price}) {
        return (
            <div className='productItems'>
                <div style={{backgroundImage: `url(${image})`}}></div>
                <p>{name}</p>
                <p>Price: &#x20B9; {price}</p>
            </div>
          );
    }
export function Shoes() {    
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Step into Style, Stride with Confidence</h1> <hr/>
          <div>              
              {
                shoesList.map((shoesItem, idx) => {
                  return (
                    <div><GetshoesList idx={idx} image={shoesItem.image} name={shoesItem.name} price={shoesItem.price}/> 
                      <div className='btn'>
                        <button>Add To Cart</button>
                        <button className='buy'>Buy Now</button>
                      </div>                      
                    </div>
                  );
                })
              }
          </div>          
        </div>
    </div>
  )
}

export default Shoes