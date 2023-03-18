import React from "react";
import './TitleSeccions.css';

export default function TitleSeccions({pathSvg, title}) {
  return (
    <>
    <div className="container--title">
          <div className="container--left-tittle">
            <img
              src={`/images/${pathSvg}`}
              alt="trending-logo"
            />
            <h2 className="tittle-artist">{title}</h2>
          </div>
          <div className="container--to">
            <div className="container-buttons-pagination">
              <button>{'<'}</button>
              <button>{'>'}</button>
            </div>
            <a
              href="/"
              className="link-more-gifs"
            >
              {`All ${title} GIFs >`}
            </a>
          </div>
        </div>
    </>
  )
}