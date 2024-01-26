import React from 'react'
import "../styles/Orders.css";
import WidgetsIcon from '@mui/icons-material/Widgets';

export function Orders() {
  return (
    <div>
      <div className='order'>
        <WidgetsIcon />
        <h1>You haven't Ordered yet</h1>
      </div>      
    </div>
  )
}

export default Orders