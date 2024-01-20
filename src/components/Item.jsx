import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, categoria }) => {

    return (
        <div className='flex flex-col items-center w-72 my-4'>
            <div className='w-72 h-80 flex justify-center rounded-t-3xl'>
                <img src={img} alt={nombre} className='object-cover rounded-t-3xl' />
            </div>
            <div className='flex flex-col justify-around items-center py-4 px-2 bg-secondary w-72 h-36'>
                <p className='text-white'>{id}</p>
                <h2 className='text-white'>{nombre}</h2>
                <p className='text-white'>Precio: {precio}</p>
            </div>
            <Link className='w-72 h-8 rounded-b-3xl text-center bg-black text-primary' to={`/item/${id}`}>Ver detalles</Link>
        </div>
    )
}

export default Item