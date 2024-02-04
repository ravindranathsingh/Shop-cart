import React from 'react'
import { productList, GetprodList } from "../items/Products"

export function Shoes() {  
  const shoeList = productList.filter((prodList) => prodList.id >= 46 && prodList.id <= 54); 
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Step into Style, Stride with Confidence</h1> <hr/>
          <div>              
              {
                shoeList.map((prodList) => {
                  return (
                    <div><GetprodList data={prodList} /></div>
                  );
                })
              }
          </div>          
        </div>
    </div>
  )
}

export default Shoes