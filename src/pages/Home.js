import React, { useRef } from 'react'
import "../styles/Home.css";

import Categories, { Category } from "../components/Categories";
import Discounts, { Discount } from '../components/Discounts';
import Trendings, { TrendingItem } from '../items/Trendings';
import Slides from '../components/Slides';

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import advertisement from "../assets/advertisement.jpg";

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import site_promo from "../assets/site_promo.png";

export function Home() {

  const Slider = [
    {"src": slide1, "alt": "slide1"},
    {"src": slide2, "alt": "slide2"},
    {"src": slide3, "alt": "slide3"}
  ];

  const myDivRef = useRef(null);

  const scrollTotrends = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth', // optional: smooth scrolling animation
      });
    }
  };

  return (
    <div className='main-page'>

      <div className='site_promo'>
        <img src={site_promo} alt='site_promo' />
        <div className='promo'>
          <h2>Unparalleled Quality, Endless Style!</h2>
          <h1>Elevate Your Life, Shop now!</h1>
          <p>Discover endless style and superior quality across all our products. Elevate every aspect of your lifestyle with
             our meticulously crafted items. Where quality meets diversity, and style knows no bounds.</p>
          <button onClick={() => scrollTotrends(myDivRef)}><ShoppingBagIcon/> Shop Now</button>
        </div>
      </div>

      <div className='slides'>
        <div className='sliding-image'>
          <Slides slide={Slider}/>
        </div>          
      </div>

      <div className='header'> 
        <div className='category-list'>
          {Category.map((itemList, key) => {
            return (
              <div id='item'><Categories key={key} image={itemList.image} name={itemList.name}/></div>
            );
          })}
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

      <div className='trends' ref={myDivRef}>
        <div className='trending-products'>
        <h1>Trending Products</h1><hr/>
          <div>              
              {
                TrendingItem.map((prodList, idx) => {
                  return (
                    <div><Trendings idx={idx} image={prodList.image} name={prodList.name} price={prodList.price}/> 
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

      <section className='trusted-strip'>
        <span>
          <AssignmentTurnedInIcon/> 
          <h2>Certified Products</h2>
          <p>100% Guarantee</p>
        </span>
        <span>
          <LocalShippingIcon/>
          <h2>Free Shipping</h2>
          <p>On above 500/- only</p>
        </span>
        <span>
          <AutorenewIcon/>
          <h2>Easy Exchange</h2>
          <p>No Questions asked</p>
        </span>
        <span>
          <HeadsetMicIcon/>
          <h2>24x7 Support</h2>
          <p>Customer Priority is must</p>
        </span>
      </section>
      
    </div>
  )
}

export default Home