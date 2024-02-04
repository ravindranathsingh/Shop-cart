import React from 'react'
import { GetprodList, productList } from './Products';

export function Electronics() { 
  const electronicList = productList.filter((prodList) => prodList.id >= 19 && prodList.id <= 27);
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Unleash the Future with Our Cutting-Edge Electronics!</h1> <hr/>
          <div>              
              {
                electronicList.map((prodList) => {
                  return (
                    <div><GetprodList data={prodList}/></div>
                  );
                })
              }
          </div>          
        </div>
    </div>
  )
}

export default Electronics