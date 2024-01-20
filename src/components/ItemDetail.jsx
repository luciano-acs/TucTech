import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ id, nombre, precio, img, categoria, stock }) => {
    return (
        <div className='flex flex-row h-72 w-4/5 my-4'>
            <div className='w-1/2 h-72 flex justify-center rounded-l-3xl bg-white'>
                <img src={img} alt={nombre} className='rounded-l-3xl' />
            </div>
            <div className='flex flex-col items-center justify-center py-4 px-2 bg-secondary w-1/2 h-72'>
                <div className='flex flex-col items-center justify-center h-64'>
                    <p className='text-primary'>{id}</p>
                    <h2 className='text-primary'>{nombre}</h2>
                    <p className='text-primary'>Precio: {precio}</p>
                    <p className='text-primary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, adipisci.</p>
                </div>
                <div>
                    <ItemCount stock={stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail