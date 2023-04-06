import React, { useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useNearScreen from 'app/hooks/useNearScreen'
import './ArtistItem.css'
function ArtistItem ({
  sourceMainImg,
  sourceArtistAvatar,
  artistDisplayName,
  userName,
  id
}) {
  const externalRef = useRef()
  const autorImg = useRef()

  const { isNearScreen } = useNearScreen({
    distance: '50px',
    externalRef: externalRef || null,
    once: false
  })

  const handleImgUrl = useCallback(() => {
    externalRef.current.src = sourceMainImg
    autorImg.current.src = sourceArtistAvatar
  }, [])

  useEffect(() => {
    if (isNearScreen) handleImgUrl()
  }, [
    isNearScreen
  ])

  return (
    <div className="container-artist">
      <Link to={`/details/${id}`}>
        <img
          id={id}
          src={''}
          className="gif-artist"
          alt="trending-img"
          ref={externalRef}
        />
      </Link>
      <img
        ref={autorImg}
        src={''}
        className="profile-artist"
        alt="profile-artist"
      />
      <div className="info-artist">
        <p className="user-displayname">{artistDisplayName}</p>
        <div className="container-username">
          <p className="username-artistSeccion">{`@${userName}`}</p>
          <img
            src={'/images/verified.svg'}
            alt="verfied-logo"
          />
        </div>
      </div>
    </div>
  )
}

export default React.memo(ArtistItem)
