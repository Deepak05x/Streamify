import React from 'react'
import './Navbar.css'
import menu_png from '../../assests/menu.png'
import yt_png from '../../assests/yt.png'
import search_png from '../../assests/search.png'
import video_png from '../../assests/videostart.png'
import app_png from '../../assests/app.png'
import noti_png from '../../assests/notification.png'
import person_png from '../../assests/person.png'

const Navbar = () => {
  return (
    <div className='yt__navbar'>
        <div className='yt__navbar-left'>
            <img src={menu_png} alt="" />
            <img src={yt_png} alt="" />
        </div>
        <div className='yt__navbar-middle'>
            <input type="text" name="" id="" />
            <img src={search_png} alt="" />
        </div>
        <div className='yt__navbar-right'>
            <img src={video_png} alt="" />
            <img src={app_png} alt="" />
            <img src={noti_png} alt="" />
            <img src={person_png} alt="" />
        </div>
    </div>
  )
}

export default Navbar