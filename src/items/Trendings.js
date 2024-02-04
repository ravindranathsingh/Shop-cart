import React from 'react'
import { GetprodList, productList } from './Products';

export function Trendings() {
    
    const trendingList1 = productList.filter((prodList) => prodList.id >= 73 && prodList.id <= 78 );
    const trendingList2 = productList.filter((prodList) => prodList.id >= 33 && prodList.id <= 38 );
    const trendingList3 = productList.filter((prodList) => prodList.id >= 13 && prodList.id <= 15 );
    return (
        <div className='products'>
            <div className='product-list'>
              <h1>Trending Products | Best in price </h1> <hr/>              
                <div>              
                    {trendingList1.map((prodList) => {
                        return (
                            <div>
                                <GetprodList data={prodList} />
                            </div>
                        );
                  })}
                </div> 
                <div>              
                    {trendingList2.map((prodList) => {
                        return (
                            <div>
                                <GetprodList data={prodList} />
                            </div>
                        );
                  })}
                </div>
                <div>              
                    {trendingList3.map((prodList) => {
                        return (
                            <div>
                                <GetprodList data={prodList} />
                            </div>
                        );
                  })}
                </div>          
            </div>
        </div>
      )
}

export default Trendings