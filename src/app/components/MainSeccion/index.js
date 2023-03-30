import TrendingSeccion from 'app/components/TrendingSeccion'
import ArtistSeccion from 'app/components/ArtistSeccion'
import useGetTrending from 'app/hooks/useGetTrending'

export default function MainSeccion () {
  const { data, loading, error, handleCancelRequest } = useGetTrending()
  return (
    <>
      <TrendingSeccion
        data={data}
        loading={loading}
        error={error}
        handleCancelRequest={handleCancelRequest}
      />

      <ArtistSeccion
        data={data}
        loading={loading}
        error={error}
        handleCancelRequest={handleCancelRequest}
      />
    </>
  )
}
