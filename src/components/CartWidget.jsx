import React, {useContext} from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)
    return (
        <div className='flex justify-end items-center pr-6 ml-auto mr-4
                        md:ml-4'>
            <Link to='/cart' className='flex flex-row gap-1'>
                <CiShoppingCart className='text-primary text-3xl text-center' />
                <p className='text-primary text-lg text-center px-1 pt-0.5'>{totalQuantity}</p>
            </Link>
            
        </div>
    )
}

export default CartWidget