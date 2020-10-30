import axios from 'axios'

export const token = 'BQBGN3pHQb565J39n9-B9rMakhmMPUVZoKXJFSkpM74dl1FKq729vc8OicVo9ZWNTj5JCvHCAE7Erh5uq2Q'

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
