import React from 'react'
import TrendingPlaylistCard from '../trendingPlaylist/TrendingPlaylistCard';

const TrendingPlaylist = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mt-30">
        Trending Playlist
        </div>
        <div className="mt-5 ml-5 bg-white text-black">
        <TrendingPlaylistCard/>
        </div>
    </div>
  )
}

export default TrendingPlaylist
