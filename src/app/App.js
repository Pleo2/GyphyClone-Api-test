import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index.js'
import Header from './components/Header'
import SearchInput from './components/SearchInput'
import SearchResults from './pages/SearchResults'
import Trending from './pages/Trending'
import Artists from './pages/Artists'
import './App.css'
import GifsDetails from './pages/GifsDetails/index.js'

function App () {
  return (
    <>
      <div className="container-app">
        <HashRouter>
          <Header />
          <SearchInput placeholder="Write here" />
          <Routes>
            <Route
              index
              element={<Home />}
            ></Route>
            <Route
              path="/search/:keyword"
              element={<SearchResults />}
            ></Route>
            <Route
              path="/Trending"
              element={<Trending />}
            ></Route>
            <Route
              path="/details/:GifsId"
              element={<GifsDetails />}
            ></Route>
            <Route
              path="/Artists"
              element={<Artists />}
            ></Route>
            <Route
              path="/404"
              element={<h1>Error 404</h1>}
            ></Route>
          </Routes>
        </HashRouter>
      </div>
    </>
  )
}

export default App
