import React from 'react'
import './RightClipsSection.css'

const IMAGE_AVATAR_SCALE = '/80h'

function RightClipsSection ({ data }) {
  const getAvatar = (clips, index) => {
    if (Array.isArray(clips)) {
      const ImgUrl = clips?.[index]?.autor?.autorImgUrl
      const typeUrl = clips?.[index]?.autor?.typeAutorImgUrl
      const avatarURl = `${ImgUrl}${IMAGE_AVATAR_SCALE}${typeUrl}`
      return avatarURl
    } else {
      return 'this clips are not array'
    }
  }

  const avatar1 = getAvatar(data, 1)
  const avatar2 = getAvatar(data, 2)

  return (
    <>
      <div className="container-right--seccion">
        <div className="container-right-img--clips">
          <img
            src={data?.[1]?.url}
            alt={'main-img'}
          />
          <p className="p-right-1">{data?.[1]?.title}</p>
          <div className="container-username--clips">
            <img
              className="logo-artist-clips"
              src={avatar1}
              alt={'logo-artist'}
            />
            <p>{data?.[1]?.autor?.userName}</p>
            <img
              className="logo-artist-verifed"
              src={'/images/verified.svg'}
              alt="verfied-logo"
            />
          </div>
        </div>
        <div className="container-right-img--clips">
          <img
            className="img-2-right"
            src={data?.[2]?.url}
            alt={'main-img'}
          />
          <p>{data?.[2]?.title}</p>
          <div className="container-username--clips">
            <img
              className="logo-artist-clips"
              src={avatar2}
              alt={'logo-artist'}
            />
            <p>{data?.[2]?.autor?.userName}</p>
            <img
              className="logo-artist-verifed"
              src={'/images/verified.svg'}
              alt="verfied-logo"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(RightClipsSection)
