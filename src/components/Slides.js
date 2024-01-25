import React from 'react'

export function Slides({image}) {
  return (
    <div className='slide-section'>
        <div style={{backgroundImage: `url(${image})`}}></div>
    </div>    
  )
}

export default Slides