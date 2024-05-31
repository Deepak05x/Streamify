import React from 'react'
import './PlayVideo.css'
import { like,share,dislike,save, video, jack, person } from '../../assests/side'

const PlayVideo = () => {
  return (
    <div className='yt__playvideo'>
        <video src={video} controls autoPlay muted></video>
        <h3>Best Youtube Channel to learn React Js</h3>
        <div className='yt__playvideo-info'>
            <p>15k views &bull; 2 days ago</p>
            <div className='yt__playvideo-info_social'>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr/>
        <div className='yt__playvideo-publisher'>
            <img src={jack} alt="" />
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='yt__video-description'>
            <p>Channel that makes learning easy</p>
            <p>Subscribe to the Channel</p>
            <hr/> 
            <h4>130 Comments</h4>
            <div className='yt__video-description_comment'>
                <img src={person} alt="" />
                <div>
                    <h3>Jack Nick <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit quisquam id. Magnam, libero voluptatibus maxime provident earum ducimus hic, odit dolores nobis placeat soluta quaerat est quas repellendus sapiente.</p>
                    <div className='yt__video-description_comment-action'>
                            <img src={like} alt="" />
                            <span>150</span>
                            <img src={dislike} alt="" />
                            <span>2</span>
                    </div>
                </div>
            </div>
            <div className='yt__video-description_comment'>
                <img src={person} alt="" />
                <div>
                    <h3>Jack Nick <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit quisquam id. Magnam, libero voluptatibus maxime provident earum ducimus hic, odit dolores nobis placeat soluta quaerat est quas repellendus sapiente.</p>
                    <div className='yt__video-description_comment-action'>
                            <img src={like} alt="" />
                            <span>150</span>
                            <img src={dislike} alt="" />
                            <span>2</span>
                    </div>
                </div>
            </div>
            <div className='yt__video-description_comment'>
                <img src={person} alt="" />
                <div>
                    <h3>Jack Nick <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit quisquam id. Magnam, libero voluptatibus maxime provident earum ducimus hic, odit dolores nobis placeat soluta quaerat est quas repellendus sapiente.</p>
                    <div className='yt__video-description_comment-action'>
                            <img src={like} alt="" />
                            <span>150</span>
                            <img src={dislike} alt="" />
                            <span>2</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo
