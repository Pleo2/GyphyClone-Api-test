import { useState, useEffect } from 'react'
import getStories from 'app/services/getStories'

const INITIAL_DAY = new Date()

export default function useGetStorie () {
  const [stories, setStories] = useState([{}])
  const [day, setDay] = useState(INITIAL_DAY)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingNextDay, setLoadingNextDay] = useState(true)

  useEffect(
    function () {
      setLoading(true)
      getStories()
        .then(story => {
          setStories(story)
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
    []
  )

  useEffect(() => {
    if (day === INITIAL_DAY) return
    setLoadingNextDay(true)
    getStories({ day })
      .then(nextStories => {
        setStories(preStories => preStories.concat(nextStories))
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Cancelled request')
        } else {
          setError(error)
        }
      })
      .finally(setLoadingNextDay(false))
  }, [day, setStories])

  return {
    stories,
    loading,
    loadingNextDay,
    error,
    setDay
  }
}
