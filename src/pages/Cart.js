import React, { useContext } from 'react'
import "../styles/Cart.css";
import { productList } from '../items/Products';
import { ShopContext } from '../context/ShopContextProvider';
import CartItems from '../components/CartItems';

export function Cart() {
  const { cartItem } = useContext(ShopContext);
  return (
    <div className='cart-products'>
      <div className='cart-product-list'>
        <h1>Your Cart Items are : </h1> <hr/>
        <div>
        {
        productList.map((prodList) => {
          if(cartItem[prodList.id] !== 0 ) {
            return (
              <div>
                  <CartItems data={prodList} image={prodList.image} name={prodList.name} 
                  price={prodList.price}/>
              </div>
          );
          }})}
        </div>
      </div> 
    </div>
  )
}

export default Cart