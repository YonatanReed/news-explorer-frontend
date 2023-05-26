import './SearchForm.css';
import React from 'react';

function SearchForm(props) {
  const handleSubmit = (e) => {};

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input className="search-form__input"></input>
      <button className="search-form__button">Search</button>
    </form>
  );
}

export default SearchForm;
