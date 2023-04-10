import { useState, useContext, useEffect } from 'react'
import GifsContext from 'app/context/GifsContext'
import getClips from 'app/services/getClips'

export default function useGetMainSection () {
  const [clipsData, setCilpsData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { setState: { setClipsContext } } = useContext(GifsContext)

  useEffect(() => {
    setCilpsData(null)
    setLoading(true)
    getClips({ limit: 50 })
      .then(gifs => {
        setCilpsData(gifs?.filter(item => item?.autor?.isVerified))
        setClipsContext(gifs?.filter(item => item?.autor?.isVerified))
      })
      .catch(error =>
        error.name === 'AbortError'
          ? console.log('cancelled request')
          : setError(error)
      )
      .finally(setLoading(false))
  }, [])
  return {
    clipsData,
    loading,
    error
  }
}
