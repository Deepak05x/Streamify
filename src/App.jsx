import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import { useState } from 'react'

const App = () => {

  const [sideBar, setSideBar] = useState(true)

  return (
    <div>
      <Navbar setSideBar={setSideBar}/>
      <Routes>
        <Route path='/' element={<Home sideBar={sideBar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App