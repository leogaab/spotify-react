import axios from 'axios'

export const token = 'BQBuZxqvEj9-9UuWRo35OcyVvZXtZrdg-XxB644nV9lg4c6EtOuE1i7omVRUHIRWkFZdg9xH3oOMUA6Gz9Y'

export const spotifyInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    Authorization: 'Bearer ' + token
  }
})

export const orderByTime = (array, orderType) => {
  const isAsc = orderType === 'asc'
  const orderedArray = array.slice()

  return orderedArray.sort( (a, b) => {
    if (a.duration_ms > b.duration_ms) {
      return isAsc ? 1 : -1
    }
    if (a.duration_ms < b.duration_ms) {
      return isAsc ? -1 : 1
    }
    return 0
  })
}
