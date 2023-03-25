import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchInput.css';

export default function SearchInput({ placeholder }) {
  const [keyboard, setKeyboard] = React.useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate(`/search/${keyboard}`);
    event.preventDefault();
  };
  const handleChange = (event) => {
    setKeyboard(event.target.value);
  };

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
