import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {pedirDetalles} from '../asyncMock.js'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './ItemListContainer/ItemListContainer.css'

const ItemDetailContainer = () => {
    const { objetoId } = useParams ()

    const [products, setProducts] = useState([])
    
    useEffect(() => {
      pedirDetalles(objetoId)
      .then((res) => {
          setProducts(res)
        })
        .catch((err) => console.log(err))
        .finally(() => console.log('done'));
    }, [objetoId])
    
    
    
    return(
      <>
      <main>
        <h1>test</h1>
        <ItemDetail products={products} />
      </main>
        
      </>
    )
}

export default ItemDetailContainer



