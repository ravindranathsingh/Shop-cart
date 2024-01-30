import React from 'react'
import Motorola from "../assets/Motorola.png";
import Samsung from "../assets/Samsung.png";
import Vivo from "../assets/Vivo.png";
import Realme from "../assets/Realme.png";
import Nothing from "../assets/Nothing.png";
import Poco from "../assets/Poco.png";
import Redmi from "../assets/Redmi.png";
import Infinix from "../assets/Infinix.png";
import Apple from "../assets/Apple.png";

export const mobileList = [
    {
        name : "Motorola Edge 40 Neo",
        image: Motorola,
        price: '22,999',
    },
    {
        name : "Samsung Galaxy S21",
        image: Samsung,
        price: '30,999',
    },
    {
        name : "Vivo T2 Pro 5G",
        image: Vivo,
        price: '24,999',
    },
    {
        name : "Realme 11 Pro 5G ",
        image: Realme,
        price: '23,999',
    },
    {
        name : "Nothing Phone",
        image: Nothing,
        price: '39,999',
    },
    {
        name : "POCO M6 5G",
        image: Poco,
        price: '9,999',
    },
    {
        name : "Redmi 12",
        image: Redmi,
        price: '9,499',
    },
    {
        name : "Infinix HOT 30 5G",
        image: Infinix,
        price: '12,999',
    },
    {
        name : "Apple iPhone 15",
        image: Apple,
        price: '65,999',
    }
];
function GetmobileList({image, name, price}) {
        return (
            <div className='productItems'>
                <div style={{backgroundImage: `url(${image})`}}></div>
                <p>{name}</p>
                <p>Price: &#x20B9; {price}</p>
            </div>
          );
    }
export function Mobiles() {    
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Mobile Fest Extravaganza!</h1> <hr/>
          <div>              
              {
                mobileList.map((mobileItem, idx) => {
                  return (
                    <div><GetmobileList idx={idx} image={mobileItem.image} name={mobileItem.name} price={mobileItem.price}/> 
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

export default Mobiles