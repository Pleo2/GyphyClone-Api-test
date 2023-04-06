import { useState, useEffect } from 'react'
import getGifs from 'app/services/getGifs'

const INITIAL_PAGE = 0

export default function useGetGifs ({ keyword }) {
  const [gifs, setGifs] = useState([{}])
  const [page, setPage] = useState(INITIAL_PAGE)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(true)

  useEffect(
    function () {
      setLoading(true)
      getGifs({ keyword })
        .then(gifs => {
          setGifs(gifs)
          // look the last search in a new feacture, status:pending...
          localStorage.setItem('lastKeyword', keyword)
        })
        .catch(error => {
          if (error.name === 'AbortError') {
            console.log('Cancelled request')
          } else {
            setError(error)
          }
        })
        .finally(setLoading(false))
    },
    [keyword, setGifs]
  )

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ limit: 25, keyword, page })
      .then(nextGifs => {
        setGifs(preGifs => preGifs.concat(nextGifs))
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Cancelled request')
        } else {
          setError(error)
        }
      })
      .finally(setLoadingNextPage(false))
  }, [keyword, page])

  return {
    gifs,
    loading,
    loadingNextPage,
    error,
    setPage
  }
}
