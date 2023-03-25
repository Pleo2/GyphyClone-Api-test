import React from 'react';
import './Item.css';

export default function Item({ gif, dataSrc,  }) {
  return (
    <>
      <img 
        className='item-list-gifs'
        src={dataSrc}  
        alt={gif}
      />
    </>
  )
}
