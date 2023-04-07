import { useState } from 'react'
import Spinner from '../Spinner'
import TitleSections from '../TitleSections'
import ButtonsSliders from '../ButtonsSliders/index'
import './TrendingSection.css'
import TrendingImg from './TrendingImg'

export default function TrendingSection ({ data, loading, error }) {
  const [sliderIndex, setSliderIndex] = useState(0)

  return (
    <>
      <section
        className="container-trendingSeccion"
        key={'trending-seccion'}
      >
        <TitleSections
          pathSvg={'/trending.svg'}
          title={'Trending'}
          toName={'The GIFs'}
        />
        <ButtonsSliders
          key={'button-trending'}
          sliderIndex={sliderIndex}
          setSliderIndex={setSliderIndex}
        />
        <div
          className="container-gifs-trendingSeccion"
          style={{
            transform: `translateX(calc(${sliderIndex} * -100%))`,
            transition: 'transform 550ms ease-in-out'
          }}
          >
          {(loading && !error)
            ? (
              <Spinner />
              )
            : (
                // TODO: create filter for repeat items
                data?.slice(0, 25)?.map((item, index) => {
                  return (
                    <TrendingImg
                      key={`${item?.id}${index}`}
                      id={item?.id}
                      index={index}
                      className="gif-trending"
                      source={item?.url}
                      title={item?.title}
                      />
                  )
                })
              )
          }
        </div>
      </section>
    </>
  )
}
