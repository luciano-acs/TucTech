import React, { useState, useEffect } from 'react'
import { getProducts, getCategory } from '../asyncmock';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    console.log(categoryId)
    if (categoryId) {
      getCategory(categoryId)
        .then(res => setProductos(res))
    } else {
      getProducts()
        .then(res => setProductos(res))
    }
  }, [categoryId])

  return (
    <main className='w-full bg-primary p-12 min-h-screen-100'>
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </main>
  )
}

export default ItemListContainer