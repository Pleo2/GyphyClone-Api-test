import React from 'react';
import TitleSeccions from '../TitleSeccions';
import './ClipsSeccion.css';

const colors = [
  '#da5fe8',
  '#8a2be2',
  '#e85f5f',
  '#6fa0e1',
  '#e85f5f',
  '#5fe874',
  '#6fa0e1',
  '#5fe874',
  '#5fe874',
  '#da5fe8',
  '#6fa0e1',
];

export default function ClipsSeccion() {
  return (
    <>
      <section className="container-clipsSeccion">
        <TitleSeccions
          pathSvg={'/clips.svg'}
          title={'Clips'}
        />
        <div className="container-gifs-clipsSeccion">
          {colors?.map((item, index) => {
            return (
              <div
                className='container-clips'
                key={index}
              >
                <img
                  className="gif-clips"
                  style={{ backgroundColor: item }}
                  alt="clips-img"
                />
                <div className="info-clips">
                  <p>name of the clip</p>
                  <p>@userName ✔️</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
