import React, { useContext } from 'react'
import "../styles/Cart.css";
import { productList } from '../items/Products';
import { ShopContext } from '../context/ShopContextProvider';
import CartItems from '../components/CartItems';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputIcon from '@mui/icons-material/Input';

export function Cart(props) {
  const { cartItem, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className='cart-products'>
      <div className='cart-product-list'>
        <h1>Your Cart Items : </h1> <hr/>
        
        {totalAmount > 0 ? (
          <>
        <div className="checkout">
          <button onClick={() => navigate("/product")}> <ArrowBackIcon/> Continue Shopping </button>
          <button onClick={() => { checkout(); navigate("/"); }} > Checkout <InputIcon/> </button>
        </div>

        <div id='price'>
           <h3>Subtotal:</h3><p> &#x20B9; {totalAmount} </p>          
        </div>

        <div id='item'>
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
        </>
      ) : (
        
        <h1> Your Shopping Cart is Empty</h1>
      )}
      </div> 
    </div>
  )
}

export default Cart