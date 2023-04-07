import { useState } from 'react'
import ButtonsSliders from '../ButtonsSliders'
import TitleSections from '../TitleSections'
import ArtistItem from './ArtistItem'
import './ArtistSection.css'

const IMAGE_AVATAR_SCALE = '/80h'

export default function ArtistSeccion ({ data }) {
  const [sliderIndexArtist, setSliderIndexArtist] = useState(0)
  return (
    <>
      <section className="container-artistSeccion">
        <TitleSections
          pathSvg={'/artists.svg'}
          title={'Artists'}
          toName={'GIPHY Artists'}
        />

        <ButtonsSliders
          key={'button-Artist'}
          sliderIndex={sliderIndexArtist}
          setSliderIndex={setSliderIndexArtist}
        />
        <div
          className="container-gifs-artistSeccion"
          style={{
            transform: `translateX(calc(${sliderIndexArtist} * -100%))`,
            transition: 'transform 550ms ease-in-out'
          }}
        >
          {data
            ?.filter(item => item?.autor?.isVerified)
            ?.map((artist, index) => {
              return (
                <ArtistItem
                  id={artist?.id}
                  key={`${artist?.id}${index}`}
                  sourceMainImg={artist?.urlArtistGif}
                  sourceArtistAvatar={`${artist?.autor?.autorImgUrl}${IMAGE_AVATAR_SCALE}${artist?.autor?.typeAutorImgUrl}`}
                  userName={artist?.autor?.userName}
                />
              )
            })}
        </div>
      </section>
     )
    </>
  )
}
