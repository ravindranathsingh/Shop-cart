import React from 'react'
import "../styles/Home.css";
import { Category } from "../items/Category";
import Categories from "../components/Categories";
import { Slider } from '../items/Slider';
import Slides from '../components/Slides';

export function Home() {
  return (
    <div className='main-page'>
      <div className='header'>
        <div className='category-list'>
          {Category.map((itemList, key)=> {
            return (
              <div id='item'><Categories key={key} image={itemList.image} name={itemList.name}/></div>
            );
          })}
        </div>    
      </div> 
      <div className='slides'>
          {
            Slider.map((slide, key1) => {
              return (
                <div><Slides key1={key1} image={slide.image}/></div>
              );
            })
          }
      </div>
    </div>
  )
}

export default Home