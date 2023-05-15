import React, { useEffect, useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

export const NewsPagination = () => {
  const news = useSelector(state => state.news);
  const [page, setPage] = useState(1);
  const { categoryName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, [categoryName, dispatch, page]);

  console.log(news);
  return (
    <div>
      <PaginationControl
        page={page}
        between={4}
        total={100}
        limit={10}
        changePage={page => {
          setPage(page);
        }}
      />
    </div>
  );
};
