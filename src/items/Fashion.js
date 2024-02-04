import React from 'react'
import { productList, GetprodList } from "../items/Products"

export function Fashion() {   
  const fashionList = productList.filter((prodList) => prodList.id >= 28 && prodList.id <= 36); 
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Elevate Your Style, Define Your Essence</h1> <hr/>
          <div>              
              {
                fashionList.map((prodList) => {
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

export default Fashion