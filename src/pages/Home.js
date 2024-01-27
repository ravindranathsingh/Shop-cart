import React from 'react'
import "../styles/Home.css";
import { Category } from "../items/Category";
import Categories from "../components/Categories";
import { Slider } from '../items/Slider';
import Slides from '../components/Slides';
import { Discount } from "../items/Discount";
import Discounts from '../components/Discounts';
import advertisement from "../assets/advertisement.jpg";
import Electronics, { Electronic } from '../items/Electronics';
import Trendings, { TrendingItem } from '../items/Trendings';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import site_promo from "../assets/site_promo.png";

export function Home() {
  return (
    <div className='main-page'>
      <div className='site_promo'>
        <img src={site_promo} alt='site_promo' />
        <div className='promo'>
          <h2>Unparalleled Quality, Endless Style!</h2>
          <h1>Elevate Your Life, Shop now!</h1>
          <p>Discover endless style and superior quality across all our products. Elevate every aspect of your lifestyle with
             our meticulously crafted items. Where quality meets diversity, and style knows no bounds.</p>
          <button><ShoppingBagIcon/> Shop Now</button>
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
      <div className='products'>
        <div className='best-of-electronics'>
          <h1>Best Of Electronics</h1> <hr/>
          <div>              
              {
                Electronic.map((elecList, idx) => {
                  return (
                    <div><Electronics idx={idx} image={elecList.image} name={elecList.name} price={elecList.price}/> 
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