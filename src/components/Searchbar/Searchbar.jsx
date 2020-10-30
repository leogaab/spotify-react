import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Searchbar = () => {

  const history = useHistory();
  const searchInputRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    const value = searchInputRef.current.value
    history.push('/artists?search=' + value)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full mt-4 mb-4 flex">
      <input 
        ref={searchInputRef}
        type="search"
        name=""
        placeholder="Type the name of your favorite artist"
        aria-placeholder="Type the name of your favorite artist"
        className="w-11/12 rounded py-2 px-4 bg-gray-700"
      />
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounder">
        <svg className="h-4" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  )
}

export default Searchbar