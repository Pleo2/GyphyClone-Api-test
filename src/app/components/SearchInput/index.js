import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchInput.css';

export default function SearchInput({ placeholder }) {
  const [keyboard, setKeyboard] = React.useState('');

  const navigate = useNavigate();

  const handleSubmit = useCallback((event) => {
    navigate(`/search/${keyboard}`);
    event.preventDefault();
  }, [navigate, keyboard])

  const handleChange = useCallback((event) => {
    setKeyboard(event.target.value);
  }, [setKeyboard])

  return (
    <>
      <form
        className="input-form"
        onSubmit={handleSubmit}
      >
        <input
          className="search-input--form"
          value={keyboard}
          type="text"
          onChange={handleChange}
          placeholder={placeholder}
        />
        <button className="submit-button--form">
          <img
            src="/images/search.svg"
            alt="search-logo"
          />
        </button>
      </form>
    </>
  );
}
