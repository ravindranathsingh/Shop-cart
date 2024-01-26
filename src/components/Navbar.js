import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';

export function Navbar() {
  return ( 
    <>
    <div className='navbar'><img src={logo} alt='logo'/>
      <div className='search'>          
        <input type='serach' placeholder='Search Products, Brands and More'/>
        <button><SearchIcon/><h2>Search</h2></button>   
      </div>  
      <div className='nav-menu'>
        <Link to={"/"}><HomeIcon/><h2>Home</h2></Link>         
        <Link to={'/cart'}><LocalGroceryStoreIcon/><h2>Cart</h2></Link>
        <Link to={'/orders'}> <ShoppingBasketIcon/><h2>Orders</h2></Link>
        <Link to={"/account"}> <AccountCircleIcon /><h2>Account</h2> </Link>
      </div>    
    </div>        
    </>    
  );
}

export default Navbar