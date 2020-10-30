import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export const initialState = {
  favorites: JSON.parse(localStorage.getItem('favs')) || [],
}

export function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      const favorites = [...state.favorites, action.trackId]
      localStorage.setItem('favs', JSON.stringify(favorites))
      return {...state, favorites}    
    }
    case 'remove': {
      const favorites = state.favorites.filter( favTrackId => action.trackId !== favTrackId)
      localStorage.setItem('favs', JSON.stringify(favorites))
      return {...state, favorites}    
    }
    default:
      return state
  }
}

export const store = createStore(reducer, initialState, composeWithDevTools())