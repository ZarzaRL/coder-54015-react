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

    const [product, setProduct] = useState()
    
    useEffect(() => {
      pedirDetalles(objetoId)
      .then((res) => {
          setProduct(res)
        })
        .catch((err) => console.log(err))
        .finally(() => console.log('done'));
    }, [objetoId])
    
    
    return(
      <>

      <main>
        <h1>test</h1>
        <ItemDetail product={product} />
      </main>
        
      </>
    )
}

export default ItemDetailContainer



