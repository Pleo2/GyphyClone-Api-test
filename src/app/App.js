import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home/index.js'
import SearchInput from './components/SearchInput'
import SearchResults from './pages/SearchResults'
import Clips from './pages/Clips'
import GifsDetails from './pages/GifsDetails'
import AllResultsMainSection from './pages/AllResultsMainSection'
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
                element={<AllResultsMainSection
                    context={'gifsTrendingContext'}
                    name={'trending gifs'}
                  />}
              ></Route>
              <Route
                path="/artists"
                element={<AllResultsMainSection
                  context={'gifsArtistsContext'}
                  name={'artists gifs'}
                />}
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
