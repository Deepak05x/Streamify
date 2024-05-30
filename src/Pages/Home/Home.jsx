import React from 'react'
import './Home.css'
import SideBar from '../../components/Sidebar/SideBar'

const Home = ({sideBar}) => {
  return (
    <>
      <SideBar sideBar={sideBar} />
    </>
  )
}

export default Home