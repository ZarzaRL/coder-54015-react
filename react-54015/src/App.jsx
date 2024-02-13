import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer /> }/>
        <Route path='/categoria/:tipoId' element={<ItemListContainer />} />
        <Route path='/item/:objetoId' element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
