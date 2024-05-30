import React from 'react'
import './Navbar.css'
import menu_png from '../../assests/menu.png'
import yt_png from '../../assests/yt.png'
import search_png from '../../assests/search.png'
import video_png from '../../assests/videostart.png'
import app_png from '../../assests/app.png'
import noti_png from '../../assests/notification.png'
import person_png from '../../assests/person.png'
import dot_png from '../../assests/dot.png'
import close_png from '../../assests/close.png'
import { useState } from 'react'


const Navbar = ({setSideBar}) => {

  const [search, setSearch] = useState(false)

  const handleSearch = ()=>{
    setSearch(!search)
  }

  const handleSideBar = ()=>{
    setSideBar((prev) => prev === false ? true : false )
  }

  return (
    <div className='yt__navbar'>
      {search === false ? (
          <>
          <div className='yt__navbar-left'>
              <img src={menu_png} alt="" onClick={()=>handleSideBar()}/>
              <img src={yt_png} alt="" />
          </div>
          <div className='yt__navbar-middle'>
              <input type="text" name=""/>
              <img src={search_png} alt="" />
          </div>
          <div className='yt__navbar-middle_second'>
              <img src={search_png} alt="" onClick={()=>handleSearch()} />
          </div>
          
          <div className='yt__navbar-right'>
              <img src={video_png} alt="" />
              <img src={app_png} alt="" />
              <img src={noti_png} alt="" />
              <img src={person_png} alt="" />
          </div>
          <div className='yt__navbar-right_drop'>
              <img src={dot_png} alt="" />
          </div>
          </>
        )
          : (
              <>
                  <div className='yt__navbar-search'>
                  <img src={close_png } alt="" onClick={()=>setSearch(false)}/>
                  <input type="text" placeholder='Search' />
                </div>
              </>
      )
    
    }
        
        
    </div>
  )
}

export default Navbar