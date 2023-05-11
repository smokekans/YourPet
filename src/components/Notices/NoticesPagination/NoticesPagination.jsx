import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useSelector } from 'react-redux';
import { getNotices } from 'redux/notices/noticesSelectors';

export const NoticesPagination = () => {
  const noticesItems = useSelector(getNotices).notices;
  const [page, setPage] = useState(1);

  return (
    <div>
      <PaginationControl
        page={page}
        between={4}
        total={250}
        limit={20}
        changePage={page => {
          setPage(page);
          console.log(page);
        }}
        ellipsis={1}
      />
    </div>
  );
};
