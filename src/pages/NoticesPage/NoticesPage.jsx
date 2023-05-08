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
  const { route } = useParams();
  const notices = useSelector(getNotices);
  const isLoading = useSelector(getNoteceIsLoadig);
  // const isLoggedIn = useSelector(getUser);

  const dispatch = useDispatch();

  const [searchQwery, setSearchQwery] = useState('');

  useEffect(() => {
    if (searchQwery !== '') {
      dispatch(getNoticeByCategory({ category: route, qwery: searchQwery }));
    } else {
      dispatch(getNoticeByCategory({ category: route }));
    }
    return () => dispatch(clearNotices([]));
  }, [dispatch, route, searchQwery]);

  const onSearch = (searchTitle) => {
    setSearchQwery(searchTitle);
  };
  return <div>
    <NoticesSearch onSearch={onSearch} />
    <NoticesCategoriesNavigation/>
    {notices?.length > 0 ?
      <NoticesCategoriesList
        route={route}
        data={notices} /> : !isLoading && console.log('Sorry, no data matching your search query.')}
    
  </div>;
}

export default NoticesPage;
