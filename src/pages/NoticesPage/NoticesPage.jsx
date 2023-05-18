import { Container } from '@mui/material';
import Loader from 'components/Loader/Loader';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNavigation from 'components/Notices/NoticesCategoriesNavigation/NoticesCategoriesNavigation';
import { NoticesPagination } from 'components/Notices/NoticesPagination/NoticesPagination';
import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getNoticeByCategory,
  getUserNotices,
} from 'redux/notices/noticesOperation';
import {
  getNoticeIsLoadig,
  getNotices,
  getOwnNotices,
} from 'redux/notices/noticesSelectors';
import { clearNotices } from 'redux/notices/noticesSlice';
import { getCurrentUser, getFavorite } from 'redux/user/userOperations';
import { getFavorites } from 'redux/user/userSelectors';
import Typography from '@mui/material/Typography';
import { NoticesPaginationFavorite } from 'components/Notices/NoticesPagination/NoticesPagination-favorites';
import { NoticesPaginationMyads } from 'components/Notices/NoticesPagination/NoticesPagination-myAds';
import NotFound from 'components/NotFound/NotFound';
import { getAccessToken } from 'redux/auth/authSelectors';
import InfiniteScroll from 'components/Notices/NoticesPagination/InfiniteScroll/InfiniteScroll';
import { isMobile } from 'react-device-detect';

function NoticesPage() {
  const { categoryName } = useParams();
  const notices = useSelector(getNotices);
  const isLoading = useSelector(getNoticeIsLoadig);
  const favoriteNotices = useSelector(getFavorites);
  const accessToken = useSelector(getAccessToken);
  const ownNotices = useSelector(getOwnNotices);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [accessToken, dispatch]);

  useEffect(() => {
    if (categoryName === 'favorite') {
      dispatch(getFavorite());
    } else if (categoryName === 'owner') {
      dispatch(getUserNotices({ page: 1 }));
    } else {
      dispatch(getNoticeByCategory({ category: categoryName }));
    }
    return () => dispatch(clearNotices([]));
  }, [dispatch, categoryName]);

  const dataToRender =
    categoryName === 'favorite'
      ? favoriteNotices
      : categoryName === 'owner'
      ? ownNotices
      : notices.notices;

  const handleSearch = newQuery => {
    setQuery(newQuery);
  };

  const handleClearQuery = () => {
    setQuery('');
  };

  return (
    <>
      <Container>
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: { mobile: '40px', tablet: '80px', desktop: '80px' },
            fontWeight: 700,
            fontSize: { mobile: '24px', tablet: '48px' },
          }}
          variant="h1"
        >
          Find your favorite pet
        </Typography>

        <NoticesSearch
          query={query}
          onSearch={handleSearch}
          onClearQuery={handleClearQuery}
        />

        <NoticesCategoriesNavigation />

        {isLoading && accessToken ? (
          <Loader />
        ) : dataToRender && dataToRender.length === 0 ? (
          <NotFound />
        ) : (
          <NoticesCategoriesList
            categoryName={categoryName}
            data={dataToRender}
          />
        )}

        {isLoading && <Loader />}
      </Container>
      {isMobile ? (
        <InfiniteScroll />
      ) : categoryName === 'favorite' ? (
        <NoticesPaginationFavorite />
      ) : categoryName === 'owner' ? (
        <NoticesPaginationMyads />
      ) : (
        <NoticesPagination />
      )}
    </>
  );
}

export default NoticesPage;
