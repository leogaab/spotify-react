import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { spotifyInstance } from '../../utils/utils';
import Loading from '../Loading/Loading';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Header from '../Header/Header';


const Album = () => {
  const [ album, setAlbum] = useState(null)
  const [ tracks, setAlbumTracks] = useState(null)

  const { albumId } = useParams()

  
  useEffect( () => {

    async function getData () {
      const { data: album } = await spotifyInstance.get(`/albums/${albumId}`)
      setAlbum(album)
      setAlbumTracks(album.tracks.items)
    }

    getData()

    }, [albumId]
  )

  const dispatch = useDispatch();
  const favorites = useSelector( state => state.favorites )

  const isFavorite = (trackId) => {
    return favorites.includes(trackId)
  }

  const removeFavorite = trackId => {
    dispatch({type: 'remove', trackId })
  }

  const addFavorite = trackId => {
    dispatch({type: 'add', trackId })
  }

  const toggleFav = (trackId) => {
    isFavorite(trackId) ? removeFavorite(trackId) : addFavorite(trackId)
  }
  
  return (
    <div>
      <Header />
      {
        !album ? (
          <Loading />
        ) : (
          <div className="container mx-auto text-white mt-10 mb-10">
            <div className="flex inline-flex justify-between p-2">
              <div>
                <img src={album.images[0] ? album.images[1].url : 'https://via.placeholder.com/150'} alt={album.name} />
              </div>
              <div className="ml-4">
                <h5 className="font-bold text-3xl">{album.name}</h5>
                <p className="mt-2 mb-2">{album.release_date}</p>
                <p className="mt-2 mb-2">Total tracks:{album.total_tracks}</p>
              </div>
            </div>
            
            <div className="mt-3 mb-3">
              <Breadcrumb
                key={album.id}
                links={[
                  { to: "/artists", label: "Artists" },
                  { to: `/artists/${album.artists[0].id}`, label: `${album.artists[0].name}` },
                  { to: '#', label: `${album.name}` },
                ]} className="mt-8"
              />
              <hr/>
            </div>
                <ul className="mb-3">
                  <li className="font-bold text-xl mb-3">Album Tracks</li>
                  {tracks && tracks.map(({id, name, preview_url}) =>
                  <li key={id}  className="flex justify-between mb-3">
                    <div className="flex inline-flex items-center">

                      <audio src={preview_url} controls>
                        <svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </audio>
                      <p className="ml-2">{name}</p>
                    </div>
                      <span className="tooltip" onClick={ () => toggleFav(id) }>
                        {isFavorite(id) ? 
                          (
                            <div>
                              <span className='tooltip-text bg-orange-400 p-3 -mt-6 -ml-4 rounded'>Remove from favorites!</span>
                              <svg className="h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>  
                            </div>
                          ) : (
                          <div>
                            <span className='tooltip-text bg-orange-400 p-3 -mt-6 -ml-4 rounded'>Add to favorites!</span>
                            <svg className="h-8 text-gray-300 hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>  
                          </div>
                          )
                        }

                      </span>
                  </li>)}
                </ul>
          </div>
        )
      }
    </div>
  )
}


export default Album;