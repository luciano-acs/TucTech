import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const CardWidget = () => {
    return (
        <div className='flex justify-end items-center pr-6'>
            <CiShoppingCart className='text-[#e0e4ce] text-3xl text-center'/>
            <p className='text-[#e0e4ce] text-lg text-center px-1'>3</p>
        </div>
    )
}

export default CardWidget