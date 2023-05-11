import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/dist';
import { getNotices } from 'redux/notices/noticesSelectors';

export const NoticesPagination = () => {
  const noticesItems = useSelector(getNotices).notices;
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  const handleChangePag = e => {
    console.dir(e.target);
  };

  return (
    <div onClick={handleChangePag}>
      <PaginationControl
        page={page}
        between={4}
        total={250}
        limit={10}
        changePage={page => {
          setPage(page);
        }}
      />
    </div>
  );
};
