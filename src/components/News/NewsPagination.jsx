import React, {
  // useEffect,
  useState,
} from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
// import newsSelectors from '../../redux/news/newsSelectors';

export const NewsPagination = () => {
  const total = useSelector(state => state.news.total);
  const [page, setPage] = useState(1);

  // const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews({ page }));
  }, [categoryName, dispatch, page]);

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
