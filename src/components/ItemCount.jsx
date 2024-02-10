import React, { useState } from 'react'

const ItemCount = ({ inicial, stock, agregar }) => {

    const [count, setCount] = useState(inicial)

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
        <div className='flex flex-col items-center justify-center gap-4 p-4
        lg:flex-row lg:justify-between'>
            <div className='bg-tertiary/85 w-36 h-8 flex flex-row justify-center items-center rounded-xl border-black/50 border-2'>
                <button className='w-12 h-8 rounded-xl text-center' onClick={onSubstract}>-</button>
                <span className='w-12 text-black text-center font-semibold transition-transform'>{count}</span>
                <button className='w-12  h-8 rounded-xl  text-center' onClick={onAdd}>+</button>
            </div>
            <button className='min-w-max px-8 h-8 rounded-3xl text-center bg-black text-primary hover:bg-tertiary hover:text-black hover:font-semibold transition-all' onClick={() => agregar(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount