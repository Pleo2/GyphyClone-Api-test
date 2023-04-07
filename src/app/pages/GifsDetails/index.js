import Spiner from 'app/components/Spiner'
import { useParams } from 'react-router-dom'
import useGetByIdGifs from 'app/hooks/useGetByIdGifs'
import './GifsDetail.css'

export default function GifsDetails () {
  const { GifsId } = useParams()
  const { data, loading, error } = useGetByIdGifs({ GifsId })
  return (
    <>
      {loading && <Spiner />}
      {!loading && !error && (
        <div className="container-gifs-details">
          <p className="title--gifs-details">{data?.title}</p>
          <img
            className="img-gifs-details"
            src={data?.images?.original?.url}
            alt={data?.title}
          />
        </div>
      )}
    </>
  )
}
