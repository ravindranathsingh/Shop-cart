import React from 'react'
import Men_Regular from "../assets/Men_Regular.webp";
import Carson from "../assets/Carson.webp";
import kuberji from "../assets/kuberji.webp";
import Kurti from "../assets/Kurti.webp";
import Saree from "../assets/Saree.webp";
import Regular_wear from "../assets/Regular_wear.webp";
import Casual from "../assets/Casual.webp";
import Girls_Casual from "../assets/Girls_Casual.webp";
import Thermal from "../assets/Thermal.webp";

export const fashionList = [
    {
        name : "TIGERSNAKE Men Regular Fit",
        image: Men_Regular,
        price: '339',
    },
    {
        name : "James Carson Men Regular Fit",
        image: Carson,
        price: '424',
    },
    {
        name : "Shree kuberji fashion Men Printed Cotton Blend",
        image: kuberji,
        price: '799',
    },
    {
        name : "SEAKART Women Floral",
        image: Kurti,
        price: '510',
    },
    {
        name : "KRIVITY Embroidered Saree",
        image: Saree,
        price: '361',
    },
    {
        name : "XRV Beach Wear Regular",
        image: Regular_wear,
        price: '835',
    },
    {
        name : "Mars Infiniti Boys & Girls Casual",
        image: Casual,
        price: '401',
    },
    {
        name : "EM DRESSES Baby Girls Casual",
        image: Girls_Casual,
        price: '151',
    },
    {
        name : "Heatonn Top - Pyjama Set Thermal",
        image: Thermal,
        price: '692',
    }
];
function GetfashionList({image, name, price}) {
        return (
            <div className='productItems'>
                <div style={{backgroundImage: `url(${image})`}}></div>
                <p>{name}</p>
                <p>Price: &#x20B9; {price}</p>
            </div>
          );
    }
export function Fashion() {    
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Elevate Your Style, Define Your Essence</h1> <hr/>
          <div>              
              {
                fashionList.map((fashionItem, idx) => {
                  return (
                    <div><GetfashionList idx={idx} image={fashionItem.image} name={fashionItem.name} price={fashionItem.price}/> 
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

export default Fashion