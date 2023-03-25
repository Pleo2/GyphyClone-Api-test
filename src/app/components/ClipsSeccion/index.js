import React from 'react';
import useGetClips from 'app/hooks/useGetClips';
import Spiner from '../Spiner';
import TitleSeccions from '../TitleSeccions';
import './ClipsSeccion.css';

export default function ClipsSeccion() {
  const { data, loading, error } = useGetClips();
  return (
    <>
      {loading && !error ? <Spiner /> : (
      <section className="container-clipsSeccion">
        <TitleSeccions
          pathSvg={'/clips.svg'}
          title={'Clips'}
          toName={'Clips'}
        />
        <div className="container-gifs-clipsSeccion">
          <div className="main-clip">
            <img
              src={data[0]?.images?.original?.url}
              alt={'main-img'}
            />
            <p>{data[0]?.title}</p>
            <div className="container-username--clips">
              <img
                className='logo-artist-clips'
                src={data[0]?.user.avatar_url}
                alt={'logo-artist'}
              />
              <p>{data[0]?.username}</p>
              <img
                className='logo-artist-verifed'
                src={'/images/verified.svg'}
                alt="verfied-logo"
              />
            </div>
          </div>
          <div className="container-right--seccion">
            <div className="container-right-img--clips">
              <img
                src={data[1]?.images?.original?.url}
                alt={'main-img'}
              />
              <p className='p-right-1'>{data[1]?.title}</p>
              <div className="container-username--clips">
              <img
                className='logo-artist-clips'
                src={data[1]?.user.avatar_url}
                alt={'logo-artist'}
              />
              <p>{data[1]?.username}</p>
              <img
                className='logo-artist-verifed'
                src={'/images/verified.svg'}
                alt="verfied-logo"
              />
            </div>
            </div>
            <div className="container-right-img--clips">
              <img
                className='img-2-right'
                src={data[2]?.images?.original?.url}
                alt={'main-img'}
              />
              <p>{data[2]?.title}</p>
              <div className="container-username--clips">
              <img
                className='logo-artist-clips'
                src={data[2]?.user.avatar_url}
                alt={'logo-artist'}
              />
              <p>{data[2]?.username}</p>
              <img
                className='logo-artist-verifed'
                src={'/images/verified.svg'}
                alt="verfied-logo"
              />
            </div>
            </div>
          </div>
        </div>
      </section>

      ) }
    </>
  );
}
