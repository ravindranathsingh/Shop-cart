import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider';

export const CartItems = (props) => {
    const {id, image, name, price} =props.data;
    const { cartItem, removeFromCart } = useContext(ShopContext);
    const cartItemAmount = cartItem[id];
  return (
    <>
        <div className='cart-productItems'>
              <div style={{backgroundImage: `url(${image})`}}></div>
              <p>{name}</p>
              <p>Price: &#x20B9; {price}</p>
              <p>Quantity : {cartItemAmount}</p>
        </div>
        <div className='cart-btn'>
              <button className='buy'>Buy Now</button>
              <button onClick={() => removeFromCart(id)}>Remove</button>              
        </div>
    </>
  )
}

export default CartItems