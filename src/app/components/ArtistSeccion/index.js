import { useState } from 'react';
import Spiner from '../Spiner';
import ButtonsSliders from '../ButtonsSliders';
import TitleSeccions from '../TitleSeccions';
import './ArtistSeccion.css';
import ArtistItem from './ArtistItem';

export default function ArtistSeccion({ data, loading, error }) {
  const [sliderIndexArtist, setSliderIndexArtist] = useState(0);
  const lengthData = data.length;
  return (
    <>
      {loading && !error ? (
        <Spiner />
      ) : (
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
              transition: 'transform 550ms ease-in-out',
            }}
          >
            {data
              ?.slice(25, lengthData)
              ?.filter((item) => item?.user?.is_verified)
              ?.map((artist, index) => {
                return (
                  <ArtistItem
                    id={artist?.id}
                    key={artist?.id}
                    sourceMainImg={artist?.images?.original?.url}
                    sourceArtistAvatar={artist?.user?.avatar_url}
                    userName={artist?.username}
                  />
                );
              })}
          </div>
        </section>
      )}
    </>
  );
}
