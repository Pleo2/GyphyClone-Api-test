import React, { useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useNearScreen from 'app/hooks/useNearScreen'
import './Item.css'

function Item ({ gif, dataSrc, id }) {
  const externalRef = useRef()

  const { isNearScreen } = useNearScreen({
    distance: '100px',
    externalRef: externalRef || null,
    once: false
  })

  const handleImgUrl = useCallback(() => {
    externalRef.current.src = dataSrc
  }, [])

  useEffect(() => {
    if (isNearScreen) handleImgUrl()
  }, [isNearScreen])

  return (
    <>
      <div className="gif">
        <Link
          to={`/details/${id}`}
          className="Gif-link"
        >
          <img
            ref={externalRef}
            className="item-list-gifs"
            src={''}
            alt={gif}
          />
        </Link>
      </div>
    </>
  )
}

export default React.memo(Item)
