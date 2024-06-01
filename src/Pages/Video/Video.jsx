import React from 'react'
import './Video.css'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'



const Video = () => {
  return (
    <div className='yt__video-container'>
        <PlayVideo />
        <Recommended />
    </div>
  )
}

export default Video