import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider';

export const CartItems = (props) => {
    const {id, image, name, price} =props.data;
    const { cartItem, addToCart, removeFromCart, updateItemCount } = useContext(ShopContext);
    const cartItemAmount = cartItem[id];
  return (
    <>
        <div className='cart-productItems'>
          <div style={{backgroundImage: `url(${image})`}}></div>
          <p>{name}</p>
          <p>Price: &#x20B9; {price}</p>              
        </div>
        <div className='count-handle'>
          <p>Quantity:</p>
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItemAmount} onChange={(e) => updateItemCount(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)}>+</button>
        </div>
        <div className='cart-btn'>
          <button className='buy'>Buy Now</button>     
        </div>
    </>
  )
}

export default CartItems