import React, { useState, version } from 'react'
import './Feed.css'
import {Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import moment from 'moment/moment'


const Feed = ({category}) => {

    const [data, setData] = useState([])

    const fetchData = async ()=>{
        const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        const response = await axios.get(videoList_url)
        const data = response.data.items
        setData(data)
    }

    const viewCountFormat = (viewCount)=>{
        if(viewCount > 1000000){
            return (viewCount / 1000000).toFixed(1) + 'M'
        }else if(viewCount > 1000){
            return (viewCount / 1000).toFixed(1) + 'K'
        }else{
            return viewCount.toString()
        }
    }

    useEffect(()=>{
        fetchData()
    },[category])

  return (
    <div className='yt__feed'>
        {data.map((item,index)=>(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='yt__feed-card'>
                <img src={item.snippet.thumbnails.high.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{viewCountFormat(item.statistics.viewCount)} &nbsp;Views &nbsp;&bull;&nbsp; {moment(item.snippet.publishedAt).fromNow()}</p>
            </Link>
        ))}
        
    </div>
  )
}

export default Feed