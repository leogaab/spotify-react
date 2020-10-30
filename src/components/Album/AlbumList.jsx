import React from 'react';
import { Link } from 'react-router-dom';

const AlbumList = ({album}) => {
  const { name, images, artists, release_date, total_tracks } = album
  return (

    <div className="flex flex-wrap max-w-sm">
      <div className="flex p-3">
        <div>
          <Link to={ artists[0].id + '/' + album.id }>
            <img src={images[0] ? images[1].url : 'https://via.placeholder.com/150'  } alt={name} />
          </Link>
        </div>
        
        <div className="ml-4">
          <h5 className="font-bold text-xl">{name}</h5>
          <p className="mt-2 mb-2">{release_date}</p>
          <p className="mt-2 mb-2">Tracks: {total_tracks}</p>
        </div>
      </div>
    </div>
  )
}

export default AlbumList