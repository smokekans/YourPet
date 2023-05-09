import { Container } from '@mui/material';
import Loader from 'components/Loader/Loader';
import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem/NoticeCategoryItem';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNavigation from 'components/Notices/NoticesCategoriesNavigation/NoticesCategoriesNavigation';
import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getUser } from 'redux/auth/authSelectors';
import { getNoticeByCategory } from 'redux/notices/noticesOperation';
import { getNoteceIsLoadig, getNotices } from 'redux/notices/noticesSelectors';
import { clearNotices } from 'redux/notices/noticesSlice';

function NoticesPage() {
  const { categoryName } = useParams();
  const notices = useSelector(getNotices);
  // const dataArray = Object.values(notices)
  console.log(getNotices);
  const isLoading = useSelector(getNoteceIsLoadig);
  // const isLoggedIn = useSelector(getUser);
  console.log('data:', notices, 'categoryName:', categoryName);
  const dispatch = useDispatch();

  const [searchQwery, setSearchQwery] = useState('');

  useEffect(() => {
    if (searchQwery !== '') {
      dispatch(
        getNoticeByCategory({ category: categoryName, qwery: searchQwery })
      );
    } else {
      dispatch(getNoticeByCategory({ category: categoryName }));
    }
    return () => dispatch(clearNotices([]));
  }, [dispatch, categoryName, searchQwery]);

  const onSearch = searchTitle => {
    setSearchQwery(searchTitle);
  };
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
            data={notices.notices}
          />
        )}

        <NoticeCategoryItem
          data={notices.notices}
          categoryName={categoryName}
        />
        {/* {notices !== undefined && <NoticesCategoriesList categoryName={categoryName} data={notices} />} */}
      </Container>
    </>
  );
}

export default NoticesPage;
