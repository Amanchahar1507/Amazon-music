import React from 'react'
import AlbumCard from '../album/AlbumCard'
import { useState,useEffect } from 'react';
import { baseApi } from '../../api/axiosInstance';
import { Link } from 'react-router-dom';

const Album = () => {
  const [artists,setArtist] = useState(null);

  const fetchAllArtist = async () =>{
      try{
        const artists = await baseApi.get("/artist_related",{
          params:{
            id :'2w9zwq3AktTeYYMuhMjju8'
          }
        })
        
        setArtist(artists.data.artists)
      }
      catch(error){
        console.log("Error in fetching artist",error)
      }
  }

  useEffect(() => {
    fetchAllArtist();

  }, [])
  return (
    <div className="flex flex-col">
      <div className="mt-36 ml-80 font-bold text-4xl ">
      <Link to="/album"><h2>Album</h2></Link>
      </div>
        <div className="mt-36 ml-96 flex flex-wrap gap-4">
        {artists && artists.map((artist) => (
          <AlbumCard 
            key={artist.id} 
            images={artist.images} 
            name={artist.name} 
            type={artist.type} 
          />
        ))}
      </div>
    </div>
  )
}

export default Album
