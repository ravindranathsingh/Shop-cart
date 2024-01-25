import React from 'react'

export function Discounts({image, product, discount, price}) {
  return (
    <div className='discounts'>
            <div style={{backgroundImage: `url(${image})`}}></div>
            <h1>{product}</h1>
            <p>{discount} off /-</p>
            <h3> Price: &#x20B9; {price} /-</h3>      
    </div>
  )
}

export default Discounts