import React from 'react'
import { productList, GetprodList } from "../items/Products"

export function Toys() { 
  const toyList = productList.filter((prodList) => prodList.id >= 55 && prodList.id <= 63 );
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Playful Wonders, Endless Smiles</h1> <hr/>
          <div>              
              {
                toyList.map((prodList) => {
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

export default Toys