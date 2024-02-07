import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({ item, quantity }) => {

    const [count, setCount] = useState(quantity)
    const { addItem, substractItem, removeItem } = useContext(CartContext)

    // verificar lo del stock
    const onAdd = () => {
        if (count < 10) {
            addItem(item, 1)
            setCount(count + 1)
        }
    }

    const onSubstract = () => {
        if (count > 1) {
            substractItem(item, 1)
            setCount(count - 1)
        }
    }

    const onRemove = () => {
        removeItem(item.id)
    }

    return (
        <>
            <tr className='h-16 border border-gray-300'>
                <td className='pl-4 col-span-2 flex flex-row items-center h-16 my-2'>
                    <img src={item.img} className='rounded-xl h-full w-16 mr-2' />
                    {item.nombre}
                </td>
                <td className='text-center'>${(item.precio).toFixed(2)}</td>
                <td className='text-center'>
                    <div className='bg-white/45 h-8 min-w-max max-w-24 flex flex-row justify-center items-center mx-auto rounded-l-xl rounded-r-xl'>
                        <button className='w-12 h-8 text-center' onClick={onSubstract}>-</button>
                        <span className='min-w-max h-8 pt-1 text-black text-center font-semibold transition-transform'>{count}</span>
                        <button className='w-12 h-8 text-center' onClick={onAdd}>+</button>
                    </div>
                </td>
                <td className='text-center'>${(item.subtotal).toFixed(2)}</td>
            </tr>
            {/* <div className='bg-tertiary/85 w-36 h-8 flex flex-row justify-center items-center rounded-xl mr-12 border-black/50 border-2'>
                <button className='w-12 h-8 rounded-xl  text-center' onClick={onSubstract}>-</button>
                <span className='w-12 text-black text-center font-semibold transition-transform'>{count}</span>
                <button className='w-12  h-8 rounded-xl  text-center' onClick={onAdd}>+</button>
            </div> */}
        </>
    )
}

export default CartItem