import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home/index.js'
import SearchInput from './components/SearchInput'
import SearchResults from './pages/SearchResults'
import Trending from './pages/Trending'
import Artists from './pages/Artists'
import Clips from './pages/Clips'
import GifsDetails from './pages/GifsDetails'
import { GifsProvider } from './context/GifsContext'
import './App.css'

function App () {
  return (
    <>
      <div className="container-app">
        <GifsProvider>
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
                path="/trending"
                element={<Trending />}
              ></Route>
              <Route
                path="/artists"
                element={<Artists />}
              ></Route>
              <Route
                path="/clips"
                element={<Clips />}
              ></Route>
              <Route
                path="/details/:GifsId"
                element={<GifsDetails />}
              ></Route>
              <Route
                path="/404"
                element={<h1>Error 404</h1>}
              ></Route>
            </Routes>
          </HashRouter>
        </GifsProvider>
      </div>
    </>
  )
}

export default App
