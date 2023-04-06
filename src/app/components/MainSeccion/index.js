import { useEffect, useContext } from 'react'
import TrendingSeccion from 'app/components/TrendingSeccion'
import ArtistSeccion from 'app/components/ArtistSeccion'
import useGetTrending from 'app/hooks/useGetTrending'
import GifsContext from 'app/context/GifsContext'

export default function MainSeccion () {
  const { gifsData, loading, error, handleCancelRequest } = useGetTrending()
  const { setState: { setTrendingContext, setArtistsContext } } = useContext(GifsContext)

  useEffect(() => {
    if (!loading) {
      setTrendingContext(gifsData)
      setArtistsContext(gifsData?.slice(25, gifsData.length - 1))
    }
  }, [])

  return (
    <>
      <TrendingSeccion
        data={gifsData}
        loading={loading}
        error={error}
        handleCancelRequest={handleCancelRequest}
      />

      <ArtistSeccion
        data={gifsData}
        loading={loading}
        error={error}
        handleCancelRequest={handleCancelRequest}
      />
    </>
  )
}
