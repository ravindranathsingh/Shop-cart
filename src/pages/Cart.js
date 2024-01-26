import React from 'react'
import "../styles/Cart.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function Cart() {
  return (
    <div>
      <div className='cart-area'>
        <AddShoppingCartIcon />
        <h1>Your Cart is Empty</h1>
      </div>
    </div>
  )
}

export default Cart