import React, { useState } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export const Slides = ({slide}) => {
  const [carousel, setCarousel] = useState(0);

  const nextSlide = () => {
    setCarousel(carousel === slide.length-1 ? 0 : carousel+1);
  };

  const prevSlide = () => {
    setCarousel(carousel === 0 ? slide.length-1 : carousel-1);
  }
  return (
    <div className='slide-image'>
      <ArrowCircleLeftIcon className='arrow left-arrow' onClick={prevSlide}/>
      {slide.map((item, key1) => {
        return <img key={key1} src={item.src} alt={item.alt} className={carousel === key1 ? "carousel" : "carousel carousel-hidden"}/>
      })}
      <ArrowCircleRightIcon className='arrow right-arrow' onClick={nextSlide}/>
      <span className='indicator'>
        {slide.map((_, key2) => {
          return <button key={key2} onClick={() => setCarousel(key2)}></button>
        })}
      </span>
    </div>
  )
}

export default Slides