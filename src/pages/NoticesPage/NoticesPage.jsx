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
import { getFavorite } from 'redux/user/userOperations';
import { getFavorites } from 'redux/user/userSelectors';
import Typography from '@mui/material/Typography';
import { NoticesPaginationFavorite } from 'components/Notices/NoticesPagination/NoticesPagination-favorites';
import { NoticesPaginationMyads } from 'components/Notices/NoticesPagination/NoticesPagination-myAds';

function NoticesPage() {
  const { categoryName } = useParams();
  const notices = useSelector(getNotices);
  const isLoading = useSelector(getNoticeIsLoadig);
  const favoriteNotices = useSelector(getFavorites);
  console.log(favoriteNotices)
  // const favoriteAds = favoriteNotices || [];
  const ownNotices = useSelector(getOwnNotices);

  const dispatch = useDispatch();

  const [query, setQuery] = useState('');

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

   {isLoading ? (
  <Loader /> 
) : dataToRender && dataToRender.length === 0 ? (
  <img src={`../../images/notFound/notFound-desktop@2x.png?${Math.random()}`} alt="Placeholder" /> 
) : (
  <NoticesCategoriesList
    categoryName={categoryName}
    data={dataToRender}
  /> 
)}

        {isLoading && <Loader />}
      </Container>
      {categoryName === 'favorite' ? (
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


