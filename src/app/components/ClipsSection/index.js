import React, { useContext, useEffect } from 'react'
import useGetClips from 'app/hooks/useGetClips'
import Spiner from '../Spinner'
import TitleSections from '../TitleSections'
import MainClipSection from './MainClipSection'
import RightClipsSection from './RightClipsSection'
import GifsContext from 'app/context/GifsContext'
import './ClipsSection.css'

const IMAGE_AVATAR_SCALE = '/80h'

function ClipsSection () {
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
          <TitleSections
            pathSvg={'/clips.svg'}
            title={'Clips'}
            toName={'Clips'}
          />
          <div className="container-gifs-clipsSeccion">
            <MainClipSection
              sourceImg={clipsData[0]?.url}
              title={clipsData[0]?.title}
              autorImg={avatarUrlMain}
              userName={clipsData[0]?.autor?.userName}
            />
            <RightClipsSection
              data={clipsData}
            />
              </div>
            </section>
          )}
    </>
  )
}

export default React.memo(ClipsSection)
