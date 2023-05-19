import React, { useEffect, useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from 'redux/news/newsOperations';
import { getStatus } from 'redux/news/newsSelectors';

export const NewsPagination = () => {
  const total = useSelector(state => state.news.total);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const isLoad = useSelector(getStatus);

  useEffect(() => {
    dispatch(getNews({ page }));
  }, [dispatch, page]);

  return (
    <div>
      {!isLoad ? (
        <PaginationControl
          page={page}
          between={2}
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
