import React from 'react'

export function Categories({image, name}) {
  return (
    <div className='category'>
      <button>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
      </button>        
    </div>
  )
}

export default Categories