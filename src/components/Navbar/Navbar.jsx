import React from 'react'
import logo from '../../photo/logo.jpg';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full px-4">
        <div className="flex items-center gap-6 text-2xl">
            <img src={logo} alt="webpage logo" className=" h-[60px] w-[60px] bg-black"/>
            <span>Home</span>
            <span>Podcast</span>
            <span>Library</span>
        </div>

        <div className="flex items-center gap-4">
            <input 
                type="text" 
                placeholder='Search...'
                className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            <FaUser className="text-2xl" />
        </div>
    </div>
  )
}

export default Navbar
