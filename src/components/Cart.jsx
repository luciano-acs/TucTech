import React, { useContext } from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const { cart, total, totalQuantity, clear } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className='w-full bg-primary p-12 min-h-screen-100 flex justify-center items-center flex-col'>
                <h2 className='text-white text-5xl text-center'>NO HAY PRODUCTOS</h2>
                <Link to="/" className='w-80 h-8 rounded-b-3xl text-center text-xl bg-tertiary text-black hover:w-96 transition-all'>Ver productos</Link>
            </div>
        )
    }
    return (
        <div className='w-full bg-secondary p-8 min-h-screen-100 flex flex-col lg:flex-row'>
            <table className='lg:w-3/5 w-full lg:mr-8 max-h-2'>
                <thead className='h-12 bg-primary'>
                    <tr className='text-primary'>
                        <th className='text-left pl-4 lg:col-span-2'>Producto</th>
                        <th className='lg:hidden'>Detalles</th>
                        <th className='hidden lg:table-cell'>Precio</th>
                        <th className='hidden lg:table-cell'>Cantidad</th>
                        <th className='hidden lg:table-cell'>Subtotal</th>
                    </tr>
                </thead>
                <tbody className='bg-tertiary max-h-60 overflow-y-auto'>
                    {
                        cart.map(prod => <CartItem key={prod.id} {...prod} />)
                    }
                </tbody>
            <button className='mt-4 h-8 text-center rounded-3xl py-1 px-12 bg-black text-primary hover:bg-red-900 transition-all mb-2 min-w-max' onClick={clear}>Vaciar Carrito</button>
            </table>
            <div className='bg-tertiary w-full mt-4 lg:w-2/5 lg:mt-0 h-72 rounded-lg py-2 px-8 flex flex-col'>
                <h2 className='text-center text-tertiary text-2xl font-bold border-b-4 border-black/25'>RESUMEN</h2>
                <h3 className='font-bold mt-4'>Total: ${(total).toFixed(2)}</h3>                
                <Link to="/checkout" className='h-8 text-center rounded-3xl py-1 px-12 bg-black text-primary hover:bg-primary transition-all mt-auto mb-2 uppercase'>Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Cart