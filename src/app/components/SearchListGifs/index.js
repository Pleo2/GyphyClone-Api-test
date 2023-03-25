import { useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useSearchGifs from 'app/hooks/useSearchGifs';
import Spiner from '../Spiner';
import Item from './Item/Item.js';
import './SearchListGifs.css';
import useNearScreen from 'app/hooks/useNearScreen';
import debounce from 'lodash.debounce';

export default function SearchListGifs() {
  const { keyword } = useParams();
  const { gifs, loading, error, setPage } = useSearchGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage],
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      <section className="container-listGifs">
        {error && <p>{error}</p>}
        {loading && !error && <Spiner />}
        {!loading &&
          gifs &&
          gifs?.map((gif, index) => (
            <Item
              dataSrc={gif?.url}
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
  );
}
