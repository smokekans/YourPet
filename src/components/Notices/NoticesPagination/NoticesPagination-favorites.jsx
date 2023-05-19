import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/dist';
import { getFavorite } from 'redux/user/userOperations';
import { getIsLoading } from 'redux/notices/noticesSelectors';

export const NoticesPaginationFavorite = () => {
  const total = useSelector(state => state.user.favoriteTotal);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(getFavorite({ page: page }));
  }, [categoryName, dispatch, page]);

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
