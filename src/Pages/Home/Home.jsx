import React from 'react'
import './Home.css'
import SideBar from '../../components/Sidebar/SideBar'
import Feed from '../../components/Feed/Feed'

const Home = ({sideBar}) => {
  return (
    <>
      <SideBar sideBar={sideBar} />
      <div className={`yt__container ${sideBar ? ' ' : " yt__large-container"}`}>
        <Feed />
      </div>
      
    </>
  )
}

export default Home