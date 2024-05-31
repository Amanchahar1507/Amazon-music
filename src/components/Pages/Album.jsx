import React from 'react'
import AlbumCard from '../album/AlbumCard'

const Album = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mt-30">
        Albums
        </div>
        <div className="mt-5 ml-5 bg-white text-black">
        <AlbumCard/>
        </div>
    </div>
  )
}

export default Album
