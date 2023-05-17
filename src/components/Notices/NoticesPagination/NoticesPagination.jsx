import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/dist';
import { getNoticeByCategory } from 'redux/notices/noticesOperation';
import { getNotices } from 'redux/notices/noticesSelectors';
import { getFavorite } from 'redux/user/userOperations';

export const NoticesPagination = () => {
  const { total } = useSelector(getNotices);
  const favorite = useSelector(state => state.user.favorite);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    switch (categoryName) {
      case 'sell':
        dispatch(
          getNoticeByCategory({
            category: 'sell',
            page: page,
            limit: 10,
          })
        );
        break;

      case 'lost-found':
        dispatch(
          getNoticeByCategory({
            category: 'lost-found',
            page: page,
            limit: 10,
          })
        );
        break;
      case 'for-free':
        dispatch(
          getNoticeByCategory({
            category: 'for-free',
            page: page,
            limit: 10,
          })
        );
        break;
      default:
        dispatch(
          getNoticeByCategory({
            category: 'sell',
            page: page,
            limit: 10,
          })
        );
    }
  }, [categoryName, dispatch, page]);

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
