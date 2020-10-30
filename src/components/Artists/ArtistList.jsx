import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { spotifyInstance } from '../../utils/utils'
import queryString from 'query-string'

import Header from '../Header/Header'
import Searchbar from '../Searchbar/Searchbar'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Loading from './../Loading/Loading';

const ArtistList = () => {
  const location = useLocation();
  const query = queryString.parse(location.search)

  const [artists, setArtists ] = useState(null)

  useEffect(() => {
    spotifyInstance.get(`/search?q=${query.search}&type=artist&limit=10`)
      .then( response => setArtists(response.data.artists.item))
  }, [query.search]);

  return (
    <div>
      <Header />
      <div className="container mx-auto text-white">
        <h2 className="font-bold text-4xl mt-3">Artists</h2>
        <p>You're currently searching: <span className="font-bold">"{query.search}"</span></p>
        
        <Searchbar />

        <div className="mt-6">
          <Breadcrumb 
            // key={artists.id}
            links={[
              {to: '/artists', label: 'Artists'},
            ]}
            className="mt-8"
          />
        </div>
        
        <hr className="mt-2 mb-8"/>

        <div className="flex flex-wrap">
          {!artists ? (<Loading />) : (
            artists.map( artist => (
              <div className="inline-flex" key={artist.id}>
                <div className="flex flex-wrap max-w-sm">
                  <div className="flex p-3">
                    <div>
                      <Link>
                        <img src={ artist.images[0] ? artist.images[0].url : 'https://via.placeholder.com/150' } alt={artist.name} />
                      </Link>
                    </div>

                    <div className="ml-4">
                      <h5 className="font-bold text-xl">
                        <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                      </h5>
                      <p className="mt-2 mb-2 capitalize">
                        { artists.genres && artists.genres.length > 1 ? artists.genres[0] + ' | ' + artists.genres[1] : artists.genres[0] }
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ) )
          )}
        </div>
      </div>
    </div>
  )
}

export default ArtistList