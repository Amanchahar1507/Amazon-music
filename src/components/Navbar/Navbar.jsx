// IN THIS WE MAKING A WEB PAGE NAVBAR IN THIS WE  PUT HOME LIBRARY ,PODCAST,SEARCHBAR,
//PROFILE IN THIS IN PROFILE SIGNUP AND LOGIN FORM
import React from 'react'
import logo from '../../photo/logo.jpg';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full px-4">
        <div className="flex items-center gap-6 text-2xl">
            <img src={logo} alt="webpage logo" className=" h-[60px] w-[60px] bg-black"/>
            <Link to="/"><span>Home</span></Link>
            <Link to="/podcast"><span>Podcast</span></Link>
            <Link to="/library"><span>Library</span></Link>
        </div>

        <div className="flex items-center gap-4">
            <input 
                type="text" 
                placeholder='Search...'
                className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring
                 focus:border-blue-300 text-black"
            />
            <Link to="/signup"><FaUser className="text-2xl" /></Link>
            
        </div>
    </div>
  )
}

export default Navbar
