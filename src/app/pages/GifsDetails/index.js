import { useParams } from 'react-router-dom'
import useGetByIdGifs from 'app/hooks/useGetByIdGifs'
import './GifsDetail.css'
import { Helmet } from 'react-helmet'
import { HelmetProvider } from 'react-helmet-async'

export default function GifsDetails () {
  const { GifsId } = useParams()
  const { data } = useGetByIdGifs({ GifsId })

  return (
    <div className="container-gifs-details">
      <HelmetProvider>
        <Helmet>
          <title>{`Giphy Clone | ${data?.title}`}</title>
        </Helmet>
      </HelmetProvider>
      <p className="title--gifs-details">{data?.title}</p>
      <img
        className="img-gifs-details"
        src={data?.images?.original?.url}
        alt={data?.title}
      />
    </div>
  )
}
