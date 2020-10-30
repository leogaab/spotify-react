import React from 'react';

import Header from '../Header/Header'
import NewReleases from './NewReleases'
import Searchbar from '../Searchbar/Searchbar'
import Favorites from '../Favorites/Favorites'


const Home = () => {
  return (
    <div>
      <Header />
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