import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header () {
  return (
    <header>
      <nav>
        <Link
          to="/"
          className="nav--logo"
        >
          <img
            src="https://developers.giphy.com/branch/master/static/header-logo-0fec0225d189bc0eae27dac3e3770582.gif"
            alt="logo"
          />
        </Link>

        <div className="container--Link">
          <Link to="/search/reactions">Reactions</Link>
          <Link to="/search/entertainment">Entertainment</Link>
          <Link to="/search/sports">Sports</Link>
          <Link to="/search/stickers">Stickers</Link>
          <Link to="/search/artists">Artists</Link>
          <Link to="/search/random">...</Link>
        </div>

        <div className="container--buttons">
          <button className="button-up">
            <Link to="/upload">Upload</Link>
          </button>
          <button className="button-create">
            <Link to="/create">Create</Link>
          </button>
        </div>

        <div className="container--perfil">
          <img
            className="img--perfil"
            src="https://media.giphy.com/avatars/default5/80h.gif"
            alt="ojos"
          />
          <span>Pleo2</span>
          <span>{'>'}</span>
        </div>
      </nav>
    </header>
  )
}
