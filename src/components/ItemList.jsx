import React from 'react'
import Item from './Item'
import { LiaSpinnerSolid } from "react-icons/lia";

const ItemList = ({ productos }) => {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center gap-10 md:p-12 p-6'>
            <div className='flex justify-center md:justify-start w-full md:border md:border-b-4 md:border-t-0 md:border-x-0 md:border-[#114d4d]'>
                <h1 className='max-w-max text-primary text-5xl font-semibold uppercase bg-[#114d4d] px-2 md:px-8'>PRODUCTOS</h1>
            </div>
            {productos.length === 0 ? 
                <p className='text-primary text-2xl flex flex-row justify-center items-center gap-4'>
                    <LiaSpinnerSolid className='animate-spin text-primary'/>
                    <h2 className='text-primary text-md font-bold uppercase'>Cargando productos</h2>
                </p>
                :
                productos.map(producto => {
                    return <Item key={producto.id} {...producto} />
                })}
        </div>
    )
}

export default ItemList