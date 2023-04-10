import { useState, useEffect } from 'react'
import getTrendingSearches from 'app/services/getTrendingSearches'

export default function useGetTrendingData () {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    setData(null)
    setLoading(true)
    getTrendingSearches()
      .then(gifs => {
        setData(gifs)
      })
      .catch(error =>
        error.name === 'AbortError'
          ? console.log('cancelled request')
          : setError(error)
      )
      .finally(setLoading(false))
  }, [])
  return {
    data,
    loading,
    error
  }
}
