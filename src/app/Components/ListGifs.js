import React from 'react';
import useGetGifs from '../useGetgifs';
import CancelRequestBtn from './CancelRequestBtn';
import Item from './Item';

export default function ListGifs({ children, keyboard }) {
  const { data, loading, error, handleCancelRequest } = useGetGifs(keyboard);
  return (
    <section
      className="App-section"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {error && <p>{error}</p>}
      {loading && (
        <CancelRequestBtn handleCancelRequest={handleCancelRequest} />
      )}
      {!loading &&
        data?.map((gif) => (
          <Item
            img={gif.images}
            dataSrc={gif.images.original.url}
            key={gif.id}
            title={gif.title}
          />
        ))}
      {children}
    </section>
  );
}
