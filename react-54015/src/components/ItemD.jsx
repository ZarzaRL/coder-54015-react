import React from 'react'

const ItemD = ({product}) => {
  return (
    <div>
        <h1>testitem</h1>
      <h1>{product.nombre}</h1>
      <p>Beneficios: {product.benficios}</p>
      <h3>Precio: $ {product.precio}</h3>
      <h3>Stock: {product.stock} kg</h3>
    </div>
  )
}

export default ItemD
