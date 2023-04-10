import { useCallback, useEffect, useRef } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import useGetAllGifsCilpsSection from 'app/hooks/useGetAllGifsClipsSection'
import useNearScreen from 'app/hooks/useNearScreen'
import debounce from 'lodash.debounce'
import ListOfGifs from 'app/components/ListOfGifs'
import Spinner from 'app/components/Spinner'
import HomePageBanner from 'app/components/HomePageBanner'
import TrendingSearchSection from 'app/components/TrendingSearchSection'

export default function AllResultsMainSeccion ({ name }) {
  const { gifsData, loading, error, setPageNumber } = useGetAllGifsCilpsSection()
  const externalRef = useRef()

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(
    debounce(() => setPageNumber(prevPage => prevPage + 1), 200),
    [setPageNumber]
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{`Giphy clone | ${name}`}</title>
        </Helmet>
      <TrendingSearchSection/>
      <HomePageBanner />
      <ListOfGifs
        data={gifsData}
        loading={loading}
        error={error}
        />
      <Spinner />
      <div
        className="visor"
        ref={externalRef}
        ></div>
      </HelmetProvider>
    </>
  )
}
