import React from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Podcast from './Pages/Podcast';
import FeaturedThisWeek from './Pages/FeaturedThisWeek';
import TrendingPlaylist from './Pages/TrendingPlaylist';
import Album from './Pages/Album';

const Home = () => {
  return (
    <div className="flex flex-col">
        <div className="flex h-[80px] bg-black text-yellow-50 items-center justify-center">
           <Navbar/>
        </div>
        <div className="flex mt-10">
          <Podcast/>
          </div>
        <div className="flex mt-10">
          <FeaturedThisWeek/>
          </div>
        <div className="flex mt-10">
          <TrendingPlaylist/>
          </div>
        <div className="flex mt-10">
          <Album/>
          </div>
        <div>
           <Footer/>
        </div>
    </div>
  )
}

export default Home
