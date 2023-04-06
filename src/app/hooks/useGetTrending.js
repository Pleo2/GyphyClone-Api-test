import { useContext, useEffect, useState } from 'react'
import GifsContext from 'app/context/GifsContext'
import getTrending from 'app/services/getTrending'

const BASE_PAGE = 0
const BASE_OFFSET_API = 50
const BASE_LIMIT_FETCH = 50

export default function useGetTrending (incialPage) {
  const [gifsData, setGifsData] = useState(null)
  const [page, setPage] = useState(BASE_PAGE)
  const [limitFetch, setLimitFetch] = useState(BASE_LIMIT_FETCH)
  const [offsetData, setOffsetData] = useState(BASE_OFFSET_API)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(true)

  const {
    state: { gifsTrendingContext }
  } = useContext(GifsContext)

  useEffect(() => {
    if (!Array.isArray(gifsTrendingContext)) {
      setGifsData(null)
      setLimitFetch(50)
      getTrending({ limit: limitFetch, page: incialPage })
        .then(gifs => setGifsData(gifs))
        .catch(error =>
          error.name === 'AbortError'
            ? console.log('cancelled request')
            : setError(error)
        )
        .finally(setLoading(false))
    } else {
      setGifsData(gifsTrendingContext)
    }
  }, [])

  useEffect(() => {
    if (page === BASE_PAGE) return
    setLoadingNextPage(true)
    getTrending({ page, limit: 10, offset: offsetData })
      .then(nextGifs => {
        setGifsData(prevGifs => prevGifs?.concat(nextGifs))
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Cancelled request')
        } else {
          setError(error)
        }
      })
      .finally(setLoadingNextPage(false))
    setOffsetData(prevOffSet => prevOffSet + 10)
    console.log(gifsData)
  }, [page])

  return {
    gifsData,
    loading,
    loadingNextPage,
    error,
    setPage
  }
}
