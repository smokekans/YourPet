// import Loader from 'components/Loader/Loader';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNavigation from 'components/Notices/NoticesCategoriesNavigation/NoticesCategoriesNavigation';
import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getUser } from 'redux/auth/authSelectors';
import { getNoticeByCategory } from 'redux/notices/noticesOperation';
import {  getNotices } from 'redux/notices/noticesSelectors';
import { clearNotices } from 'redux/notices/noticesSlice';

function NoticesPage() {
  const { categoryName } = useParams();
  const notices = useSelector(getNotices)
  // const dataArray = Object.values(notices)
  console.log(getNotices);
  // const isLoading = useSelector(getNoteceIsLoadig);
  // const isLoggedIn = useSelector(getUser);
console.log('data:', notices, 'categoryName:', categoryName);
  const dispatch = useDispatch();

  const [searchQwery, setSearchQwery] = useState('');

  useEffect(() => {
    if (searchQwery !== '') {
      dispatch(getNoticeByCategory({ category: categoryName, qwery: searchQwery }));
    } else {
      dispatch(getNoticeByCategory({ category: categoryName }));
    }
    return () => dispatch(clearNotices([]));
  }, [dispatch, categoryName, searchQwery]);

  const onSearch = (searchTitle) => {
    setSearchQwery(searchTitle);
  };
  return <div>
    <NoticesSearch onSearch={onSearch} />
    <NoticesCategoriesNavigation/>
   
    {/* {isLoading
      ? <Loader /> : */}
       {notices !== undefined && <NoticesCategoriesList categoryName={categoryName} data={notices} />}
      {/* <NoticesCategoriesList
    //     categoryName={categoryName}
    //   data={notices}
    // />
   
    // }
  */}
    
  
  </div>;
}

export default NoticesPage;
