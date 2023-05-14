import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/dist';
import { getNoticeByCategory } from 'redux/notices/noticesOperation';
import { getNotices } from 'redux/notices/noticesSelectors';

export const NoticesPagination = () => {
  const noticesItems = useSelector(getNotices).notices;
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  const handleChangePag = async e => {
    console.dir(e.target);
    const numberLink = e.target.localName;
    if (numberLink === 'a' || numberLink === 'span') {
      dispatch(
        getNoticeByCategory({
          category: categoryName,
          page: page,
          limit: 10,
        })
      );
    }
  };

  return (
    <div onClick={handleChangePag}>
      {noticesItems.length > 0 ? (
        <PaginationControl
          page={page}
          between={4}
          total={noticesItems.length}
          limit={10}
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
