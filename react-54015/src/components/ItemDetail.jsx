import React from 'react'
import { NavLink } from 'react-router-dom'
import ItemD from './ItemD'


export default function ItemDetail ({product})  {
  return (
    <div>
        <h1>test2
            
        </h1>
      {
        <ItemD key={product.id} details={product}/>
      }
    </div>
  )
}

