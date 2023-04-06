import React from 'react'
import { Link } from 'react-router-dom'

import './Item.css'

function Item ({ gif, dataSrc, id }) {
  return (
    <>
      <div className="gif">
        <Link
          to={`/details/${id}`}
          className="Gif-link"
        >
          <img
            className="item-list-gifs"
            src={dataSrc}
            alt={gif}
          />
        </Link>
      </div>
    </>
  )
}

export default React.memo(Item)
