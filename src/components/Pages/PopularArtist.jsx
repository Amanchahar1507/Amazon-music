// THIS IS ARTIST SECTION OR PART OF WEBPAGE...........

import React from 'react'
import ArtistCard from '../Popular-artist/ArtistCard';
import {useState,useEffect} from 'react';
import {baseApi} from "../../api/axiosInstance";
import { Link } from "react-router-dom";

const PopularArtist = () => {
  const [artists,setArtist] = useState(null);

   // HERE WE FETCH THE API FROM RAPIDAPI AND GET THE DATA FROM THERE BUT I AM 
  // USING ARTIST API ALL OVER BECAUSE OTHER API GIVEN TO ME IS SINGLE VALUE THAT DID NOT
  // LOOK GOOD ON WEB PAGE..........
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
      <div className="mt-24 ml-12 font-bold text-4xl ">
      <Link to="/popularartist"><h2 className="ml-10">PopularArtist</h2></Link>
      </div>
      <div className="mt-24 ml-32 mr-12 flex flex-wrap gap-4">

        {/* HERE WE CALL ARTISTCARD FOR SHOWING THE INFORMATION WE FETCH FROM THE API.. */}
        {artists && artists.map((artist) => (
          <ArtistCard 
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

export default PopularArtist