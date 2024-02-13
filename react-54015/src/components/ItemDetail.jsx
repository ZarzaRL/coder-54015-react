import React from 'react'
import ItemD from './ItemD'


export default function ItemDetail ({products})  {
  return (
    <div>
        <h1>test2
            
        </h1>
      {
        products.map((product) =>
        <ItemD key={product.id} product={product}/>)
      }
    </div>
  )
}

