import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/dist';
import { getNoticeByCategory } from 'redux/notices/noticesOperation';
import { getNotices } from 'redux/notices/noticesSelectors';

export const NoticesPagination = () => {
  const { total } = useSelector(getNotices);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(
      getNoticeByCategory({
        category: categoryName,
        page: page,
        limit: 10,
      })
    );
  }, [categoryName, dispatch, page]);
  console.log(total);
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
