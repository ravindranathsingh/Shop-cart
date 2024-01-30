import React from 'react'
import ShopCart_Bed from "../assets/ShopCart_Bed.webp";
import Take_Interio from "../assets/Take_Interio.webp";
import Bunk_Loft from "../assets/Bunk_Loft.webp";
import three_Seater from "../assets/three_Seater.webp";
import Wakeup_Sofa from "../assets/Wakeup_Sofa.webp";
import six_Seater from "../assets/six_Seater.webp";
import two_Seater from "../assets/two_Seater.webp";
import Computer_Desk from "../assets/Computer_Desk.webp";
import Gaming_Chair from "../assets/Gaming_Chair.webp";

export const furnitureList = [
    {
        name : "ShopCart Engineered Wood Queen Bed",
        image: ShopCart_Bed,
        price: '9,249',
    },
    {
        name : "Take Interio Engineered Wood Queen Bed",
        image: Take_Interio,
        price: '9,299',
    },
    {
        name : "StellWell BUNK LOFT BED",
        image: Bunk_Loft,
        price: '11,321',
    },
    {
        name : "Bharat Lifestyle Deno Fabric 3 Seater Sofa",
        image: three_Seater,
        price: '11,749',
    },
    {
        name : "Wakeup India Hazy Premium Fabric Sofa",
        image: Wakeup_Sofa,
        price: '15,928',
    },
    {
        name : "WESTIDO Berger Fabric 6 Seater Sofa",
        image: six_Seater,
        price: '17,925',
    },
    {
        name : "Wakeup India Snugy Sofa 2 Seater, Sofa Set",
        image: two_Seater,
        price: '11,359',
    },
    {
        name : "Purple Furniture Elite Wood Computer Desk",
        image: Computer_Desk,
        price: '12,999',
    },
    {
        name : "Upmarkt Pro Ergonomic Gaming Chair",
        image: Gaming_Chair,
        price: '10,449',
    }
];
function GetfurnitureList({image, name, price}) {
        return (
            <div className='productItems'>
                <div style={{backgroundImage: `url(${image})`}}></div>
                <p>{name}</p>
                <p>Price: &#x20B9; {price}</p>
            </div>
          );
    }
export function Furniture() {    
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Timeless Designs for Inspired Living!</h1> <hr/>
          <div>              
              {
                furnitureList.map((furnitureItem, idx) => {
                  return (
                    <div><GetfurnitureList idx={idx} image={furnitureItem.image} name={furnitureItem.name} price={furnitureItem.price}/> 
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

export default Furniture