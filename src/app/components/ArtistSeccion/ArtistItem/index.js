import React from 'react'
import { Link } from 'react-router-dom'

function ArtistItem ({
  sourceMainImg,
  sourceArtistAvatar,
  artistDisplayName,
  userName,
  id
}) {
  return (
    <div className="container-artist">
      <Link to={`/details/${id}`}>
        <img
          id={id}
          src={sourceMainImg}
          className="gif-artist"
          alt="trending-img"
        />
      </Link>
      <img
        src={sourceArtistAvatar}
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
