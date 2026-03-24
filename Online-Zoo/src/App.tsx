import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Map from './pages/Map'
import Zoos from './pages/Zoos'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/zoos' element={<Zoos />} />
      </Routes>
    </div>
  )
}

export default App