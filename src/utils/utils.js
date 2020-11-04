import axios from 'axios'

export const token = 'BQA_pzrad4b_91z-nNAD_DyASCamRuJZNYzZYnhXI-dzh4Wz6TItj7sQk4Ahazb30eMuOA9lT_PQR50uhpo'

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
