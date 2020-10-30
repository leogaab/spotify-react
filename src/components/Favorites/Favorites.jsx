import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { spotifyInstance } from '../../utils/utils';
import Loading from '../Loading/Loading';
import SongItem from './../Songs/SongItem';

const Favorites = () => {
  const favorites = useSelector( state => state.favorites )
  const [ tracks, setTracks ] = useState(null)

  useEffect(() => {
    spotifyInstance.get(`/tracks?ids=${favorites.join(',')}`)
      .then( response => setTracks(response.data.tracks) )
  }, [favorites]); 

  return (
    <div>
      <h2 className="text-white font-bold text-2xl mb 2">Favorite Songs</h2>
      <ul>
        {tracks ? tracks.map( track => <SongItem tracks={track} key={track.id} /> ) : (<Loading />)}
      </ul>
    </div>
  )
}

export default Favorites