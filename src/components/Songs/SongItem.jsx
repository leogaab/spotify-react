import React from 'react';

const SongItem = ({ tracks }) => {
  const { name, album, duration_ms } = tracks

  function msToMinAndSecs(ms) {
    let minutes = Math.floor(ms / 60000)
    let seconds = ( (ms % 60000 ) / 1000 ).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0': '') + seconds
  }

  return (
    <div className="flex inline-block justify-between border-b border-grey-300">
      <div className="inline-flex items-center">
        <img src={album.images[0] ? album.images[2].url : 'https://via.placeholder.com/150'} alt={name}/>
        <span className="ml-3">{name}</span>
      </div>
      <div className="flex items-center">
        <span className="mr-3">{msToMinAndSecs(duration_ms)}</span>
      </div>
    </div>
  )
} 

export default SongItem