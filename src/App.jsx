import React from 'react'
import './styles/index.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Item de TucTech"/>
    </div>
  )
}

export default App