import React from 'react'
import './Home.css'
import SideBar from '../../components/Sidebar/SideBar'
import Feed from '../../components/Feed/Feed'
import { useState } from 'react'

const Home = ({sideBar}) => {

  const [category, setCategory] = useState(0)

  return (
    <>
      <SideBar sideBar={sideBar} category={category} setCategory={setCategory} />
      <div className={`yt__container ${sideBar ? ' ' : " yt__large-container"}`}>
        <Feed category={category}/>
      </div>
      
    </>
  )
}

export default Home