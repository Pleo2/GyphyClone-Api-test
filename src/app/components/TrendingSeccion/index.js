import React from 'react';
import TitleSeccions from '../TitleSeccions';
import './TrendingSeccion.css';

export default function TrendingSeccion({
  data,
  loading,
  error,
  handleCancelRequest,
}) {
  return (
    <>
      <section 
        className="container-trendingSeccion"
        key={'trending-seccion'}  
      >
        <TitleSeccions
          pathSvg={'/trending.svg'}
          title={'Trending'}
        />
        <div className="container-gifs-trendingSeccion">
          {data?.map((item, index) => {
            return (
              <img
                key={index}
                className="gif-trending"
                src={item?.images?.preview_webp?.url}
                alt={item?.title}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
