import React from 'react'
import './MainClipSection.css'

function MainClipSection ({
  sourceImg,
  title,
  autorImg,
  userName
}) {
  return (
    <div className="main-clip">
      <img
        src={sourceImg}
        alt={'main-img'}
      />
      <p>{title}</p>
      <div className="container-username--clips">
        <img
          className="logo-artist-clips"
          src={autorImg}
          alt={'logo-artist'}
        />
        <p>{userName}</p>
        <img
          className="logo-artist-verifed"
          src={'/images/verified.svg'}
          alt="verfied-logo"
        />
      </div>
    </div>
  )
}

export default React.memo(MainClipSection)
