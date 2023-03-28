import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './TrendingImg.css';


function TrendingImg({source, title, id}) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/details/${id}`)
  }, [id, navigate])

  return (
    <div>
      <img
        onClick={handleClick}
        id={id}
        className="gif-trending"
        src={source}
        alt={title}
      />
    </div>
  );
}

export default React.memo(TrendingImg);
