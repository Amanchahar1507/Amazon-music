// THIS IS HOME SECTION PAGE OF THE WEBPAGE WHERE ALL THE THINGS WE SEE IT ON THE SCREEN

import React from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Podcast from './Pages/Podcast';
import FeaturedThisWeek from './Pages/FeaturedThisWeek';
import TrendingPlaylist from './Pages/TrendingPlaylist';
import Album from './Pages/Album';
import PopularArtist from './Pages/PopularArtist';
import Library from './Pages/Library';

const Home = () => {
  return (

    // HERE WE IMPORT ALL THE SECTION OR PART WE SEEN ON THE HOME SCREEN
    <div className="flex flex-col bg-black">
        <div className="flex h-[80px] bg-black text-yellow-50 items-center justify-center text-white">
           <Navbar/>
        </div>
        <div className="flex mt-10 text-white">
          <Podcast/>
          </div>
        <div className="flex mt-10 text-white">
          <FeaturedThisWeek/>
          </div>
        <div className="flex mt-10 text-white">
          <PopularArtist/>
          </div>
        <div className="flex mt-10 text-white">
          <TrendingPlaylist/>
          </div>
        <div className="flex mt-10 text-white">
          <Album/>
          </div>
        <div className="flex mt-10 text-white">
          <Library/>
          </div>
        <div className="text-white">
           <Footer/>
        </div>
    </div>
  )
}

export default Home
