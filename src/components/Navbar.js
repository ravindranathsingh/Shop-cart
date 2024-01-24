import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';

export function Navbar() {
  return (
    <div className='navbar'>
      <Link id='title' to={"/home"}><h1><StoreIcon/>ShopCart</h1></Link>
      <input type='serach' placeholder='Search Products, Brands and More'/>
      <button><SearchIcon/>Search</button>      
      <Link to={'/cart'}><LocalGroceryStoreIcon/>Cart</Link>
      <Link to={'/orders'}> <ShoppingBasketIcon/>Orders</Link>
      <Link to={"/account"}> <AccountCircleIcon />Account </Link>
    </div>
  )
}

export default Navbar