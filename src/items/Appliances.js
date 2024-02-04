import React from 'react'
import { GetprodList, productList } from './Products';

export function Appliances() {
  const applianceList = productList.filter((prodList) => prodList.id >= 1 && prodList.id <= 9);
  return (
    <div className='products'>
        <div className='product-list'>
          <h1>Up to 75% Off on Appliances</h1> <hr/>
          <div>              
              {
                applianceList.map((prodList) => {
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

export default Appliances