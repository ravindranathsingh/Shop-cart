import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import logo  from "../assets/logo.png"

export function Navbar() {
  return (
    <div className='navbar'>
      <Link to={"/"}><div style={{backgroundImage: `url(${logo})`}}></div></Link>
      <input type='serach' placeholder='Search Products, Brands and More'/>
      <button><SearchIcon/><h2>Search</h2></button>      
      <Link to={'/cart'}><LocalGroceryStoreIcon/><h2>Cart</h2></Link>
      <Link to={'/orders'}> <ShoppingBasketIcon/><h2>Orders</h2></Link>
      <Link to={"/account"}> <AccountCircleIcon /><h2>Account</h2> </Link>
    </div>
  )
}

export default Navbar