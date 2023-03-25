import { useState } from 'react';
import Spiner from '../Spiner';
import TitleSeccions from '../TitleSeccions';
import ButtonsSliders from '../ButtonsSliders/index';
import './TrendingSeccion.css';

export default function TrendingSeccion({ data, loading, error }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  return (
    <>
      {loading && !error ? (
        <Spiner />
      ) : (
        <section
          className="container-trendingSeccion"
          key={'trending-seccion'}
        >
          <TitleSeccions
            pathSvg={'/trending.svg'}
            title={'Trending'}
            toName={'The GIFs'}
          />
          <ButtonsSliders
            sliderIndex={sliderIndex}
            setSliderIndex={setSliderIndex}
          />
          <div
            className="container-gifs-trendingSeccion"
            style={{
              transform: `translateX(calc(${sliderIndex} * -100%))`,
              transition: 'transform 550ms ease-in-out',
            }}
          >
            {data?.slice(0, 25)?.map((item, index) => {
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
      )}
    </>
  );
}
