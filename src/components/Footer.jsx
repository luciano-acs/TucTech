import React from 'react'
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className='h-16 bg-[#2d3839] flex flex-col justify-center items-center
        md:flex-row'>
            <div className='w-full flex justify-center py-1 md:justify-start md:pl-16'>
                <p className='text-primary'>Todos los derechos reservados</p>
            </div>
            <div className='w-full flex flex-row justify-center gap-4 mb-2 items-center md:mb-0 md:justify-end md:pr-16'>
                <a href='https://www.facebook.com'><CiFacebook className='text-primary text-2xl'/></a>
                <a href='https://www.twitter.com'><CiTwitter className='text-primary text-2xl'/></a>
                <a href="https://www.instagram.com"><CiInstagram className='text-primary text-2xl'/></a>
            </div>
        </footer>
    )
}

export default Footer