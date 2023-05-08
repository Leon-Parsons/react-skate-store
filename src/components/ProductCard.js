import React from 'react'

function ProductCard({image, name, price}) {
  return (
    <div className='productCard'>
      <div style={{ backgroundImage: `url(${image})`}}></div>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  )
}

export default ProductCard
