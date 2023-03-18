import React from 'react';
import useGetGifs from '../../services/useGetgifs';
// import CancelRequestBtn from './CancelRequesBtn';
import Item from './Item/Item.js';
import './ListGifs.css';

export default function ListGifs() {
  const { data, loading, error } = useGetGifs('hola');
  return (
    <div>
      <section className="container-gifs">
        {error && <p>{error}</p>}
        {/* {loading && !error &&(
          <CancelRequestBtn handleCancelRequest={handleCancelRequest} />
        )} */}
        {!loading &&
          !error &&
          data?.map((gif) => (
            <Item
              dataSrc={gif?.images.downsized.url}
              key={gif?.id}
              gif={gif?.title}
            />
          ))}
      </section>
    </div>
  );
}
