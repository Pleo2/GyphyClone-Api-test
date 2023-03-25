import { useState } from 'react';
import Spiner from '../Spiner';
import ButtonsSliders from '../ButtonsSliders';
import TitleSeccions from '../TitleSeccions';
import './ArtistSeccion.css';

export default function ArtistSeccion({
  data,
  loading,
  error,
}) {
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
                  <div
                    key={`${index}${artist?.id}`}
                    className="container-artist"
                  >
                    <img
                      key={`${artist?.id}`}
                      src={artist?.images?.original?.url}
                      className="gif-artist"
                      alt="trending-img"
                    />
                    <img
                      key={`${artist?.id}${artist?.username}`}
                      src={artist?.user?.avatar_url}
                      className="profile-artist"
                      alt="profile-artist"
                    />
                    <div className="info-artist">
                      <p className="user-displayname">
                        {artist?.user?.display_name}
                      </p>
                      <div className="container-username">
                        <p className="username-artistSeccion">{`@${artist?.username}`}</p>
                        <img
                          src={'/images/verified.svg'}
                          alt="verfied-logo"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      )}
    </>
  );
}
