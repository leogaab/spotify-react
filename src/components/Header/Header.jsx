import './Header.css';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Searchbar from './../Searchbar/Searchbar';

const Header = () => {
  const location = useLocation()

  const isInHomeOrAlbumList = location.pathname === '/' || location.pathname === '/artists'

  return (
    <header className="lg:px-6 px-6 bg-green-600 flex flex-wrap items-center lg:py-2 py-2">
      <div className={ `flex-1 flex items-center ${isInHomeOrAlbumList ? 'justify-center' : 'justify-between'}` }>
        <div className={isInHomeOrAlbumList ? 'justify-center' : null}>
          <Link to="/">
            <img src="/assets/spotify.png" alt="Spotify" className="h-8"/>
          </Link>
        </div>
      </div>
      
      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        {!isInHomeOrAlbumList && (
        <div className="lg:flex items-center justify-between">
          <Searchbar />
        </div>
        )}
      </div>
    </header>
  )
}

export default Header