import React from 'react'
import { Link } from 'react-router-dom'
import './TitleSections.css'

function TitleSections ({ pathSvg, title, toName }) {
  return (
    <>
      <div className="container--title">
        <div className="container--left-tittle">
          {pathSvg && (
            <img
              src={`/images/${pathSvg}`}
              alt="trending-logo"
            />
          )}
          <h2 className="title">{title}</h2>
        </div>
        {toName && (
          <div className="container--to">
            <Link
              to={`/${title}`}
              className="link-more-gifs"
            >
              {`All ${toName}>`}
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default React.memo(TitleSections)
