import React, { useState, useEffect } from 'react';

import SongCard from './../Songs/SongCard';
import { spotifyInstance } from '../../utils/utils'
import Loading from '../Loading/Loading';

const NewReleases = () => {

  const [albums, setAlbums ] = useState(null)

  useEffect(() => {
    spotifyInstance.get('/browse/new-releases')
      .then( res => setAlbums(res.data.albums.items))
  }, []);

  return (
    <div>
      <h1 className="font-bold text-xl mb-4">New Releases</h1>
      <div className="flex flex-wrap justify between">
        {albums ? albums.map( album => <SongCard album={album} key={album.id} /> ) : (<Loading/>)}
      </div>
    </div>
  )

}

export default NewReleases