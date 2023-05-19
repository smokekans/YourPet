import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getNoticeByCategory } from 'redux/notices/noticesOperations';

// import { isMobile } from 'react-device-detect';

const InfiniteScrollMobile = () => {
  const noticesTotal = useSelector(state => state.notices.total);
  const { categoryName } = useParams();
  const [nextPage, setNextPage] = useState(1);
  // const [limit, setLimit] = useState(20);
  const dispatch = useDispatch();

  const fetchData = () => {
    console.log('I am Working');
    setNextPage(prev => prev + 1);
    dispatch(
      getNoticeByCategory({
        category: categoryName,
        page: nextPage,
      })
    );
  };

  console.log('page:', nextPage);
  console.log('total:', noticesTotal);
  return (
    <>
      <InfiniteScroll
        dataLength={noticesTotal}
        next={fetchData}
        hasMore={true}
      ></InfiniteScroll>
    </>
  );
};

export default InfiniteScrollMobile;
