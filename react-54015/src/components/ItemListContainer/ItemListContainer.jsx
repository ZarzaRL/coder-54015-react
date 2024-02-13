import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {pedirDatos} from '../../asyncMock.js'
import ItemList from './ItemList.jsx'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './ItemListContainer.css'



const ItemListContainer = () =>{

const { tipoId } = useParams ()

const [products, setProducts] = useState([])

useEffect(() => {
  pedirDatos(tipoId)
  .then((res) => {
      setProducts(res)
    })
    .catch((err) => console.log(err))
    .finally(() => console.log('done'));
}, [tipoId])



return(
  <>
  <main>
    <ItemList products={products} />
  </main>
    
  </>
)
}
export default ItemListContainer;


