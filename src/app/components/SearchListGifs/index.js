import { useCallback, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import useSearchGifs from 'app/hooks/useSearchGifs'
import Spinner from '../Spinner'
import ListOfGifs from '../ListOfGifs'
import useNearScreen from 'app/hooks/useNearScreen'
import debounce from 'lodash.debounce'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function SearchListGifs () {
  const { keyword } = useParams()
  const { gifs, loading, error, setPage } = useSearchGifs({ keyword })

  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            {`Giphy clone | ${keyword}`}
          </title>
        </Helmet>
      </HelmetProvider>
      <ListOfGifs
        data={gifs}
        loading={loading}
        error={error}
      />
      <Spinner/>
      <div
        className="visor"
        ref={externalRef}
      ></div>
    </>
  )
}
