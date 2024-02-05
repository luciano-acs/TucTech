import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, categoria }) => {

    return (
        <div className='flex flex-col items-center w-72 my-4'>
            <div className='w-72 h-80 flex justify-center rounded-t-3xl bg-white'>
                <img src={img} alt={nombre} className='object-cover rounded-t-3xl' />
            </div>
            <div className='flex flex-col justify-around items-center py-4 px-2 bg-primary w-72 h-36'>
                <p className='text-primary'>{id}</p>
                <h2 className='text-primary'>{nombre}</h2>
                <p className='text-primary'>Precio: {precio}</p>
            </div>
            <Link className='w-72 h-8 rounded-b-3xl pt-1 text-center bg-black text-primary hover:bg-tertiary hover:text-black hover:font-semibold transition-all' to={`/item/${id}`}>COMPRAR</Link>
        </div>
    )
}

export default Item