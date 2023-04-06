import { useState } from 'react'
import ButtonsSliders from '../ButtonsSliders'
import TitleSeccions from '../TitleSeccions'
import ArtistItem from './ArtistItem'
import './ArtistSeccion.css'

const IMAGE_AVATAR_SCALE = '/80h'

export default function ArtistSeccion ({ data }) {
  const [sliderIndexArtist, setSliderIndexArtist] = useState(0)
  return (
    <>
      <section className="container-artistSeccion">
        <TitleSeccions
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
            ?.slice(25, data?.length - 1)
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
