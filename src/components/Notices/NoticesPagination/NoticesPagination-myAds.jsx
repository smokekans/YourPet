import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { getUserNotices } from 'redux/notices/noticesOperations';
import { getIsLoading } from 'redux/notices/noticesSelectors';

export const NoticesPaginationMyads = () => {
  const total = useSelector(state => state.notices.ownTotal);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(getUserNotices({ page }));
  }, [dispatch, page]);

  return (
    <div>
      {total > 12 && !isLoading ? (
        <PaginationControl
          page={page}
          between={4}
          total={total}
          limit={12}
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
