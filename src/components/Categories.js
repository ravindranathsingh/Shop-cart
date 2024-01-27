import React from 'react'

export function Categories({image, name}) {
  return (
    <div className='category'>
      <button style={{backgroundImage: `url(${image})`}}></button>
      <h1>{name}</h1>        
    </div>
  )
}

export default Categories