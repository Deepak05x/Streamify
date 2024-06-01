import React from 'react'
import { home, game, automobile, person, blog, news, sports, music, tech, mrbeast, pew, pari } from '../../assests/side'
import './SideBar.css'

const SideBar = ({sideBar, category, setCategory}) => {

  return (
    <div className={`yt__sidebar ${
        sideBar === true ? ' ' : 'small'
    }`}>
      <div className="yt__sidebar-side">
        <div className={`yt__sidebar-side_links ${category === 0 ? 'active' : ''}`} onClick={()=>setCategory(0)}>
            <img src={home} alt=""/>
            <p>Home</p>
        </div>
        <div className={`yt__sidebar-side_links ${category === 20 ? 'active' : ''}`} onClick={()=>setCategory(20)}>
            <img src={game} alt="" />
            <p>Gaming</p>
        </div>
        <div className={`yt__sidebar-side_links ${category === 2 ? 'active' : ''}`} onClick={()=>setCategory(2)}>
            <img src={automobile} alt="" />
            <p>Travel</p>
        </div>
        <div className={`yt__sidebar-side_links ${category === 24 ? 'active' : ''}`} onClick={()=>setCategory(24)}>
            <img src={person}  />
            <p>Entertainment</p>
        </div>
        <div className={`yt__sidebar-side_links ${category === 22 ? 'active' : ''}`} onClick={()=>setCategory(22)}>
            <img src={blog} alt="" />
            <p>Blog</p>
        </div>
        <div className={`yt__sidebar-side_links ${category === 25 ? 'active' : ''}`} onClick={()=>setCategory(25)}>
            <img src={news} alt="" />
            <p>News</p>
        </div>
        <div className={`yt__sidebar-side_links ${category === 17 ? 'active' : ''}`} onClick={()=>setCategory(17)}>
            <img src={sports} alt="" />
            <p>Sports</p>
        </div>
        <div className={`yt__sidebar-side_links ${category === 10 ? 'active' : ''}`} onClick={()=>setCategory(10)}>
            <img src={music} alt="" />
            <p>Music</p>
        </div>
        <div className={`yt__sidebar-side_links ${category === 28 ? 'active' : ''}`} onClick={()=>setCategory(28)}>
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
