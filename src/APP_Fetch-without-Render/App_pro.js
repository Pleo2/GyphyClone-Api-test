import React, { Suspense } from 'react';
import { fetchData } from './fetchData';

const API_URL = (searchValue) =>
  `https://api.giphy.com/v1/gifs/search?api_key=HGY9fAEpopir5nb8Fy54psJxt1kzqpRM&q=${searchValue}&limit=25&offset=0&rating=g&lang=es`;

const apiData = fetchData(API_URL('Perros'));

export default function AppPro() {
  const data = apiData.read();
  return (
    <div
      className="AppPro"
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}
    >
      <h1 style={{ color: 'white', textAlign: 'center' }}>fetch like a Pro</h1>

      <Suspense fallback={<h2 style={{ color: 'white' }}>Loading...</h2>}>
        <section style={{ display: 'flex', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
          {data?.map((singleGifs) => {
            const urlGif = singleGifs.images.downsized.url;
            return (
              <img
                style={{
                  objectFit: 'contain',
                  width: '200px',
                  height: '200px',
                  objectPosition: 'center',
                }}
                key={singleGifs.id}
                src={urlGif}
                className="App-logo"
                alt="gifsPrueba"
              />
            );
          })}
        </section>
      </Suspense>
    </div>
  );
}
