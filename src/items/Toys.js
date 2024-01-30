import React from 'react'
import toy1 from "../assets/toy1.webp";
import toy2 from "../assets/toy2.webp";
import toy3 from "../assets/toy3.webp";
import toy4 from "../assets/toy4.webp";
import toy5 from "../assets/toy5.webp";
import toy6 from "../assets/toy6.webp";
import toy7 from "../assets/toy7.webp";
import toy8 from "../assets/toy8.webp";
import toy9 from "../assets/toy9.webp";

export const toyList = [
    {
        name : "spincart Mini Monster",
        image: toy1,
        price: '55',
    },
    {
        name : "Soft Bullet Shooting Pistol Toy Guns",
        image: toy2,
        price: '174',
    },
    {
        name : "TOYT R3 sports Ride on Bike",
        image: toy3,
        price: '11,114',
    },
    {
        name : "Learn With Fun 2 in 1 Construction Trucks",
        image: toy4,
        price: '219',
    },
    {
        name : "Zenex store Monster truck toy",
        image: toy5,
        price: '55',
    },
    {
        name : "VikriDa Kids 49 Key Piano Keyboard",
        image: toy6,
        price: '1,349',
    },
    {
        name : "Rajni Plastic Air Sports Mauser Gun Toy",
        image: toy7,
        price: '99',
    },
    {
        name : "Kirat Doctor Kit Toy",
        image: toy8,
        price: '194',
    },
    {
        name : "Educational Laptop Computer Toy",
        image: toy9,
        price: '1,099',
    }
];

function GettoyList({image, name, price}) {
        return (
            <div className='productItems'>
                <div style={{backgroundImage: `url(${image})`}}></div>
                <p>{name}</p>
                <p>Price: &#x20B9; {price}</p>
            </div>
          );
    }
export function Toys() {    
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Playful Wonders, Endless Smiles</h1> <hr/>
          <div>              
              {
                toyList.map((toyItem, idx) => {
                  return (
                    <div><GettoyList idx={idx} image={toyItem.image} name={toyItem.name} price={toyItem.price}/> 
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

export default Toys