import React, { useEffect, useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from 'redux/news/newsOperations';
import { getIsLoading } from 'redux/notices/noticesSelectors';

export const NewsPagination = () => {
  const total = useSelector(state => state.news.total);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(getNews({ page }));
  }, [dispatch, page]);

  return (
    <div>
      {!isLoading ? (
        <PaginationControl
          page={page}
          between={4}
          total={total}
          limit={10}
          last={true}
          changePage={page => {
            setPage(page);
          }}
          ellipsis={3}
        />
      ) : (
        ''
      )}
    </div>
  );
};
