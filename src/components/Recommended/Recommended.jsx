import React from 'react'
import './Recommended.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'


const Recommended = ({categoryId}) => {

    const [recommended, setRecommended] = useState([])

    const fetchRecommendedVideos = async ()=>{
        try{
            const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
            const recommendedList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
            const response = await axios.get(recommendedList_url)
            const data = response.data.items
            setRecommended(data)
        }catch(e){
            console.log(e.message)
        }   
    }

    useEffect(()=>{
        fetchRecommendedVideos()
    },[])

    if(!recommended){
        return <div>Loading...</div>
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

    moment.updateLocale('en',{
        relativeTime:{
            d: '1 day'
        }
    })

  return (
    <div className='yt__recommended'>
        <div></div>
        <h1>Recommended</h1>
        {recommended.map((item,index)=>{
            return (
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className='yt__recommended-list' key={index}>
                <img src={item.snippet.thumbnails.standard.url} alt="" />
                <div className='yt__recommended-list_info'>
                    <h4>{item.snippet.title}</h4>
                    <p>{item.snippet.channelTitle}</p>
                    <p>{viewCountFormat(item.statistics.viewCount)} Views &nbsp; &bull; &nbsp; {moment(item.snippet.publishedAt).fromNow()}</p>
                </div>
            </Link>
            )
        }
           
        )}
    </div>
  )
}

export default Recommended
