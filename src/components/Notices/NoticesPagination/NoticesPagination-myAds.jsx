import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { getUserNotices } from 'redux/notices/noticesOperations';

export const NoticesPaginationMyads = () => {
  const total = useSelector(state => state.notices.ownTotal);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserNotices({ page }));
  }, [dispatch, page]);

  return (
    <div>
      {total > 10 ? (
        <PaginationControl
          page={page}
          between={4}
          total={total}
          limit={10}
          last={true}
          changePage={page => {
            setPage(page);
          }}
        />
      ) : (
        ''
      )}
    </div>
  );
};
