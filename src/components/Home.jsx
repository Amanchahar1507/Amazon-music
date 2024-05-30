import React from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Podcast from './Pages/Podcast';

const Home = () => {
  return (
    <div className="flex flex-col">
        <div className="flex h-[80px] bg-black text-yellow-50 items-center justify-center">
           <Navbar/>
        </div>
        <div className="flex mt-10">
          <Podcast/>
          </div>
        <div>
           <Footer/>
        </div>
    </div>
  )
}

export default Home
