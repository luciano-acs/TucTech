import React from 'react'
import CardWidget from './CardWidget'

const NavBar = () => {
    return (
        <div>
            <header>
                <h1>TucTech</h1>
                <nav>
                    <ul>
                        <li>Hogar</li>
                        <li>Seguridad</li>
                        <li>Salud</li>
                        <li>Entretenimiento</li>
                    </ul>
                </nav>
                <CardWidget />
            </header>
        </div>
    )
}

export default NavBar