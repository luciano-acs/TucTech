import React, { useState, useContext } from 'react'
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
        md:flex-row md:h-72 md:flex-wrap md:mb-12 max-h-max'>
            <div className='w-full border border-b-4 border-t-0 border-x-0 border-[#114d4d] mb-8'>
                <h1 className='max-w-max text-primary text-left text-4xl font-semibold uppercase bg-[#114d4d] px-8'>DETALLE DE PRODUCTO</h1>
            </div>
            <div className='w-full rounded-t-3xl flex justify-center bg-white
            md:w-1/2 md:rounded-l-3xl md:rounded-tr-none'>
                <img src={img} alt={nombre} className='rounded-t-3xl md:rounded-l-3xl max-h-72 w-auto object-cover' />
            </div>
            <div className='flex flex-col items-center justify-center w-full bg-primary  
            md:w-1/2 md:h-auto'>
                <div className='flex flex-col items-start justify-start h-64 md:w-full'>
                    <h2 className='text-primary bg-black text-center uppercase py-2 w-full'>{nombre}</h2>
                    <p className='text-primary text-justify p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique error voluptates laborum vitae dolore ipsum assumenda modi at ipsam quia provident, excepturi quam molestiae officiis quo earum ullam sint beatae. Libero quos hic ipsam enim ut facere obcaecati architecto beatae.</p>
                    <p className='text-primary pl-4 mt-8'>COD-{id}</p>
                    <p className='text-primary text-3xl pl-4'>USD$ {precio}</p>
                    <p className='text-primary pl-4 mb-8'>STOCK: {stock}</p>
                </div>
                {
                    agregarCantidad > 0 ? (<Link to='/cart' className='h-8 text-center rounded-3xl py-1 px-12 bg-black text-primary hover:bg-tertiary hover:text-black transition-all mt-auto mb-2 uppercase'> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} agregar={handleCantidad} />)
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