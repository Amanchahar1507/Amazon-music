import React from 'react'
import FeaturedThisWeekCard from '../featuredThisWeek/FeaturedThisWeekCard'

const FeaturedThisWeek = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mt-30">
        Featured This Week
        </div>
        <div className="mt-5 ml-5 bg-white text-black">
        <FeaturedThisWeekCard/>
        </div>
    </div>
  )
}

export default FeaturedThisWeek
