import React from 'react'
import './PlayVideo.css'
import { like,share,dislike,save, video, jack, person } from '../../assests/side'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import moment from 'moment'

const PlayVideo = ({videoId}) => {

    const [apiData, setApiData] = useState(null)
    const [description, setDescription] = useState(false)
    const [channel, setChannel] = useState(null)
    const [comments, setComments] = useState(null)



    const fetchOtherData = async ()=>{
        try{
            const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
            const otherDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
            const response = await axios.get(otherDetails_url)
            const data = response.data.items[0]
            setChannel(data)
        }catch(e){
            console.log(e.message)
        }
    }


  

    const fetchVideoInfo =  async ()=>{
        try{
            const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
            const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
            const response  = await axios.get(videoDetails_url)
            const data = response.data.items[0]
            setApiData(data)
        }catch(e){
            console.log(e.message)
        }
    }


    const fetchVideoComment = async ()=>{
        try{
            const API_KEY  = import.meta.env.VITE_YOUTUBE_API_KEY;
            const videoComment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
            const response = await axios.get(videoComment_url)
            const data = response.data.items
            setComments(data)
        }catch(e){
            console.log(e.message)
        }
    }
   

    useEffect(()=>{
        fetchOtherData()
    },[apiData])

    useEffect(()=>{
        fetchVideoInfo()
        fetchVideoComment()
    },[videoId])


    if (!apiData) {
        return <div>Loading...</div>; 
    }

    if(!channel){
        return <div>Loaing...</div>
    }

    if(!comments){
        return <div>Loading...</div>
    }

    const handleDescription = (prevItem)=>{
        setDescription(!prevItem)
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


  return (
    <div className='yt__playvideo'>
        {/* <video src={video} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData.snippet.title}</h3>
        <div className='yt__playvideo-info'>
            <p>{viewCountFormat(apiData.statistics.viewCount)} views &bull; {moment(apiData.snippet.publishedAt).fromNow()}</p>
            <div className='yt__playvideo-info_social'>
                <span><img src={like} alt="" />{viewCountFormat(apiData.statistics.likeCount)}</span>
                <span><img src={dislike} alt="" />176</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr/>
        <div className='yt__playvideo-publisher'>
            <img src={channel.snippet.thumbnails.high.url} alt="" />
            <div>
                <p>{apiData.snippet.channelTitle}</p>
                <span>{channel ? viewCountFormat(channel.statistics.subscriberCount) : '1M'} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='yt__video-description'>
            <p className={description === false ? 'yt__video-descrption_truncate' : ' '} style={{cursor: 'pointer'}}onClick={()=>{handleDescription(description)}}>{apiData.snippet.description}</p>
            <hr/> 
            <h4>{viewCountFormat(apiData.statistics.commentCount)} Comments</h4>
            {comments.map((item,index)=>(
              <div className='yt__video-description_comment' key={index}>
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                <div>
                    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                    <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                    <div className='yt__video-description_comment-action'>
                            <img src={like} alt="" />
                            <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                            <img src={dislike} alt="" />
                            <span>{Math.floor(Math.random() * 10)}</span>
                    </div>
                </div>
              </div>
            ))}       
        </div>
    </div>
  )
}

export default PlayVideo
