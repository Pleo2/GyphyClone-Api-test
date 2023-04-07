import { useCallback, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import useGetAllGifsMainSeccion from 'app/hooks/useGetAllGifsMainSection'
import useNearScreen from 'app/hooks/useNearScreen'
import debounce from 'lodash.debounce'
import ListOfGifs from 'app/components/ListOfGifs'
import Spinner from 'app/components/Spinner'
import HomePageBanner from 'app/components/HomePageBanner'

export default function AllResultsMainSeccion ({ context, name }) {
  const { gifsData, loading, error, setPageNumber } = useGetAllGifsMainSeccion(context)
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
      <Helmet>
        <title>{`Giphy clone | ${name}`}</title>
      </Helmet>
      <HomePageBanner />
      <section className="trendingSeccion"></section>
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
    </>
  )
}
