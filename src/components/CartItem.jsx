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
                <td className='pl-4 lg:col-span-2 lg:flex lg:flex-row items-center h-16 my-2'>
                    <img src={item.img} className='hidden rounded-xl h-full w-16 mr-2' />
                    {item.nombre}
                </td>
                <td className='lg:hidden flex flex-col justify-start gap-2'>
                    <p>Precio: ${(item.precio).toFixed(2)}</p>
                    <p>Cantidad:
                        <div className='bg-white/45 h-6 min-w-max max-w-24 flex flex-row justify-between items-center rounded-l-xl rounded-r-xl'>
                            <button className='w-8 h-6 text-center' onClick={onSubstract}>-</button>
                            <span className='min-w-max h-6 text-black text-center font-semibold transition-transform'>{count}</span>
                            <button className='w-8 h-6 text-center' onClick={onAdd}>+</button>
                        </div>
                    </p>
                    <p>Subtotal: ${(item.subtotal).toFixed(2)}</p>
                </td>
                <td className='text-center hidden lg:table-cell'>${(item.precio).toFixed(2)}</td>
                <td className='text-center hidden lg:table-cell'>
                    <div className='bg-white/45 h-8 min-w-max max-w-24 flex flex-row justify-center items-center mx-auto rounded-l-xl rounded-r-xl'>
                        <button className='w-12 h-8 text-center' onClick={onSubstract}>-</button>
                        <span className='min-w-max h-8 pt-1 text-black text-center font-semibold transition-transform'>{count}</span>
                        <button className='w-12 h-8 text-center' onClick={onAdd}>+</button>
                    </div>
                </td>
                <td className='text-center hidden lg:table-cell'>${(item.subtotal).toFixed(2)}</td>
            </tr>
        </>
    )
}

export default CartItem