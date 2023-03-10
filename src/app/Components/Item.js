import React from 'react';

export default function Item({ title, dataSrc, img }) {
  console.log(img)
  return (
    <div>
      <img
        style={{
          objectFit: 'contain',
          width: '200px',
          height: '200px',
          objectPosition: 'center',
        }}
        src={dataSrc}
        className="App-logo"
        alt="gifsPrueba"
      />
      <p style={{ color: 'white' }}>{title}</p>
    </div>
  );
}
