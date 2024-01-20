import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center gap-10'>
            {console.log(productos)}
            {productos.map(producto => {
                return <Item key={producto.id} {...producto}/>
            })}
        </div>
    )
}

export default ItemList