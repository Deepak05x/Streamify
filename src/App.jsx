import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import { useState, useEffect } from 'react'

const App = () => {

  const [sideBar, setSideBar] = useState(false)


  return (
    <div>
      <Navbar setSideBar={setSideBar} sideBar={sideBar}/>
      <Routes>
        <Route path='/' element={<Home sideBar={sideBar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App