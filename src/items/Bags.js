import React from 'react'
import Suitcase from "../assets/Suitcase.webp";
import Trekking from "../assets/Trekking.png";
import Wildcraft from "../assets/Wildcraft.webp";
import Duffel from "../assets/Duffel.webp";
import Travel_Luggage from "../assets/Travel_Luggage.webp";
import Travel_Bag from "../assets/Travel_Bag.webp";
import Tourister from "../assets/Tourister.webp";
import Mountain from "../assets/Mountain.webp";
import Hand_Duffel from "../assets/Hand_Duffel.webp";

export const bagList = [
    {
        name : "Small Cabin Suitcase (57 cm)",
        image: Suitcase,
        price: '1,199',
    },
    {
        name : "GTIER TREKKING",
        image: Trekking,
        price: '528',
    },
    {
        name : "Wildcraft Flip Ruck",
        image: Wildcraft,
        price: '1,379',
    },
    {
        name : "WROGN 70 L Strolley Duffel Bag",
        image: Duffel,
        price: '549',
    },
    {
        name : "Urban Travel Luggage 70 L Strolley Duffel Bag",
        image: Travel_Luggage,
        price: '399',
    },
    {
        name : "Fast look Expandable Travel Bag",
        image: Travel_Bag,
        price: '699',
    },
    {
        name : "Kamiliant by American Tourister",
        image: Tourister,
        price: '1,649',
    },
    {
        name : "JIRFASHION Mountain Rucksack bag",
        image: Mountain,
        price: '415',
    },
    {
        name : "Wildcraft 40 L Hand Duffel",
        image: Hand_Duffel,
        price: '889',
    }
];
function GetbagList({image, name, price}) {
        return (
            <div className='productItems'>
                <div style={{backgroundImage: `url(${image})`}}></div>
                <p>{name}</p>
                <p>Price: &#x20B9; {price}</p>
            </div>
          );
    }
export function Bags() {    
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Travel with Ease</h1> <hr/>
          <div>              
              {
                bagList.map((bagItem, idx) => {
                  return (
                    <div><GetbagList idx={idx} image={bagItem.image} name={bagItem.name} price={bagItem.price}/> 
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

export default Bags