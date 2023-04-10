import { useContext, useEffect, useState } from 'react'
import GifsContext from 'app/context/GifsContext'
import getClips from 'app/services/getClips'

const BASE_PAGE = 0
const BASE_OFFSET_API = 50
const BASE_LIMIT_FETCH = 50

export default function useGetAllGifsCilpsSection () {
  const [gifsData, setGifsData] = useState(null)
  const [pageNumber, setPageNumber] = useState(BASE_PAGE)
  const [limitFetch, setLimitFetch] = useState(BASE_LIMIT_FETCH)
  const [offsetData, setOffsetData] = useState(BASE_OFFSET_API)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(true)

  const { state } = useContext(GifsContext)

  useEffect(() => {
    if (state.gifsClipsContext === null) {
      setLoading(true)
      setGifsData(null)
      setLimitFetch(50)
      getClips({ limit: limitFetch })
        .then(gifs => setGifsData(gifs))
        .catch(error =>
          error.name === 'AbortError'
            ? console.log('cancelled request')
            : setError(error)
        )
        .finally(setLoading(false))
    } else {
      setGifsData(state?.gifsClipsContext)
    }
  }, [])

  useEffect(() => {
    if (pageNumber === BASE_PAGE) return
    setLoadingNextPage(true)
    getClips({ page: pageNumber, limit: 10, offset: offsetData })
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
  }, [pageNumber])

  return {
    gifsData,
    loading,
    loadingNextPage,
    error,
    setPageNumber
  }
}
