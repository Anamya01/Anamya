import React from 'react'
import sound from '../Assets/Audio.wav';
function Music() {
  return (
    <div className='music'>
      <audio src={sound} autoPlay loop volume = '0.4' ></audio>
    </div>
  )
}

export default Music