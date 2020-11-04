import React from 'react';

import Header from '../Header/Header'
import NewReleases from './NewReleases'
import Searchbar from '../Searchbar/Searchbar'
import Favorites from '../Favorites/Favorites'


const Home = () => {

  const isLogged = () => {
    let data = JSON.parse(localStorage.getItem('userData')) || []
    return data.isLogged ? true : false
  }

  return (
    <div>
      <Header />
      { isLogged() ? false : (<button className="text-white" >
        <a href="https://accounts.spotify.com/authorize?client_id=09180cc3f92d4003830e094162ca2627&redirect_uri=http://localhost:3000/callback&response_type=token&state=userLogged">LOGIN USER</a>
      </button>) }
      <div className="container p-2 mx-auto text-gray-300 mt-4">
        <span className="text-xl font-bold">Welcome to</span>
        <h1 className="text-4xl font-extrabold">Spotisearch</h1>
        <h2 className="text-xl">Search your favorite songs over Spotify, just enter an artist's name in the following search box and enjoy!</h2>

        <Searchbar />

        {/* To improve log in (If user is logged favorites should be displayed) - Actually, Favorites are displayed by default */}
        <Favorites />

        <hr className="mt-4 mb-4"/>

        <NewReleases />

      </div>
    </div>
  )
}


export default Home;