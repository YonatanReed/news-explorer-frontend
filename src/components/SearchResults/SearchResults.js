import './SearchResults.css';
import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults(props) {
  return (
    <section className='results'>
      <h2 className='results__header'>Search results</h2>
      <NewsCardList
      />

    </section>
  );
}

export default SearchResults;
