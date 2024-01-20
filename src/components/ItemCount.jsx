import React, { useState } from 'react'

const ItemCount = ({ stock }) => {

    const [count, setCount] = useState(1)

    const onAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const onSubstract = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className='flex flex-row'>
            <div className='bg-black w-36 h-8 flex flex-row justify-center items-center rounded-xl mr-12'>
                <button className='w-12 h-8 rounded-xl bg-tertiary text-center' onClick={onSubstract}>-</button>
                <span className='w-12 text-primary text-center font-bold'>{count}</span>
                <button className='w-12  h-8 rounded-xl bg-tertiary text-center' onClick={onAdd}>+</button>
            </div>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount