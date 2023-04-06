import React, { useCallback, useEffect, useRef, useState } from 'react'
import useNearScreen from 'app/hooks/useNearScreen'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce'
import './TrendingImg.css'

function TrendingImg ({ source, title, id }) {
  const [urlImg, setUrlImg] = useState('')
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    distance: '50px',
    externalRef: externalRef || null,
    once: false
  })

  const handleImgUrl = useCallback(
    debounce(() => { setUrlImg(source) }, 200),
    [setUrlImg]
  )

  useEffect(() => {
    if (isNearScreen) handleImgUrl()
  }, [isNearScreen, handleImgUrl])

  return (
    <div className="Gifs-trending">
      <Link
        to={`/details/${id}`}
        className="Gif-link"
      >
        <img
          ref={externalRef}
          className="gif-trending"
          id={id}
          src={urlImg}
          alt={title}
        />
      </Link>
    </div>
  )
}

export default React.memo(TrendingImg)
