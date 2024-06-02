import React from 'react'
import './Video.css'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'



const Video = () => {

  const {videoId,categoryId} = useParams()

  return (
    <div className='yt__video-container'>
        <PlayVideo videoId={videoId} categoryId={categoryId}/>
        <Recommended />
    </div>
  )
}

export default Video