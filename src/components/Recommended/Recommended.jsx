import React from 'react'
import './Recommended.css'
import { thumbnail1,thumbnail2,thumbnail3,thumbnail4,thumbnail5,thumbnail6,thumbnail7, thumbnail8 } from '../../assests/side'

const Recommended = () => {
  return (
    <div className='yt__recommended'>
        <div></div>
        <div className='yt__recommended-list'>
            <img src={thumbnail1} alt="" />
            <div className='yt__recommended-list_info'>
                <h4>Best Channel that help you to become a web developer</h4>
                <p>GreatStack</p>
                <p>199K Views</p>
            </div>
        </div>
        <div className='yt__recommended-list'>
            <img src={thumbnail2} alt="" />
            <div className='yt__recommended-list_info'>
                <h4>Best Channel that help you to br a web developer</h4>
                <p>GreatStack</p>
                <p>199K Views</p>
            </div>
        </div>
        <div className='yt__recommended-list'>
            <img src={thumbnail3} alt="" />
            <div className='yt__recommended-list_info'>
                <h4>Best Channel that help you to br a web developer</h4>
                <p>GreatStack</p>
                <p>199K Views</p>
            </div>
        </div>
        <div className='yt__recommended-list'>
            <img src={thumbnail4} alt="" />
            <div className='yt__recommended-list_info'>
                <h4>Best Channel that help you to br a web developer</h4>
                <p>GreatStack</p>
                <p>199K Views</p>
            </div>
        </div>
        <div className='yt__recommended-list'>
            <img src={thumbnail5} alt="" />
            <div className='yt__recommended-list_info'>
                <h4>Best Channel that help you to br a web developer</h4>
                <p>GreatStack</p>
                <p>199K Views</p>
            </div>
        </div>
        <div className='yt__recommended-list'>
            <img src={thumbnail6} alt="" />
            <div className='yt__recommended-list_info'>
                <h4>Best Channel that help you to br a web developer</h4>
                <p>GreatStack</p>
                <p>199K Views</p>
            </div>
        </div>
    </div>
  )
}

export default Recommended
