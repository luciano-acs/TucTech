import React from 'react'
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className='flex w-full h-16 flex-row justify-between bg-[#2d3839]'>
            <div className='flex justify-start items-center w-1/2 pl-8'>
                <p className='text-primary'>Todos los derechos reservados</p>
            </div>
            <div className='flex justify-end items-center w-1/2 pr-8 gap-4'>
                <a href='https://www.facebook.com'><CiFacebook className='text-primary text-2xl'/></a>
                <a href='https://www.twitter.com'><CiTwitter className='text-primary text-2xl'/></a>
                <a href="https://www.instagram.com"><CiInstagram className='text-primary text-2xl'/></a>
            </div>
        </footer>
    )
}

export default Footer