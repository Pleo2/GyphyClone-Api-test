import React from 'react'
import Spinner from 'app/components/Spinner'
import { useParams } from 'react-router-dom'
import useGetByIdGifs from 'app/hooks/useGetByIdGifs'
import './GifsDetail.css'
import { Helmet } from 'react-helmet'

export default function GifsDetails () {
  const { GifsId } = useParams()
  const { data, loading } = useGetByIdGifs({ GifsId })
  return (
    <div className="container-gifs-details">
      {loading
        ? (
          <>
          <Helmet>
            <title>{'Loading...'}</title>
          </Helmet>
          <Spinner />
          </>
          )
        : (
            <>
              <Helmet>
                <title>{`Giphy Clone | ${data?.title}`}</title>
              </Helmet>
              <p className="title--gifs-details">{data?.title}</p>
              <img
                className="img-gifs-details"
                src={data?.images?.original?.url}
                alt={data?.title}
              />
            </>
          )
      }
    </div>
  )
}
