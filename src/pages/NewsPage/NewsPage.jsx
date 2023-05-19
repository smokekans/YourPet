import {
  Box,
  Container,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ReactComponent as Search } from '../../images/icons/search.svg';
import { ReactComponent as Cross } from '../../images/icons/cross.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getNews, getNewsTitle } from 'redux/news/newsOperations';
import styles from './styles';
import NewsList from 'components/News/NewsList/NewsList';
import Loader from 'components/Loader/Loader';
import { getStatus } from 'redux/news/newsSelectors';
import { NewsPagination } from 'components/News/NewsPagination';

function NewsPage() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [input, setInput] = useState('');
  const isLoad = useSelector(getStatus);

  useEffect(() => {
    const data = { page: 1 };

    dispatch(getNews(data));
  }, [dispatch]);

  const onSubmit = e => {
    e.preventDefault();
    const data = { query: e.target.search.value, page: 1 };

    dispatch(getNewsTitle(data));
    setQuery(e.target.search.value);
  };

  const changeInput = e => {
    if (e.target.value === '') {
      setQuery(e.target.value);
    }
  };

  const handleChange = event => {
    setInput(event.target.value);
  };

  const clearInput = e => {
    setQuery('');
    const data = { page: 1 };
    dispatch(getNews(data));

    setInput('');
  };

  return (
    <>
      <Container sx={styles.container}>
        <Typography sx={styles.title} variant="h2">
          News
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={styles.box}>
          <Input
            placeholder="Search"
            name="search"
            value={input}
            onInput={changeInput}
            onChange={handleChange}
            disableUnderline
            sx={styles.input}
            endAdornment={
              <>
                {query && (
                  <InputAdornment position="end">
                    <IconButton onClick={clearInput} size="small">
                      <Cross sx={{ pl: '10px' }} />
                    </IconButton>
                  </InputAdornment>
                )}
                <InputAdornment
                  position="end"
                  sx={{ position: 'absolute', right: 0, pr: '14px' }}
                >
                  <IconButton type="submit" size="small">
                    <Search />
                  </IconButton>
                </InputAdornment>
              </>
            }
          />
        </Box>
        {!isLoad ? <NewsList query={query} /> : <Loader />}
        <NewsPagination />
      </Container>
    </>
  );
}
export default NewsPage;
