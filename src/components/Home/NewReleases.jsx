import React, { useState, useEffect } from 'react';

import { spotifyInstance } from '../../utils/utils'
import Loading from '../Loading/Loading';
import SongCard from '../Songs/SongCard';

const NewReleases = () => {

  const [albums, setAlbums ] = useState(null)

  useEffect(() => {
    spotifyInstance.get('/browse/new-releases')
    .then( res => {
      // console.log(res.data.albums.items);
      setAlbums(res.data.albums.items)
    })
  },[]);

  return (
    <div className="container">
      <h1 className="font-bold text-xl mb-4">New Releases</h1>
      <div className="flex flex-wrap justify-between">
        {albums ? albums.map( album => <SongCard album={album} key={album.id} /> ) : (<Loading/>)}
      </div>
    </div>
  )

}

export default NewReleases