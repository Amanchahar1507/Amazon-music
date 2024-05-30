import React from 'react'
import PodcastCard from '../podcast/PodcastCard'

const Podcast = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mt-30">
        Recent Podcast
        </div>
        <div className="mt-5 ml-5 bg-white text-black">
        <PodcastCard/>
        </div>
    </div>
  )
}

export default Podcast
