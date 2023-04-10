import useGetGifsMainSection from 'app/hooks/useGetGifsMainSection'
import TrendingSeccion from 'app/components/TrendingSection'
import ArtistSeccion from 'app/components/ArtistSection'
import Spinner from '../Spinner'

export default function MainSection () {
  const { gifsData, loading, error } = useGetGifsMainSection()
  return (
    <>
      {loading && !error
        ? <Spinner/>
        : (
        <>
        <TrendingSeccion data={gifsData} />
        <ArtistSeccion data={gifsData?.slice(25, gifsData?.length - 1)} />
        </>
          )}
    </>
  )
}
