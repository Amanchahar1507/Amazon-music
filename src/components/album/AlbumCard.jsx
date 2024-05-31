import React from 'react';

const AlbumCard = ({ images, name, type }) => {
  return (
    <div className="bg-white px-12 py-16 rounded-[12px] text-black shadow-md hover:shadow-lg">
      <div>
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

export default AlbumCard;

