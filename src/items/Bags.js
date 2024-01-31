import React, { useContext } from 'react'
import { ShopContext } from "../context/ShopContextProvider";
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
        id: 1,
        name : "Small Cabin Suitcase (57 cm)",
        image: Suitcase,
        price: '1,199',
    },
    {
        id: 2,
        name : "GTIER TREKKING",
        image: Trekking,
        price: '528',
    },
    {
        id: 3,
        name : "Wildcraft Flip Ruck",
        image: Wildcraft,
        price: '1,379',
    },
    {
        id: 4,
        name : "WROGN 70 L Strolley Duffel Bag",
        image: Duffel,
        price: '549',
    },
    {
        id: 5,
        name : "Urban Travel Luggage 70 L Strolley Duffel Bag",
        image: Travel_Luggage,
        price: '399',
    },
    {
        id: 6,
        name : "Fast look Expandable Travel Bag",
        image: Travel_Bag,
        price: '699',
    },
    {
        id: 7,
        name : "Kamiliant by American Tourister",
        image: Tourister,
        price: '1,649',
    },
    {
        id: 8,
        name : "JIRFASHION Mountain Rucksack bag",
        image: Mountain,
        price: '415',
    },
    {
        id: 9,
        name : "Wildcraft 40 L Hand Duffel",
        image: Hand_Duffel,
        price: '889',
    }
];
function GetbagList(props) {
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
            <button onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}</button>
          </div>
          </>
          );
    }
export function Bags() {    
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Travel with Ease</h1> <hr/>
          <div>              
              {
                bagList.map((bagItem) => {
                  return (
                    <div><GetbagList data= {bagItem} image={bagItem.image} name={bagItem.name} price={bagItem.price}/></div>
                  );
                })
              }
          </div>          
        </div>
    </div>
  )
}

export default Bags