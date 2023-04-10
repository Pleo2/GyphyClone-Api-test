import useGetTrendingData from 'app/hooks/useGetTrendingData'
import { Link } from 'react-router-dom'
import './TrendingSearchSection.css'

export default function TrendingSearchSection () {
  const { data, error, loading } = useGetTrendingData()
  return (
    <div className="container-items--trending-search">
      {!loading &&
        !error &&
        data?.map((item, index) => {
          return (
            <div
              className="container-item-search"
              key={`${index}${item}`}
            >
              <Link to={`/search/${item}`}>
                {item}
              </Link>
            </div>
          )
        })}
    </div>
  )
}
