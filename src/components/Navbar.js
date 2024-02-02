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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };
  return ( 
    <>
    <div className='navbar'>
      <Link to={'/'} onClick={scrollToTop}><img src={logo} alt='logo'/></Link>
      <div className='search'>          
        <input type='serach' placeholder='Search Products, Brands and More'/>
        <button><SearchIcon/><h2>Search</h2></button>   
      </div>  
      <div className='nav-menu'>
        <Link to={"/"} onClick={scrollToTop}><HomeIcon/><h2>Home</h2></Link>
        <Link to={'/product'} onClick={scrollToTop}> <ShoppingBasketIcon/><h2>Products</h2></Link>         
        <Link to={'/cart'} onClick={scrollToTop}><LocalGroceryStoreIcon/><h2>Cart</h2></Link>
        <Link to={"/account"} onClick={scrollToTop}> <AccountCircleIcon /><h2>Account</h2> </Link>
      </div>    
    </div>        
    </>    
  );
}

export default Navbar