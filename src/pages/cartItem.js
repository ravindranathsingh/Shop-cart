import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider';

export function cartItem(props) {
    const {id, image, name, price} = props.data;
    const { addToCart } = useContext(ShopContext);
  return (
    <>
        <div className='productItems'>
            <div style={{backgroundImage: `url(${image})`}}></div>
            <p>{name}</p>
            <p>Price: &#x20B9; {price}</p>
        </div>
        <div>
          <button onClick={() => addToCart(id)}>+</button>
        </div>
    </>
  )
}

export default cartItem