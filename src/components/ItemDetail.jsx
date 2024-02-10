import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { LiaSpinnerSolid } from "react-icons/lia";

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {

    const { addItem } = useContext(CartContext)
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const handleCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)

        const item = {
            id: id,
            nombre: nombre,
            precio: precio,
            img: img,
            descripcion: descripcion,
            subtotal: precio * cantidad
        }

        addItem(item, cantidad)
    }

    return (
        <div className='flex flex-col gap-4 min-h-screen-100'>
            <div className='flex justify-center md:justify-start md:border md:border-b-4 md:border-t-0 md:border-x-0 md:border-[#114d4d] mb-8 md:max-h-96'>
                <h1 className='max-w-max text-primary text-5xl font-semibold uppercase bg-[#114d4d] px-2 md:px-8 py-4 text-center'>DETALLE DE PRODUCTO</h1>
            </div>
            {
                !id ?
                    <p className='text-primary text-2xl flex flex-row justify-center items-center gap-4'>
                        <LiaSpinnerSolid className='animate-spin text-primary' />
                        <h2 className='text-primary text-md font-bold uppercase'>Cargando producto</h2>
                    </p>
                    :
                    <div className='flex flex-col min-h-96 w-full bg-primary rounded-3xl lg:flex-row lg:max-h-screen-100'>
                        <div className='lg:w-1/2 lg:flex lg:justify-center bg-white rounded-t-3xl lg:rounded-l-3xl lg:rounded-tl-3xl lg:rounded-tr-none'>
                            <img src={img} alt={nombre} className='object-contain w-auto h-100' />
                        </div>
                        <div className='flex flex-col items-start justify-start min-h-max lg:w-1/2 lg:max-h-max'>
                            <h2 className='text-primary bg-black text-center uppercase py-2 w-full'>{nombre}</h2>
                            <p className='text-primary text-justify px-4 pt-2 md:text-xl'>{descripcion}</p>
                            <p className='text-primary pl-4 mt-2'>COD-{id}</p>
                            <p className='text-primary text-3xl pl-4'>USD$ {precio}</p>
                            <p className='text-primary pl-4'>STOCK: {stock}</p>
                            <div className='mx-auto mb-8 mt-4'>
                                {
                                    agregarCantidad > 0 ? (<Link to='/cart' className='h-8 text-center rounded-3xl py-1 px-12 bg-black text-primary hover:bg-tertiary hover:text-black transition-all mt-auto mb-2 uppercase'> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} agregar={handleCantidad} />)
                                }
                            </div>
                        </div>
                    </div>
            }
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