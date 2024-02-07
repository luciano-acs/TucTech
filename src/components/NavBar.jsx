import React, { useEffect, useState } from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";

const NavBar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setToggle(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <header className='bg-[#2d3839] h-16 flex items-center md:flex-row md:justify-between transition-all md:sticky md:top-0'>
            <FiMenu className='text-white text-5xl pl-4 cursor-pointer md:hidden' onClick={handleToggle} />
            <h1 className='text-primary pl-4 pb-1 font-semibold text-2xl md:w-1/5'>
                <Link to="/">TucTech</Link></h1>
            <nav className={`${toggle ? 'absolute top-16 left-0' : 'hidden'} bg-[#2d3839] w-full md:flex md:w-3/5 md:justify-end md:h-full`}>
                <ul className='py-2 gap-6 h-full md:flex md:py-0'>
                    <li className='text-primary h-full flex items-center'>
                        <NavLink className={({ isActive }) => `px-1 flex items-center h-full text-center uppercase hover:text-secondary hover:bg-tertiary transition-all ${isActive ? 'text-secondary bg-tertiary' : ''}`} to="/category/1" onClick={handleToggle}>Hogar</NavLink>
                    </li>
                    <li className='text-primary h-full flex items-center'>
                        <NavLink className={({ isActive }) => `px-1 flex items-center h-full text-center uppercase hover:text-secondary hover:bg-tertiary transition-all ${isActive ? 'text-secondary bg-tertiary' : ''}`} to="/category/2" onClick={handleToggle}>Seguridad</NavLink>
                    </li>
                    <li className='text-primary h-full flex items-center'>
                        <NavLink className={({ isActive }) => `px-1 flex items-center h-full text-center uppercase hover:text-secondary hover:bg-tertiary transition-all ${isActive ? 'text-secondary bg-tertiary' : ''}`} to="/category/3" onClick={handleToggle}>Salud</NavLink>
                    </li>
                    <li className='text-primary h-full flex items-center'>
                        <NavLink className={({ isActive }) => `px-1 flex items-center h-full text-center uppercase hover:text-secondary hover:bg-tertiary transition-all ${isActive ? 'text-secondary bg-tertiary' : ''}`} to="/category/4" onClick={handleToggle}>Entretenimiento</NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar