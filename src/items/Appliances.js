import React from 'react'
import OnePlus_Tv from "../assets/OnePlus_Tv.webp";
import Washing from "../assets/Washing.webp";
import Fan from "../assets/Fan.png";
import Grinder from "../assets/Grinder.webp";
import frigde from "../assets/frigde.png";
import Panasonic_Ac from "../assets/Panasonic_Ac.webp";
import Purifier from "../assets/Purifier.png";
import Vacuum_Cleaner from "../assets/Vacuum_Cleaner.png";
import Microwave from "../assets/Microwave.png";

export const applianceList = [
    {
        name : "OnePlus U1S 164 cm (65 inch) Ultra HD",
        image: OnePlus_Tv,
        price: '47,999',
    },
    {
        name : "LG 6.5 kg Fully Automatic Front Load Washing Machine",
        image: Washing,
        price: '24,990',
    },
    {
        name : "LUMINOUS Centaur 400 mm 3 Blade Table Fan",
        image: Fan,
        price: '1,569',
    },
    {
        name : "BAJAJ 410570 GX 1 500 W Juicer Mixer Grinder (3 Jars, Blue)",
        image: Grinder,
        price: '2,299',
    },
    {
        name : "Whirlpool 308 L Frost Free Double Door 3 Star Refrigerator",
        image: frigde,
        price: '32,990',
    },
    {
        name : "Panasonic 1 Ton 3 Star Split Inverter AC with Wi-fi Connect - White",
        image: Panasonic_Ac,
        price: '32,990',
    },
    {
        name : "LIVPURE + Minerals Water Purifier",
        image: Purifier,
        price: '8,999',
    },
    {
        name : "PHILIPS Vacuum Cleaner with Suction,Turbo Brush",
        image: Vacuum_Cleaner,
        price: '9,199',
    },
    {
        name : "Panasonic 23 L Convection Microwave Oven",
        image: Microwave,
        price: '10,290',
    }
];
function GetapplianceList({image, name, price}) {
        return (
            <div className='productItems'>
                <div style={{backgroundImage: `url(${image})`}}></div>
                <p>{name}</p>
                <p>Price: &#x20B9; {price}</p>
            </div>
          );
    }
export function Appliances() { 
  
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Up to 75% Off on Appliances</h1> <hr/>
          <div>              
              {
                applianceList.map((applianceItem, idx) => {
                  return (
                    <div><GetapplianceList idx={idx} image={applianceItem.image} name={applianceItem.name} price={applianceItem.price}/> 
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

export default Appliances