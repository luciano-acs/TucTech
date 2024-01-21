import React, {useState} from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    const [linkActive, setLinkActive] = useState('null')

    const handleLinkActive = (link) => {
        linkActive === link ? setLinkActive('null') : setLinkActive(link)
    }

    return (
        <header className='flex w-full h-16 flex-row justify-between bg-[#2d3839]'>
            <h1 className='w-1/5 text-primary flex items-center justify-start text-2xl pl-8 font-semibold'><Link to="/" onClick={() => handleLinkActive('null')}>TucTech</Link></h1>
            <nav className='w-3/5 flex justify-end items-center'>
                <ul className='flex items-center justify-center gap-6 h-full'>
                    <li className='text-primary h-full flex items-center'><NavLink className={`px-1 flex items-center h-full text-center uppercase hover:text-secondary hover:bg-tertiary transition-all ${linkActive === 'hogar' ? 'text-secondary bg-tertiary' : ''}`} to="/category/1" onClick={() => handleLinkActive('hogar')}>Hogar</NavLink></li>
                    <li className='text-primary h-full flex items-center'><NavLink className={`px-1 flex items-center h-full text-center uppercase hover:text-secondary hover:bg-tertiary transition-all ${linkActive === 'seguridad' ? 'text-secondary bg-tertiary' : ''}`} to="/category/2" onClick={() => handleLinkActive('seguridad')} >Seguridad</NavLink></li>
                    <li className='text-primary h-full flex items-center'><NavLink className={`px-1 flex items-center h-full text-center uppercase hover:text-secondary hover:bg-tertiary transition-all ${linkActive === 'salud' ? 'text-secondary bg-tertiary' : ''}`} to="/category/3" onClick={() => handleLinkActive('salud')}>Salud</NavLink></li>
                    <li className='text-primary h-full flex items-center'><NavLink className={`px-1 flex items-center h-full text-center uppercase hover:text-secondary hover:bg-tertiary transition-all ${linkActive === 'entretenimiento' ? 'text-secondary bg-tertiary' : ''}`} to="/category/4" onClick={() => handleLinkActive('entretenimiento')}>Entretenimiento</NavLink></li>
                </ul>
            </nav>
            <CartWidget className="w1/5"/>
        </header>
    )
}

export default NavBar