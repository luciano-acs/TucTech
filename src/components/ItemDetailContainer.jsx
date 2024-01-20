import React, {useState, useEffect} from 'react'
import { getItem } from '../asyncmock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null)

  const {itemId} = useParams()

  useEffect(() => {
    getItem(itemId)
    .then(res => setProducto(res))
  }, [itemId])

  return (
    <div className='w-full bg-[#114D4D] p-12 min-h-screen-100 flex justify-center items-start'>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer