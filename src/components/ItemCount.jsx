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
        <div className='flex flex-row items-center justify-between'>
            <div className='bg-black w-36 h-8 flex flex-row justify-center items-center rounded-xl mr-12'>
                <button className='w-12 h-8 rounded-xl bg-tertiary text-center' onClick={onSubstract}>-</button>
                <span className='w-12 text-primary text-center font-semibold transition-transform'>{count}</span>
                <button className='w-12  h-8 rounded-xl bg-tertiary text-center' onClick={onAdd}>+</button>
            </div>
            <button className='w-72 h-8 rounded-3xl text-center bg-black text-primary hover:bg-tertiary hover:text-black hover:font-semibold transition-all ml-4'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount