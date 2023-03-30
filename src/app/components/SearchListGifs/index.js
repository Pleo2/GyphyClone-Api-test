import { useCallback, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useSearchGifs from 'app/hooks/useSearchGifs'
import Spiner from '../Spinner'
import Item from './Item/index.js'
import useNearScreen from 'app/hooks/useNearScreen'
import debounce from 'lodash.debounce'
import './SearchListGifs.css'
import { Helmet } from 'react-helmet'

export default function SearchListGifs () {
  const { keyword } = useParams()
  const { gifs, loading, error, setPage } = useSearchGifs({ keyword })

  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const navigate = useNavigate()
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      <Helmet>
        <title>
          {`Giphy clone | ${keyword}`}
        </title>
      </Helmet>
      <section className="container-listGifs">
        {error && navigate('/404')}
        {gifs.length === 0 && <h2>this gifs not found...</h2>}
        {loading && !error && <Spiner />}
        {!loading &&
          gifs &&
          gifs?.map((gif, index) => (
            <Item
              dataSrc={gif?.url}
              id={gif?.id}
              key={gif?.id + index}
              gif={gif?.title}
            />
          ))}
      </section>
      <div
        className="visor"
        ref={externalRef}
      ></div>
    </>
  )
}
