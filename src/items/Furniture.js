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
        id: 1,
        name : "ShopCart Engineered Wood Queen Bed",
        image: ShopCart_Bed,
        price: '9,249',
    },
    {
        id: 2,
        name : "Take Interio Engineered Wood Queen Bed",
        image: Take_Interio,
        price: '9,299',
    },
    {
        id: 3,
        name : "StellWell BUNK LOFT BED",
        image: Bunk_Loft,
        price: '11,321',
    },
    {
        id: 4,
        name : "Bharat Lifestyle Deno Fabric 3 Seater Sofa",
        image: three_Seater,
        price: '11,749',
    },
    {
        id: 5,
        name : "Wakeup India Hazy Premium Fabric Sofa",
        image: Wakeup_Sofa,
        price: '15,928',
    },
    {
        id: 6,
        name : "WESTIDO Berger Fabric 6 Seater Sofa",
        image: six_Seater,
        price: '17,925',
    },
    {
        id: 7,
        name : "Wakeup India Snugy Sofa 2 Seater, Sofa Set",
        image: two_Seater,
        price: '11,359',
    },
    {
        id: 8,
        name : "Purple Furniture Elite Wood Computer Desk",
        image: Computer_Desk,
        price: '12,999',
    },
    {
        id: 9,
        name : "Upmarkt Pro Ergonomic Gaming Chair",
        image: Gaming_Chair,
        price: '10,449',
    }
];
function GetfurnitureList(props) {
  const {image, name, price} = props.data;
        return (
          <>
          <div className='productItems'>
            <div style={{backgroundImage: `url(${image})`}}></div>
            <p>{name}</p>
            <p>Price: &#x20B9; {price}</p>
          </div>
          <div className='btn'>
            <button className='buy'>Buy Now</button>
            <button >Add To Cart </button>
          </div>
          </>
          );
    }
export function Furniture() {    
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Timeless Designs for Inspired Living!</h1> <hr/>
          <div>              
              {
                furnitureList.map((furnitureItem) => {
                  return (
                    <div><GetfurnitureList data={furnitureItem} image={furnitureItem.image} name={furnitureItem.name} price={furnitureItem.price}/></div>
                  );
                })
              }
          </div>          
        </div>
    </div>
  )
}

export default Furniture