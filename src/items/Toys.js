import React, { useContext } from 'react'
import toy1 from "../assets/toy1.webp";
import toy2 from "../assets/toy2.webp";
import toy3 from "../assets/toy3.webp";
import toy4 from "../assets/toy4.webp";
import toy5 from "../assets/toy5.webp";
import toy6 from "../assets/toy6.webp";
import toy7 from "../assets/toy7.webp";
import toy8 from "../assets/toy8.webp";
import toy9 from "../assets/toy9.webp";
import { ShopContext } from '../context/ShopContextProvider';

export const toyList = [
    {
        id: 1,
        name : "spincart Mini Monster",
        image: toy1,
        price: '55',
    },
    {
        id: 2,
        name : "Soft Bullet Shooting Pistol Toy Guns",
        image: toy2,
        price: '174',
    },
    {
        id: 3,
        name : "TOYT R3 sports Ride on Bike",
        image: toy3,
        price: '11,114',
    },
    {
        id: 4,
        name : "Learn With Fun 2 in 1 Construction Trucks",
        image: toy4,
        price: '219',
    },
    {
        id: 5,
        name : "Zenex store Monster truck toy",
        image: toy5,
        price: '55',
    },
    {
        id: 6,
        name : "VikriDa Kids 49 Key Piano Keyboard",
        image: toy6,
        price: '1,349',
    },
    {
        id: 7,
        name : "Rajni Plastic Air Sports Mauser Gun Toy",
        image: toy7,
        price: '99',
    },
    {
        id: 8,
        name : "Kirat Doctor Kit Toy",
        image: toy8,
        price: '194',
    },
    {
        id: 9,
        name : "Educational Laptop Computer Toy",
        image: toy9,
        price: '1,099',
    }
];

function GettoyList(props) {
  const {id, image, name, price} =props.data;
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
            <button onClick={() => addToCart(id)}>Add To Cart { cartItemAmount > 0 && <> ({cartItemAmount}) </>}</button>
          </div>
          </>
          );
    }
export function Toys() {    
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Playful Wonders, Endless Smiles</h1> <hr/>
          <div>              
              {
                toyList.map((toyItem) => {
                  return (
                    <div><GettoyList data={toyItem} image={toyItem.image} name={toyItem.name} price={toyItem.price}/></div>
                  );
                })
              }
          </div>          
        </div>
    </div>
  )
}

export default Toys