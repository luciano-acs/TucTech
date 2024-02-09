import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center gap-10 p-12'>
            <div className='w-full border border-b-4 border-t-0 border-x-0 border-[#114d4d]'>
                <h1 className='max-w-max text-primary text-left text-5xl font-semibold uppercase bg-[#114d4d] px-8'>PRODUCTOS</h1>
            </div>
            {productos.map(producto => {
                return <Item key={producto.id} {...producto}/>
            })}
        </div>
    )
}

export default ItemList