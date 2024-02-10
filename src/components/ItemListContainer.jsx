import React, { useState, useEffect } from 'react'
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
    <main className='w-full min-h-screen-100 bg-secondary'>
      <div className='h-96 w-full flex-col justify-center items-center md:flex-row bg-black'>
        <div className='md:w-full flex flex-col items-center md:justify-center md:flex-row h-full'>
          <div className='w-full flex flex-col h-1/3 justify-between md:justify-center md:items-center'>
            <h1 className='text-primary text-2xl text-center px-8 pt-4 md:uppercase md:text-5xl md:mx-auto'>Con <strong>TucTech</strong> tenes todo para tu hogar</h1>
            <h2 className='text-primary text-xl pt-2 text-center md:uppercase md:text-4xl md:mx-auto'>¡Navegá y comprá!</h2>
          </div>
          <img src="/images/conjunto.png" className='w-auto object-cover md:w-2/5 max-h-64 mt-4 lg:max-h-full' alt="" />
        </div>
      </div>
      <ItemList productos={productos} />
    </main>
  )
}

export default ItemListContainer