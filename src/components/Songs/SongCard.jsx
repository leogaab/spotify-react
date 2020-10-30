import React from 'react';
import { Link } from 'react-router-dom';

const SongCard = ({ album }) => {
  const { name, images, artists, release_date } = album

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Link to={'artists/' + artists[0].id}>
        <img src={images[0].ulr} alt={name} />
      </Link>
      <div className="px-6 py-4 text-white">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-base">
          {artists && artists.length > 1 ? artists[0] + ' & ' + artists[1] : artists[0] }
        </p>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {release_date}
          </span>
          </div>
      </div>
    </div>
  )
}

export default SongCard