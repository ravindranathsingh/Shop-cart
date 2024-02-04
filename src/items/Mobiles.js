import React from 'react'
import { productList, GetprodList } from "../items/Products"

export function Mobiles() { 
  const mobileList = productList.filter((prodList) => prodList.id >= 64 && prodList.id <= 72 )   
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Mobile Fest Extravaganza!</h1> <hr/>
          <div>              
              {
                mobileList.map((prodList) => {
                  return (
                    <div><GetprodList data={prodList} /> </div>
                  );
                })
              }
          </div>          
        </div>
    </div>
  )
}

export default Mobiles