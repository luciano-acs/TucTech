import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const CartWidget = () => {
    return (
        <div className='flex justify-end items-center pr-6'>
            <CiShoppingCart className='text-primary text-3xl text-center'/>
            <p className='text-primary text-lg text-center px-1'>3</p>
        </div>
    )
}

export default CartWidget