import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  getNoticeByCategory,
  getUserNotices,
} from 'redux/notices/noticesOperation';
import { getNotices } from 'redux/notices/noticesSelectors';
import { getFavorite } from 'redux/user/userOperations';

// import { isMobile } from 'react-device-detect';

const InfiniteScrollMobile = () => {
  const { total = 10 } = useSelector(getNotices);
  const { categoryName } = useParams();
  const [nextPage, setNextPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();

  const handleScroll = async () => {
    setNextPage(prev => prev + 1);
    setLimit(prev => prev + 10);
    switch (categoryName) {
      case 'favorite':
        dispatch(getFavorite({ page: nextPage, limit: limit }));
        break;
      case 'owner':
        dispatch(getUserNotices({ page: nextPage, limit: limit }));
        break;
      case 'sell':
        dispatch(
          getNoticeByCategory({
            category: categoryName,
            page: nextPage,
            limit: limit,
          })
        );
        break;
      default:
        dispatch(
          getNoticeByCategory({
            category: categoryName,
            page: nextPage,
            limit: limit,
          })
        );
        break;
    }
  };

  // const handleScroll = async () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     setLimit(prev => prev + 10);
  //      switch (categoryName) {
  //       case 'favorite':
  //         dispatch(getFavorite({ page: 1, limit }));
  //         break;
  //       case 'owner':
  //         dispatch(getUserNotices({ page: 1, limit }));
  //         break;
  //       default:
  //         dispatch(
  //           getNoticeByCategory({
  //             page: 1,
  //             limit,
  //             category: categoryName,
  //           })
  //         );
  //         break;
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  console.log(total);
  console.log(nextPage);
  console.log(limit);
  return (
    <>
      <InfiniteScroll
        dataLength={total}
        next={handleScroll}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      ></InfiniteScroll>
    </>
  );
};

export default InfiniteScrollMobile;
