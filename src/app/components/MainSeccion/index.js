import React from 'react';
import TrendingSeccion from '../../components/TrendingSeccion';
import ArtistSeccion from '../../components/ArtistSeccion';
import useGetTrending from '../../services/useGetTrending';

export default function MainSeccion() {
  const { data, loading, error, handleCancelRequest } = useGetTrending();
  return (
    <>
      {!loading && !error && (<TrendingSeccion
        data={data}
        loading={loading}
        error={error}
        handleCancelRequest={handleCancelRequest}
      />)}
      <ArtistSeccion
        data={data}
        loading={loading}
        error={error}
        handleCancelRequest={handleCancelRequest}
      />
    </>
  );
}
