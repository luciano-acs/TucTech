import React, {useState, useContext} from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ id, nombre, precio, img, categoria, stock }) => {

    const { addItem } = useContext(CartContext)
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const handleCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)

        const item = {
            id: id,
            nombre: nombre,
            precio: precio,
            img: img,
            subtotal: precio * cantidad
        }

        addItem(item, cantidad)
    }

    return (
        <div className='flex flex-col w-11/12 my-4
        md:flex-row md:h-72'>
            <div className='w-full h-auto rounded-t-3xl flex justify-center bg-white
            md:w-1/2 md:rounded-l-3xl md:rounded-tr-none'>
                <img src={img} alt={nombre} className='rounded-t-3xl md:rounded-l-3xl' />
            </div>
            <div className='flex flex-col items-center justify-center py-4 px-2 bg-primary  
            md:h-72 md:w-1/2'>
                <div className='flex flex-col items-center justify-center h-64 gap-2'>
                    <p className='text-primary'>{id}</p>
                    <h2 className='text-primary'>{nombre}</h2>
                    <p className='text-primary'>Precio: {precio}</p>
                    <p className='text-primary text-justify px-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, adipisci.</p>
                    <p className='text-primary'>{stock}</p>
                </div>                
                {
                    agregarCantidad > 0 ? (<Link to='/cart'> Terminar compra </Link>) : (<ItemCount inicial={1}stock={stock} agregar={handleCantidad} />)
                }
            </div>
        </div>
    )
}

export default ItemDetail

{/* <div className='flex flex-row h-72 w-11/12 my-4'>
            <div className='w-1/2 h-72 flex justify-center rounded-l-3xl bg-white'>
                <img src={img} alt={nombre} className='rounded-l-3xl' />
            </div>
            <div className='flex flex-col items-center justify-center py-4 px-2 bg-primary w-1/2 h-72'>
                <div className='flex flex-col items-center justify-center h-64'>
                    <p className='text-primary'>{id}</p>
                    <h2 className='text-primary'>{nombre}</h2>
                    <p className='text-primary'>Precio: {precio}</p>
                    <p className='text-primary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, adipisci.</p>
                    <p className='text-primary'>{stock}</p>
                </div>                
                {
                    agregarCantidad > 0 ? (<Link to='/cart'> Terminar compra </Link>) : (<ItemCount inicial={1}stock={stock} agregar={handleCantidad} />)
                }
            </div>
        </div> */}