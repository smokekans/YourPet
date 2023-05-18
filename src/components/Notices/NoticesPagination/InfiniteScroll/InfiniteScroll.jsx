import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
  getNoticeByCategory,
  getUserNotices,
} from 'redux/notices/noticesOperation';
import { getFavorite } from 'redux/user/userOperations';
import { isMobile } from 'react-device-detect';

const InfiniteScroll = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);

  const fetchData = () => {
    switch (categoryName) {
      case 'favorite':
        dispatch(getFavorite({ page: 1, limit }));
        break;
      case 'owner':
        dispatch(getUserNotices({ page: 1, limit }));
        break;
      default:
        dispatch(
          getNoticeByCategory({
            page: 1,
            limit,
            category: categoryName,
          })
        );
        break;
    }
  };

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLimit(prev => prev + 10);
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(limit);
  return <div></div>;
};

export default InfiniteScroll;
