import React from 'react'
import './styles/index.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'


const App = () => {
  return (
    <div>      
      <BrowserRouter>
      <CartProvider>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      <Footer />
      </CartProvider>      
      </BrowserRouter>  
    </div>
  )
}

export default App