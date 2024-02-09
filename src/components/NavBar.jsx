import React, { useEffect, useState } from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";

const NavBar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleToggleFalse = () => {
        setToggle(false)
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
        <header className='bg-[#2d3839] h-16 flex items-center md:flex-row md:justify-between md:sticky md:top-0 z-50'>
            <FiMenu className={`text-white h-full flex justify-center items-center text-5xl px-2 cursor-pointer md:hidden ${toggle ? 'rotate-90 text-2xl':''} transition duration-200 ease-in-out`} onClick={handleToggle} />
            <h1 className='text-primary h-full flex items-center pl-4 pb-1 font-semibold text-2xl md:w-1/5'>
                <Link to="/" className='h-full flex items-center'>TucTech</Link></h1>
            <nav className={`${toggle ? 'absolute top-16 left-0' : 'hidden'} bg-[#2d3839] w-full md:flex md:w-3/5 md:justify-end md:h-full z-50`}>
                <ul className='py-2 h-full md:flex md:py-0 md:gap-4'>
                    <li className='text-primary h-full flex items-center mb-1'>
                        <NavLink className={({ isActive }) => `w-full px-1 flex items-center h-full text-center uppercase hover:text-secondary hover:bg-tertiary transition-all ${isActive ? 'text-secondary bg-tertiary' : ''}`} to="/category/1" onClick={handleToggleFalse}>Hogar</NavLink>
                    </li>
                    <li className='text-primary h-full flex items-center mb-1'>
                        <NavLink className={({ isActive }) => `w-full px-1 flex items-center h-full text-center uppercase hover:text-secondary hover:bg-tertiary transition-all ${isActive ? 'text-secondary bg-tertiary' : ''}`} to="/category/2" onClick={handleToggleFalse}>Seguridad</NavLink>
                    </li>
                    <li className='text-primary h-full flex items-center mb-1'>
                        <NavLink className={({ isActive }) => `w-full px-1 flex items-center h-full text-center uppercase hover:text-secondary hover:bg-tertiary transition-all ${isActive ? 'text-secondary bg-tertiary' : ''}`} to="/category/3" onClick={handleToggleFalse}>Salud</NavLink>
                    </li>
                    <li className='text-primary h-full flex items-center mb-1'>
                        <NavLink className={({ isActive }) => `w-full px-1 flex items-center h-full text-center uppercase hover:text-secondary hover:bg-tertiary transition-all ${isActive ? 'text-secondary bg-tertiary' : ''}`} to="/category/4" onClick={handleToggleFalse}>Entretenimiento</NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar