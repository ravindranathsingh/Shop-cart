import React, { createContext, useState } from 'react';
import { applianceList } from '../items/Appliances';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < applianceList.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export function ShopContextProvider(props) {
    const [ cartItems, setCartItems ] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };

    const contextValue = {cartItems, addToCart, removeFromCart};

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  );
}

export default ShopContextProvider