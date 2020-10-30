import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './../Loading/Loading';
import Breadcrumb from './../Breadcrumb/Breadcrumb';
import AlbumList from './../Album/AlbumList';
import Header from './../Header/Header';
import SongItem from './../Songs/SongItem';
import { orderByTime, spotifyInstance } from './../../utils/utils';

const Artist = () => {
  const [ artist, setArtist ] = useState(null)
  const [ artistAlbum, setArtistAlbum ] = useState(null)
  const [ artistTopTracks, setArtistTopTracks ] = useState(null)
  const [ order, setOrder ] = useState('asc')
  const { artistId } = useParams()

  const toggleOrder = () => {
    const nextOrder = order === 'asc' ? 'des' : 'asc'
    const nextArtistTracks = orderByTime(artistTopTracks, nextOrder)
    setOrder(nextOrder)
    setArtistTopTracks(nextArtistTracks)
  }

  useEffect(() => {
    async function getData() {
      const {data: artist } = await spotifyInstance.get(`/artists/${artistId}`)
      setArtist(artist)
      const {data: { tracks } } = await spotifyInstance.get(`/artists/${artistId}/top-tracks?market=es`)
      setArtistTopTracks(tracks)
      const {data: { items: albums } } = await spotifyInstance.get(`/artists/${artistId}/albums`)
      setArtistAlbum(albums)
    }

    getData()
  }, [artistId]);

  return (
    <div>
      <Header />
      {
        !artist ? (
          <Loading />
        ) : (
          <div className="container mx-auto text-white">
            <div className="flex inline-flex justify-between p-2">
              <div>
                <img src={artist.images[0] ? artist.images[1].url : 'https://via.placeholder.com/150'} alt={artist.name} />
              </div>
              <div className="ml-4">
                <h5 className="font-bold text-3xl">{artist.name}</h5>
                <p className="mt-2 mb-2 capitalize">{artist.genres[0]}</p>
              </div>
            </div>
            
            <div className="mt-3 mb-3">
              <Breadcrumb
                key={artist.id}
                links={[
                  { to: "/artists", label: "Artists" },
                  { to: "/artists/artistId", label: `${artist.name}` },
                ]} className="mt-8"
              />
              <hr/>
            </div>
            <div className="container">
              <div className="mt-10">
                <div className="flex justify-between">
                  <h3 className="font-bold text-xl mb-3">Top Tracks</h3>
                  <button
                    onClick={toggleOrder}
                    className="bg-transparent hover:bg-green-500 text-white font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                    Order by
                  </button>
                </div>
                {artistTopTracks ? artistTopTracks.map( track => <SongItem tracks={track} key={track.id} /> ) : (<Loading />)}
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-xl mb-3">Albums</h3>
                {artistAlbum ? artistAlbum.map(album => <div className="inline-flex"><AlbumList album={album} key={album.id} /></div>) : (<Loading />)}
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}


export default Artist