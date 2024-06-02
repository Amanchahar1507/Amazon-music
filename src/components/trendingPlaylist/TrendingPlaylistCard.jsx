// THIS IS TRENDINGPLAYLIST CARD OR WE SAY HOW IT DISPLAY ON THE SCREEN WE MADE THIS TO DEMO CARD
// FOR THE TRENDINGPLAYLIST..........

import React from 'react';

const TrendingPlaylistCard = ({ images, name, type }) => {
  return (
    <div className="bg-white px-12 py-16 rounded-[12px] text-black shadow-md hover:shadow-lg">
      <div>

      {/* THIS DISPLAY IMAGE IF IMAGE AVAILABLE OTHERWISE DISPLAY NO IMAGE AVAILABLE */}
        {images && images.length > 0 ? (
          <img src={images[0].url} alt={name} className="rounded-full w-32 h-32" />
        ) : (
          <div>No Image Available</div>
        )}
      </div>
      <div className="flex mt-16 text-xl font-bold">
        {name}
        {/* name */}
      </div>
      <div className="flex mb-0 text-gray-500">
        {type}
        {/* type */}
      </div>
    </div>
  );
};

export default TrendingPlaylistCard;

