import React, { createContext, useState } from 'react'
import { productList } from '../items/Products';

// const list = [ applianceList, bagList, electronicList, fashionList, furnitureList, mobileList, shoesList, toyList, TrendingItem ]

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i < productList.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export function ShopContextProvider(props) {
    const [ cartItem, setCartItem ] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = { cartItem, addToCart, removeFromCart};
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider