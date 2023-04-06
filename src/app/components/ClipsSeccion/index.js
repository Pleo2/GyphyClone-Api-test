import React, { useContext, useEffect } from 'react'
import useGetClips from 'app/hooks/useGetClips'
import Spiner from '../Spinner'
import TitleSeccions from '../TitleSeccions'
import MainClipSeccion from './MainClipSeccion'
import RightClipsSeccion from './RightClipsSeccion'
import GifsContext from 'app/context/GifsContext'
import './ClipsSeccion.css'

const IMAGE_AVATAR_SCALE = '/80h'

function ClipsSeccion () {
  const { clipsData, loading, error } = useGetClips()
  const { setState: { setClipsContext } } = useContext(GifsContext)

  useEffect(() => {
    if (!loading) {
      setClipsContext(clipsData)
    }
  }, [])

  const avatarUrlMain = `${clipsData[0]?.autor?.autorImgUrl}${IMAGE_AVATAR_SCALE}${
    clipsData[0]?.autor?.typeAutorImgUrl
  }`

  return (
    <>
      {loading && !error
        ? <Spiner />
        : (
        <section className="container-clipsSeccion">
          <TitleSeccions
            pathSvg={'/clips.svg'}
            title={'Clips'}
            toName={'Clips'}
          />
          <div className="container-gifs-clipsSeccion">
            <MainClipSeccion
              sourceImg={clipsData[0]?.url}
              title={clipsData[0]?.title}
              autorImg={avatarUrlMain}
              userName={clipsData[0]?.autor?.userName}
            />
            <RightClipsSeccion
              data={clipsData}
            />
              </div>
            </section>
          )}
    </>
  )
}

export default React.memo(ClipsSeccion)
