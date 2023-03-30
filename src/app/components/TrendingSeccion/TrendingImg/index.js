import React from 'react'
import { Link } from 'react-router-dom'
import './TrendingImg.css'

function TrendingImg ({ source, title, id }) {
  return (
    <div className="Gifs-trending">
      <Link
        to={`/details/${id}`}
        className="Gif-link"
      >
        <img
          className="gif-trending"
          id={id}
          src={source}
          alt={title}
        />
      </Link>
    </div>
  )
}

export default React.memo(TrendingImg)
