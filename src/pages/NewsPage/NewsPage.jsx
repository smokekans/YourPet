import React, { useEffect, useState } from 'react';
import { ReactComponent as Search } from '../../images/icons/search.svg';
import { useDispatch, useSelector } from 'react-redux';
import newsSelectors from 'redux/news/newsSelectors';
import News from 'components/News/News';
import { getNews } from 'redux/news/newsOperations';

function NewsPage() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const news = useSelector(newsSelectors.getNews);
  const status = useSelector(newsSelectors.getStatus);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const onSubmit = e => {
    e.preventDefault();

    dispatch(getNews(e.target.search.value));
    setQuery(e.target.search.value);
  };

  const changeInput = e => {
    e.preventDefault();
    if (e.target.value === '') {
      dispatch(getNews(e.target.value));
      setQuery(e.target.value);
    }
  };
  return (
    <div>
      <h1>News</h1>
      <form onSubmit={onSubmit}>
        <input type="search" name="search" placeholder="Search" onInput={changeInput} />
        <button type="submit">
          <Search />
        </button>
      </form>
      {!status && news.length > 0 && (
        <ul>
          {news.map(item => (
            <News key={item._id} news={item} />
          ))}
        </ul>
      )}

      {!status && news.length === 0 && (
        <div>
          <p>No result</p>
          <p>{query}</p>
        </div>
      )}
    </div>
  );
}

export default NewsPage;
