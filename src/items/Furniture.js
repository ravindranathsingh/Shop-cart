import React from 'react'
import { GetprodList, productList } from './Products';

export function Furniture() { 
  const furniture = productList.filter((prodList) => prodList.id >= 37 && prodList.id <= 45)   
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Timeless Designs for Inspired Living!</h1> <hr/>
          <div>              
              {
                furniture.map((prodList) => {
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

export default Furniture