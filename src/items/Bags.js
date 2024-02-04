import React from 'react'
import { GetprodList, productList } from './Products';

export function Bags() {
  const bagList = productList.filter((prodList) => prodList.id >= 10 && prodList.id <= 18);
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Travel with Ease</h1> <hr/>
          <div>              
              {
                bagList.map((prodList) => {
                  return (
                    <div><GetprodList data= {prodList} /></div>
                  );
                })
              }
          </div>          
        </div>
    </div>
  )
}

export default Bags