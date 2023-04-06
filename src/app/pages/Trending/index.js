import { useCallback, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import useGetTrending from 'app/hooks/useGetTrending'
import useNearScreen from 'app/hooks/useNearScreen'
import debounce from 'lodash.debounce'
import ListOfGifs from 'app/components/ListOfGifs'
import Spinner from 'app/components/Spinner'
import HomePageBanner from 'app/components/HomePageBanner'

export default function Trending () {
  const inicialPage = 0
  const { gifsData, loading, error, setPage } = useGetTrending(inicialPage)
  const externalRef = useRef()

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 200),
    [setPage]
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      <Helmet>
        <title>Giphy clone | Trending</title>
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
