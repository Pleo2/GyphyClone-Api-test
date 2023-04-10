import { useState, useContext, useEffect } from 'react'
import getTrending from 'app/services/getTrending'
import GifsContext from 'app/context/GifsContext'

export default function useGetMainSection () {
  const [gifsData, setGifsData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { setState: { setTrendingContext, setArtistsContext } } = useContext(GifsContext)

  useEffect(() => {
    setGifsData(null)
    setLoading(true)
    getTrending({ limit: 50 })
      .then(gifs => {
        setGifsData(gifs)
        setTrendingContext(gifs)
        setArtistsContext(gifs?.slice(25, gifs?.length - 1))
      })
      .catch(error =>
        error.name === 'AbortError'
          ? console.log('cancelled request')
          : setError(error)
      )
      .finally(setLoading(false))
  }, [])
  return {
    gifsData,
    loading,
    error
  }
}
