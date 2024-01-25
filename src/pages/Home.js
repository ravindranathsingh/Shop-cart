import React from 'react'
import "../styles/Home.css";
import { Category } from "../items/Category";
import Categories from "../components/Categories";
import { Slider } from '../items/Slider';
import Slides from '../components/Slides';
import { Discount } from "../items/Discount";
import Discounts from '../components/Discounts';
import advertisement from "../assets/advertisement.jpg";

export function Home() {
  return (
    <div className='main-page'>
      <div className='header'> 
        <div className='category-list'>
          {Category.map((itemList, key) => {
            return (
              <div id='item'><Categories key={key} image={itemList.image} name={itemList.name}/></div>
            );
          })}
        </div>    
      </div> 
      <div className='slides'>
        <div className='sliding-image'>
          <Slides slide={Slider}/>
        </div>          
      </div>
      <div className='temptation-section'>
         <div className='discount'>
          <div id='title'><h1>40% discount | Save upto &#x20B9; 899/- on Top deals</h1></div>          
          <div className='discount-items'>
            {
              Discount.map((discountslist, key3) => {
                return (
                  <div ><Discounts key={key3} image={discountslist.image} product={discountslist.product} discount={discountslist.discount} price={discountslist.price}/></div>
                );
              })
            }
          </div>
         </div>
         <div className='advertisement' style={{backgroundImage: `url(${advertisement})`}}>
          <h1>Sale Coming soon</h1>
          <p>"Unleash the Savings: <br/> Mega Sale Extravaganza!"</p>
         </div>
      </div>
    </div>
  )
}

export default Home