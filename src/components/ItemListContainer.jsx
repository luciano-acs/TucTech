import React, { useState, useEffect } from 'react'
//import { getProducts, getCategory } from '../asyncmock';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../services/config';

const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const productos = categoryId ? query(collection(db, 'inventario'), where('categoria', '==', categoryId)) : collection(db, 'inventario')

    getDocs(productos)
      .then(res => {
        const data = res.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        setProductos(data)
      })
      .catch(err => console.log(err))
  }, [categoryId])

  return (
    <main className='w-full bg-secondary p-12 min-h-screen-100'>
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </main>
  )
}

export default ItemListContainer