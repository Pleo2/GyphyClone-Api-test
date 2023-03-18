import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.js'
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import SearchResults from './pages/SearchResults'
import './App.css';

function App() {
  return (
    <>
      <div className="container-app">
        
        <HashRouter>
          <Header />
          <SearchInput placeholder="Write here" />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search/:keyboard' element={<SearchResults  />}></Route>
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
