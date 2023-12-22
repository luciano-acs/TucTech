import React from 'react'
import CardWidget from './CardWidget'

const NavBar = () => {
    return (
        <header className='flex w-full h-16 flex-row justify-between bg-[#2d3839]'>
            <h1 className='w-1/5 text-[#e0e4ce] flex items-center justify-start text-2xl pl-8 font-semibold'>TucTech</h1>
            <nav className='w-3/5 flex justify-end items-center'>
                <ul className='flex items-center gap-6'>
                    <li className='text-[#e0e4ce]'>Hogar</li>
                    <li className='text-[#e0e4ce]'>Seguridad</li>
                    <li className='text-[#e0e4ce]'>Salud</li>
                    <li className='text-[#e0e4ce]'>Entretenimiento</li>
                </ul>
            </nav>
            <CardWidget className="w1/5"/>
        </header>
    )
}

export default NavBar