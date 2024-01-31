import React, { useContext } from 'react'
import "../styles/Cart.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { applianceList } from '../items/Appliances';
import { ShopContext } from '../context/ShopContextProvider';

export function Cart(props) {
  const { cartItems } = useContext(ShopContext);
  return (
    <div>
      <div className='cart-area'>
        <AddShoppingCartIcon />
        <h1>Your Cart is Empty</h1>
      </div>
      <div className='trends'>
        <div className='trending-products'>
          <h1>Your Cart Items: </h1>
        </div>
        <div>
          {
              applianceList.map((applianceItem) => {
                if(cartItems[applianceItem.id] !== 0) {
                  return <cartItem data={applianceItem} image={applianceItem.image} name={applianceItem.name} price={applianceItem.price} />;
                }
              })
          }
        </div>
      </div>
      
    </div>
  )
}

export default Cart