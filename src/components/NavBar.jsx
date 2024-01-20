import React from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className='flex w-full h-16 flex-row justify-between bg-[#2d3839]'>
            <h1 className='w-1/5 text-primary flex items-center justify-start text-2xl pl-8 font-semibold'><Link to="/">TucTech</Link></h1>
            <nav className='w-3/5 flex justify-end items-center'>
                <ul className='flex items-center gap-6'>
                    <li className='text-primary'><NavLink to="/category/1">Hogar</NavLink></li>
                    <li className='text-primary'><NavLink to="/category/2">Seguridad</NavLink></li>
                    <li className='text-primary'><NavLink to="/category/3">Salud</NavLink></li>
                    <li className='text-primary'><NavLink to="/category/4">Entretenimiento</NavLink></li>
                </ul>
            </nav>
            <CartWidget className="w1/5"/>
        </header>
    )
}

export default NavBar