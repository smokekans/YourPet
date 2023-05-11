import { Container } from '@mui/material';
import Loader from 'components/Loader/Loader';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNavigation from 'components/Notices/NoticesCategoriesNavigation/NoticesCategoriesNavigation';
import { NoticesPagination } from 'components/Notices/NoticesPagination/NoticesPagination';
import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getUser } from 'redux/auth/authSelectors';
import { getNoticeByCategory } from 'redux/notices/noticesOperation';
import { getNoteceIsLoadig, getNotices } from 'redux/notices/noticesSelectors';
import { clearNotices } from 'redux/notices/noticesSlice';
import { getFavorite } from 'redux/user/userOperations';
import { getFavorites } from 'redux/user/userSelectors';

function NoticesPage() {
  const { categoryName } = useParams();
  const notices = useSelector(getNotices);
  // const dataArray = Object.values(notices)
  const isLoading = useSelector(getNoteceIsLoadig);
  // const isLoggedIn = useSelector(getUser);
  // console.log('data:', notices, 'categoryName:', categoryName);
  const dispatch = useDispatch();

  const [searchQwery, setSearchQwery] = useState('');

  useEffect(() => {
    if (searchQwery !== '') {
      dispatch(
        getNoticeByCategory({ category: categoryName, query: searchQwery })
      );
    } else if (categoryName !== 'favorite') {
      dispatch(getNoticeByCategory({ category: categoryName }));
    }

    if (categoryName === 'favorite') {
      dispatch(getFavorite());
    }

    return () => dispatch(clearNotices([]));
  }, [dispatch, categoryName, searchQwery]);

  const onSearch = searchTitle => {
    setSearchQwery(searchTitle);
  };

  const favoriteNotices = useSelector(getFavorites);
  console.log(favoriteNotices);
  const favoriteAds = favoriteNotices.user.favorite;
  console.log(favoriteAds);
  const dataToRender =
    categoryName === 'favorite' ? favoriteAds : notices.notices;

  return (
    <>
      <Container>
        <NoticesSearch onSearch={onSearch} />
        <NoticesCategoriesNavigation />

        {isLoading ? (
          <Loader />
        ) : (
          <NoticesCategoriesList
            categoryName={categoryName}
            data={dataToRender}
          />
        )}

        {/* {notices !== undefined && <NoticesCategoriesList categoryName={categoryName} data={notices} />} */}
      </Container>
      <NoticesPagination />
    </>
  );
}

export default NoticesPage;
