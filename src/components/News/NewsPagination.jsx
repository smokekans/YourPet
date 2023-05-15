import React, { useEffect, useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

export const NewsPagination = () => {
  const total = useSelector(state => state.news.total);
  const [page, setPage] = useState(1);
  const { categoryName } = useParams();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch();
  // }, [categoryName, dispatch, page]);

  console.log(total);
  return (
    <div>
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
    </div>
  );
};
