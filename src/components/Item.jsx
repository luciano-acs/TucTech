import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, categoria }) => {

    return (
        <div className='group flex flex-col items-center w-72 my-4 rounded-3xl hover:shadow-lg transition duration-200 ease-in-out hover:shadow-black hover:-translate-y-0.5'>
            <Link to={`/item/${id}`}>
                <div className='w-72 h-80 flex justify-center rounded-t-3xl bg-white'>
                    <img src={img} alt={nombre} className='object-cover rounded-t-3xl' />
                </div>
                <h2 className='text-primary bg-black text-center uppercase py-2'>{nombre}</h2>
                <div className='flex flex-col justify-end py-4 px-2 bg-primary w-72 h-32'>
                    <p className='text-primary'>COD-{id}</p>
                    <p className='text-primary text-3xl'>USD$ {precio}</p>
                </div>
                <h1 className='w-72 h-8 rounded-b-3xl pt-1 text-center bg-black text-primary group-hover:bg-tertiary group-hover:text-black group-hover:font-semibold transition-all'>VER DETALLES</h1></Link>
        </div>
    )
}

export default Item