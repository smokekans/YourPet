import React from 'react';
import { useSelector } from 'react-redux';
import { getNews, getStatus } from 'redux/news/newsSelectors';
import { Container, List, Typography } from '@mui/material';
import NewsItem from '../NewsItem/NewsItem';
import styles from './styles';

function NewsList({ query }) {
  const news = useSelector(getNews);
  const status = useSelector(getStatus);
  return (
    <>
      <Container sx={styles.container}>
        {!status && news.length > 0 && (
          <List sx={styles.list}>
            {news.map(item => (
              <NewsItem key={item._id} news={item} />
            ))}
          </List>
        )}
        {!status && news.length === 0 && (
          <Typography sx={styles.noResult}>No results for "{query}"</Typography>
        )}
      </Container>
    </>
  );
}

export default NewsList;

