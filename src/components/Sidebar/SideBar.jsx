import React from 'react'
import { home, game, automobile, person, blog, news, sports, music, tech, mrbeast, pew, pari } from '../../assests/side'
import './SideBar.css'

const SideBar = ({sideBar}) => {

  return (
    <div className={`yt__sidebar ${
        sideBar === true ? ' ' : 'small'
    }`}>
      <div className="yt__sidebar-side">
        <div className="yt__sidebar-side_links">
            <img src={home} alt=""/>
            <p>Home</p>
        </div>
        <div className="yt__sidebar-side_links">
            <img src={game} alt="" />
            <p>Gaming</p>
        </div>
        <div className="yt__sidebar-side_links">
            <img src={automobile} alt="" />
            <p>Travel</p>
        </div>
        <div className="yt__sidebar-side_links">
            <img src={person}  />
            <p>Person</p>
        </div>
        <div className="yt__sidebar-side_links">
            <img src={blog} alt="" />
            <p>Blog</p>
        </div>
        <div className="yt__sidebar-side_links">
            <img src={news} alt="" />
            <p>News</p>
        </div>
        <div className="yt__sidebar-side_links">
            <img src={sports} alt="" />
            <p>Sports</p>
        </div>
        <div className="yt__sidebar-side_links">
            <img src={music} alt="" />
            <p>Music</p>
        </div>
        <div className="yt__sidebar-side_links">
            <img src={tech} alt="" />
            <p>Tech</p>
        </div>
      </div>
      <div className='break'></div>
      <div className='yt__sidebar-subscribed'>
        <h3>Subscribed</h3>
        <div className='yt__sidebar-sub_links'>
            <img src={pari} alt="" />
            <p>Parithabangal</p>
        </div>
        <div className='yt__sidebar-sub_links'>
            <img src={mrbeast} alt="" />
            <p>MrBeast</p>
        </div>
        <div className='yt__sidebar-sub_links'>
            <img src={pew} alt="" />
            <p>PewDiePie</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
