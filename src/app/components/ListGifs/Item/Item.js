import React from 'react';

export default function Item({ gif, dataSrc,  }) {
  return (
    <>
      <img src={dataSrc}  alt={gif}/>
    </>
  )
}
