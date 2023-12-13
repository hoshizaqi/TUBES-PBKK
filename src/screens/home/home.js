import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Feed from '../feed/feed'
import Library from '../library/library'
import Trending from '../trending/trending'
import Player from '../player/player'
import Favorites from '../favorites/favorites'
import './home.css'
import Sidebar from '../../components/sidebar/sidebar'

export default function Home() {
  return (
    <Router>
        <div className="main-body">
        <Sidebar/>
        </div>
        <Routes>
            <Route path="/library" element={<Library/>} />
            <Route path="/feed" element={<Feed/>} />
            <Route path="/trending" element={<Trending/>} />
            <Route path="/player" element={<Player/>} />
            <Route path="/favorite" element={<Favorites/>}/>
        </Routes>
    </Router>
  )
}
