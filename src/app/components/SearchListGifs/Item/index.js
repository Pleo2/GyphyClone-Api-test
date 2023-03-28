import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

function Item({ gif, dataSrc, id }) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/details/${id}`)
  }, [navigate, id]);

  return (
    <>
      <img
        onClick={handleClick}
        className="item-list-gifs"
        src={dataSrc}
        alt={gif}
      />
    </>
  );
}

export default React.memo(Item);
