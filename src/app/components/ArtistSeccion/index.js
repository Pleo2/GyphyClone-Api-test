import React from 'react';
import TitleSeccions from '../TitleSeccions';
import './ArtistSeccion.css';

export default function ArtistSeccion({
  data,
  loading,
  error,
  handleCancelRequest,
}) {
  const lengthData = data.length;
  return (
    <>
      <section className="container-artistSeccion">
        <TitleSeccions
          pathSvg={'/artists.svg'}
          title={'Artists'}
        />
        <div className="container-gifs-artistSeccion">
          {data
            ?.slice(15, lengthData)
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
                    <p className='user-displayname'>{artist?.user?.display_name}</p>
                    <div className="container-username">
                      <p>{`@${artist?.username}`}</p>
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
    </>
  );
}