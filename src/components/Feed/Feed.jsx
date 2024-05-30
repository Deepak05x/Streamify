import React from 'react'
import './Feed.css'
import { thumbnail1,thumbnail2,thumbnail3,thumbnail4,thumbnail5,thumbnail6,thumbnail7 } from '../../assests/side'

const Feed = () => {
  return (
    <div className='yt__feed'>
        <div className='yt__feed-card'>
            <img src={thumbnail1} alt="" />
            <h2>Best Channel to learn coding with the react js</h2>
            <h3>GreatStack</h3>
            <p>15k Views &bull; 2 days ago</p>
        </div>
        <div className='yt__feed-card'>
            <img src={thumbnail2} alt="" />
            <h2>Best Channel to learn coding with the react js</h2>
            <h3>GreatStack</h3>
            <p>15k Views &bull; 2 days ago</p>
        </div>
        <div className='yt__feed-card'>
            <img src={thumbnail3} alt="" />
            <h2>Best Channel to learn coding with the react js</h2>
            <h3>GreatStack</h3>
            <p>15k Views &bull; 2 days ago</p>
        </div>
        <div className='yt__feed-card'>
            <img src={thumbnail4} alt="" />
            <h2>Best Channel to learn coding with the react js</h2>
            <h3>GreatStack</h3>
            <p>15k Views &bull; 2 days ago</p>
        </div>
        <div className='yt__feed-card'>
            <img src={thumbnail5} alt="" />
            <h2>Best Channel to learn coding with the react js</h2>
            <h3>GreatStack</h3>
            <p>15k Views &bull; 2 days ago</p>
        </div>
        <div className='yt__feed-card'>
            <img src={thumbnail6} alt="" />
            <h2>Best Channel to learn coding with the react js</h2>
            <h3>GreatStack</h3>
            <p>15k Views &bull; 2 days ago</p>
        </div>
        <div className='yt__feed-card'>
            <img src={thumbnail7} alt="" />
            <h2>Best Channel to learn coding with the react js</h2>
            <h3>GreatStack</h3>
            <p>15k Views &bull; 2 days ago</p>
        </div>
    </div>
  )
}

export default Feed