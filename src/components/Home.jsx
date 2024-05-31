import React from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Podcast from './Pages/Podcast';
import FeaturedThisWeek from './Pages/FeaturedThisWeek';
import TrendingPlaylist from './Pages/TrendingPlaylist';
import Album from './Pages/Album';
import PopularArtist from './Pages/PopularArtist';

const Home = () => {
  return (
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
        <div className="text-white">
           <Footer/>
        </div>
    </div>
  )
}

export default Home
