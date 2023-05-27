import React, { useState, useContext } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';
import { useLocation } from 'react-router-dom';
import { ArticleContext } from '../../contexts/ArticleContext';

function NewsCardList(props) {
  const currentPage = useLocation().pathname;
  const articles = useContext(ArticleContext);
  const [cards, setCards] = useState(props.savedNewsArticle);

  return (
    <ul className="card-list">
      {(currentPage === '/'
        ? articles.slice(0, props.articleIndex)
        : cards
        ? cards
        : []
      ).map((article, index) => {
        return <NewsCard key={index} card={article} />;
      })}
    </ul>
  );
}

export default NewsCardList;
